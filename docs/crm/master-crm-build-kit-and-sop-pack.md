# Master CRM Build Kit and SOP Pack

## Purpose

This document converts the CRM strategy into an implementation-oriented build kit and operating pack.

It is designed to support:
- website operations
- AI chatbot operations
- voice and typed interaction flows
- ManyChat
- MyClaw
- BotBuilders
- customer and client lifecycle management
- support operations
- education and engagement journeys
- innovation and brainstorming workflows
- partner and referral development

This build kit is intended to be practical, modular, scalable, and always improvable.

---

## Master Build Philosophy

The CRM should be built like a living platform, not a static spreadsheet.

It should be:
- modular enough to change
- structured enough to manage
- intelligent enough to adapt
- simple enough to operate
- detailed enough to improve
- flexible enough to support many relationship types

The best CRM build is not the biggest one.
It is the one that keeps the right information, triggers the right actions, and helps people move forward with less friction.

---

# PART 1 — MASTER BUILD KIT

## 1. CRM Foundation Stack

### Required Core Modules
1. Identity module
2. Source and attribution module
3. Intent module
4. Lifecycle module
5. Opportunity module
6. Conversation memory module
7. Service delivery module
8. Support module
9. Satisfaction module
10. Retention and growth module
11. Education / innovation / journey module
12. Partner / affiliate module
13. Analytics and dashboard module
14. Governance and review module

### Best Practice
Build the CRM in modules so future tools can be swapped without losing the system logic.

---

## 2. Master Field Dictionary

## A. Identity Fields
- contact_id
- account_id
- first_name
- last_name
- full_name
- business_name
- email
- mobile_phone
- alternate_phone
- timezone
- city
- state
- country
- website_url
- social_profile_primary
- preferred_language
- accessibility_notes

### Best Practices
- use standardized field names
- separate person-level from business-level fields
- keep address/location fields clean for future filtering

## B. Preference Fields
- preferred_contact_method
- preferred_interaction_mode
- preferred_tone
- preferred_support_style
- preferred_update_frequency
- preferred_domain_focus
- communication_opt_in_status
- voice_enabled_preference

### Best Practices
- allow user preference overrides
- avoid assuming everyone wants the same communication style
- track both detected preference and declared preference when useful

## C. Source Fields
- lead_source
- lead_source_detail
- source_platform
- source_page
- source_campaign
- source_keyword
- source_content
- source_referrer
- first_touch_channel
- latest_touch_channel

### Best Practices
- do not create a lead without a source
- always distinguish broad source from detailed source
- preserve original source even if the channel changes later

## D. Intent Fields
- primary_intent
- secondary_intent
- service_interest_primary
- service_interest_secondary
- desired_outcome
- urgency_level
- budget_band
- timeline_to_start
- business_stage
- team_size
- complexity_level

### Best Practices
- separate what they want now from what they may want later
- use controlled values where possible
- let free-text notes complement structured fields

## E. Lifecycle Fields
- lifecycle_stage
- pipeline_name
- pipeline_stage
- lifecycle_owner
- lifecycle_priority
- current_status_summary
- next_best_action
- next_best_action_due_date
- last_meaningful_touch_date
- last_human_touch_date

### Best Practices
- define lifecycle stage meanings clearly
- never leave next_best_action empty for active opportunities
- use dates for accountability

## F. Conversation Fields
- conversation_id
- session_count
- last_session_date
- last_bot_mode
- transcript_reference
- summary_short
- summary_detailed
- objections_detected
- sentiment_last
- human_requested_flag
- escalation_reason

### Best Practices
- summaries should be readable in under 30 seconds
- keep transcripts available but do not force humans to read them first
- use summaries to reduce repeated questioning

## G. Service and Delivery Fields
- service_record_id
- service_type
- package_level
- onboarding_status
- milestone_current
- milestone_due_next
- service_health_status
- delivery_owner
- active_support_flag
- renewal_eligibility

### Best Practices
- distinguish sales stage from delivery stage
- keep milestone fields simple and visible
- use service_health_status to detect risk early

## H. Satisfaction Fields
- satisfaction_status
- satisfaction_score_internal
- csat_last
- nps_like_signal
- sentiment_trend
- recovery_needed_flag
- testimonial_candidate_flag
- referral_candidate_flag
- churn_risk_flag

