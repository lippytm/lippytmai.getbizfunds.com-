# Autonomous AI Prompt Library

## Purpose

This library provides reusable prompts for AI systems that help upgrade, review, document, and improve the wider repository ecosystem.

Use these prompts for:
- repo review agents
- standards alignment agents
- prompt review agents
- documentation improvement agents
- workflow upgrade agents
- fleet visibility agents
- innovation capture agents
- ecosystem strategy agents

---

## Prompt Naming Convention
Use names like:
- ai-repo-audit-guided-v1
- ai-standards-alignment-review-v1
- ai-fleet-rollup-summary-v1
- ai-prompt-library-review-v1
- ai-innovation-promotion-review-v1

---

## 1. Repo Audit Prompt

### Name
`ai-repo-audit-guided-v1`

### Prompt
Review this repository and return:
1. repo role
2. repo maturity guess
3. missing standard files
4. strongest reusable assets
5. biggest clarity gap
6. biggest interoperability gap
7. best next action
8. whether the repo is ready for wider fleet rollout

### Best Use
Repo review and cleanup prioritization.

---

## 2. Standards Alignment Prompt

### Name
`ai-standards-alignment-review-v1`

### Prompt
Compare this repository against the shared standards pack and report:
1. missing required files by role
2. missing recommended files by role
3. terminology mismatches
4. lifecycle naming mismatches
5. prompt naming mismatches
6. reusable assets not exposed clearly
7. top three standards improvements

### Best Use
Standards normalization across repos.

---

## 3. Repo Role Classifier Prompt

### Name
`ai-repo-role-classifier-v1`

### Prompt
Based on the repository name, README, docs, and visible files, identify:
1. likely primary role
2. likely secondary strengths
3. strongest capability areas
4. most useful related repos
5. which role-pack starter files should be applied first

### Best Use
Fast role assignment and rollout planning.

---

## 4. Interoperability Review Prompt

### Name
`ai-interoperability-review-v1`

### Prompt
Review this repository and determine:
1. what it takes in from other repos
2. what it produces for other repos
3. which dependencies are unclear
4. which reusable outputs are not exposed clearly
5. how this repo could integrate better with the front-door repo
6. how this repo could integrate better with the control-tower layer

### Best Use
Cross-repo coordination and visibility improvement.

---

## 5. Prompt Library Review Prompt

### Name
`ai-prompt-library-review-v1`

### Prompt
Review this repo's prompt inventory and report:
1. prompts that are well-scoped
2. prompts that are vague or too broad
3. prompts that need versioning
4. prompts that appear duplicated elsewhere
5. missing prompt categories for this repo role
6. best next prompt improvement actions

### Best Use
Prompt quality and prompt reuse improvement.

---

## 6. Documentation Upgrade Prompt

### Name
`ai-documentation-upgrade-review-v1`

### Prompt
Review the current documentation and return:
1. strongest docs
2. docs that are missing
3. docs that are outdated or too vague
4. docs that should be split or merged
5. docs that should link more clearly to other repos
6. top documentation improvements with the highest leverage

### Best Use
Documentation cleanup and strengthening.

---

## 7. Workflow Upgrade Prompt

### Name
`ai-workflow-upgrade-review-v1`

### Prompt
Review this repo's workflows and return:
1. most reusable workflow patterns
2. workflow patterns that are too tool-specific
3. hidden handoff points that should be documented
4. weak routing or execution transitions
5. workflow improvements with highest ecosystem leverage

### Best Use
Workflow clarity and reuse improvement.

---

## 8. Fleet Rollup Prompt

### Name
`ai-fleet-rollup-summary-v1`

### Prompt
Using the status, capability, integration, and roadmap files across the repo fleet, summarize:
1. which repos are healthiest
2. which repos are most under-documented
3. which repos have the strongest reusable assets
4. which repos need role clarification
5. which repos should be upgraded next
6. top fleet-wide risks
7. top fleet-wide opportunities

### Best Use
Control-tower style fleet scanning.

---

## 9. Asset Reuse Discovery Prompt

### Name
`ai-asset-reuse-discovery-v1`

### Prompt
Review this repository and identify:
1. reusable prompts
2. reusable templates
3. reusable schemas
4. reusable workflow patterns
5. reusable guides
6. which repos would benefit most from reusing them

### Best Use
Increase cross-repo reuse and reduce duplicated effort.

---

## 10. Innovation Promotion Prompt

### Name
`ai-innovation-promotion-review-v1`

### Prompt
Review the experiment and innovation materials and determine:
1. what should stay experimental
2. what is mature enough to move into a stronger repo
3. what lessons should be promoted into knowledge repos
4. what product ideas should move into product repos
5. what public-facing ideas could benefit front-door repos

### Best Use
Reduce stranded experiments and improve idea promotion.

---

## 11. Next-Best Upgrade Prompt

### Name
`ai-next-best-upgrade-v1`

### Prompt
Given this repository's current role, status, standards coverage, and asset visibility, recommend:
1. the single highest-leverage next action
2. the best missing file to add next
3. the best reusable asset to expose next
4. the best related repo to connect more clearly
5. the best improvement for AI and human scanability

### Best Use
Small-step continuous improvement.

---

## 12. Ecosystem Upgrade Strategy Prompt

### Name
`ai-ecosystem-upgrade-strategy-v1`

### Prompt
Review the wider repository ecosystem and produce:
1. prioritized upgrade phases
2. highest-leverage repo roles to improve first
3. highest-value reusable assets to standardize
4. key coordination gaps
5. best actions to strengthen the website repo as a front-door relationship hub
6. best actions to strengthen fleet-wide transparency and documentation

### Best Use
Big-picture autonomous planning support.

---

## Best Practices
- keep outputs structured and comparable
- prefer clear next actions over vague observations
- use prompts to improve reuse and documentation, not just generate more text
- keep canonical ownership visible when recommending copied assets
- treat role, maturity, and ecosystem leverage as core decision factors
