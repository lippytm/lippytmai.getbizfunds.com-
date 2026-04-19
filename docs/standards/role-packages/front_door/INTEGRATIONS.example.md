# INTEGRATIONS

## Purpose
This repository connects public-facing messaging, CRM entry, chatbot entry points, and service routing with the wider ecosystem.

## Integration Summary
This repository mainly acts as a:
- front-facing router
- public guidance source
- relationship entry layer
- shared standards source

## Inputs From Other Repos
| Source Repo | What Comes In | Why It Matters |
|---|---|---|
| brand repos | positioning and umbrella direction | keeps top-level messaging aligned |
| workflow repos | routing and automation logic | improves handoff quality |
| product repos | offer and implementation details | improves service navigation |
| knowledge repos | prompts, SOPs, standards | improves consistency and reuse |

## Outputs To Other Repos
| Target Repo | What Goes Out | Why It Matters |
|---|---|---|
| workflow repos | routed needs and relationship context | improves execution support |
| product repos | qualified interest and routing clarity | improves delivery handoff |
| control_tower repos | status and priority signals | improves fleet visibility |
| knowledge repos | public-facing usage needs and gaps | improves shared guidance |

## Shared Standards Followed
- shared taxonomy
- shared lifecycle names
- shared prompt naming convention
- interoperability manifest template
- fleet starter pattern

## Integration Rules
- keep public-facing value simple and clear
- route into specialized repos instead of trying to own everything locally
- expose reusable CRM and routing assets clearly
- preserve original source and relationship context when handing off

## Next Integration Priorities
1. improve front-door to workflow handoffs
2. improve front-door to product routing clarity
3. improve visibility of reusable public-facing assets
