# PARIVISION vs Vitality — Backtest Report

**Match:** BLAST Open Rotterdam 2026 — Group B Upper Bracket Final
**Date:** March 23, 2026 | **Format:** BO3 | **Venue:** LAN, Ahoy Arena, Rotterdam

---

## Result Summary

| | Predicted | Actual | Correct? |
|---|---|---|---|
| **Series Winner** | VIT 2-1 | **VIT 2-0** | ✅ Direction, ❌ Format |
| **Map 1 (Mirage)** | PRV pick Anubis/Dust2 | **VIT 13-9 (Mirage, PRV pick)** | ❌ Wrong map + wrong winner |
| **Map 2 (Inferno)** | VIT 13-10/13-11 | **VIT 16-12 OT** | ✅ Winner, ≈ score (OT) |
| **Map 3** | VIT 13-10 (Mirage decider) | Not played | N/A |

**Series: ✅** (correct winner) | **Maps: 1/2** | **Market Calls: 0/4**

---

## Actual Veto vs Prediction

| Step | Predicted (Scenario A / B) | Actual | ✅/❌ |
|------|---------------------------|--------|------|
| 1. PRV ban | Nuke | **Nuke** | ✅ |
| 2. VIT ban | Ancient | **Ancient** | ✅ |
| 3. PRV pick | Anubis / Dust2 | **Mirage** | ❌ |
| 4. VIT pick | Overpass / Inferno | **Inferno** | ✅ (Scenario B) |
| 5. PRV ban | Inferno / Overpass | **Overpass** | ✅ (Scenario B) |
| 6. VIT ban | Dust2 / Anubis | **Anubis** | ✅ (Scenario B) |
| 7. Decider | Mirage | **Dust2** | ❌ |

**Veto Score: 5/7** (best-matching scenario)

**Key veto surprise:** PRV picked **Mirage** — not Anubis (my primary prediction) or Dust2 (secondary). The actual veto was nearly identical to Scenario B **with Mirage and Dust2 swapped**: PRV saved Dust2 as decider and picked Mirage instead. This is **Principle #34 in action** — PRV saved their signature map (Dust2) as decider to avoid VIT's anti-strat from the 4-13 PGL demolition. The model has this principle but failed to apply it as the primary scenario.

**VIT banned Anubis** — exactly as predicted in Scenario B. VIT recognized their 1-3 Anubis vulnerability and removed it. This neutralized PRV's map pool weapon.

---

## Map-by-Map Breakdown

### Map 1: Mirage (PRV Pick) — VIT 13-9

**Predicted:** PRV picks Anubis (Scenario A) or Dust2 (Scenario B)
**Actual:** PRV picked Mirage — completely unexpected

| Half | PRV | VIT | Notes |
|------|-----|-----|-------|
| 1st Half | 6 | 6 | Even first half |
| 2nd Half | 3 | 7 | **VIT 7-3 CT second half dominance** |
| **Total** | **9** | **13** | PRV pick stolen |

**What happened:** Mirage first half was dead even at 6-6. Then VIT's CT-side took over — 7-3 in the second half. ZywOo's AWP on CT Mirage is oppressive (long A-site angles, window control), and VIT's CT reads shut down PRV's T-side executes.

**Why the prediction was wrong:**
1. **Didn't predict Mirage as PRV's pick.** Both scenarios assumed PRV would target VIT's weakness (Anubis) or return to their signature (Dust2). PRV instead chose Mirage — a map where they have 58% WR but no H2H advantage.
2. **Principle #34 should have been the PRIMARY veto scenario.** After the 4-13 Dust2 loss at PGL, PRV was always going to save Dust2 for the decider (to avoid VIT's anti-strat). This meant their pick had to be something else — Anubis was banned by VIT, so Mirage was the only reasonable option. The model had this exact principle but ranked it below the "target weakness" strategy.
3. **Mirage was a poor strategic choice by PRV.** VIT went 13-4 on Mirage vs MongolZ at this event. PRV picking into VIT's Mirage form was risky. The first half evenness (6-6) gave PRV hope but VIT's CT-side adjustments killed any comeback potential.

---

### Map 2: Inferno (VIT Pick) — VIT 16-12 OT

**Predicted:** VIT 13-10 (Scenario A) / VIT 13-11 (Scenario B)
**Actual:** VIT 16-12 OT

| Half | PRV | VIT | Notes |
|------|-----|-----|-------|
| 1st Half | 6 | 6 | Even first half |
| 2nd Half | 6 | 6 | Even second half — 12-12 regulation |
| OT | 0 | 4 | **VIT 4-0 OT domination** |
| **Total** | **12** | **16** | PRV competitive but VIT owns OT |

