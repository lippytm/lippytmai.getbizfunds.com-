# INTEGRATIONS

## Purpose
This repository connects public-facing messaging, CRM logic, chatbot assets, and standards guidance with the broader repository ecosystem.

## Integration Summary
This repository primarily acts as a:
- router
- shared asset source
- public-facing producer
- reporting source

## Inputs From Other Repos
| Source Repo | What Comes In | Why It Matters |
|---|---|---|
| lippytm.ai | brand guidance | keeps umbrella positioning aligned |
| MyClaw-related repos | workflow logic | supports automation and routing concepts |
| BotBuilders-related repos | productized service logic | supports chatbot and service packaging |

## Outputs To Other Repos
| Target Repo | What Goes Out | Why It Matters |
|---|---|---|
| control-tower repo | status summaries | fleet visibility |
| workflow repos | prompts, templates, schemas | shared execution assets |
| product repos | website-facing service logic | stronger front-door routing |

## External Tools / Systems
| Tool | Purpose | Status |
|---|---|---|
| ManyChat | messaging automation | planned/active |
| MyClaw | workflow routing | planned/active |
| BotBuilders | service and implementation layer | planned/active |
| CRM | relationship management | planned/active |

## Shared Standards Followed
- shared taxonomy
- shared lifecycle names
- shared prompt naming convention
- shared status template
- shared asset naming rules

## Integration Rules
- preserve original source data
- link to canonical source when another repo owns the asset
- avoid duplicate copies of shared standards without reason
- expose reusable outputs clearly

## Next Integration Priorities
1. connect this repo to fleet status visibility
2. improve reusable outputs for other repos
3. strengthen website-to-workflow repo references
