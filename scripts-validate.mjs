import fs from 'node:fs';
import path from 'node:path';

const required = [
  'package.json',
  'docusaurus.config.js',
  'sidebars.js',
  'src/pages/index.js',
  'src/css/custom.css',
  'src/pages/home.css',
  'static/img/hexmovr-logo.png',
  '.github/workflows/deploy.yml',
];

const missing = required.filter((file) => !fs.existsSync(file));
if (missing.length) {
  console.error('Missing required files:', missing.join(', '));
  process.exit(1);
}

const docs = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.md')) docs.push(full);
  }
}
walk('docs');
if (docs.length === 0) {
  console.error('No documentation files found.');
  process.exit(1);
}

for (const file of docs) {
  const text = fs.readFileSync(file, 'utf8');
  if (!text.startsWith('---\n')) {
    console.error(`Missing front matter: ${file}`);
    process.exit(1);
  }
}

console.log(`Validated ${docs.length} documentation files and required website files.`);
