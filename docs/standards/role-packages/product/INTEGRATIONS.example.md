# INTEGRATIONS

## Purpose
This repository connects product or service implementation logic with the wider ecosystem.

## Integration Summary
This repository mainly acts as a:
- product implementation layer
- delivery asset source
- offer-specific capability owner

## Inputs From Other Repos
| Source Repo | What Comes In | Why It Matters |
|---|---|---|
| front-door repos | routed interest and qualified need | converts demand into delivery |
| workflow repos | automation and execution support | improves implementation efficiency |
| knowledge repos | prompts, guides, standards | improves repeatability |

## Outputs To Other Repos
| Target Repo | What Goes Out | Why It Matters |
|---|---|---|
| front-door repos | product-facing guidance | improves routing clarity |
| knowledge repos | implementation learnings | improves reusable guidance |
| control_tower repos | product status signals | improves fleet visibility |

## Shared Standards Followed
- shared taxonomy
- shared lifecycle names where relevant
- shared prompt naming where prompts are relevant
- interoperability manifest template

## Integration Rules
- clarify owned product scope
- expose reusable implementation assets clearly
- separate product docs from fleet-wide standards ownership
- feed important status signals into rollup surfaces

## Next Integration Priorities
1. improve front-door to product handoff
2. improve reusable implementation outputs
3. improve product status visibility for fleet coordination
