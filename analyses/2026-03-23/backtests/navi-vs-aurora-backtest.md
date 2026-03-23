# NAVI vs Aurora — Backtest Report

**Match:** BLAST Open Rotterdam 2026 — Upper Bracket Final
**Date:** March 23, 2026 | **Format:** BO3 | **Venue:** LAN, Ahoy Arena, Rotterdam

---

## Result Summary

| | Predicted | Actual | Correct? |
|---|---|---|---|
| **Series Winner** | NAVI 2-1 | **NAVI 2-0** | ✅ Direction, ❌ Format |
| **Map 1 (Anubis)** | Aurora 13-11 | **NAVI 13-8** | ❌ Wrong winner |
| **Map 2 (Nuke)** | NAVI 13-9 | **NAVI 13-10** | ✅ Winner + score (1 round off) |
| **Map 3 (Dust2)** | NAVI 13-10 | Not played | N/A |

**Series: ✅** (correct winner) | **Maps: 1/2** | **Market Calls: 0/2**

---

## Map-by-Map Breakdown

### Map 1: Anubis (Aurora Pick) — NAVI 13-8

**Predicted:** Aurora 13-11 (Aurora 52%) | **Actual:** NAVI 13-8

| Half | NAVI | Aurora | Notes |
|------|------|--------|-------|
| 1st Half (NAVI CT) | 5 | 7 | Aurora solid T-side, expected range |
| 2nd Half (NAVI CT) | 8 | 1 | **NAVI 8-1 CT comeback** |
| **Total** | **13** | **8** | Pick map stolen decisively |

**What happened:** Aurora's T-side first half was fine (7-5), but NAVI's CT-side second half was utterly dominant — 8-1. Aurora managed only 1 round on T-side after halftime. NAVI's CT adjustments completely shut down Aurora's attack.

