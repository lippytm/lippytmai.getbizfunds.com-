# Contact State Model

This document defines a simple contact-state model for `lippytmai.getbizfunds.com-`.

## Core Fields

- contact_id
- lead_stage
- primary_goal
- urgency
- budget_band
- preferred_contact_method
- last_touch_at
- next_action
- service_state

## Best Practices

- keep contact fields small and useful
- track next action clearly
- separate lead stage from service state when needed
- preserve context for assistant and swarm handoffs
