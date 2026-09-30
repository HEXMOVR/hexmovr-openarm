# Build and deployment

## Toolchain

- Node.js 20+
- Docusaurus 3.10.2
- React 19.2.8
- webpackbar 7.0.0 via npm `overrides`

Docusaurus 3.10.2 is used because the ProgressPlugin/webpackbar incompatibility seen in older Docusaurus releases is addressed in the newer Docusaurus dependency line. The project also explicitly pins `webpackbar` 7.0.0 as an extra safeguard.

## Local build

```bash
npm install
npm run build
npm run serve
```

The production output is generated in `build/`.

## GitHub Actions

The workflow intentionally uses `npm install` rather than `npm ci` because this repository is distributed without a lockfile. It also does not enable `setup-node`'s npm cache, so the workflow does not require `package-lock.json`.

Build sequence:

```text
Checkout
  ↓
Node.js 20
  ↓
npm install
  ↓
npm run build
  ↓
upload build/
  ↓
GitHub Pages
```

## GitHub Pages settings

In the repository:

1. Open **Settings → Pages**.
2. Set the source to **GitHub Actions**.
3. Push to the `main` branch.
4. Open the Pages URL reported by the deployment job.

## Repository site vs custom domain

Repository site:

```text
https://<owner>.github.io/<repository-name>/
```

The workflow derives the repository base path automatically.

Custom domain:

```text
DOCUSAURUS_BASE_URL: /
```

Then configure the custom domain in GitHub Pages. Do not hard-code a custom domain into the source until the actual domain is known.
