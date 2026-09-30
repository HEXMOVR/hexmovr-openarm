import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const required = [
  'package.json',
  'docusaurus.config.js',
  'sidebars.js',
  'src/pages/index.js',
  'src/components/DownloadLink.js',
  'static/.nojekyll',
  'static/downloads/HEXMovr_CAN_Protocol_3.10b2.pdf',
  'static/downloads/HEXMovr_Motor_Connector_Wiring_260611.pdf',
  'static/downloads/ZE300_GUI_User_Guide_V3.03a.pdf',
];

for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) throw new Error(`Missing required file: ${file}`);
}

const forbidden = [
  'docusaurus.config.ts',
  'sidebars.ts',
  'tsconfig.json',
  'src/pages/index.tsx',
  'src/pages/index.ts',
];
for (const file of forbidden) {
  if (fs.existsSync(path.join(root, file))) throw new Error(`Stale conflicting file must be removed: ${file}`);
}

function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const docs = walk(path.join(root, 'docs')).filter((f) => f.endsWith('.md'));
for (const file of docs) {
  const text = fs.readFileSync(file, 'utf8');
  if (!text.startsWith('---\n')) throw new Error(`Missing front matter: ${path.relative(root, file)}`);
  if (!text.includes('\n---\n')) throw new Error(`Malformed front matter: ${path.relative(root, file)}`);
}

console.log(`Validated ${docs.length} documentation files and required website files.`);
