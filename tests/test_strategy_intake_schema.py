import json
from pathlib import Path


def test_strategy_intake_schema_has_routing_rules():
    path = Path('site/forms/strategy-intake.json')
    data = json.loads(path.read_text(encoding='utf-8'))
    assert data['form_id'] == 'strategy_intake_v1'
    assert data['routing']['default_path'] == 'strategy_review'
    assert len(data['routing']['rules']) >= 1


def test_strategy_intake_schema_has_required_fields():
    path = Path('site/forms/strategy-intake.json')
    data = json.loads(path.read_text(encoding='utf-8'))
    field_names = {field['name'] for field in data['fields']}
    assert 'full_name' in field_names
    assert 'email' in field_names
    assert 'primary_goal' in field_names