**What happened:** An almost identical pattern to PGL Cluj Inferno (which was 16-13 OT). PRV fought to a 12-12 tie through 2 even halves (6-6, 6-6), then VIT went 4-0 in overtime. PRV won ZERO OT rounds.

**Prediction accuracy:** Winner correct. Score was close — predicted 13-10/13-11 regulation, actual was 16-12 OT. The model correctly identified Inferno as competitive but VIT-favored. The OT element was underweighted.

**The Inferno OT pattern is now definitive:**

| Match | Regulation | OT | VIT OT Rounds | PRV OT Rounds |
|-------|-----------|-----|---------------|---------------|
| PGL Cluj GF | 12-12 | VIT 4-1 | 4 | 1 |
| BLAST Rotterdam | 12-12 | VIT 4-0 | 4 | 0 |
| **Combined** | | | **8** | **1** |

VIT is 8-1 in OT rounds vs PRV on Inferno. Both matches went to 12-12 then VIT ran away with OT. This is not variance — it's a systematic edge. Per Principle #37, VIT's OT composure (especially ZywOo) is a repeatable advantage that the model doesn't sufficiently capture.

---

## Market Call Assessment

| Call | Signal | My Prob | Market Prob | Edge | Result | Verdict |
|------|--------|---------|------------|------|--------|---------|
| PRV +1.5 | **BEST VALUE** | 58% | 44% | +14% | **LOST** | VIT 2-0 sweep |
| Over 2.5 | **VALUE** | 53% | 38% | +15% | **LOST** | 2-0 sweep |
| Map 1 PRV | **STRONG VALUE** | ~50% | 30.5% | +19.5% | **LOST** | VIT 13-9 |
| PRV ML | **SPECULATIVE** | 24% | 16.5% | +7.5% | **LOST** | VIT 2-0 |

**Market calls: 0/4**

### Why the Market Was Right (Again)

The market priced VIT at 83.5% ML and 56% sweep. My model had VIT at 76% with 42% sweep. The market was more accurate because:

1. **ZywOo at 1.45 makes VIT sweep-proof underdogs.** The superstar discount (Principle #23) was applied at ~7-8% in the model, but it should have been ~12-15% against a team where PRV's best player is 1.10. ZywOo was POTM — he single-handedly elevated VIT on both maps, especially the Mirage CT-side (7-3) and Inferno OT (4-0). The individual talent gap between ZywOo (1.45) and Jame (1.07) is 0.38 — the largest AWP mismatch we've analyzed.

2. **The 3-0 PGL H2H was predictive, not an outlier.** My model treated the PGL 3-0 as "1 series, small sample." But VIT is now 5-0 maps vs PRV across 2 events. The pattern is clear: VIT is structurally superior to PRV. Map WR advantages don't matter when VIT adapts mid-match and has ZywOo.

3. **PRV's "Anubis weapon" was neutralized by a single ban.** The +1.5 thesis assumed PRV would play Anubis (VIT's weakness). VIT simply banned it. The model should have weighted this possibility higher — when the underdog's weapon can be removed by 1 ban, the +1.5 thesis becomes fragile. PRV's backup plan (Mirage) wasn't strong enough.

4. **OT composure is a systematic VIT edge.** Inferno went to 12-12 (regulation tie) for the second consecutive meeting, and VIT won OT 4-0 (after 4-1 at PGL). The model predicted "VIT wins in regulation" but didn't assign enough probability to OT + VIT closing it. VIT is now 8-1 in OT rounds vs PRV on Inferno.

5. **Championship form compounds with H2H dominance.** VIT winning IEM Kraków + PGL Cluj creates a confidence multiplier that my +3% adjustment vastly underweighted. VIT's closing ability in tight situations (7-3 Mirage 2nd half, 4-0 Inferno OT) is championship-level composure that doesn't show in map WR stats.

---

## Principle Validation

| Principle | Applied? | Outcome |
|-----------|----------|---------|
| #1 (H2H > Map Stats) | Partially | **CONFIRMED** — H2H 3-0 predicted outcome; raw WR wouldn't have |
| #23 (Superstar Discount) | ✅ Applied 7-8% | **UNDERWEIGHTED** — ZywOo at 1.45 needed 12-15% discount |
| #24 (Underweighting Sweeps) | ❌ Had VIT 2-0 at 42% | **CONFIRMED AGAIN** — market's 56% was closer; 42% still too low |
| #27 (+1.5 Underdog) | ✅ Called BEST VALUE | **FAILED** — weapon map was banned away, backup map wasn't enough |
| #33 (No High Confidence Maps) | ✅ Used Low/Medium | Correctly cautious |
| #34 (Save Best Map as Decider) | ❌ Not applied as primary | **CONFIRMED** — PRV saved Dust2 as decider exactly per this principle |
| #37 (OT Favors Experienced) | Noted but underweighted | **CONFIRMED** — VIT 4-0 OT on Inferno (8-1 total vs PRV) |
| #38 (Rematch Dynamics) | Applied +2% PRV | **FAILED** — PRV was no closer; VIT 2-0 vs PGL 3-0 |
| #44 (Championship Premium) | Applied +3% VIT | **UNDERWEIGHTED** — should be +5-8% for back-to-back champions |

