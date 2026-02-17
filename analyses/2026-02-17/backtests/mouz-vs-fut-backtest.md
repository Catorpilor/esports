# MOUZ vs FUT Esports — Backtest

**Pre-Match Analysis:** [mouz-vs-fut.md](../mouz-vs-fut.md)
**Match:** PGL Cluj-Napoca 2026, Swiss R4 (2-1 bracket, winner advances to Legends stage)
**Date:** February 17, 2026

---

## Actual Result

**MOUZ 2-0 FUT** (sweep — FUT never reached a potential Dust2 decider)

**Player of the Match:** Jimpphat (46-28 KD, 1.54 rating overall; 23-9 KD, 1.84 rating on Overpass)

---

## Actual Veto

| Step | Action | Map | Notes |
|------|--------|-----|-------|
| 1 | FUT ban | Inferno | Permaban ✅ — removes MOUZ's crutch for free |
| 2 | MOUZ ban | Anubis | Permaban ✅ |
| 3 | FUT pick | **Mirage** | FUT's 86% map — expected |
| 4 | MOUZ pick | **Overpass** | MOUZ's 80% map — expected |
| 5 | MOUZ ban | Ancient | Remove FUT's secondary ✅ |
| 6 | FUT ban | **Nuke** | FUT banned Nuke, not Dust2 |
| 7 | Decider | **Dust2** | Leftover — never played |

### Veto Prediction vs Actual

| Step | Predicted | Actual | Match? |
|------|-----------|--------|--------|
| 1 | MOUZ ban Anubis | FUT ban Inferno | ❌ (order swapped — both permabans, different sequence) |
| 2 | FUT ban Inferno | MOUZ ban Anubis | ❌ (order swapped) |
| 3 | MOUZ pick Overpass | FUT pick Mirage | ❌ (pick order swapped) |
| 4 | FUT pick Mirage | MOUZ pick Overpass | ❌ (pick order swapped) |
| 5 | MOUZ ban Ancient | MOUZ ban Ancient | ✅ |
| 6 | FUT ban Dust2 | FUT ban **Nuke** | ❌ |
| 7 | Decider: Nuke | Decider: **Dust2** | ❌ |

**Veto Score: 1/7** — The maps played (Mirage + Overpass) exactly matched our prediction, and both teams picked their expected maps. But the ban/pick ORDER was wrong (who bans first), and the critical Step 6 miss (FUT banned Nuke instead of Dust2) flipped the decider. The 4 permaban steps were all correct in substance but scored as wrong because the sequence differed.

**Adjusted Veto Assessment:** If we score by "did the right maps get played" rather than exact sequence: **Maps played correct, picks correct, decider wrong** — a more useful metric.

---

## Actual Map Scores

| Map | Pick | MOUZ | FUT | Half 1 | Half 2 | OT | Winner |
|-----|------|------|-----|--------|--------|----|--------|
| Mirage | FUT | **13** | 8 | 5-7 | 8-1 | — | MOUZ |
| Overpass | MOUZ | **16** | 14 | 3-9 | 9-3 | 4-2 | MOUZ |

---

## Map-by-Map Analysis

### Map 1: Mirage (FUT Pick) — MOUZ 13-8

**Predicted:** FUT wins 13-8 (High confidence)
**Actual:** MOUZ wins 13-8 (exact inverse scoreline!)
**Result:** ❌ Wrong winner, ironic mirrored score

This was our highest-confidence map prediction and it was completely wrong. FUT had 86% Mirage WR (6-1) — the strongest single-map advantage in the matchup — and lost decisively.

**What happened:**
- FUT led 7-5 at half (MOUZ on T side, FUT on CT). The first half was competitive with FUT holding their CT side.
- MOUZ's CT side was **devastating**: 8-1 second half. FUT's T-side attack completely collapsed.
- Jimpphat was instrumental with consistent fragging across both halves.

**Why our prediction failed:**
1. **No H2H data** — FUT's 86% Mirage was against Aurora, FURIA, Astralis. They'd never played MOUZ on Mirage. A team's overall map WR doesn't account for specific opponent matchups.
2. **MOUZ's Mirage is bipolar** — we noted this (13-7 NAVI, 13-5 FaZe vs 3-13 Spirit, 5-13 Aurora). When MOUZ shows up on Mirage, they dominate. We weighted the bad results more than the good ones.
3. **MOUZ likely anti-stratted FUT's Mirage specifically** — knowing it was a guaranteed pick, sycrone and the coaching staff had time to prepare CT setups specifically for FUT's T-side tendencies. The 8-1 CT half suggests targeted preparation.
4. **FUT's 86% WR was inflated by weaker opponents** — their wins were vs Aurora, FURIA (IEM), Astralis (twice). MOUZ is tactically more sophisticated than all of these.

**Lesson:** High map WR against mid-tier opponents doesn't translate to the same WR against top-4 teams with dedicated preparation time. An 86% WR based on 7 maps is still a small sample — and 0 of those 7 were against MOUZ.

### Map 2: Overpass (MOUZ Pick) — MOUZ 16-14 OT

**Predicted:** MOUZ wins 13-9 (Medium confidence)
**Actual:** MOUZ wins 16-14 OT
**Result:** ✅ Correct winner, much closer than predicted

**What happened:**
- FUT dominated the first half: 9-3 (FUT on CT). MOUZ's T side was ineffective.
- MOUZ mounted a historic CT comeback: **13-5 second half + OT** (9-3 regulation CT, then 4-2 OT).
- Jimpphat went supernova on CT: 23-9 KD, 1.84 rating on this single map.
- The 3-9 to 16-14 comeback is a 13-5 CT run — one of the best CT-side performances at PGL.

