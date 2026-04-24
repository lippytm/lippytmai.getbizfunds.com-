# CRM to Commerce Routing

This document explains how CRM-style lead and contact states in `lippytmai.getbizfunds.com-` should route into commerce and activation flows.

## Goal

Move the right leads into checkout and service activation with enough context to reduce friction and improve conversion quality.

## Routing Triggers
- premium lead is ready for paid activation
- strategy lead has selected a paid next step
- service package has been chosen
- follow-up path confirms buying intent

## Commerce Inputs
- contact_id
- lead_stage
- primary_goal
- selected offer or package
- urgency
- next_action
- service_state

## Best Practices
- keep checkout routing tied to clear buying signals
- pass structured context into commerce systems
- separate lead qualification from payment handling
- connect activation back into assistant, swarm, or support flows when useful
