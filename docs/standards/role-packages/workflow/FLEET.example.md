# FLEET

## Purpose
Document how this workflow repository fits into the wider fleet.

## Fleet Summary
- **Repo Role:** workflow
- **Maturity:** active
- **Main Dependency:** front-door signals and knowledge assets
- **Main Reusable Output:** routing rules and workflow patterns

## Related Repositories
| Repo | Relationship | Why It Matters |
|---|---|---|
| front-door repos | depends_on | receives routed needs and public signals |
| product repos | supports | provides execution and automation support |
| knowledge repos | shares_assets_with | uses SOPs, prompts, and standards |
| control_tower repos | reports_to | supports fleet visibility |

## Fleet Signals
- current priority: improve reusable workflow exports
- current risk: some workflow assets may still be too repo-specific
- current next action: clarify top reusable execution patterns
- review cadence: monthly

## Reusable Outputs
- routing rules
- workflow docs
- execution checklists
- automation patterns

## Needed Inputs
- front-door demand signals
- SOP guidance
- product requirements
- shared standards
