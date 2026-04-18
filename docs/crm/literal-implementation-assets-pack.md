# Literal Implementation Assets Pack

## Purpose

This document provides literal implementation assets for the CRM, chatbot, lifecycle, support, satisfaction, retention, innovation, education, entertainment, and partner systems.

It is designed to be copy-paste friendly for builders, operators, AI workflow designers, and future developers.

Use this pack for:
- CRM setup
- chatbot implementation
- ManyChat flow planning
- MyClaw routing design
- BotBuilders service packaging systems
- dashboards and KPI setup
- onboarding and support operations
- prompt libraries
- survey blocks
- portal planning

This document complements the strategy, architecture, build kit, SOP, and operations packs already in the repo.

---

# PART 1 — CSV-STYLE FIELD TABLES

## Asset 1 — Contact Fields Table

| field_name | label | field_type | required_stage | example_value | notes |
|---|---|---|---|---|---|
| contact_id | Contact ID | text/system | new lead | CNT-1001 | unique record id |
| first_name | First Name | text | new lead | Charles | person-level field |
| last_name | Last Name | text | optional early | Lipshay | person-level field |
| full_name | Full Name | formula/text | qualified | Charles Lipshay | can be concatenated |
| email | Email | email | new lead | name@example.com | one reliable contact method required |
| mobile_phone | Mobile Phone | phone | optional early | +17750000000 | useful for voice/SMS later |
| business_name | Business Name | text | qualified | lippytm.ai | account linkage |
| timezone | Timezone | select | qualified | America/Los_Angeles | booking and cadence support |
| preferred_language | Preferred Language | select | optional | English | future multilingual support |
| preferred_contact_method | Preferred Contact Method | select | qualified | email | email/phone/chat/voice |
| preferred_interaction_mode | Preferred Interaction Mode | select | qualified | hybrid | type/voice/hybrid |
| accessibility_notes | Accessibility Notes | long_text | optional | prefers voice | useful for service quality |

## Asset 2 — Source and Attribution Fields Table

| field_name | label | field_type | required_stage | example_value | notes |
|---|---|---|---|---|---|
| lead_source | Lead Source | select | new lead | website | original source |
| lead_source_detail | Lead Source Detail | text | new lead | homepage chat widget | more precise source |
| source_platform | Source Platform | select | new lead | website | website/facebook/instagram/etc |
| source_page | Source Page | text | optional early | /start-here | preserve entry page |
| source_campaign | Source Campaign | text | optional | spring_launch_2026 | campaign attribution |
| source_keyword | Source Keyword | text | optional | chatbot automation | ad or SEO support |
| source_content | Source Content | text | optional | homepage hero CTA | useful for testing |
| first_touch_channel | First Touch Channel | select | new lead | type_chat | initial interaction mode |
| latest_touch_channel | Latest Touch Channel | select | active | voice | track current channel too |

## Asset 3 — Intent and Opportunity Fields Table

| field_name | label | field_type | required_stage | example_value | notes |
|---|---|---|---|---|---|
| primary_intent | Primary Intent | select | new lead | automation | main reason they came |
| secondary_intent | Secondary Intent | select | qualified | chatbot | optional expansion signal |
| service_interest_primary | Primary Service Interest | select | qualified | myclaw_workflow_setup | map to offer |
| desired_outcome | Desired Outcome | long_text | qualified | faster follow-up and less lag | use plain language |
| urgency_level | Urgency Level | select | qualified | medium | low/medium/high |
| budget_band | Budget Band | select | optional | starter | starter/growth/premium/custom |
| timeline_to_start | Timeline to Start | select | qualified | within_30_days | supports routing |
| complexity_level | Complexity Level | select | qualified | medium | supports human handoff logic |
| estimated_value | Estimated Value | currency/number | sales | 2500 | optional early |
| offer_match | Offer Match | select | qualified | automation_setup_package | next best fit |

## Asset 4 — Lifecycle and Delivery Fields Table

