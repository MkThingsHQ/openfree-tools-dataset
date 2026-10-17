import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, cp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { SOURCE, ENDPOINT, validateDataset, fetchDataset, renderCatalog, renderSponsors, link, sync } from './sync.mjs';

function fixture() {
  return {
    schemaVersion: 2, source: SOURCE,
    sponsors: [],
    categories: [
      { id: 'root', slug: 'developer-tools', name: 'Developer tools', nameZh: '开发工具', label: null, labelZh: null, description: null, descriptionZh: null, parentId: null, sortOrder: 0 },
      { id: 'leaf', slug: 'editors', name: 'Editors', nameZh: '编辑器', label: null, labelZh: null, description: null, descriptionZh: null, parentId: 'root', sortOrder: 0 },
      { id: 'empty', slug: 'testing', name: 'Testing', nameZh: '测试', label: null, labelZh: null, description: null, descriptionZh: null, parentId: 'root', sortOrder: 1 },
    ],
    tags: [{ id: 'tag', slug: 'local-first', name: 'Local first', nameZh: '本地优先' }],
    projects: [{
      id: 'project', slug: 'sample', name: 'Sample', nameZh: '示例', tagline: 'A useful editor', taglineZh: '好用的编辑器', description: null, descriptionZh: null, content: '# Full review', contentZh: '# 完整介绍',
      websiteUrl: 'https://example.com', repositoryUrl: 'https://github.com/example/sample', repositoryHomepageUrl: null, license: 'MIT', primaryLanguage: 'TypeScript', topics: ['local-first'], stars: 42,
      repositoryCreatedAt: null, pushedAt: null, repositoryFetchedAt: null, archived: false, selfHosted: 'yes', sourceType: 'github_repository', sourceUrl: null, faviconUrl: null, screenshotUrl: null, publishedAt: '2026-10-17T00:00:00.000Z', updatedAt: '2026-10-17T00:00:00.000Z', categoryIds: ['leaf'], tagIds: ['tag'],
    }],
  };
}

test('validates identities, complete references, hierarchy and rejects private/schema fields', () => {
  assert.equal(validateDataset(fixture()).projects.length, 1);
  for (const mutate of [
    (d) => { d.projects[0].submitterEmail = 'private@example.test'; },
    (d) => { d.projects[0].categoryIds = ['missing']; },
    (d) => { d.projects[0].tagIds = ['missing']; },
    (d) => { d.projects.push(d.projects[0]); },
    (d) => { d.categories[0].parentId = 'leaf'; },
    (d) => { d.projects = []; },
    (d) => { delete d.projects[0].name; },
    (d) => { d.source = 'https://untrusted.example'; },
  ]) {
    const data = fixture(); mutate(data);
    assert.throws(() => validateDataset(data));
  }
});

test('supports prior snapshots, requires sponsor data in v2 and rejects private sponsor fields', () => {
  const legacy = fixture();
  legacy.schemaVersion = 1;
  delete legacy.sponsors;
  assert.equal(validateDataset(legacy).schemaVersion, 1);
  const current = fixture();
  current.sponsors = [{ id: 'sponsor', name: 'Supporter', websiteUrl: 'https://sponsor.example/', description: 'Public introduction' }];
  assert.equal(validateDataset(current).sponsors.length, 1);
  assert.ok(renderSponsors(current, 'en').includes('[Supporter](https://sponsor.example/)'));
  assert.ok(renderSponsors(current, 'zh').includes('[Supporter](https://sponsor.example/)'));
  current.sponsors[0].purchaserEmail = 'private@example.test';
  assert.throws(() => validateDataset(current));
  const missing = fixture();
  delete missing.sponsors;
  assert.throws(() => validateDataset(missing));
});

test('fetch sends credentials only as a header to the fixed HTTPS endpoint and refuses redirects', async () => {
  let called = false;
  const data = await fetchDataset('test-secret', async (url, options) => {
    called = true;
    assert.equal(url, ENDPOINT);
    assert.equal(options.headers['x-api-key'], 'test-secret');
    assert.equal(options.redirect, 'error');
    return Response.json(fixture());
  });
  assert.ok(called);
  assert.equal(data.projects[0].id, 'project');
});

