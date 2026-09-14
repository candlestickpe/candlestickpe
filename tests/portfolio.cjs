const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');

const html = readFileSync(join(__dirname, '../portfolio.html'), 'utf8').replace(/\r\n?/g, '\n');
const policy = html.match(/http-equiv="Content-Security-Policy" content="([^"]+)"/)[1];
for (const [, script] of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) {
  const hash = createHash('sha256').update(script).digest('base64');
  assert(policy.includes("'sha256-" + hash + "'"), 'Portfolio script is blocked by its CSP hash');
}
console.log('PASS: portfolio inline scripts are allowed by CSP');