| field_name | label | field_type | required_stage | example_value | notes |
|---|---|---|---|---|---|
| lifecycle_stage | Lifecycle Stage | select | new lead | engaged | high-level stage |
| pipeline_name | Pipeline Name | select | qualified | lead_intake | separate pipelines |
| pipeline_stage | Pipeline Stage | select | qualified | qualified | more precise stage |
| lifecycle_owner | Lifecycle Owner | user/text | qualified | ops_manager | owner if human needed |
| next_best_action | Next Best Action | text | new lead | invite_to_booking | cannot be empty for active records |
| next_best_action_due_date | Next Best Action Due Date | date | qualified | 2026-04-25 | accountability |
| onboarding_status | Onboarding Status | select | client | intake_requested | client stage onward |
| milestone_current | Current Milestone | text | active client | kickoff_complete | visible progress |
| service_health_status | Service Health Status | select | active client | healthy | healthy/watch/at_risk |
| renewal_eligibility | Renewal Eligibility | boolean/select | recurring | true | future retention logic |

## Asset 5 — Satisfaction and Growth Fields Table

| field_name | label | field_type | required_stage | example_value | notes |
|---|---|---|---|---|---|
| satisfaction_status | Satisfaction Status | select | client | positive | positive/mixed/negative |
| satisfaction_score_internal | Satisfaction Score Internal | number | active client | 4 | 1-5 internal score |
| csat_last | CSAT Last | number | support/client | 5 | optional direct feedback |
| churn_risk_flag | Churn Risk Flag | boolean | active client | false | visible risk marker |
| testimonial_candidate_flag | Testimonial Candidate | boolean | satisfied client | true | advocacy trigger |
| referral_candidate_flag | Referral Candidate | boolean | satisfied client | true | advocacy trigger |
| upsell_interest_level | Upsell Interest Level | select | active client | medium | low/medium/high |
| recurring_support_interest | Recurring Support Interest | select | active client | high | strong retention signal |
| expansion_potential_score | Expansion Potential Score | number | active client | 8 | 1-10 internal scale |

---

# PART 2 — JSON-STYLE REGISTRIES

## Asset 6 — Tag Registry JSON Style

```json
{
  "source_tags": [
    "source_website",
    "source_instagram",
    "source_facebook",
    "source_manychat",
    "source_myclaw",
    "source_botbuilders",
    "source_referral",
    "source_organic",
    "source_direct"
  ],
  "intent_tags": [
    "intent_growth",
    "intent_chatbot",
    "intent_automation",
    "intent_support",
    "intent_strategy",
    "intent_education",
    "intent_entertainment",
    "intent_partner",
    "intent_affiliate"
  ],
  "mode_tags": [
    "mode_type",
    "mode_voice",
    "mode_hybrid",
    "mode_human_assisted",
    "mode_ai_first"
  ],
  "stage_tags": [
    "stage_new",
    "stage_engaged",
    "stage_qualified",
    "stage_booked",
    "stage_active",
    "stage_nurture",
    "stage_at_risk",
    "stage_advocate",
    "stage_inactive",
    "stage_reactivated"
  ],
  "journey_tags": [
    "archetype_builder",
    "archetype_explorer",
    "archetype_strategist",
    "archetype_operator",
    "archetype_guide",
    "archetype_creator",
    "archetype_partner"
  ]
}
```

## Asset 7 — Pipeline Registry JSON Style

```json
{
  "lead_intake": [
    "new",
    "welcomed",
    "intent_identified",
    "qualified",
    "ready_for_booking",
    "nurture",
    "dormant"
  ],
  "sales": [
    "discovery",
    "offer_matched",
    "call_booked",
    "proposal_or_plan",
    "decision_pending",
    "won",
    "lost",
    "deferred"
  ],
  "onboarding": [
    "welcome_sent",
    "intake_requested",
    "intake_complete",
    "assets_received",
    "setup_in_progress",
    "first_milestone",
    "fully_active"
  ],
  "support": [
    "new_issue",
    "triage",
    "in_progress",
    "waiting_on_user",
    "resolved",
    "follow_up_complete"
  ],
  "retention": [
    "new_client",
    "stable",
    "growth_opportunity",
    "at_risk",
    "renewed",
    "paused",
    "closed"
  ]
}
```

