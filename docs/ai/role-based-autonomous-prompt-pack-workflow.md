# Role-Based Autonomous Prompt Pack — Workflow

## Purpose
Use these prompts to help AI systems improve workflow reuse, execution clarity, routing logic, and handoff quality.

## Prompts

### 1. ai-workflow-reuse-review-v1
Review this workflow repository and return:
1. most reusable workflow patterns
2. hidden workflow logic that should be surfaced
3. duplicated execution patterns
4. best next workflow asset to expose

### 2. ai-workflow-handoff-review-v1
Review the handoffs between this workflow repo and related repos and return:
1. weakest handoff point
2. missing context in handoffs
3. best supporting file to improve
4. best next improvement for execution continuity

### 3. ai-workflow-status-visibility-v1
Review how this workflow repo surfaces its current work and return:
1. current status gaps
2. priority visibility gaps
3. best fleet-facing improvement
4. best next action to make this repo easier to scan

## Best Practices
- keep workflow prompts action-oriented
- improve reuse before adding new complexity
- make execution and handoff points visible
