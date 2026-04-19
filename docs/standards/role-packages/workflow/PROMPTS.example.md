# PROMPTS

## Purpose
Document the main workflow, routing, and execution prompts this workflow repository owns or references.

## Prompt Inventory
| Prompt Name | Domain | Mode | Purpose | Status | Source |
|---|---|---|---|---|---|
| workflow-routing-review-v1 | workflow | guided | review and route requests into the right workflow path | active | local |
| support-triage-hybrid-v1 | support | hybrid | classify and route support issues | active | shared |
| execution-summary-v1 | workflow | direct | summarize next action for operators | draft | local |
| workflow-handoff-v1 | workflow | direct | package context for downstream repos or humans | draft | local |

## Shared Prompt Categories
- routing
- triage
- summary
- handoff
- execution review

## Prompt Rules
- keep workflow prompts action-oriented
- make trigger and expected output obvious
- reduce repeated explanation for operators
- use shared naming for reuse across repos