## Asset 8 — Experience Preference Config JSON Style

```json
{
  "interaction_modes": ["type", "voice", "hybrid"],
  "support_modes": ["ai_first", "human_first", "hybrid_support"],
  "tone_preferences": ["direct", "friendly", "professional", "guided", "strategic"],
  "pace_preferences": ["quick", "balanced", "detailed"],
  "domain_focus": ["life", "business", "education", "entertainment", "mixed"]
}
```

---

# PART 3 — PROMPT LIBRARIES

## Asset 9 — Website Bot Welcome Prompt Pack

### Prompt A — Direct Router
Welcome. What would you like help with today?
- Grow my business
- Add AI chatbots
- Automate operations
- Get support
- Explore the ecosystem

### Prompt B — Guided Router
Welcome — I can help you find the best next step. Would you like a quick answer, a guided recommendation, or help from a person?

### Prompt C — Development Router
Would you like help with a practical next step, a bigger business system, a learning path, or a brainstorming session?

## Asset 10 — Qualification Prompt Pack

### Short Qualifier
What result matters most to you right now?

### Business Qualifier
What are you trying to improve first: growth, customer follow-up, AI support, automation, education, or something broader?

### Strategic Qualifier
Are you looking for a quick solution, a long-term system, or help designing the right path first?

### Human Preference Qualifier
Would you rather continue here, switch to voice, or have a person step in for the next step?

## Asset 11 — Handoff Summary Prompt

Use this format:
- Who they are
- Why they came
- Main desired outcome
- What has happened so far
- Concerns or objections
- Best next action

## Asset 12 — AI Review Prompt

Review this CRM record and return:
1. missing critical information
2. likely current lifecycle risk
3. likely next best action
4. whether human follow-up is recommended
5. whether satisfaction, churn, upsell, or partner signals are present

---

# PART 4 — OPERATOR MACROS

## Asset 13 — Lead Intake Macro

Thanks for reaching out. I’ve noted your main goal and next I’m going to help route you to the best option based on what you need most right now.

## Asset 14 — Booking Assist Macro

Based on what you shared, the best next step looks like either a direct strategy session or a more focused recommendation summary. I can help with whichever is easier for you.

## Asset 15 — Support Macro

I understand the issue. I’m logging the key details now and the next step is to either resolve it directly here or escalate it with the right context so you do not have to repeat everything.

## Asset 16 — Recovery Macro

Thanks for being direct about this. I’m treating it as a priority and outlining the clearest corrective next step now so we can reduce friction and improve the experience quickly.

## Asset 17 — Referral Ask Macro

I’m glad this has been helpful. If you know someone else who could benefit from something similar, I’d appreciate an introduction or a referral when the time feels right.

---

# PART 5 — SURVEY FORM BLOCKS

## Asset 18 — Onboarding Survey Block

```text
How clear did the onboarding process feel?
- Very clear
- Mostly clear
- Mixed
- Confusing

Did you know what to do next?
- Yes
- Mostly
- Not really

What felt easiest?
[short answer]

What felt confusing?
[short answer]
```

## Asset 19 — Support Survey Block

```text
Was the issue understood correctly?
- Yes
- Mostly
- No

Was the response fast enough?
- Yes
- Somewhat
- No

Was the resolution useful?
- Yes
- Partly
- No

Do you need any more help on this?
- No, resolved
- Maybe a little more help
- Yes, I still need help
```

## Asset 20 — Completion Survey Block

```text
What was most valuable about the experience?
[short answer]

What could have been better?
[short answer]

Would you continue, return, or refer?
- Yes
- Maybe
- Not now
```

---

# PART 6 — MESSAGE TEMPLATES

## Asset 21 — Welcome Email Template

Subject: Welcome — here’s your next step

Body:
Welcome. We’re glad to have you here.

Based on where you entered, the next step is to help you move forward with more clarity and less friction.

What happens next:
- we confirm what you need most
- we guide you to the best-fit path
- we keep the process as simple and useful as possible

