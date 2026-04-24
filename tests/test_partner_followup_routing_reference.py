from pathlib import Path


def test_partner_followup_routing_doc_exists_and_has_core_terms():
    path = Path('docs/automation/partner-followup-routing.md')
    text = path.read_text(encoding='utf-8')
    assert 'source_partner_id' in text
    assert 'lead_stage' in text
    assert 'service_state' in text