### Best Practices
- combine quantitative and qualitative satisfaction data
- satisfaction should be updated at meaningful lifecycle moments
- never hide churn risk inside notes only

## I. Growth Fields
- upsell_interest_level
- cross_sell_interest_level
- recurring_support_interest
- education_interest_level
- brainstorming_interest_level
- partner_interest_level
- affiliate_interest_level
- expansion_potential_score

### Best Practices
- treat growth fields as future value indicators, not just sales pressure points
- update after wins and after positive feedback

## J. Development / Journey Fields
- archetype_primary
- archetype_secondary
- journey_stage
- development_progress_score
- innovation_session_count
- education_progress_stage
- entertainment_engagement_level
- business_development_progress

### Best Practices
- use developmental fields to improve guidance, not stereotype the user
- let these evolve over time

---

## 3. Master Tag Registry

## Source Tags
- source_website
- source_instagram
- source_facebook
- source_manychat
- source_myclaw
- source_botbuilders
- source_referral
- source_organic
- source_direct

## Intent Tags
- intent_growth
- intent_chatbot
- intent_automation
- intent_support
- intent_strategy
- intent_education
- intent_entertainment
- intent_partner
- intent_affiliate

## Relationship Tags
- relationship_lead
- relationship_prospect
- relationship_client
- relationship_customer
- relationship_student
- relationship_support_user
- relationship_advocate
- relationship_partner

## Mode Tags
- mode_type
- mode_voice
- mode_hybrid
- mode_human_assisted
- mode_ai_first

## Stage Tags
- stage_new
- stage_engaged
- stage_qualified
- stage_booked
- stage_active
- stage_nurture
- stage_at_risk
- stage_advocate
- stage_inactive
- stage_reactivated

## Value Tags
- value_low
- value_mid
- value_high
- value_recurring
- value_partner

## Journey Tags
- archetype_builder
- archetype_explorer
- archetype_strategist
- archetype_operator
- archetype_guide
- archetype_creator
- archetype_partner

### Tagging Best Practices
- keep tags short and standardized
- do not create duplicate variants of the same idea
- review unused tags quarterly
- define what causes each tag to be added or removed

---

## 4. Pipeline Tables

## Lead Intake Pipeline
- New
- Welcomed
- Intent Identified
- Qualified
- Ready for Booking
- Nurture
- Dormant

## Sales Pipeline
- Discovery
- Offer Matched
- Call Booked
- Proposal or Plan
- Decision Pending
- Won
- Lost
- Deferred

## Onboarding Pipeline
- Welcome Sent
- Intake Requested
- Intake Complete
- Assets Received
- Setup In Progress
- First Milestone
- Fully Active

## Delivery Pipeline
- Active
- Awaiting Client
- In Review
- Needs Intervention
- Completed

## Support Pipeline
- New Issue
- Triage
- In Progress
- Waiting on User
- Resolved
- Follow-Up Complete

## Retention Pipeline
- New Client
- Stable
- Growth Opportunity
- At Risk
- Renewed
- Paused
- Closed

## Advocacy / Partner Pipeline
- Candidate
- Invited
- Approved
- Active
- Dormant

### Pipeline Best Practices
- keep each stage decision-based, not vague
- define exit criteria for each stage
- avoid mixing sales, delivery, and support in one pipeline

---

## 5. Score Stack Model

### Lead Score
Measures fit and urgency.

### Engagement Score
Measures responsiveness and activity.

### Satisfaction Score
Measures happiness and confidence.

### Loyalty Score
Measures repeat and advocacy potential.

### Churn Risk Score
Measures likelihood of disengagement or loss.

### Expansion Score
Measures future service or partner upside.

### Best Practices
- review score logic monthly
- do not let one score overrule all others
- scores should trigger actions, not only labels

---

## 6. Experience Mode Build Table

### Type-First Experience
Use for:
- website visitors
- social messaging
- quick qualification
- link-based navigation

### Voice-First Experience
Use for:
- accessibility support
- users who prefer speaking
- mobile convenience
- reassurance-sensitive interactions

### Hybrid Experience
Use for:
- complex sales
- onboarding
- strategic planning
- continuity across channels

