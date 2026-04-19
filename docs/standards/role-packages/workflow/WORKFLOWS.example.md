# WORKFLOWS

## Purpose
Document the main reusable workflows this workflow repository owns or exports.

## Workflow Inventory
| Workflow Name | Purpose | Trigger | Status | Owner | Notes |
|---|---|---|---|---|---|
| intake_to_routing | move new requests into the right path | new qualified need | active | ops_owner | reusable across repos |
| routing_to_execution | hand off accepted work into execution | approved next step | draft | ops_owner | supports product repos |
| support_triage | classify and route support issues | support request | active | support_owner | reusable support flow |
| reactivation_check | surface dormant but valuable records | inactivity threshold | draft | crm_ops | optional reuse |

## Workflow Categories
- intake
- routing
- onboarding
- support
- recovery
- reporting

## Workflow Rules
- keep names clear and reusable
- note trigger and expected output
- expose the most reusable workflows first
- link to related SOP or standards sources when relevant

## Best Practices
- separate workflow intent from tool-specific implementation details
- make handoff points visible
- use this file to surface operational logic other repos can reuse quickly
