# FLEET

## Purpose
Document how this control_tower repository fits into the wider fleet.

## Fleet Summary
- **Repo Role:** control_tower
- **Maturity:** active
- **Main Dependency:** repo-level status, manifests, and standards signals
- **Main Reusable Output:** rollups, audit views, and coordination guidance

## Related Repositories
| Repo | Relationship | Why It Matters |
|---|---|---|
| front-door repos | observes | provides public-facing status and routing signals |
| workflow repos | observes | provides operations state and execution patterns |
| product repos | observes | provides capability and delivery state |
| knowledge repos | shares_assets_with | uses standards and guidance for review consistency |

## Fleet Signals
- current priority: improve fleet visibility and rollup consistency
- current risk: some repos may still report status inconsistently
- current next action: improve scanability of repo health and next actions
- review cadence: monthly

## Reusable Outputs
- fleet rollups
- repo audit summaries
- standards alignment signals
- coordination guidance

## Needed Inputs
- repo status files
- interoperability manifests
- capability files
- roadmap and priority summaries
