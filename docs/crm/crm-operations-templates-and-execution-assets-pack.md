# CRM Operations Templates and Execution Assets Pack

## Purpose

This pack turns the CRM architecture, build kit, and SOP framework into direct-use operating assets.

It is designed to help operators, assistants, AI systems, and future team members execute consistently across:
- website lead handling
- AI chatbot flows
- typed and voice experiences
- ManyChat
- MyClaw
- BotBuilders
- onboarding
- service delivery
- support
- satisfaction
- retention
- referrals
- reactivation
- innovation and journey support

This pack is intended to be practical, reusable, modular, and easy to extend.

---

## How To Use This Pack

Use this document in four ways:

1. **As a build reference** for CRM setup, fields, tags, pipelines, and automations.
2. **As an operator handbook** for day-to-day tasks and decision-making.
3. **As a prompt and template source** for AI, human operators, or hybrid teams.
4. **As a quality control layer** to keep execution consistent as the ecosystem expands.

---

# PART 1 — CORE OPERATIONS TABLES

## Template 1 — Master Lifecycle Table

| Lifecycle Area | Main Objective | Required Data | Main Trigger | Primary Owner | Success Signal |
|---|---|---|---|---|---|
| New Lead | Identify and route correctly | Source, intent, next action | New contact created | Intake bot / operator | Lead tagged and routed |
| Qualification | Confirm fit and urgency | Outcome, timeline, service interest | Lead engaged | AI + operator | Correct path chosen |
| Booking / Conversion | Move to decision | Offer match, booking status | Qualified lead | Sales assist bot / human | Booking or purchase completed |
| Onboarding | Create confident start | Service summary, assets, timeline | New client | Onboarding owner | Intake complete and milestone started |
| Delivery | Maintain clarity and progress | Milestones, health, notes | Service active | Delivery owner | Visible progress and low confusion |
| Support | Resolve issues quickly | Issue type, urgency, status | Support request | Support owner | Resolution confirmed |
| Satisfaction | Measure and improve experience | Satisfaction score, sentiment | Milestone or support resolution | Client success | Positive pulse or recovery action |
| Retention | Keep relationship active | Renewal signals, risk signals | Client active long enough | Client success / operator | Renewal or continued engagement |
| Advocacy | Earn testimonial/referral | Satisfaction, results, trust | Strong positive signal | Relationship owner | Testimonial, referral, or case study |
| Reactivation | Re-open dormant value | Dormant reason, new need | Inactivity threshold | CRM automation / human | Re-engagement or fresh path |

### Best Practices
- every stage needs one primary owner
- every stage needs a clear success signal
- do not let lifecycle stages exist without a trigger and follow-up action

---

## Template 2 — Field Completion Matrix

| Field Group | Minimum at Lead Stage | Minimum at Qualified Stage | Minimum at Client Stage | Review Frequency |
|---|---|---|---|---|
| Identity | Name + one contact method | Business name if available | Full business + contact profile | Quarterly cleanup |
| Source | Required | Required | Preserve original source | Monthly audit |
| Intent | Primary intent | Primary + secondary intent | Outcome and service mapping | Monthly review |
| Preference | Optional | Preferred mode/contact | Communication preferences confirmed | Quarterly review |
| Lifecycle | Stage + next action | Stage + owner + due date | Full active lifecycle fields | Weekly ops check |
| Conversation | Short summary | Structured summary | Ongoing session summaries | Weekly review |
| Satisfaction | Not required | Optional signal | Required pulse points | Monthly review |
| Growth | Not required | Initial potential | Upsell / recurring / referral status | Monthly review |

### Best Practices
- do not overfill early-stage records
- require more detail only as the relationship advances
- use audits to reduce stale or incomplete records

---

## Template 3 — Tag Governance Table

| Tag Category | Example | When Added | When Removed | Owner |
|---|---|---|---|---|
| Source | source_website | Contact enters via website | Never remove original source | CRM admin |
| Intent | intent_chatbot | User asks for AI chatbot help | Remove if intent proven wrong | Intake system |
| Stage | stage_qualified | Qualification completed | Change when stage changes | Operator / automation |
| Value | value_high | Score or strategic potential crosses threshold | Review if opportunity cools | Sales / CRM lead |
| Journey | archetype_builder | User behavior fits builder path | Update if development changes | Journey system |
| Risk | stage_at_risk | Churn or dissatisfaction signal detected | Remove after recovery and review | Client success |

