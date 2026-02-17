# FaZe vs PARIVISION — Backtest

**Original Analysis:** [faze-vs-parivision.md](../faze-vs-parivision.md)
**Date:** February 16, 2026 | **Event:** PGL Cluj-Napoca 2026 — Swiss R3 (1-1 Bracket)

---

## Series Result
- **Predicted:** PARIVISION 2-1 ✅
- **Actual:** PARIVISION 2-1 ✅
- **Confidence was:** Medium — appropriate

## Veto Accuracy: 0/7 ❌
FaZe's Dust2 ban instead of Mirage caused a complete cascade failure. Every single step was wrong. However, the *maps that ended up being played* (Mirage, Ancient, Inferno) were close to our predicted set (Inferno, Dust2, Ancient) — 2 of 3 maps overlapped.

## Map-by-Map Accuracy

| Map | Predicted Winner | Predicted Score | Actual Winner | Actual Score | Result |
|-----|-----------------|-----------------|---------------|--------------|--------|
| Inferno (predicted FaZe pick) | FaZe 13-10 | Medium confidence | *Played as decider* | **PRV 13-9** | ❌ Wrong winner |
| Dust2 (predicted PRV pick) | PRV 13-8 | High confidence | *Not played* | — | N/A (banned) |
| Ancient (predicted decider) | PRV 13-11 | Low confidence | *Played as FaZe pick* | **PRV 13-11** | ✅ Correct winner AND exact score! |
| Mirage (actual PRV pick) | *Not predicted* | — | **FaZe 13-2** | — | N/A |

**Map prediction highlights:**
- Ancient was predicted PRV 13-11, actual was PRV 13-11. **Exact score match!** (though it was the decider in our model vs FaZe's pick in reality)
- Inferno predicted FaZe 13-10, actual PRV 13-9. Wrong winner, but we correctly identified it as competitive.
- The Dust2 ban made our "high confidence" PRV Dust2 win irrelevant — FaZe's veto innovation removed it entirely.

## Scenario Probability Check

| Scenario | Pre-match Prob | Mid-match Prob (after G1) | Actual |
|----------|---------------|--------------------------|--------|
| PRV 2-0 | 20% | — | ❌ |
| PRV 2-1 | 35% + 10% = 45% | 20% | ✅ |
| FaZe 2-1 | 20% | 30% | ❌ |
| FaZe 2-0 | 15% | 50% | ❌ |

PRV 2-1 was our most likely single outcome (35%), correct again. But after Game 1, we dropped it to 20% — the live adjustment was wrong. PARIVISION's mental resilience was massively underestimated.

## Market Call Assessment

| Market | Our Call | Market Price | Actual | Verdict |
|--------|----------|-------------|--------|---------|
| **PRV ML** | Slight lean at 60.5% (we said 65%) | 1.65 | ✅ PRV won | **Correct direction** (below value threshold though) |
| **Map 1 FaZe** | STRONG VALUE at 37% (we said 55%) | 2.70 | ✅ FaZe won Game 1 | **Correct call** — though wrong map (Mirage not Inferno) |
| **Map 2 PRV** | STRONG VALUE at 55% (we said 75%) | 1.82 | ✅ PRV won Game 2 | **Correct call** — though wrong map (Ancient not Dust2) |
| **Over 2.5 maps** | Value at 46% (we said 55%) | 2.17 | ✅ Went to 3 maps | **Correct call** |
| **FaZe +1.5** | No specific call (67.5%) | 1.48 | ✅ FaZe won 1 map | Market was right |

**Market Calls: 4/4 actionable calls correct!** (ML was below threshold so not counted as actionable.)

## Key Lessons

**1. Veto prediction is the weakest link**
We went 0/7 on veto but still got the series result right (PRV 2-1) and 4/4 market calls. This confirms that veto prediction is inherently unreliable because teams adapt to specific opponents in ways that are hard to model. Focus less on predicting exact veto and more on understanding which maps *could* be played and the range of outcomes.

**2. FaZe's CT-side Ancient is a systemic weakness**
FaZe's CT-side Ancient collapsed in THREE separate maps at PGL Cluj:
- vs Heroic: Won but CT side was only competitive (13-9 total)
- vs Falcons: 4-13 blowout
- vs PARIVISION: Led 9-3 T-side, then went 2-10 on CT

This isn't variance — it's a pattern. FaZe's Ancient CT setups are being read and exploited. When FaZe starts T-side Ancient and builds a big lead, they still lose because their CT side can't hold. **Lesson: Look for systemic side-specific weaknesses, not just overall map WR.**

**3. 13-2 doesn't predict the next map**
FaZe won Game 1 by 13-2 — one of the most dominant results possible. Our mid-match update gave FaZe 80% to win the series. PARIVISION then won the next 2 maps. This is the same lesson as NAVI vs Aurora: **mental reset is the norm at the top level.** A blowout Game 1 loss does NOT carry over. If anything, it can galvanize the losing team ("nothing to lose" mentality).

**4. Permaban flexibility is a meta-level strategy**
FaZe banned Dust2 (PARIVISION's 83% map) instead of their permaban Mirage (33% WR). This was a brilliant strategic choice — they'd rather play their worst map than face PARIVISION's best. And it worked on Game 1 (13-2 on Mirage). **Lesson: When an opponent has a map with >80% WR, expect their opponent to break permabans to remove it. Build this into veto models.**

**5. The "map they've been avoiding" tells you something**
PARIVISION banned Ancient in both previous PGL Cluj matches despite having 60% WR on it. We noted this but still predicted Ancient as a viable decider. In reality, PARIVISION won Ancient 13-11 (as FaZe's pick). The lesson: a team avoiding a map doesn't mean they're bad at it — it might mean they're saving it, or they have other preferences. **Don't overinterpret avoidance as weakness.**

**6. Market value identification continues to outperform map predictions**
Two backtests in a row: 4/4+ market calls correct while map winner predictions are ~50/50 at best. The structural insight is that markets are priced on probability distributions, and our framework is good at identifying when those distributions are wrong. We're bad at point predictions but good at range predictions. **Double down on market analysis as the primary output.**

---

*Backtest completed February 16, 2026*