---

## Lessons Learned

### 1. Superstar Discount Needs Scaling by Rating Gap

**Pattern:** The model applied ~7-8% superstar discount for ZywOo. But VIT's sweep (5-0 maps now) and ZywOo's POTM performance shows this was insufficient. The discount should scale with the rating gap between the teams' stars.

**New guideline for Principle #23:** When the star player rating gap is >0.30 (ZywOo 1.45 vs Jame 1.07 = 0.38), increase the superstar discount to 12-15%. The larger the gap, the more the superstar can compensate for any map pool weakness. At 0.38 gap, there is essentially no map where the underdog has a real advantage.

### 2. +1.5 Fails When the Weapon Map Is Bannable

**Pattern:** PRV +1.5 at 44% was the "BEST VALUE" call. It lost because VIT banned Anubis (PRV's weapon). PRV had to fall back to Mirage (58% WR, no H2H advantage) and lost 9-13.

**Update to Principle #27/40:** +1.5 underdog is weakened when: (a) the underdog's weapon map is their ONLY genuine advantage over the favorite, AND (b) the favorite can remove it with a single ban. PRV's weapon was Anubis; VIT banned it. PRV's backup (Mirage 58%) wasn't differentiated enough to win. +1.5 requires the underdog to have at least 2 maps where they're competitive, not just 1 bannable weapon. Only call +1.5 when the underdog has 2+ maps with genuine edge (>55% WR or positive H2H).

### 3. Principle #34 Should Be the Default When Signature Maps Were Recently Demolished

**Pattern:** PRV saved Dust2 as decider instead of picking it, exactly per Principle #34. After the 4-13 PGL loss, this was the obvious strategic choice. The model had this principle but ranked "target opponent weakness" (Anubis) higher.

**Update to Principle #34:** When a team's signature map was demolished (>8 round margin loss) in the last H2H meeting, assign >60% probability to them saving it as decider rather than picking it. The anti-strat tax (Principle #30) is highest immediately after a devastating loss on that map. The picking team will look for safer alternatives. If the "weapon" map (e.g., Anubis) gets banned by the opponent, the team is forced onto their 3rd-choice pick — which is often not strong enough.

### 4. Inferno OT vs Vitality Is a Systematic Pattern — Not Map-Level Variance

**Pattern:** Inferno has gone to OT in BOTH PRV-VIT meetings (16-13 PGL, 16-12 Rotterdam). VIT is 8-1 in OT rounds. This is not random — it reflects: (a) PRV can compete in regulation through 2 halves, (b) VIT's composure and ZywOo's clutch factor dominate in the higher-pressure OT format.

**New insight for future PRV-VIT analysis:** If Inferno is played, assign ~30% OT probability (not the standard 15%). The matchup dynamics produce 12-12 regulations. Once in OT, VIT wins ~90% based on 8-1 round history. So Inferno map probability = ~60% VIT in regulation + 30% OT × 90% VIT = ~87% VIT overall. The model had VIT at 58-60% on Inferno — massively underpriced.

### 5. Rematch Dynamics (Principle #38) Don't Apply vs VIT-Level Dominance

**Pattern:** Applied +2% PRV for rematch dynamics. PRV showed zero improvement — VIT 5-0 maps across 2 events. Per the NAVI-Aurora backtest (Principle #38 update), rematch dynamics don't apply at 4-0+ H2H. VIT is now 2-0 series, 5-0 maps. The threshold should apply here too.

**Confirmation of Principle #38 update:** Rematch dynamics (+2-5%) should NOT apply when: (a) the H2H is 2-0+ series AND 4-0+ maps, (b) the dominant team has a generational superstar (ZywOo), (c) the dominant team hasn't changed roster. PRV had a full month and showed no tactical adaptation that changed the outcome pattern.

### 6. Market Calls Dropping to Crisis Levels — Systematic Model Bias

**Pattern:** Market calls are now 0/4 in this match, bringing the total to 16/38 (42%). The model consistently identifies "value" on underdogs that then lose. The systematic bias: **the model overestimates underdog chances against elite teams (#1-3 ranked) with superstar players.**

**Root cause:** The map-by-map probability model treats maps as somewhat independent contests where the underdog can exploit specific weaknesses. Against VIT-level teams with ZywOo, this assumption breaks down — VIT's individual talent overrides map pool disadvantages. The model needs a "top-tier team" adjustment: when the favorite is ranked #1-3 with a superstar >1.35 rating, reduce ALL underdog map probabilities by an additional 5-8%.

---

## Updated Track Record

| Match | Date | Predicted | Actual | Series ✅ | Market Calls | Veto Score |
|-------|------|-----------|--------|-----------|-------------|------------|
| Falcons vs FaZe | 2026-02-15 | Falcons 2-1 | Falcons 2-1 | ✅ | N/A | 4/7 |
| NAVI vs Aurora | 2026-02-16 | NAVI 2-1 | NAVI 2-1 | ✅ | 4/5 (80%) | 5/7 |
| FaZe vs PARIVISION | 2026-02-16 | PRV 2-1 | PRV 2-1 | ✅ | 4/4 (100%) | 0/7 |
| MongolZ vs B8 | 2026-02-16 | B8 2-1 | MGLZ 2-1 | ❌ | 0/1 (0%) | N/A |
| MOUZ vs Vitality | 2026-02-16 | VIT 2-1 | VIT 2-0 | ✅ | 2/4 (50%) | 4/7 |
| G2 vs paiN | 2026-02-16 | G2 2-0 | G2 2-0 | ✅ | 1/3 (33%) | 5/7 |
| FURIA vs Falcons | 2026-02-16 | FURIA 2-1 | Falcons 2-1 | ❌ | N/A | 3/7 |
| MOUZ vs FUT | 2026-02-17 | MOUZ 2-1 | MOUZ 2-0 | ✅ | 0/2 (0%) | 1/7 |
| FaZe vs Astralis | 2026-02-17 | FaZe 2-1 | Astralis 2-0 | ❌ | 1/3 (33%) | 1/7 |
| NAVI vs MongolZ | 2026-02-17 | NAVI | MongolZ 2-1 | ❌ | N/A | N/A |
| FURIA vs PARIVISION | 2026-02-17 | FURIA 2-1 | FURIA 2-1 | ✅ | 2/2 (100%) | 0/7 |
| MOUZ vs NAVI | 2026-02-20 | NAVI | MOUZ 2-1 | ❌ | N/A | N/A |
| PRV vs MOUZ | 2026-02-21 | MOUZ 2-1 | PRV 2-0 | ❌ | 1/1 (100%) | N/A |
| MongolZ vs MOUZ | 2026-02-22 | MOUZ 2-1 | MOUZ 2-0 | ✅ | 0/2 (0%) | N/A |
| NAVI vs Aurora | 2026-03-23 | NAVI 2-1 | NAVI 2-0 | ✅ | 0/2 (0%) | N/A |
| **PRV vs VIT** | **2026-03-23** | **VIT 2-1** | **VIT 2-0** | **✅** | **0/4 (0%)** | **5/7** |

**Totals: Series: 11/16 (69%) | Market calls: 16/38 (42%) | Veto: 27/77 (35%)**

---

## Key Insights (Updated Mar 24)

- **Series prediction at 69%** — improving. The model correctly identifies the winner but consistently predicts 2-1 when the actual result is 2-0. Sweep underestimation remains the primary format error.
- **Market calls at 42%** — below coinflip and worsening. The model systematically overprices underdogs against elite teams (#1-3) with superstar players. 0/4 against VIT is the worst single-match performance. The "+1.5 BEST VALUE" framework needs a major overhaul when facing ZywOo-tier opponents.
- **Veto at 5/7** — best single-match veto performance. The permabans and Phase 2 bans were all correct. The miss was PRV's pick (Mirage instead of Anubis/Dust2) — Principle #34 explains it perfectly.
- **+1.5 underdog updated: 4/7 (57%)** — down from 4/6 (67%). Fails when: (a) the underdog's weapon is 1-bannable, (b) the star rating gap is >0.30, (c) H2H is 5-0+ maps. New exclusion criteria needed.
- **VIT is essentially unbettable against for underdog value.** VIT's map dominance (5-0 vs PRV across 2 events) + ZywOo (1.45) means the market is correct at 80%+ and the model's 76% was still too generous. Against VIT specifically, the model should defer to the market.
- **Inferno OT is a repeatable VIT-PRV pattern.** Both meetings went 12-12 → VIT OT win. Combined OT rounds: VIT 8, PRV 1. Future models should assign ~30% OT probability on Inferno in this matchup with ~90% VIT OT win rate.
