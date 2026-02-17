# MOUZ vs Vitality — Backtest

**Original Analysis:** [mouz-vs-vitality.md](../mouz-vs-vitality.md)
**Date:** February 16, 2026 | **Event:** PGL Cluj-Napoca 2026 — Swiss R3 (2-0 Bracket)

---

## Final Result: Vitality 2-0 MOUZ ✅ (Winner correct, scoreline off)

## Actual Veto
1. VIT ban Ancient ✅ (predicted correctly)
2. MOUZ ban Anubis ❌ (predicted Dust2)
3. VIT pick Dust2 ❌ (predicted Nuke — VIT picked their 100% map instead)
4. MOUZ pick Inferno ✅ (predicted correctly)
5. MOUZ ban Nuke ❌ (predicted Anubis)
6. VIT ban Mirage ✅ (predicted correctly)
7. Decider: Overpass ✅ (predicted correctly)

**Veto Score: 4/7**

## Actual Maps vs Prediction

| Map | Predicted | Actual | Score | Halves | Correct? |
|-----|-----------|--------|-------|--------|----------|
| Map 1 | Inferno (MOUZ pick) → MOUZ 13-11 | Dust2 (VIT pick) → VIT 13-5 | 5-13 | MOUZ CT 5-7, T 0-6 | ❌ (wrong map + wrong winner) |
| Map 2 | Nuke (VIT pick) → VIT 13-7 | Inferno (MOUZ pick) → VIT 13-8 | 8-13 | MOUZ CT 3-9, T 5-4 | ❌ (right map wrong slot, wrong winner) |
| Map 3 | Overpass (decider) → VIT 13-11 | Not played (2-0) | — | — | N/A |

## Key Veto Surprise: MOUZ Didn't Ban Dust2

The biggest miss: we flagged Dust2 as MOUZ's "must-ban" (VIT 100% WR, H2H 7-1). Instead, MOUZ banned Anubis first and let Dust2 through, where VIT picked it and won 13-5. MOUZ got 0 T rounds in the second half.

**Why did MOUZ not ban Dust2?** Possible reasons:
- MOUZ may have prepared a new Dust2 approach (it didn't work — 0 T rounds)
- They feared Anubis more (VIT 100%, 3-0, and MOUZ had 0 maps played)
- Overconfidence after beating NAVI 2-0

## Series Prediction Assessment

| Prediction | Actual | Correct? |
|-----------|--------|----------|
| **Winner: Vitality** | **Vitality** | ✅ |
| **Scoreline: 2-1** | **2-0** | ❌ |
| VIT probability: 70% | VIT won | ✅ (within range) |
| MOUZ wins Inferno | VIT won Inferno 13-8 | ❌ |
| VIT wins Map 2 (Nuke) | VIT won Map 1 (Dust2) | Partial — right team dominance, wrong map |
| Overpass decider | Not played | ❌ |

## Market Call Assessment

| Market | Our Call | Polymarket | Actual | Correct? |
|--------|---------|------------|--------|----------|
| **VIT ML (68.5%)** | No Value (fairly priced at 70%) | 68.5% | ✅ VIT won | ✅ Correct — ML was fairly priced |
| **Map 1 MOUZ (36%)** | STRONG VALUE at 52% | 36% | ❌ VIT won 13-5 | ❌ Wrong — but map was Dust2 not Inferno |
| **Map 2 VIT (60%)** | STRONG VALUE at 80% | 60% | ✅ VIT won 13-8 | ✅ Correct — VIT dominated their opponent's pick |
| **Under 2.5 (54%)** | No edge (50/50) | 54% | ✅ Under hit (2-0) | ❌ Missed — should have backed Under |
| **MOUZ +1.5 (61.5%)** | No Value | 61.5% | ❌ VIT 2-0 | — No position taken |

**Market Calls: 2/4** (ML correct, Map 2 VIT correct; Map 1 MOUZ wrong, Under missed)

## Lessons Learned

**1. Don't assume permabans are permanent (Principle #18 confirmed again):**
MOUZ didn't ban Dust2 despite 7-1 H2H disadvantage and our "must-ban" label. This is the third time at PGL Cluj we've seen teams break expected bans (FaZe broke Dust2 permaban vs PRV, NAVI broke theirs vs Aurora). The veto is more dynamic than our model assumes.

**2. VIT's Inferno is not a vulnerability:**
We flagged VIT's Inferno loss to G2 (8-13) as a "crack in the armor" and predicted MOUZ would win it 13-11. VIT won 13-8 instead, getting 9 CT rounds. The G2 loss was an outlier, not a trend — VIT's 75% Inferno WR and 7-4 H2H held true.

**3. MOUZ's CT-side collapsed on both maps:**
- Dust2: MOUZ CT 5-7 (then 0 T rounds)
- Inferno: MOUZ CT 3-9

MOUZ got only 8 combined CT rounds across 2 maps. Their CT-side is a systemic weakness that VIT exploited. Similar to FaZe's CT Ancient collapse — look for side-specific weaknesses (Principle #17).

**4. The 2-0 sweep scenario was underweighted:**
We gave VIT 2-0 a 35% probability. Market had Under 2.5 at 54%. The market was closer to reality. When VIT plays their pick (Dust2 100%) and the opponent picks a map where VIT has H2H advantage (Inferno 7-4), a sweep is more likely than 35%.

**5. ZywOo's dominance makes VIT's floor very high:**
At 1.40 rating, ZywOo ensures VIT almost never loses badly. Even on maps where MOUZ should be competitive (Inferno), ZywOo's presence elevates the team's floor. Against a ZywOo-level player, normal map pool analysis needs a "superstar discount" — reduce the underdog's chances by 5-10%.

---

*Backtest completed February 17, 2026*
