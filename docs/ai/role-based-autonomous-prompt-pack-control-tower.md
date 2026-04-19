# Role-Based Autonomous Prompt Pack — Control Tower

## Purpose
Use these prompts to help AI systems improve fleet visibility, standards governance, cross-repo prioritization, and transparent review loops.

## Prompts

### 1. ai-controltower-priority-review-v1
Review the current fleet state and return:
1. repos with the highest leverage to improve next
2. repos with the weakest standards surfaces
3. repos with the clearest reusable assets
4. top three fleet-wide risks
5. top three fleet-wide next actions

### 2. ai-controltower-status-gap-review-v1
Review repo status visibility across the fleet and return:
1. repos missing recent status surfaces
2. repos with unclear next actions
3. repos with weak role clarity
4. best next improvements for fleet scanability

### 3. ai-controltower-standards-drift-review-v1
Review the fleet for standards drift and return:
1. terminology drift
2. file-surface drift
3. prompt naming drift
4. duplicated standards surfaces
5. highest-value cleanup actions

## Best Practices
- keep control-tower prompts comparative and structured
- prefer prioritized actions over broad observations
- use outputs to improve transparency and governance
