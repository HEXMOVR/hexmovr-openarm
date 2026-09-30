# HEXMovr OpenArm

**HEXMovr OpenArm** is an independent OpenArm-compatible 7-DOF robotic-arm adaptation using HEXMovr actuators and a HEXMovr-specific CAN/control layer.

> This repository is not the official OpenArm distribution and does not imply endorsement by Enactic, Inc.

## What is included

- OpenArm-compatible project documentation
- HEXMovr actuator adaptation documentation
- CAN / CAN-FD integration notes
- ROS 2 integration structure
- URDF, MuJoCo and Isaac Lab documentation entry points
- Hardware, calibration, troubleshooting and licensing documentation
- Docusaurus website with GitHub Pages deployment

## Repository layout

```text
.
├── .github/workflows/deploy.yml
├── docs/
├── src/
├── static/
├── docusaurus.config.js
├── sidebars.js
├── package.json
└── BUILD.md
```

## Local development

Requirements: Node.js 20 or newer.

```bash
npm install
npm run start
```

Production build:

```bash
npm run build
npm run serve
```

The production files are generated in `build/`.

## Hardware adaptation boundary

```text
OpenArm-compatible robot model
            │
            ▼
    HEXMovr motor adapter
            │
            ▼
      HEXMovr CAN layer
            │
            ▼
       HEXMovr actuator
```

The exact motor model, CAN IDs, protocol fields, limits and calibration values should be taken from the verified HEXMovr production specification. The documentation template deliberately does not invent those values.

## Upstream OpenArm

- OpenArm documentation: https://docs.openarm.dev/
- OpenArm repository: https://github.com/enactic/openarm
- OpenArm CAN: https://github.com/enactic/openarm_can
- OpenArm hardware: https://github.com/enactic/openarm_hardware

Upstream-derived files should retain their original copyright notices and applicable licenses.

## Licensing

See `docs/legal/licenses.md` and `docs/legal/upstream-attribution.md` before publishing or distributing modified hardware/software.

Upstream software and hardware/CAD components may use different licenses. Do not treat the entire OpenArm ecosystem as a single-license project.

## GitHub Pages

The included workflow deploys the generated `build/` directory through GitHub Pages.

For a repository site, the workflow automatically uses:

```text
/<repository-name>/
```

For a custom domain, set `DOCUSAURUS_BASE_URL` to `/` in `.github/workflows/deploy.yml` and configure the custom domain in GitHub Pages.