test('auth failures do not retry or echo server bodies/secrets; transient failures do retry', async () => {
  let calls = 0;
  await assert.rejects(fetchDataset('test-secret', async () => {
    calls++; return new Response('test-secret internal-details', { status: 401 });
  }), (error) => error.message === 'OpenFree API returned HTTP 401.');
  assert.equal(calls, 1);
  calls = 0;
  const pauses = [];
  await fetchDataset('test-secret', async () => {
    calls++;
    return calls < 3 ? new Response('', { status: 429, headers: { 'retry-after': '999' } }) : Response.json(fixture());
  }, async (ms) => pauses.push(ms));
  assert.equal(calls, 3);
  assert.deepEqual(pauses, [30000, 30000]);
  await assert.rejects(fetchDataset('', () => assert.fail('must not fetch')));
  await assert.rejects(fetchDataset('test-secret', async () => new Response('<html>')), /JSON/);
});

test('renders every project including uncategorized and no-repository entries, using stable localized anchors', () => {
  const data = fixture();
  data.projects.push({ ...data.projects[0], id: 'other', slug: 'other', name: 'Other', nameZh: null, repositoryUrl: null, categoryIds: [] });
  const en = renderCatalog(data, 'en');
  const zh = renderCatalog(data, 'zh');
  assert.ok(en.includes('](#category-editors)'));
  assert.ok(en.includes('id="category-editors"'));
  assert.ok(zh.includes('](#category-editors)'));
  assert.ok(zh.includes('[示例](https://openfree.tools/zh/sample)'));
  assert.ok(en.includes('[Other](https://openfree.tools/other)'));
  assert.ok(en.includes('id="uncategorized"'));
  assert.ok(zh.includes('[Other](https://openfree.tools/zh/other)'));
});

test('renders untrusted project data as text and disables dangerous link schemes', () => {
  const data = fixture();
  data.projects[0].tagline = 'A | B\n<script>alert(1)</script> [click](javascript:bad)';
  data.projects[0].websiteUrl = 'javascript:alert(1)';
  const result = renderCatalog(data, 'en');
  assert.ok(result.includes('A \\| B &lt;script&gt;'));
  assert.ok(!result.includes('<script>'));
  assert.ok(!result.includes('[click]('));
  assert.equal(link('unsafe', 'data:text/html,bad'), '—');
  assert.equal(link('unsafe', 'https://user:secret@example.com'), '—');
});

test('sync publishes both languages and raw data consistently, is idempotent and preserves output on failure', async () => {
  const root = await mkdtemp(join(tmpdir(), 'openfree-sync-test-'));
  try {
    await mkdir(join(root, 'templates'));
    await cp(new URL('../templates/README.en.md', import.meta.url), join(root, 'templates/README.en.md'));
    await cp(new URL('../templates/README.zh.md', import.meta.url), join(root, 'templates/README.zh.md'));
    const data = fixture();
    const changed = await sync({ data, root });
    assert.deepEqual(changed.sort(), ['README.md', 'README.zh-CN.md', 'data/dataset.json']);
    assert.deepEqual(await sync({ data, root }), []);
    const before = await Promise.all(changed.map((p) => readFile(join(root, p), 'utf8')));
    await writeFile(join(root, 'templates/README.zh.md'), 'broken template');
    data.projects[0].stars++;
    await assert.rejects(sync({ data, root }));
    assert.deepEqual(await Promise.all(changed.map((p) => readFile(join(root, p), 'utf8'))), before);
    data.projects[0].privateNote = 'do not publish';
    await assert.rejects(sync({ data, root }));
    assert.deepEqual(await Promise.all(changed.map((p) => readFile(join(root, p), 'utf8'))), before);
  } finally { await rm(root, { recursive: true, force: true }); }
});
