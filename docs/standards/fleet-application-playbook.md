# Fleet Application Playbook

## Purpose
This playbook explains how to use the standards pack, fleet application pack, and starter files to spread a common operating system across many repositories.

## Deployment Sequence

### Step 1 — Choose the repo role
Assign one of these roles:
- front_door
- brand
- workflow
- product
- knowledge
- innovation
- control_tower

### Step 2 — Add the standard file skeleton
Recommended minimum set:
- README.md
- CAPABILITIES.md
- INTEGRATIONS.md
- STATUS.md
- ROADMAP.md
- STANDARDS.md

Add if relevant:
- PROMPTS.md
- ASSETS.md
- CHANGELOG.md

### Step 3 — Fill the role-specific content
Do not leave the repo as a generic template. Fill in:
- purpose
- primary users
- primary outcomes
- related repos
- current priorities
- next best action

### Step 4 — Align to shared standards
Check:
- taxonomy terms
- lifecycle names
- prompt naming
- file naming consistency

### Step 5 — Document interoperability
Add:
- inputs from other repos
- outputs to other repos
- reusable assets
- main dependency

### Step 6 — Review for scanability
Ask:
- can a human scan this quickly?
- can AI understand this repo fast?
- is the repo role obvious?
- is the next action obvious?

### Step 7 — Add to fleet rollup
Add the repo to the fleet-rollup-template.csv or future control-tower status system.

## Rollout Strategy

### Strategy A — Pilot Rollout
Start with a few important repos first:
- website repo
- brand repo
- workflow repo
- product repo

### Strategy B — Layered Rollout
Apply files in layers:
1. README + CAPABILITIES + STATUS
2. INTEGRATIONS + ROADMAP
3. STANDARDS + PROMPTS + ASSETS
4. fleet rollup + manifest alignment

### Strategy C — Audit First
Review older repos first, then decide whether to bootstrap lightly or upgrade deeply.

## Best Practices
- do not try to perfect every repo at once
- standardize the top-level surfaces first
- let specialized repos stay specialized
- prefer one canonical shared standard instead of many conflicting copies
- review active repos on a regular cadence
- use the website repo as a relationship and routing surface for the ecosystem

## Success Signals
A repo is in good shape when:
- its purpose is obvious quickly
- its role is declared
- its related repos are visible
- its current status is visible
- its next action is visible
- its reusable assets are easier to find