### Best Practices
- each tag should have a reason to exist
- never create tags without add/remove logic
- tag bloat reduces clarity fast

---

# PART 2 — EXECUTION CHECKLISTS

## Template 4 — New Lead Intake Checklist

### Required Actions
- [ ] Create contact record
- [ ] Capture source and channel
- [ ] Identify primary intent
- [ ] Capture one reliable contact method
- [ ] Generate or write short summary
- [ ] Assign stage_new or equivalent
- [ ] Set next_best_action
- [ ] Trigger welcome or routing flow

### Optional Actions
- [ ] Capture business name
- [ ] Capture preferred interaction mode
- [ ] Assign development archetype
- [ ] Send educational resource

### Intake Quality Rules
- no lead without source
- no lead without next step
- no strong lead should wait too long for human review

---

## Template 5 — Qualification Checklist

- [ ] Confirm main goal
- [ ] Confirm urgency / timeline
- [ ] Confirm service interest
- [ ] Assess complexity
- [ ] Update score stack
- [ ] Route to booking, nurture, support, or partner path
- [ ] Write qualification summary
- [ ] Assign owner if needed

### Qualification Notes Prompt
Use this structure:
- Main need:
- Desired outcome:
- Timeline:
- Service fit:
- Risks / objections:
- Recommended next step:

---

## Template 6 — Onboarding Checklist

- [ ] Send welcome message
- [ ] Confirm purchased or selected service
- [ ] Send service summary
- [ ] Request needed assets
- [ ] Confirm communication cadence
- [ ] Confirm preferred mode: type, voice, hybrid
- [ ] Assign milestone 1
- [ ] Schedule first progress update

### Onboarding Asset Request Template
Please send or confirm the following so we can begin smoothly:
- primary contact details
- business name and website
- account access or needed credentials if applicable
- goals for this project or service
- top priority outcome
- anything you want us to avoid or be aware of

---

## Template 7 — Support Triage Checklist

- [ ] Identify issue type
- [ ] Mark urgency level
- [ ] Check if issue can be solved by FAQ or standard response
- [ ] Escalate if trust-sensitive, urgent, or repeated
- [ ] Create structured case summary
- [ ] Confirm resolution or next update time
- [ ] Trigger satisfaction follow-up

### Support Summary Format
- Issue type:
- What happened:
- Urgency:
- What has already been tried:
- Recommended next action:
- Owner:

---

## Template 8 — Recovery Checklist

- [ ] Flag recovery_needed
- [ ] Assign owner
- [ ] Write complaint summary
- [ ] Contact user with clear action path
- [ ] Confirm corrective action
- [ ] Re-check satisfaction later
- [ ] Log process lesson learned

### Best Practices
- recovery cases need speed and accountability
- generic apology language is not enough without clear action

---

# PART 3 — MESSAGE AND SCRIPT LIBRARIES

## Template 9 — Welcome Message Library

### Website Welcome
Welcome. What would you like help with today?
- Grow my business
- Add AI chatbots
- Automate operations
- Get support
- Explore the ecosystem

### Warm Guided Welcome
Welcome — I can help you find the best next step. Would you like a quick answer, a guided recommendation, or help from a person?

### Voice Welcome
Hello, thanks for reaching out. What would you most like help with today: growth, AI chatbots, automation, support, or something else?

---

## Template 10 — Qualification Prompt Library

### Simple Prompt
What result matters most to you right now?

### Business-Oriented Prompt
What are you trying to improve first: growth, customer follow-up, AI support, automation, or something broader?

### Strategy Prompt
Are you looking for a quick solution, a longer-term system, or help designing the right path first?

---

## Template 11 — Booking Message Library

### High-Intent Booking Prompt
It looks like you may be a good fit for a more direct next step. Would you like to book a strategy call, keep chatting here, or receive a summary first?

### Confirmation Message
You’re booked. We’ll send a confirmation, next steps, and any preparation details so the session is productive and easy.

