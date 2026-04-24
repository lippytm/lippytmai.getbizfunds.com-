# CRM Event Model

This document defines a simple event model for CRM-style activity in `lippytmai.getbizfunds.com-`.

## Core Events
- `lead.created`
- `lead.engaged`
- `lead.qualified`
- `lead.strategy_routed`
- `lead.premium_routed`
- `followup.scheduled`
- `service.activated`
- `lead.reengaged`
- `lead.archived`

## Suggested Event Fields
- contact_id
- lead_stage
- primary_goal
- urgency
- next_action
- service_state
- timestamp

## Best Practices
- keep event names consistent
- tie stage changes to explicit events
- preserve context for assistant, swarm, and commerce handoffs
- use event history to improve routing and follow-up quality