**What this confirms:**
- **Overpass is heavily CT-sided** — our analysis noted this but we predicted 13-9 regulation, not expecting such an extreme side split.
- **MOUZ's Overpass expertise** — their 80% WR is real. Even down 3-9, they knew how to play CT.
- **Jimpphat awakened** — we noted him at 1.00 rating (below expectations). He responded with a 1.84 rating on Overpass, the highest individual map performance of this match.

---

## Market Call Assessment

| Market Call | Prediction | Polymarket | Actual | Result |
|-------------|-----------|------------|--------|--------|
| MOUZ ML | 58% | 63.5% | MOUZ won 2-0 | No call made (below threshold) |
| FUT ML | 42% | 36.5% | FUT lost 0-2 | No call made |
| Over 2.5 maps | **BEST BET** (65% vs 47%) | 47.0% | Under (2 maps) | ❌ |
| FUT +1.5 maps | **STRONG VALUE** (80% vs 63.5%) | 63.5% | FUT lost 0-2 | ❌ |
| Map 1 MOUZ | Marginal Value (65% vs 55.5%) | 55.5% | MOUZ won 13-8 | ✅ (but conditional on Overpass being Map 1 — it wasn't) |

**Market Calls: 0/2** — Both value plays lost. The BEST BET (Over 2.5 at +18% edge) was our strongest conviction call across all Feb 17 analyses, and it missed badly.

---

## Why Our Model Failed on Market Calls

### The Core Error: Overrating FUT's Mirage

Our entire thesis rested on: "FUT wins Mirage (86%), MOUZ wins Overpass (80%), decider is a coinflip." The moment MOUZ won Mirage, both the Over 2.5 and FUT +1.5 calls collapsed.

The model treated FUT's 86% Mirage WR as near-certain (~85% probability of FUT winning Mirage). In reality:
- FUT's Mirage opponents were weaker than MOUZ
- MOUZ had preparation time knowing Mirage was guaranteed
- MOUZ's Mirage is volatile — their ceiling (13-5 FaZe, 13-7 NAVI) is excellent
- **No H2H existed** — we had zero data on how MOUZ's CT setups match against FUT's T tendencies

### Principle #24 Confirmed Again: Sweeps Are More Common Than Models Predict

We gave MOUZ 2-0 only 20% probability. The market had Under (sweep) at 53%. **The market was right.** When a top-4 team wins the underdog's signature map pick, the sweep probability skyrockets — the underdog's confidence is broken and the favorite takes momentum into their own pick.

### New Insight: Anti-Strat Effect on "Guaranteed" Picks

When a map pick is predictable (FUT picks Mirage 100% of the time), the opponent gets maximum preparation time for that specific map. This creates a "preparation tax" on the most predictable picks. The more predictable the pick, the higher the anti-strat probability.

---

## Lessons Learned

### Lesson 1: Map WR Against Weaker Opponents Is Misleading at the Top Level

FUT's 86% Mirage WR was built against Aurora, FURIA, Astralis — not against a top-4 team with a world-class coaching staff. When evaluating map WR for value calls:
- Check the **quality of opponents** in the sample, not just the WR percentage
- A team with 60% WR against top-10 opponents is more reliable than 86% against a mixed field
- Discount map WR by ~10-15% when the opponent is significantly better than the average of the sample

### Lesson 2: Predictable Picks Get Anti-Stratted

FUT's Mirage was picked in 60%+ of their matches — opponents see it coming. MOUZ had days of preparation specifically for FUT's Mirage. The 8-1 CT half wasn't luck — it was targeted preparation. When modeling "guaranteed" picks:
- Apply a ~5-10% "anti-strat discount" when the pick is highly predictable
- The discount is larger when the opponent has a strong coaching staff (sycrone)

### Lesson 3: Volatile Maps Can Go Either Way — Don't Bet on the Ceiling

MOUZ's Mirage was 40% (2-3) — bipolar with great wins and terrible losses. We weighted the losses more, but MOUZ's Mirage ceiling was 13-5 (FaZe) and 13-7 (NAVI). When a team's map results are bipolar, the median outcome is unreliable — avoid building value calls around "which version shows up."

### Lesson 4 (Confirmed): Principle #24 — Increase Sweep Probability

MOUZ 2-0 at only 20% was too low. The market (53% Under) was more accurate. When recalibrating:
- If favorite wins opponent's pick: sweep probability should be 55-60%, not the pre-match 20-25%
- Pre-match sweep probability for a top-4 team vs a #14 underdog should start at ~30-35%, not 20%

---

## Scorecard

| Category | Predicted | Actual | Assessment |
|----------|-----------|--------|------------|
| Series Winner | MOUZ 2-1 (58%) | MOUZ 2-0 | ✅ Winner, ❌ scoreline |
| Map 1 (Mirage) | FUT wins 13-8 | MOUZ wins 13-8 | ❌ (exact inverse!) |
| Map 2 (Overpass) | MOUZ wins 13-9 | MOUZ wins 16-14 OT | ✅ Winner, close score wrong |
| Map 3 (Nuke) | MOUZ wins 13-11 | Not played (Dust2 was decider) | N/A |
| Over 2.5 BEST BET | 65% (vs 47% market) | Under — 2 maps | ❌ |
| FUT +1.5 VALUE | 80% (vs 63.5% market) | FUT 0-2 | ❌ |
| Veto Accuracy | — | 1/7 (maps correct, order wrong) | Poor |

**Series: ✅ | Market Calls: 0/2 | Veto: 1/7**

---

*Backtest generated from HLTV.org match data (ID: 2389971) on February 17, 2026*