If you want, you can continue by message, voice, or with more direct human help depending on what works best for you.

## Asset 22 — Booking Confirmation Template

Subject: You’re booked — next steps

Body:
You’re confirmed.

We’ll send the details you need so the session is productive and easy.

Helpful next steps:
- keep a short list of your main goals
- note your biggest challenge right now
- bring any questions you want answered directly

## Asset 23 — Milestone Update Template

Body:
Quick progress update:
- current milestone: [milestone]
- what has been completed: [summary]
- what is next: [next step]
- if needed from you: [request]

## Asset 24 — Reactivation Template

Body:
Checking in because priorities often change over time.

If it would help, we can:
- give you a fresh recommendation
- revisit the best next step
- continue where you left off
- explore a new path if your goals have changed

---

# PART 7 — DASHBOARD SCHEMA ASSETS

## Asset 25 — KPI Dashboard Schema

| dashboard_name | metric_name | metric_definition | review_frequency | owner | action_trigger |
|---|---|---|---|---|---|
| source_dashboard | lead_to_qualified_rate | percent of leads becoming qualified | weekly | crm_lead | review weak sources |
| pipeline_dashboard | stage_aging_days | average days in stage | weekly | ops_owner | fix stuck stages |
| support_dashboard | resolution_time | average time to close support case | weekly | support_owner | review slow cases |
| satisfaction_dashboard | satisfaction_score | average satisfaction signal | monthly | client_success | recovery workflow if low |
| retention_dashboard | churn_risk_count | count of at-risk accounts | weekly | client_success | proactive outreach |
| growth_dashboard | referral_rate | percent generating referrals | monthly | relationship_owner | adjust ask timing |
| journey_dashboard | innovation_sessions | count of brainstorming or journey sessions | monthly | journey_owner | expand high-interest paths |

## Asset 26 — Portal Module Schema

| module_name | purpose | primary_user_type | data_dependency |
|---|---|---|---|
| dashboard_home | central overview | all users | identity, lifecycle |
| current_goals | show active priorities | clients, learners | intent, journey |
| recent_activity | display latest actions | all users | conversation, service |
| progress_map | show milestones | clients, students | delivery, journey |
| support_center | issue resolution area | clients, support users | support cases |
| brainstorming_lab | idea generation area | builders, creators | innovation fields |
| preferences_panel | mode and tone settings | all users | preference fields |

---

# PART 8 — IMPLEMENTATION CHECKS

## Asset 27 — Pre-Launch Checklist

- [ ] fields created
- [ ] source logic validated
- [ ] tags standardized
- [ ] pipelines defined
- [ ] next action rules defined
- [ ] summary format chosen
- [ ] welcome prompts loaded
- [ ] support macros loaded
- [ ] survey blocks prepared
- [ ] KPI owners assigned

## Asset 28 — Post-Launch Review Checklist

- [ ] leads are being tagged correctly
- [ ] no active records missing next action
- [ ] qualified leads are routed correctly
- [ ] support cases have owners and statuses
- [ ] satisfaction pulses are firing
- [ ] referral candidates are visible
- [ ] reactivation lists are building
- [ ] dashboard metrics are readable and actionable

---

# PART 9 — BEST PRACTICES AND EXPANSION NOTES

## Best Practices

### Viability
- start with the assets you will really use first
- phase advanced features only after the basics are stable

### Diversity
- support multiple user types and paths
- keep modular templates for different segments

### Flexibility
- write prompts and schemas so they can work across tools
- keep field names and tags portable

### Detail Depth
- keep enough structure to support quality and personalization
- avoid bloated or duplicate assets

### Governance
- version assets when changed
- review usage monthly
- retire unused or low-value templates

### Innovation
- turn repeated operator edits into better reusable assets
- turn repeated user requests into new templates, offers, or journey modules

---

## Strategic Outcome

This Literal Implementation Assets Pack provides a more direct execution layer for building and operating the CRM and chatbot ecosystem.

It is designed to help translate architecture into real setup work, operator behavior, AI prompts, surveys, dashboards, and future portal components while preserving viability, diversity, flexibility, and continuous improvement.
