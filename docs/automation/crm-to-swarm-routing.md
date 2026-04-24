# CRM to Swarm Routing

This document explains how CRM-style lead and contact states in `lippytmai.getbizfunds.com-` should route into swarm-driven execution paths.

## Goal

Use lead quality, urgency, and service-fit signals to decide when a contact should move from simple follow-up into specialist swarm handling.

## Routing Triggers

- premium lead requires deeper implementation path
- strategy lead requires multi-step planning flow
- service activation requires structured handoff
- complex follow-up requires specialist routing

## Swarm Inputs

- contact_id
- lead_stage
- primary_goal
- urgency
- service_state
- next_action
- related offer or package

## Best Practices

- send structured task envelopes into swarm systems
- preserve lead and offer context across routing
- use swarm routing for higher-complexity cases, not every interaction
- keep governed review for higher-risk or monetized actions
