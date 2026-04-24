from pathlib import Path


def test_crm_event_model_doc_exists_and_has_core_events():
    path = Path('docs/automation/crm-event-model.md')
    text = path.read_text(encoding='utf-8')
    assert 'lead.created' in text
    assert 'lead.qualified' in text
    assert 'service.activated' in text
