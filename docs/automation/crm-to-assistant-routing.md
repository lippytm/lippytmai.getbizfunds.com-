# CRM to Assistant Routing

This document explains how CRM-style lead and contact states in `lippytmai.getbizfunds.com-` should route into assistant experiences.

## Goal

Use lead stage, next action, and urgency to decide when a contact should be routed into an assistant path instead of only static follow-up.

## Routing Triggers

- qualified lead needs guidance
- strategy lead needs clarification
- premium lead needs higher-touch next step
- nurture or reengagement lead needs conversational follow-up

## Assistant Inputs

- contact_id
- lead_stage
- primary_goal
- urgency
- next_action
- memory summary when available

## Best Practices

- keep assistant routing tied to clear lead states
- preserve contact context during handoff
- keep assistant prompts aligned to the next business step
- use assistant paths to reduce confusion, not add complexity