### Human-Assisted Experience
Use for:
- high trust decisions
- support recovery
- complaints
- custom service design

### Best Practices
- always offer user choice
- always keep human escalation visible
- keep experience mode linked to preference fields and current context

---

## 7. Dashboard Definition Pack

### Source Dashboard
Measures source quality, conversion rate, and value by source.

### Pipeline Dashboard
Measures stage volume, aging, and flow health.

### Support Dashboard
Measures case volume, resolution time, reopen rate, and sentiment.

### Satisfaction Dashboard
Measures CSAT-like signals, churn risk, recovery success, and testimonial readiness.

### Growth Dashboard
Measures upsells, cross-sells, recurring conversions, referrals, and partner development.

### Journey Dashboard
Measures education, innovation, brainstorming, and development progress.

### Best Practices
- tie every dashboard to an action owner
- avoid vanity metrics with no operational use
- highlight exceptions and risks, not only totals

---

# PART 2 — SOP PACK

## SOP 1 — New Lead Intake

### Objective
Capture the lead, tag correctly, reduce confusion, and route to the right next step.

### Steps
1. create contact record
2. assign source fields and tags
3. assign intent fields and tags
4. identify preferred mode if possible
5. calculate first lead score
6. assign pipeline stage
7. trigger welcome message or next-step flow

### Quality Standard
No lead should remain without source, intent, and next_best_action.

### Best Practices
- ask only what is needed first
- do not overload the intake step
- summarize clearly for later handoff

---

## SOP 2 — Qualification

### Objective
Determine fit, urgency, complexity, and correct path.

### Steps
1. ask fit questions
2. confirm desired outcome
3. assess urgency and timeline
4. identify service interest
5. update score stack
6. assign qualified / nurture / support / partner path
7. document summary

### Best Practices
- qualification should help the user, not interrogate them
- use both structured data and short notes
- escalate high-value leads quickly

---

## SOP 3 — Booking and Conversion

### Objective
Help the user move confidently into a booked call, plan, or purchase.

### Steps
1. confirm correct offer path
2. answer key questions
3. present booking or action choices
4. capture booking outcome
5. send confirmation and reminders
6. update pipeline stage

### Best Practices
- reduce choice overload
- provide summary before commitment when useful
- keep no-show prevention built in

---

## SOP 4 — Onboarding

### Objective
Create a smooth start that builds confidence and reduces friction.

### Steps
1. send welcome packet
2. confirm service summary
3. request intake assets
4. set timeline expectations
5. assign milestone status
6. send first check-in

### Best Practices
- do not dump too much information at once
- use checklists
- define responsibilities clearly

---

## SOP 5 — Active Service Delivery

### Objective
Maintain clarity, progress, and trust during delivery.

### Steps
1. update milestone records
2. send progress summaries
3. monitor response and service health
4. capture issues early
5. adjust cadence by client preference

### Best Practices
- silence feels like failure to many clients
- visible progress improves confidence
- use summaries often

---

## SOP 6 — Support Triage

### Objective
Classify, route, and resolve issues efficiently.

### Steps
1. classify issue type
2. assign urgency
3. attempt AI-assisted first response if appropriate
4. escalate to human if needed
5. track resolution
6. confirm satisfaction

### Best Practices
- do not trap users in loops
- emotional or trust-heavy cases should escalate faster
- always document the final resolution

---

## SOP 7 — Satisfaction Pulse Review

### Objective
Measure service health and detect issues before churn.

### Steps
1. trigger pulse at milestone moments
2. update satisfaction fields
3. review sentiment and support history
4. mark at-risk or advocate candidate when appropriate
5. assign recovery or referral action

### Best Practices
- ask for feedback when the experience is fresh
- use short surveys first
- mixed sentiment should trigger human review when important

---

## SOP 8 — Recovery and Complaint Handling

### Objective
Restore trust when the experience becomes negative.

### Steps
1. flag recovery_needed
2. assign accountable owner
3. summarize issue and impact
4. communicate corrective action
5. confirm resolution
6. log lesson learned

### Best Practices
- speed matters
- clarity matters more than generic apology language
- each complaint is system intelligence

---

## SOP 9 — Retention and Expansion

### Objective
Extend value and maintain strong relationships over time.

