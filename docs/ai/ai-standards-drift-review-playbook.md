# AI Standards Drift Review Playbook

## Purpose

This playbook defines how to review standards drift across repos, assets, prompts, and lifecycle language.

## Core Principle

Standards drift matters when it reduces clarity, reuse, interoperability, or trust.
The goal is not rigid sameness.
The goal is coordinated consistency where it creates leverage.

## Drift Areas

### 1. File Surface Drift
Check whether role-required and role-recommended files are missing or inconsistent.

### 2. Taxonomy Drift
Check whether shared terms and labels are being replaced by inconsistent local variants.

### 3. Lifecycle Drift
Check whether lifecycle names have drifted away from shared terms.

### 4. Prompt Naming Drift
Check whether prompt names remain searchable, portable, and versioned clearly.

### 5. Ownership Drift
Check whether canonical ownership has become unclear or duplicated.

### 6. Status Drift
Check whether status reporting is stale, inconsistent, or missing next actions.

## Review Sequence
1. compare repo role to required file map
2. compare visible language to shared taxonomy
3. compare lifecycle terms to shared lifecycle guide
4. compare prompt names to naming convention
5. compare asset ownership to canonical map
6. recommend smallest highest-value cleanup first

## Best Practices
- reduce confusion first
- prefer correcting shared language over inventing more local variants
- use drift reviews to improve portability and scanability
- keep cleanup practical and phased
