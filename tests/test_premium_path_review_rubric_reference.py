from pathlib import Path


def test_premium_path_review_rubric_exists_and_has_core_terms():
    path = Path('docs/quality/premium-path-review-rubric.md')
    text = path.read_text(encoding='utf-8')
    assert 'premium offer clarity' in text
    assert 'routing quality' in text
    assert 'public trust impact' in text
