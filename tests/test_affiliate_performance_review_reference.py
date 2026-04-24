from pathlib import Path


def test_affiliate_performance_review_doc_exists_and_has_core_terms():
    path = Path('docs/automation/affiliate-performance-review.md')
    text = path.read_text(encoding='utf-8')
    assert 'partner-origin lead quality' in text
    assert 'activation' in text
    assert 'repeat value' in text
