import { readFile, writeFile, rename, mkdir } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { resolve, dirname } from 'node:path';

export const SOURCE = 'https://openfree.tools';
export const ENDPOINT = `${SOURCE}/api/bot/dataset`;
const ROOT = fileURLToPath(new URL('../', import.meta.url));
const nullableText = (v) => v === null || typeof v === 'string';
const text = (v) => typeof v === 'string';
const number = (v) => Number.isSafeInteger(v) && v >= 0;
const texts = (v) => Array.isArray(v) && v.every(text);
const nullableDate = (v) => v === null || (text(v) && Number.isFinite(Date.parse(v)));
const nonempty = (v) => text(v) && v.trim().length > 0;
const slug = (v) => nonempty(v) && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v);
const fields = (names, check) => Object.fromEntries(names.split(' ').map((name) => [name, check]));
const sponsorSchema = {
  id: nonempty, name: nonempty, websiteUrl: nonempty, description: text,
};
const schemas = {
  categories: {
    id: nonempty, slug, name: nonempty, parentId: nullableText,
    ...fields('nameZh label labelZh description descriptionZh', nullableText),
    sortOrder: Number.isSafeInteger,
  },
  tags: { id: nonempty, slug, name: nonempty, nameZh: nullableText },
  projects: {
    id: nonempty, slug, name: nonempty, websiteUrl: text,
    ...fields('nameZh tagline taglineZh description descriptionZh content contentZh repositoryUrl repositoryHomepageUrl license primaryLanguage sourceType sourceUrl faviconUrl screenshotUrl', nullableText),
    ...fields('repositoryCreatedAt pushedAt repositoryFetchedAt publishedAt', nullableDate),
    updatedAt: (v) => text(v) && Number.isFinite(Date.parse(v)),
    ...fields('topics categoryIds tagIds', texts),
    stars: (v) => v === null || number(v),
    archived: (v) => typeof v === 'boolean',
    selfHosted: (v) => ['unknown', 'yes', 'no'].includes(v),
  },
};

function assert(ok, message) {
  if (!ok) throw new Error(message);
}

/** Reject unexpected fields before they can enter the public Git repository. */
export function validateDataset(input) {
  assert(input && typeof input === 'object' && !Array.isArray(input), 'Invalid dataset object.');
  assert([1, 2].includes(input.schemaVersion) && input.source === SOURCE, 'Unsupported dataset source or version.');
  const expected = input.schemaVersion === 2
    ? 'categories,projects,schemaVersion,source,sponsors,tags'
    : 'categories,projects,schemaVersion,source,tags';
  assert(Object.keys(input).sort().join(',') === expected, 'Unexpected top-level fields.');
  const collections = input.schemaVersion === 2 ? { ...schemas, sponsors: sponsorSchema } : schemas;
  for (const [collection, schema] of Object.entries(collections)) {
    assert(Array.isArray(input[collection]), `Missing ${collection}.`);
    const ids = new Set();
    const slugs = new Set();
    for (const row of input[collection]) {
      assert(row && typeof row === 'object' && !Array.isArray(row), `Invalid ${collection} row.`);
      assert(Object.keys(row).sort().join(',') === Object.keys(schema).sort().join(','), `Unexpected or missing ${collection} fields.`);
      for (const [name, check] of Object.entries(schema)) {
        assert(check(row[name]), `Invalid ${collection}.${name}.`);
      }
      assert(!ids.has(row.id) && (!('slug' in schema) || !slugs.has(row.slug)), `Duplicate ${collection} identity.`);
      ids.add(row.id);
      slugs.add(row.slug);
    }
  }
  const categories = new Map(input.categories.map((row) => [row.id, row]));
  const tags = new Set(input.tags.map((row) => row.id));
  for (const category of input.categories) {
    if (category.parentId !== null) {
      const parent = categories.get(category.parentId);
      assert(parent && parent.parentId === null && parent.id !== category.id, 'Invalid two-level category hierarchy.');
    }
  }
  for (const project of input.projects) {
    assert(project.categoryIds.every((id) => categories.has(id)), 'Unknown project category.');
    assert(project.tagIds.every((id) => tags.has(id)), 'Unknown project tag.');
    assert(new Set(project.categoryIds).size === project.categoryIds.length, 'Duplicate project category.');
    assert(new Set(project.tagIds).size === project.tagIds.length, 'Duplicate project tag.');
  }
  // Fail closed if an upstream failure masquerades as a successful empty export.
  assert(input.projects.length > 0 && input.categories.length > 0, 'Refusing an empty catalog.');
  return input;
}

