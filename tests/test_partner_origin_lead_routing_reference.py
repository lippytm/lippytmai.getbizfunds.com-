from pathlib import Path


def test_partner_origin_lead_routing_doc_exists_and_has_core_terms():
    path = Path('docs/automation/partner-origin-lead-routing.md')
    text = path.read_text(encoding='utf-8')
    assert 'source_partner_id' in text
    assert 'lead_stage' in text
    assert 'partner-origin' in text