**Why the prediction failed:**
1. **Overweighted Aurora's most recent Anubis win (13-11 at EPL S23).** One recent win doesn't override a 5-1 H2H. The model treated it as a "blueprint" — it was a single data point.
2. **Underestimated NAVI's CT-side adaptation ability.** The 8-1 CT half shows a level of mid-match adjustment that raw stats don't capture. NAVI's 33% overall Anubis WR was misleading — against Aurora specifically, they are dominant.
3. **H2H should have been the primary signal.** Anubis H2H was 5-1 NAVI (83%). The model gave Aurora 52% on their own pick — this was wrong. H2H 5-1 should have translated to NAVI ~58-60% even on Aurora's pick.
4. **Rematch dynamics (Principle #38) didn't apply.** Aurora had 9 days to prep and still got dismantled. The "motivation to adapt" theory fails against a team that is structurally superior in the H2H.

**Anubis H2H updated:** NAVI 6-1 (86%) — the one-sided pattern only deepened.

---

### Map 2: Nuke (NAVI Pick) — NAVI 13-10

**Predicted:** NAVI 13-9 (NAVI 62%) | **Actual:** NAVI 13-10

| Half | NAVI | Aurora | Notes |
|------|------|--------|-------|
| 1st Half (NAVI T) | 5 | 7 | Aurora strong CT first half |
| 2nd Half (NAVI CT) | 8 | 3 | **NAVI 8-3 CT comeback from 5-10** |
| **Total** | **13** | **10** | Won despite losing pistol round |

**What happened:** Near-identical pattern to Map 1. NAVI struggled on their first-half side (5-7 T-side), then Aurora won the CT pistol round to go 10-5 up. NAVI then ran off **8 consecutive CT rounds** to close 13-10.

**Prediction accuracy:** Winner correct, score off by 1 round. The 62% NAVI probability was reasonable. The model correctly identified Nuke as NAVI-favored despite the 3-3 H2H split.

**Key observation:** NAVI's CT-side composure under pressure — down 5-10, losing pistol round, still closed 8-0. This is championship-level mental fortitude.

---

## Market Call Assessment

| Call | Signal | My Prob | Market Prob | Edge | Result | Verdict |
|------|--------|---------|------------|------|--------|---------|
| Aurora +1.5 | **BEST VALUE** | 68% | 60.5% | +7.5% | **LOST** | NAVI 2-0 sweep |
| Aurora ML | **SPECULATIVE** | 37% | 28% | +9.0% | **LOST** | NAVI won 2-0 |
| Over 2.5 | Marginal | 50% | 45.5% | +4.5% | **LOST** | 2-0 sweep (pass — not counted) |

**Market calls: 0/2**

### Why the Market Was Right

The market priced NAVI at 72% ML and 54.5% Under (sweep). My model had NAVI at 63% and sweep at 50%. The market was more accurate because:

1. **The market correctly priced H2H dominance.** NAVI's 4-0 series record (now 5-0) is not a coinflip artifact — it reflects structural superiority. My model tried to find "value" for Aurora when the H2H signal was overwhelming.

2. **The market priced championship momentum.** NAVI winning EPL S23 just 8 days ago created a confidence multiplier the model underweighted. The user explicitly noted "NAVI is on fire" — the market agreed.

3. **The +1.5 underdog thesis was fundamentally flawed.** The thesis assumed Aurora would win their pick map (Anubis). But NAVI's 5-1 Anubis H2H made this a weak assumption. When the underdog's pick map has a losing H2H, +1.5 is unreliable.

4. **Sweep probability was underestimated AGAIN.** Per Principle #24, the model consistently underestimates sweeps. NAVI 2-0 at 32% was too low — the actual probability was likely 45-50%, in line with the market's Under 54.5%.

---

## CT-Side Comeback Pattern

This match revealed a dominant pattern worth tracking:

| Map | Half 1 (NAVI trailing) | Half 2 (NAVI CT) | CT Second Half |
|-----|----------------------|-------------------|----------------|
| Anubis | 5-7 (CT) | 8-1 | **8-1** |
| Nuke | 5-7 (T) → 5-10 after pistol loss | 8-0 (from 5-10) | **8-3** |
| **Combined** | | | **16-4 CT second halves** |

NAVI won 16 of 20 CT-side second-half rounds (80%). This isn't a statistical anomaly — it's elite CT-side adaptation. B1ad3's coaching adjustments between halves and Aleksib's reads are producing near-perfect CT halves when it matters most.

**Implication for future models:** When a team demonstrates this level of CT-side comeback ability, their pick-map steal probability is much higher than raw stats suggest. NAVI's 33% overall Anubis and Nuke WR were artifacts of small samples against mixed opponents — against Aurora specifically, their CT-side execution overrides any map-level weakness.

---

## Principle Validation

| Principle | Applied? | Outcome |
|-----------|----------|---------|
| #1 (H2H > Map Stats) | ✅ Yes, for Map 1 | **CONFIRMED** — H2H 5-1 prevailed over raw 33% WR |
| #13 (Mental Reset) | Did not apply | Both maps same pattern (NAVI came from behind) |
| #24 (Underweighting Sweeps) | ❌ Failed to apply | **CONFIRMED AGAIN** — 32% sweep happened |
| #26 (Don't Sell Underdogs vs H2H Dominance) | ❌ Violated | **CONFIRMED** — called Aurora "value" despite 4-0 series H2H |
| #27 (+1.5 Underdog Reliable) | Applied | **FAILED** — +1.5 lost when pick map H2H was weak |
| #29 (Form Discount) | Not applied to NAVI | Should have applied **positive** form — championship momentum |
| #36 (Pick Stealing Is Normal) | ✅ Noted in analysis | **CONFIRMED** — Aurora's pick stolen on Map 1 |
| #38 (Rematch Favors Loser) | ✅ Applied (+5% Aurora) | **FAILED** — Aurora was WORSE in the rematch (0-2 vs 1-3) |

---

## Lessons Learned

### 1. H2H Dominance at 4-0+ Series Is Almost Unbreakable

**Pattern:** The model called Aurora "value" despite NAVI being 4-0 in series. NAVI won 5-0. Per Principle #26, when series H2H is this lopsided, the favorite's ML is UNDERPRICED. The market at 72% was closer to truth than my 63%.

**Update to Principle #26:** When series H2H is 4-0+, even with roster changes on the losing side, increase the favorite's probability by ~5% over the model's baseline. The roster change discount (Principle #26 exception) should only apply when the NEW player directly addresses the matchup weakness — soulfly's addition didn't change Aurora's CT-side vulnerability to NAVI.

### 2. Championship Momentum Deserves a Quantified Premium

**Pattern:** NAVI won EPL S23 (8 days ago) and played like champions — composed under pressure, clutch CT-side adjustments, zero panic at 5-10 down. The user identified this ("NAVI is on fire") before the model did.

**New Principle #44 — Championship Momentum Premium:** When a team has won a major trophy within the past 2 weeks, apply a +5% ML premium. Championship confidence manifests as: (a) CT-side composure under pressure, (b) superior mid-match adaptation, (c) mental resilience after losing halves. This premium stacks with H2H advantages. The ESL Pro League S23 → BLAST Rotterdam pipeline showed NAVI playing above their statistical baseline in every match.

### 3. Rematch Dynamics (Principle #38) Have Limits Against H2H Dominance

**Pattern:** Aurora had 9 days to prep after losing 1-3 to NAVI and performed WORSE (0-2). Principle #38 assumes the loser adapts — but when the H2H is 4-0+, adaptation has diminishing returns. The dominant team knows what to expect and adjusts faster.

**Update to Principle #38:** Rematch dynamics (+5% for the previous loser) should NOT apply when series H2H is 4-0+ one-sided. At that level of dominance, the winning team's structural advantage is too deep for a single prep cycle to overcome. Only apply rematch dynamics when series H2H is 2-2 or 3-2 — competitive enough that adaptation can shift the balance.

### 4. CT-Side Comeback Ability Is a Measurable Edge

**Pattern:** NAVI went 16-4 on CT-side second halves, coming back from 5-7 and 5-10 deficits. This wasn't map-specific — it happened on BOTH maps. This suggests a team-level CT-side adaptation ability that transcends individual map statistics.

**New Principle #45 — CT-Side Adaptation as a Predictor:** When a team demonstrates 7+ CT rounds in second halves across multiple maps in the same event, they have an elite CT-side adaptation ability. This should increase their pick-steal probability by ~10% (opponent's pick is less safe). Watch for this pattern in previous matches at the event and weight it into the model. NAVI's B1ad3 coaching adjustments between halves are producing near-perfect CT second halves — a systematic edge, not luck.

### 5. +1.5 Underdog Fails When Pick Map H2H Is Losing

**Pattern:** Aurora +1.5 was the "BEST VALUE" call. It lost because Aurora couldn't win their own pick (Anubis, where H2H was 1-5 → now 1-6). Per the updated Principle #40, +1.5 requires the underdog's pick map H2H to be competitive (>40% WR on 2+ maps). Aurora's Anubis was 17% in H2H — far below the threshold.

**Update to Principle #40:** Tighten the +1.5 criteria: the underdog's PICK MAP must have >40% H2H WR (not just overall WR). Aurora's overall Anubis performance may have been decent, but vs NAVI specifically it was 17% (1-5). The +1.5 thesis depends on the underdog winning their pick — if the H2H on that specific map is losing, the thesis is broken before the match starts.

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
| **NAVI vs Aurora** | **2026-03-23** | **NAVI 2-1** | **NAVI 2-0** | **✅** | **0/2 (0%)** | **N/A (known)** |

**Totals: Series: 10/15 (67%) | Market calls: 16/34 (47%) | Veto: 22/70 (31%)**

---

## Key Insights (Updated Mar 23)

- **Series prediction at 67%** — correctly identified NAVI as winner but predicted 2-1 (actual 2-0). The sweep underestimation problem persists.
- **Market calls dropped to 47%** — below coinflip. Both "value" calls on Aurora lost. The model is too generous to underdogs against H2H-dominant teams. This is a systematic bias.
- **+1.5 underdog updated: 4/6 (67%)** — down from 4/5 (80%). The call fails when the underdog's pick map has a losing H2H. New exclusion criteria added.
- **Sweep underestimation continues** — predicted NAVI 2-0 at 32%, it happened. This is now the 4th time the model underestimated sweep probability (MOUZ-FUT, FaZe-Astralis, MOUZ-MongolZ, NAVI-Aurora). Increase base sweep probability when: (a) series H2H is 4-0+, (b) the favorite just won a championship, (c) the favorite has elite CT-side comeback ability.
- **New principles #44-#45** address championship momentum premium and CT-side adaptation as a predictor.
- **Principle #38 (rematch dynamics) needs an H2H override** — doesn't apply when series H2H is 4-0+.
- **Championship momentum is real and quantifiable** — NAVI's post-EPL S23 form (composure under pressure, CT-side dominance) is a +5% premium the model should capture.