export async function fetchDataset(key, fetcher = fetch, pause = (ms) => new Promise((r) => setTimeout(r, ms))) {
  assert(nonempty(key), 'OPENFREE_API_KEY is required.');
  for (let attempt = 0; attempt < 3; attempt++) {
    let response;
    try {
      response = await fetcher(ENDPOINT, {
        headers: { 'x-api-key': key, Accept: 'application/json' },
        redirect: 'error', signal: AbortSignal.timeout(90_000),
      });
    } catch {
      if (attempt === 2) throw new Error('OpenFree request failed (network, redirect, or timeout).');
      await pause(2000 * (attempt + 1));
      continue;
    }
    if ((response.status === 429 || response.status >= 500) && attempt < 2) {
      const seconds = Number(response.headers.get('retry-after')) || 2 * (attempt + 1);
      await response.body?.cancel();
      await pause(Math.min(30, Math.max(1, seconds)) * 1000);
      continue;
    }
    // Never log response bodies, headers, keys, or URLs supplied by the server.
    assert(response.ok, `OpenFree API returned HTTP ${response.status}.`);
    assert((response.headers.get('content-type') ?? '').includes('application/json'), 'Expected an OpenFree JSON response.');
    const body = await response.text();
    assert(body.length <= 30_000_000, 'OpenFree export exceeds the size limit.');
    let data;
    try { data = JSON.parse(body); } catch { throw new Error('OpenFree returned invalid JSON.'); }
    return validateDataset(data);
  }
}

