from __future__ import annotations

from dataclasses import dataclass, asdict
from typing import Dict
from uuid import uuid4


@dataclass
class CheckoutHandoff:
    handoff_id: str
    offer_code: str
    lead_reference: str
    target_system: str
    payload: Dict[str, str]


def build_checkout_handoff(offer_code: str, lead_reference: str, amount_usd: str, target_system: str = "Web3AI") -> Dict[str, object]:
    handoff = CheckoutHandoff(
        handoff_id=f"handoff_{uuid4().hex}",
        offer_code=offer_code,
        lead_reference=lead_reference,
        target_system=target_system,
        payload={
            "offer_code": offer_code,
            "lead_reference": lead_reference,
            "amount_usd": amount_usd,
            "next_step": "create_checkout",
        },
    )
    return asdict(handoff)
