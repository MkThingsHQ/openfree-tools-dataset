# Contributing

Project data is maintained on [OpenFree](https://openfree.tools). Submit new
projects through [Submit on OpenFree](https://openfree.tools/dashboard/submit)
so they appear in the next daily sync. This dataset repository does not accept
GitHub Issues. The following instructions are for maintaining the automation.

## Local development

Requires Node.js 22 or newer. There are no third-party runtime dependencies and
no install step is needed.

```sh
npm test
npm run render
```

`render` uses the committed `data/dataset.json` without credentials or network
access. Edit `templates/README.en.md` and `templates/README.zh.md` for introductory
and closing text. Keep `{{STATS}}` and `{{CATALOG}}` in both templates.

Maintainers with an enabled administrator API key may fetch a fresh snapshot:

```sh
read -rs OPENFREE_API_KEY
export OPENFREE_API_KEY
npm run sync
unset OPENFREE_API_KEY
```

Enter the key at the hidden prompt; never include it in command history, URLs,
files, commits, screenshots, or public reports. The fixed request target is
`https://openfree.tools/api/bot/dataset`, authenticated with the `x-api-key` header.
Redirects are rejected. The script retries network/429/5xx failures up to three
attempts, validates the response schema and references, and rejects empty
catalogs or unexpected fields before writing any public outputs.

## GitHub Actions

The repository secret `OPENFREE_API_KEY` is required. Manage it with GitHub's
Secrets UI or `gh secret set OPENFREE_API_KEY --repo MkThingsHQ/openfree-tools-dataset`
using stdin. Forks do not receive this secret.

The workflow runs daily at 01:00 Asia/Shanghai (17:00 UTC on the previous day)
and supports manual `workflow_dispatch`.
It has no pull-request or push trigger and only runs on this repository's main
branch. Read-only checkout/test/fetch steps do not receive Git write credentials.
The API key is scoped to the fetch step; `GITHUB_TOKEN` is scoped to the final
commit/push step. Only `README.md`, `README.zh-CN.md`, and `data/dataset.json`
can be committed by the bot. No third-party packages are installed.

Identical data does not create a commit. Failed validation/fetch/render does not
reach the commit step. Concurrent workflow runs are serialized; a concurrent
human push causes a safe non-fast-forward failure rather than overwriting work.
Rerun manually after an outage or a push conflict. Inspect the Actions log's
HTTP status if authentication or access fails; do not paste response bodies.

Schema version 1 contains `source`, `categories`, `tags`, and `projects`.
Category `parentId` expresses the two-level hierarchy; project `categoryIds`
and `tagIds` reference the corresponding taxonomy IDs. All published projects
are included even if they have no GitHub repository or no category. Multiple
category memberships appear in each applicable table. Full descriptions and
article content remain available in both languages in the JSON snapshot.

The generator uses an explicit schema allowlist. An upstream schema change must
be reviewed before this repository accepts it. Do not add account, submission,
moderation, payment, or credential fields. Individual files are staged through
same-directory temporary files after all three outputs have rendered. GitHub
publishes the snapshot and both READMEs in one commit.
