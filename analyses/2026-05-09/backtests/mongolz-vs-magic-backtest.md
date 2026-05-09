# The MongolZ vs magic — Backtest

**Match:** PGL Astana 2026, Group/Swiss R1 (BO3 LAN, 2026-05-09)
**HLTV ID:** 2394119
**Final result:** **The MongolZ 2-0 magic** (Mirage 25-23 in **4OT**, Inferno 13-4)
**Player of the Match:** 910 (MongolZ)

---

## Predictions vs Reality

| Item | Predicted | Actual | Result |
|---|---|---|---|
| **Series winner** | MongolZ ML 48% | MongolZ won | ✓ direction (but underweight) |
| **Series score (most likely)** | MongolZ 2-1 (43%) | MongolZ 2-0 (5%) | ❌ — 5th-percentile outcome |
| Map 1 (Mirage, magic pick) live read | magic 90% (post 3-9 H1) | MongolZ 25-23 in 4OT | ❌ comprehensive miss |
| Map 2 (Inferno, MongolZ pick) | MongolZ 13-9 (~71%) | MongolZ 13-4 | ✓ direction (under-projected dominance) |
| Map 3 (Ancient decider) | Estimated MongolZ 60% | Not played | N/A |

**Series record:** 1/2 — the directional ML call was correct (we said MongolZ 48% and they won), but the score and confidence were way off. The market also missed (52.5% MongolZ).

## Veto Score

Veto was already locked when the analysis was authored (post-veto live entry), so this isn't a forward prediction. **N/A.**

## Market Calls

| Call | Position | Result | Outcome |
|---|---|---|---|
| **Over 2.5 maps @ 62%** (TOP VALUE) | YES | Series 2-0 → Under hit | ❌ |
| **magic -1.5 @ 17%** (SECONDARY) | YES | magic didn't sweep | ❌ |
| MongolZ +1.5 @ 83% (fade) | Skip / negative read | MongolZ won outright → +1.5 hit | ❌ directional miss |
| MongolZ ML @ 52.5% (slight overprice) | Skip | MongolZ won | ❌ directional miss |
| magic ML @ 47.5% (slight value) | Pass — too thin | magic lost | ✓ correctly skipped |
| Map 1 magic live @ 82% | Live YES | MongolZ won Map 1 in 4OT | ❌ |

**Explicit committed market calls: 0/2 (0%)** — both Over 2.5 and magic -1.5 lost.
**Directional reads on remaining markets:** 1/4 (25%) — generally too negative on MongolZ.

This is the **worst single-match result** of the running track record.

---

## What went catastrophically wrong

### 1. **Followed Polymarket's live overreaction instead of HLTV pre-match consensus**

- **HLTV bookmaker pre-match consensus:** MongolZ ~78% (decimal 1.28 average across 30+ books)
- **Polymarket live ML at time of analysis:** MongolZ 52.5%
- **My analysis ML:** MongolZ 48% (matched market)

The pre-match book consensus was a 25-percentile equilibrium of professional bookmakers across 5 days of pricing. Polymarket's live ML had **moved 25+ points in <30 minutes** based on a single bad first half on magic's pick map. **I treated the live swing as new information when it was actually noise/overreaction.**

The TRUE Bayesian update from a 3-9 H1 on the opponent's pick map should have been ~10-15 points off the pre-match number (78% → 60-65% MongolZ), not 25+ points. By following the market's overreaction, I compounded the error.

**Result:** I called Over 2.5 and magic -1.5 as value plays based on this distorted base rate. Both lost.

### 2. **Underweighted MongolZ's veteran chemistry response**

Per Principle #13 (mental reset is universal), I noted in the analysis that "MongolZ are veterans" and Map 1 loss likely tactical. But I still let the Map 1 H1 score (3-9) push MongolZ Map 1 win probability to ~10%. **Mental reset implies the H2 should be ~50/50 between teams** (same as any other half, conditional on similar prep). MongolZ won H2 9-3 — a perfect mirror — and then won OT 13-11. **The ~50/50 H2 prediction would have given MongolZ Map 1 a ~30-35% probability, not ~10%.**

### 3. **Map 2 dominance was foreseeable but under-projected**

I had MongolZ at 71% on Inferno (close to market 70%). Actual: 13-4. **The structural mismatch — MongolZ's 2y11m+ chemistry vs magic's <6 months — should have produced a higher Map 2 win probability and a more dominant expected score.** Inferno of all maps rewards utility coordination and CT-side chemistry, both of which favor experienced rosters. Should have been 80-85% MongolZ.

The error: applying generic "pick map ~70%" without adjusting for the specific opponent's roster age.

### 4. **The "pick map win rate" prior is too low for elite-vs-tier3 matchups**

Per Principle #36, recent backtests showed pick map win rate is closer to 55-60% (down from 70%) at top vs top matchups. **But this principle was trained on top-vs-top series.** Against a tier-3 brand-new lineup, the pick map win rate for the elite team should be **80%+**. I applied the wrong prior.

