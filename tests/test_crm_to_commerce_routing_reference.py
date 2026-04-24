from pathlib import Path


def test_crm_to_commerce_routing_doc_exists_and_has_core_terms():
    path = Path('docs/automation/crm-to-commerce-routing.md')
    text = path.read_text(encoding='utf-8')
    assert 'premium lead' in text
    assert 'checkout' in text
    assert 'commerce' in text