### No-Show Recovery Prompt
We missed you. If you still want help, we can reschedule, continue by message, or send a quick summary so you can choose the easiest next step.

---

## Template 12 — Satisfaction Message Library

### Milestone Pulse
How is this experience feeling so far: clear and helpful, somewhat mixed, or not where it should be yet?

### Support Resolution Pulse
Did this solve the issue clearly enough, or do you still want more help on it?

### Positive Feedback Follow-Up
Glad to hear that. If you’d like, we can also suggest the best next step from here.

### Mixed Feedback Follow-Up
Thanks for that. What would have made this feel more useful, easier, or clearer?

---

## Template 13 — Referral / Testimonial Library

### Testimonial Ask
If this has been helpful, would you be open to sharing a short testimonial about your experience?

### Referral Ask
If someone in your circle could benefit from this, would you be comfortable introducing them or sharing this with them?

### Case Study Ask
You seem like a strong example of what this process can help with. Would you be open to being featured in a case study or success story?

---

## Template 14 — Reactivation Library

### Dormant Lead Reactivation
Checking in — priorities change, and sometimes timing becomes better later. Would you like a fresh recommendation, a quick update, or help choosing the next step now?

### Former Client Reactivation
Wanted to reconnect and see if there’s a new area where support, automation, or strategy would be useful for you now.

### Partner Reactivation
Wanted to revisit whether there may be a fresh opportunity to collaborate, refer, or build something useful together.

---

# PART 4 — SURVEY AND FEEDBACK ASSETS

## Template 15 — Micro-Survey Blocks

### Onboarding Survey
- Was the onboarding process clear?
- Did you know what to do next?
- What felt easiest?
- What felt confusing?

### Service Experience Survey
- How satisfied are you with progress so far?
- How clear has communication been?
- Do you feel supported in the right way?
- What could improve the experience?

### Support Survey
- Was the issue understood correctly?
- Was the response fast enough?
- Was the resolution useful?
- Do you need any more help on this?

### Completion Survey
- What was most valuable?
- What would you improve?
- Would you continue, return, or refer?

### Best Practices
- use short surveys first
- ask at milestone moments, not random moments
- connect low scores to recovery actions immediately

---

## Template 16 — Internal Satisfaction Scorecard

| Area | Score 1-5 | Notes |
|---|---|---|
| Clarity |  |  |
| Speed |  |  |
| Helpfulness |  |  |
| Trust |  |  |
| Ease of Use |  |  |
| Outcome Confidence |  |  |
| Overall Experience |  |  |

### Best Practices
- use this when operators review accounts or recovery cases
- compare internal score with user feedback when available

---

# PART 5 — DASHBOARD AND KPI ASSETS

## Template 17 — KPI Matrix

| KPI | Why It Matters | Review Frequency | Owner | Trigger Action |
|---|---|---|---|---|
| Lead-to-qualified rate | Measures intake quality | Weekly | CRM lead | Review weak sources |
| Qualified-to-booked rate | Measures conversion path | Weekly | Sales owner | Improve booking scripts |
| Onboarding completion rate | Measures early experience | Weekly | Onboarding owner | Fix friction points |
| Support resolution time | Measures service quality | Weekly | Support owner | Review delays |
| Satisfaction score | Measures relationship health | Monthly | Client success | Trigger recovery if low |
| Churn risk count | Measures retention risk | Weekly | Client success | At-risk outreach |
| Referral rate | Measures advocacy | Monthly | Relationship owner | Improve ask timing |
| Reactivation rate | Measures dormant recovery | Monthly | CRM ops | Refine reactivation flows |
| Innovation session count | Measures development engagement | Monthly | Journey owner | Expand high-interest modules |

### Best Practices
- every KPI should have an owner and action rule
- do not track metrics that never trigger decisions

---

## Template 18 — Weekly Ops Review Sheet

### Review Categories
- leads missing next actions
- qualified leads waiting too long
- support cases aging too long
- onboarding cases with friction
- satisfaction warnings
- churn risk accounts
- chatbot confusion trends
- high-value opportunities needing human touch

### Weekly Review Questions
- What got stuck?
- What repeated?
- What needs redesign?
- What needs more human attention?
- What should be automated better?

