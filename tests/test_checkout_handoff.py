from scripts.create_checkout_handoff import build_checkout_handoff


def test_build_checkout_handoff():
    handoff = build_checkout_handoff('offer_basic', 'lead_1', '99.00')
    assert handoff['offer_code'] == 'offer_basic'
    assert handoff['lead_reference'] == 'lead_1'
    assert handoff['target_system'] == 'Web3AI'
    assert handoff['payload']['next_step'] == 'create_checkout'