### Steps
1. review service history and satisfaction
2. detect next best service or support path
3. review churn signals
4. send retention or growth message
5. update expansion fields

### Best Practices
- upsell after trust and value are established
- tie every new recommendation to an existing need or win
- celebrate milestones before expansion asks

---

## SOP 10 — Referral and Advocacy

### Objective
Turn strong experiences into social proof and introductions.

### Steps
1. identify advocate candidate
2. request feedback or testimonial
3. request referral or introduction when appropriate
4. invite to partner path if relevant
5. track outcome

### Best Practices
- ask when satisfaction is high
- keep the ask simple
- never pressure advocacy from unresolved relationships

---

## SOP 11 — Reactivation

### Objective
Reconnect with dormant leads, clients, or partners.

### Steps
1. identify dormant segment
2. choose relevant reactivation message
3. ask about changed needs
4. offer fresh next step
5. update record by response

### Best Practices
- reactivate with relevance, not spam
- segment by why they became dormant
- use changed-needs language to reopen the conversation

---

## SOP 12 — Innovation and Journey Support

### Objective
Support brainstorming, learning, and developmental progression as part of the CRM.

### Steps
1. detect innovation or learning interest
2. assign journey fields and archetype tags
3. offer brainstorming or roadmap mode
4. capture outputs and next steps
5. update development progress

### Best Practices
- turn ideas into actionable next steps
- store useful outputs as summaries
- use journeys to deepen long-term value and loyalty

---

# PART 3 — REVIEW, GOVERNANCE, AND IMPROVEMENT

## 8. Governance Checklist

Every active record should have:
- identity data
- source
- intent
- lifecycle stage
- owner if needed
- next_best_action
- last_meaningful_touch_date

Every active client should also have:
- onboarding status
- service health status
- satisfaction status
- churn risk flag or clear status

Every support issue should have:
- issue type
- urgency
- owner
- status
- resolution notes

---

## 9. Weekly Review SOP

Review:
- new leads without next action
- qualified leads not contacted fast enough
- support issues aging too long
- onboarding friction cases
- negative sentiment signals
- repeated chatbot confusion points

### Best Practices
- weekly reviews should produce action items, not just observations
- fix process friction quickly before it compounds

---

## 10. Monthly Review SOP

Review:
- source performance
- pipeline conversion by stage
- satisfaction patterns
- retention trends
- expansion wins
- referral and testimonial rates
- score logic quality
- tag usage cleanliness

### Best Practices
- compare segments, not only totals
- redesign weak stages rather than blaming users
- retire unnecessary fields or tags when needed

---

## 11. Quarterly Improvement SOP

Review:
- full lifecycle friction map
- automation effectiveness
- human handoff quality
- dashboard usefulness
- education and brainstorming engagement
- partner development progress
- new feature or service opportunities

### Best Practices
- each quarter should end with design changes
- repeated user needs should become new offers, assets, or automations

---

## 12. Master Best Practices Summary

### Data Best Practices
- keep fields standardized
- keep tags clean
- separate records by object type
- preserve original source data
- use summaries to reduce repeated work

### Experience Best Practices
- keep entry simple
- let users choose mode and pace
- make next steps obvious
- preserve transparency and trust
- provide human help where it matters most

### Automation Best Practices
- automate repetitive logic
- do not automate empathy badly
- every automation should create useful action or useful memory
- escalate exceptions cleanly

### Service Best Practices
- set expectations clearly
- show progress visibly
- ask for feedback at meaningful times
- handle dissatisfaction quickly
- use wins to support retention and growth

### Growth Best Practices
- treat upsells as relevance, not pressure
- ask for referrals after value is felt
- turn repeated requests into new products
- use journeys to deepen loyalty

### Governance Best Practices
- review the system regularly
- remove clutter
- improve weak flows continuously
- keep dashboards operational
- keep the CRM future-ready and modular

---

## Strategic Outcome

This Master CRM Build Kit and SOP Pack is designed to make the CRM:
- practical to implement
- structured to operate
- flexible to expand
- diverse in who and what it can support
- viable across many channels and services
- detailed enough to improve continually

The final standard is this:
The CRM should become a disciplined but adaptive operating system that remembers people well, guides them intelligently, supports them usefully, improves continuously, and helps the entire ecosystem grow stronger over time.