export function cell(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim()
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replace(/[\\`*_[\]{}|!]/g, (c) => `\\${c}`);
}

export function link(label, value) {
  if (!value) return '—';
  try {
    const url = new URL(value);
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) return '—';
    const target = url.href.replace(/[<>()\s]/g, (c) => encodeURIComponent(c));
    return `[${cell(label)}](${target})`;
  } catch { return '—'; }
}

function localized(row, field, locale) {
  return (locale === 'zh' && row[`${field}Zh`]) || row[field] || '';
}
const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const categoryOrder = (a, b) => a.sortOrder - b.sortOrder || compare(a.slug, b.slug);
const projectOrder = (a, b) => (b.stars ?? -1) - (a.stars ?? -1) || compare(a.slug, b.slug);
const anchor = (category) => `category-${category.slug}`;

export function renderSponsors(data, locale) {
  const zh = locale === 'zh';
  const sponsors = data.sponsors ?? [];
  const lines = [zh ? '## 赞助商' : '## Sponsors', ''];
  if (sponsors.length) {
    for (const sponsor of sponsors) {
      const description = cell(sponsor.description);
      lines.push(`- ${link(sponsor.name, sponsor.websiteUrl)}${description ? ` — ${description}` : ''}`);
    }
  } else {
    lines.push(zh ? '暂无赞助商。' : 'No sponsors yet.');
  }
  lines.push('', link(zh ? '成为赞助商' : 'Become a sponsor', `${SOURCE}${zh ? '/zh' : ''}/advertise`));
  return lines.join('\n');
}

export function renderCatalog(data, locale) {
  const zh = locale === 'zh';
  const parents = data.categories.filter((c) => c.parentId === null).sort(categoryOrder);
  const seen = new Set();
  const lines = [zh ? '## 分类目录' : '## Categories', ''];
  for (const parent of parents) {
    const children = data.categories.filter((c) => c.parentId === parent.id).sort(categoryOrder);
    lines.push(`- ${linkToCategory(parent)}`);
    for (const child of children) lines.push(`  - ${linkToCategory(child)}`);
  }
  const hasUncategorized = data.projects.some((p) => p.categoryIds.length === 0);
  if (hasUncategorized) lines.push(`- [${zh ? '未分类' : 'Uncategorized'}](#uncategorized)`);
  lines.push('');

  function linkToCategory(category) {
    return `[${cell(localized(category, 'name', locale))}](#${anchor(category)})`;
  }
  function table(projects) {
    if (!projects.length) return [zh ? '暂无已发布项目。' : 'No published projects yet.', ''];
    const rows = [
      zh ? '| 项目 | 简介 | Stars | 许可证 | 链接 |' : '| Project | Description | Stars | License | Links |',
      '| --- | --- | ---: | --- | --- |',
    ];
    for (const project of [...projects].sort(projectOrder)) {
      seen.add(project.id);
      const summary = localized(project, 'tagline', locale) || localized(project, 'description', locale);
      const short = summary.replace(/\s+/g, ' ').trim();
      const description = short.length > 220 ? `${short.slice(0, 217)}…` : short;
      const projectUrl = `${SOURCE}${zh ? '/zh' : ''}/${encodeURIComponent(project.slug)}`;
      const urls = [link(zh ? '官网' : 'Website', project.websiteUrl), link('GitHub', project.repositoryUrl)].filter((item) => item !== '—');
      const stars = project.stars === null ? '—' : `${(project.stars / 1000).toFixed(1)}K`;
      rows.push(`| ${link(localized(project, 'name', locale), projectUrl)}${project.archived ? (zh ? '（已归档）' : ' (archived)') : ''} | ${cell(description) || '—'} | ${stars} | ${cell(project.license) || '—'} | ${urls.join(' · ') || '—'} |`);
    }
    return [...rows, ''];
  }
  for (const parent of parents) {
    lines.push(`<a id="${anchor(parent)}"></a>`, '', `## ${cell(localized(parent, 'name', locale))}`, '');
    const children = data.categories.filter((c) => c.parentId === parent.id).sort(categoryOrder);
    const direct = data.projects.filter((p) => p.categoryIds.includes(parent.id));
    if (direct.length || !children.length) lines.push(...table(direct));
    for (const child of children) {
      lines.push(`<a id="${anchor(child)}"></a>`, '', `### ${cell(localized(child, 'name', locale))}`, '', ...table(data.projects.filter((p) => p.categoryIds.includes(child.id))));
    }
  }
  const remaining = data.projects.filter((p) => !seen.has(p.id));
  if (remaining.length) lines.push('<a id="uncategorized"></a>', '', zh ? '## 未分类' : '## Uncategorized', '', ...table(remaining));
  assert(seen.size === data.projects.length, 'Not every project was rendered.');
  return lines.join('\n').trim();
}

export async function sync({ data, root = ROOT }) {
  validateDataset(data);
  const outputs = new Map([['data/dataset.json', `${JSON.stringify(data, null, 2)}\n`]]);
  for (const locale of ['en', 'zh']) {
    const template = await readFile(resolve(root, `templates/README.${locale}.md`), 'utf8');
    assert(template.includes('{{STATS}}') && template.includes('{{SPONSORS}}') && template.includes('{{CATALOG}}'), 'Missing README template markers.');
    const stats = locale === 'zh'
      ? `**${data.projects.length} 个项目 · ${data.categories.filter((c) => c.parentId !== null).length} 个二级分类 · 每日同步**`
      : `**${data.projects.length} projects · ${data.categories.filter((c) => c.parentId !== null).length} subcategories · Synced daily**`;
    outputs.set(locale === 'en' ? 'README.md' : 'README.zh-CN.md', template.split('{{STATS}}').join(stats).split('{{SPONSORS}}').join(renderSponsors(data, locale)).split('{{CATALOG}}').join(renderCatalog(data, locale)));
  }
  // Finish validation and rendering of both languages before touching output files.
  const changed = [];
  for (const [path, content] of outputs) {
    let existing;
    try { existing = await readFile(resolve(root, path), 'utf8'); } catch (error) { if (error.code !== 'ENOENT') throw error; }
    if (existing !== content) changed.push([path, content]);
  }
  for (const [path, content] of changed) {
    const target = resolve(root, path);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(`${target}.tmp`, content);
  }
  for (const [path] of changed) await rename(resolve(root, `${path}.tmp`), resolve(root, path));
  return changed.map(([path]) => path);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const args = process.argv.slice(2);
    assert(!args.length || (args.length === 2 && args[0] === '--from-file'), 'Usage: node scripts/sync.mjs [--from-file path]');
    const data = args.length
      ? validateDataset(JSON.parse(await readFile(resolve(args[1]), 'utf8')))
      : await fetchDataset(process.env.OPENFREE_API_KEY);
    const changed = await sync({ data });
    console.log(`${data.projects.length} projects, ${data.categories.length} categories; updated ${changed.length} files.`);
  } catch (error) {
    console.error(`Sync failed: ${error instanceof Error ? error.message : 'unknown error'}`);
    process.exitCode = 1;
  }
}
