'use strict';
const { writeFileSync, chmodSync, mkdirSync } = require('fs');
const { join } = require('path');

// Creates node_modules/.bin/run as a local proxy so that `npx run <script>`
// behaves like `npm run <script>` instead of invoking the `run` npm package
// (a file-watcher that fails because it looks for a `deploy` node module).
const binDir = join(__dirname, '..', 'node_modules', '.bin');
mkdirSync(binDir, { recursive: true });

const runScript = [
  '#!/usr/bin/env node',
  "'use strict';",
  "const { spawnSync } = require('child_process');",
  "const script = process.argv[2];",
  "if (!script) { console.error('Usage: run <script>'); process.exit(1); }",
  "const result = spawnSync('npm', ['run', script].concat(process.argv.slice(3)), { stdio: 'inherit' });",
  "process.exit(result.status ?? (result.signal ? 1 : 0));",
].join('\n');

const runPath = join(binDir, 'run');
writeFileSync(runPath, runScript);
chmodSync(runPath, 0o755);
console.log('Created node_modules/.bin/run proxy (npm run SCRIPT wrapper)');

const wranglerScript = [
  '#!/usr/bin/env node',
  "'use strict';",
  "const { spawnSync } = require('child_process');",
  "if (process.env.CF_PAGES === '1' && process.argv[2] === 'pages' && process.argv[3] === 'deploy') {",
  "  console.log('Skipping Wrangler deploy: already running inside Cloudflare Pages build environment');",
  "  process.exit(0);",
  "}",
  "const wranglerCli = require.resolve('wrangler/bin/wrangler.js');",
  "const result = spawnSync(process.execPath, [wranglerCli].concat(process.argv.slice(2)), { stdio: 'inherit' });",
  "process.exit(result.status ?? (result.signal ? 1 : 0));",
].join('\n');

const wranglerPath = join(binDir, 'wrangler');
writeFileSync(wranglerPath, wranglerScript);
chmodSync(wranglerPath, 0o755);
console.log('Created node_modules/.bin/wrangler proxy (skip deploy in CF_PAGES)');