---

## Template 19 — Monthly Improvement Review Sheet

### Review Categories
- source quality
- pipeline conversion
- satisfaction patterns
- retention patterns
- upsell and cross-sell results
- referral activity
- survey insights
- tag cleanliness
- score accuracy
- archetype / journey engagement patterns

### Improvement Outputs
- fields to refine
- tags to retire or add
- scripts to improve
- SOPs to revise
- automations to add or reduce
- new offer ideas from repeated demand

---

# PART 6 — AI AND OPERATOR EXECUTION ASSETS

## Template 20 — Summary Prompt Format

When creating a handoff summary, use:
- Who they are
- Why they came
- What they want now
- What happened so far
- Risks or objections
- Best next action

### Example
- Contact is a local service business owner
- Came in from website for automation help
- Wants better follow-up and fewer delays
- Completed qualification and asked about setup options
- Concerned about time and complexity
- Best next step is a strategy call or starter package summary

---

## Template 21 — Human Handoff Packet

| Category | Required Content |
|---|---|
| Identity | Name, business, contact info |
| Source | Original source and latest channel |
| Intent | Main need and desired outcome |
| Summary | Short readable recap |
| Score | Lead, engagement, satisfaction if relevant |
| Risks | Objections, confusion, frustration, urgency |
| Recommendation | Next best action |

### Best Practices
- humans should never need to start from zero
- use the packet to reduce repeated questions and improve trust

---

## Template 22 — AI Review Prompt

Use this for internal AI-assisted record review:

Review this CRM record and provide:
1. missing critical data
2. likely lifecycle risk
3. likely next best action
4. whether human follow-up is recommended
5. whether satisfaction, churn, or upsell signals are present

### Best Practices
- use AI for structured review and suggestion
- keep final accountability with humans when stakes are high

---

## Template 23 — Operator Decision Matrix

| Situation | Primary Action | Secondary Action |
|---|---|---|
| New lead, weak info | Request key missing details | Put into early nurture |
| High-intent lead | Offer booking or direct human follow-up | Send summary |
| Mixed satisfaction | Ask clarifying question | Review by human |
| Low satisfaction | Trigger recovery workflow | Pause upsell messaging |
| Strong positive momentum | Suggest next best service | Request testimonial later |
| Dormant but previously warm | Reactivate with changed-needs prompt | Offer quick summary |

---

# PART 7 — FUTURE-READY EXTENSIONS

## Template 24 — Portal Asset Ideas

Potential future portal modules:
- dashboard home
- current goals
- recent activity
- milestone progress
- resources and learning
- support center
- brainstorming lab
- voice access panel
- preferences and settings

---

## Template 25 — Journey and Innovation Asset Ideas

Potential assets:
- idea map template
- growth path template
- learning roadmap template
- brainstorming recap template
- archetype progression tracker
- business expansion worksheet

---

## Template 26 — CRM Implementation Sequence

### Phase 1
- field setup
- tags
- lead pipeline
- summaries
- next action discipline

### Phase 2
- onboarding and support templates
- satisfaction surveys
- weekly and monthly review sheets
- dashboard basics

### Phase 3
- journey tracking
- innovation templates
- voice / hybrid execution assets
- partner / referral assets

### Phase 4
- portal modules
- deeper personalization
- advanced KPI dashboards
- lifecycle optimization loops

---

## Final Best Practices Summary

### Viability
- keep systems practical enough to operate today
- add complexity only when it improves results

### Diversity
- support many user types, paths, and relationship styles
- avoid forcing everyone into the same journey

### Flexibility
- design modules that can evolve as tools change
- keep field names, tags, and workflows portable

### Depth
- track enough detail to support quality and personalization
- avoid useless data bloat

### Continuous Improvement
- turn repeated friction into redesign priorities
- turn repeated requests into products, services, or assets
- keep the CRM alive through reviews and adaptation

---

## Strategic Outcome

This CRM Operations Templates and Execution Assets Pack gives the ecosystem a direct-use layer for implementation, management, quality control, and ongoing improvement.

It is designed to help the CRM become not just a database, but a disciplined operating environment for relationship growth, service quality, support consistency, learning, innovation, and long-term ecosystem expansion.