---

## What went right (sparse)

### 1. **Direction on MongolZ Map 2 (Inferno) was correct**
At least the analysis correctly called this map for MongolZ. The miss was in expected score, not direction.

### 2. **Skipped the "magic ML" fade**
The analysis correctly noted the +4.5% edge on magic ML wasn't worth taking due to spread — that turned out to be right (magic lost, so we'd have lost). Saved face on one decision.

### 3. **The pre-match HLTV consensus was always there as a check**
The data was available; I didn't use it. The lesson is procedural — always cross-check live Polymarket ML against pre-match HLTV book consensus, and weight the pre-match heavily.

---

## New principles to add

### Principle #48: Live Polymarket Overreaction — Use HLTV Pre-match as Anchor

When Polymarket's live ML diverges by **>15 percentage points** from the pre-match HLTV bookmaker consensus due to a single half-time score (or even a single map), the live market is likely **overreacting**. Use the HLTV consensus as the primary anchor and discount the live swing by ~50%.

- HLTV bookmaker consensus = multi-day equilibrium of 30+ professional sportsbooks that have priced the matchup with full information. This is a robust prior.
- Polymarket live = momentary panic/euphoria from $100K of recreational money reacting to one half/map. This is signal + noise mixed.

**Operational rule:** before posting any live analysis, compute `(HLTV_pre_match_ML × 0.7) + (Polymarket_live_ML × 0.3)` and use that as your true probability anchor.

### Principle #49: Single-Half Score Has Near-Zero Series Predictive Power

A team being down 3-9 at half on their opponent's pick map is **normal CS2 variance**. Second halves frequently mirror or invert first halves. Examples:
- MongolZ vs magic: 3-9 H1 → 9-3 H2 → win in 4OT (this match)
- Aurora vs HEROIC: 7-5 H1 (CT) → 1-8 H2 (T) → lose 8-13 (this morning)

**Rule:** Don't move the map win probability by more than **~15 percentage points** based on a single half score. The noise:signal ratio of one half (12 rounds, ~30 minutes of CT-side metagame) is too high to justify large probability swings.

### Principle #50: Pick Map Prior Scales with Opponent Quality Gap

Principle #36 (pick map win rate ~55-60% at top-vs-top level) was calibrated on top-tier matchups where opponents have similar prep capability. **For elite-vs-tier3 matchups, pick map win rate should be 80%+** for the elite team.

**Sliding scale:**
- Top-3 vs Top-10: pick map ~60%
- Top-3 vs Top-20: pick map ~70%
- Top-10 vs Top-20: pick map ~65%
- Top-10 vs Top-40+: pick map ~80%
- Top-20 vs Top-40+: pick map ~70%

Apply the appropriate prior based on the ranking gap, not a flat 60-70%.

### Principle #51: Mental Reset is Universal — Stop Conditioning on Half Scores

Across enough backtests, mental reset (Principle #13) has been confirmed at every level: favorites bouncing back, underdogs bouncing back, after blowouts, after close losses, after H1 collapses. **Stop conditioning probability updates on H1 scores at all** — treat each half as an independent ~50/50 (adjusted for side balance and pick-map ownership). The only valid live updates are based on map results (final scores), not half scores.

---

## Updated track record (after this match)

| Match | Date | Predicted | Actual | Series ✓ | Market Calls |
|---|---|---|---|---|---|
| Aurora vs HEROIC | 2026-05-09 | Aurora 2-1 | HEROIC 2-0 | ❌ | 1/2 |
| **MongolZ vs magic** | 2026-05-09 | MongolZ 2-1 (mass too low) | MongolZ 2-0 | ✓ direction (weak) | 0/2 |

**Today's contribution:** Series 1/2 (direction), Market calls 1/4 (the live HEROIC ML hit; everything else missed).

**Lessons compounding:** Today's two matches both showed the same pattern — the model was too anchored to short-term live signals (Aurora losing Map 1 → I suggested fading MongolZ on the live H1 score → both wrong). The fix is **anchoring to pre-match HLTV consensus and discounting live Polymarket swings by ~50%**, plus **opponent-quality-adjusted pick map priors**.

---

## Specific procedural changes for next analysis

1. **Always pull HLTV pre-match book odds first**, even when match is already live. Compare to current Polymarket. If divergence >15 points, anchor to HLTV.
2. **Apply Principle #50 pick-map prior** based on ranking gap, not a flat number.
3. **Don't update map probability by >15 points based on half score.** Map results only.
4. **Veteran roster (5+ players >1 year on team) gets a "chemistry premium" of ~5-10%** vs a roster where multiple players are <6 months in. Codify this.

---

*Backtest authored 2026-05-09 immediately after match conclusion. Pre-match analysis: [mongolz-vs-magic.md](../mongolz-vs-magic.md).*
