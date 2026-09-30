---
id: mechanical
title: Mechanical Adaptation
sidebar_position: 4
---

# Mechanical Adaptation

The mechanical documentation should distinguish:

### Upstream-compatible parts

Parts retained without modification from the selected OpenArm revision.

### Modified parts

Parts whose:

- mounting hole pattern;
- shaft interface;
- bearing support;
- thickness;
- cable routing;
- fastener;
- mass or inertia

changed because of the HEXMovr actuator.

## Recommended release structure

```text
hardware/
├── original-reference/
├── hexmovr-adaptation/
│   ├── CAD/
│   ├── drawings/
│   └── assembly/
└── documentation/
```

If a component is intentionally not released, say so explicitly instead of leaving a broken CAD link.
