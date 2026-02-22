# The MongolZ vs MOUZ — Backtest

**Pre-Match Analysis:** [mongolz-vs-mouz.md](../mongolz-vs-mouz.md)
**Match:** PGL Cluj-Napoca 2026, 3rd Place Match
**Date:** February 22, 2026

---

## Actual Result

**MOUZ 2-0 The MongolZ** — MOUZ takes 3rd place.

---

## Actual Veto

| Step | Action | Map | Notes |
|------|--------|-----|-------|
| 1 | MongolZ ban | Anubis | Permaban |
| 2 | MOUZ ban | Ancient | Permaban |
| 3 | MongolZ pick | **Mirage** | Only H2H win vs MOUZ (16-13) |
| 4 | MOUZ pick | **Inferno** | MOUZ 1-0 H2H |
| 5 | MOUZ ban | Dust2 | Remove MongolZ option |
| 6 | MongolZ ban | Overpass | Standard |
| 7 | Decider | **Nuke** | Not played |

Veto was known pre-analysis (live match). No veto prediction to score.

---

## Actual Map Scores

| Map | Pick | MOUZ | MongolZ | Half 1 | Half 2 | Winner |
|-----|------|------|---------|--------|--------|--------|
| Mirage | MongolZ | **13** | 6 | 7-5 | 6-1 | MOUZ |
| Inferno | MOUZ | **13** | 10 | 8-4 | 5-6 | MOUZ |
| Nuke | Decider | — | — | — | — | Not played |

---

## Map-by-Map Analysis

### Map 1: Mirage (MongolZ Pick) — MOUZ 13-6

**Predicted:** MongolZ 13-11 (Low confidence)
**Actual:** MOUZ 13-6
**Result:** ❌ Wrong winner, not even close

This was our worst call. We predicted MongolZ would win their Mirage pick based on:
- H2H split 1-1 on Mirage
- MongolZ beat NAVI 13-11 and VIT 13-10 on Mirage at PGL
- MongolZ as the picking team with momentum

Instead, MOUZ dominated — 7-5 CT half then an incredible 6-1 T side to close 13-6.

**Why the prediction failed:**
1. **MOUZ's Mirage is elite too** — they beat NAVI 13-7 and FUT 13-8 on Mirage at PGL. We underweighted their Mirage form while overweighting MongolZ's.
2. **The "mental fragility" thesis was wrong** — we assumed MOUZ would be shaken after the PRV 0-2 loss. Instead, they came out with intensity. Per Principle #13 (mental reset is the norm), the PRV loss didn't carry over. We applied #13 to MongolZ (correctly, re: NAVI reverse sweep) but failed to apply it to MOUZ.
3. **3rd place match motivation** — MOUZ may have been motivated to prove themselves after the PRV upset. The "nothing to lose" advantage we assigned to MongolZ was less relevant in a 3rd place match where both teams want to end on a high.
4. **H2H matters** — MOUZ was 7-1 overall H2H. Even on Mirage (1-1 split), the overall H2H dominance may have reflected a deeper quality gap that Mirage-specific stats didn't capture.

### Map 2: Inferno (MOUZ Pick) — MOUZ 13-10

**Predicted:** MOUZ 13-9 (Medium confidence)
**Actual:** MOUZ 13-10
**Result:** ✅ Correct winner, close on margin

MOUZ led 8-4 at half (strong CT side), then MongolZ fought back 6-5 on their CT side but couldn't complete the comeback. MOUZ closed it 13-10.

This map played out almost exactly as predicted — MOUZ's Inferno quality showed through, with MongolZ competing respectably but not enough to steal the pick.

---

## Market Call Assessment

| Market Call | Prediction | Polymarket | Actual | Result |
|-------------|-----------|------------|--------|--------|
| MOUZ ML | 55% (overpriced at 64.5%) | 64.5% | MOUZ won 2-0 | ❌ (market was right, we undervalued MOUZ) |
| MongolZ ML | **VALUE** (45% vs 35.5%) | 35.5% | MongolZ lost 0-2 | ❌ |
| MongolZ +1.5 | **BEST BET** (70% vs 65%) | 65% | MongolZ won 0 maps | ❌ |
| Map 1 MongolZ | Slight value (52% vs 46.5%) | 46.5% | MOUZ won 13-6 | ❌ |
| Over 2.5 | Slight value (55% vs 50%) | 50% | 2 maps (Under) | ❌ (no formal call) |

**Market Calls: 0/2** — Both formal calls (MongolZ +1.5 BEST BET and MongolZ ML VALUE) lost. The +1.5 streak is broken at 4.

**Why the calls failed:**

1. **MongolZ +1.5 broke the streak.** The thesis was "MongolZ should win at least Mirage" — they lost it 6-13. Their Mirage was elite vs NAVI and VIT but MOUZ is a different matchup. The H2H on Mirage was only 1-1 (not a deep sample), and MOUZ's overall 7-1 H2H dominance proved more predictive than MongolZ's recent Mirage form vs other teams.

2. **MongolZ ML was wrong.** We overweighted the "MOUZ mental fragility" narrative. MOUZ clearly reset after the PRV loss (Principle #13 applies to everyone, not just underdogs). The model at 45% MongolZ was too high — the market at 35.5% was closer to the true probability.

3. **The "nothing to lose" narrative was overvalued.** MongolZ having nothing to lose didn't translate to better performance. MOUZ's motivation to bounce back from the PRV upset was stronger than MongolZ's "playing free" narrative.

---

## Key Lessons

### Lesson 1: +1.5 Underdog Has Limits — H2H Dominance Can Override Pick Map Edge

The +1.5 underdog streak ended at 4. MongolZ had a genuine Mirage pick but lost 6-13. The difference between this and previous +1.5 hits: MOUZ had **7-1 overall H2H dominance** (88%). In prior +1.5 calls (PRV +1.5 vs FaZe, FURIA, MOUZ), the H2H was competitive or limited. When H2H is >80% one-sided across 6+ maps, even the underdog's pick map isn't safe. Update Principle #40: +1.5 underdog should NOT be called when: (a) overall H2H is >80% one-sided AND (b) the pick map H2H is thin (≤2 maps).

### Lesson 2: Principle #13 (Mental Reset) Applies to Favorites Too

We applied mental reset to MongolZ (correctly — they reset after 3-13 vs NAVI) but assumed MOUZ would be mentally fragile after the PRV 0-2 loss. MOUZ came out and demolished MongolZ on Mirage 13-6. Mental reset is universal — it applies to favorites bouncing back from upsets, not just underdogs bouncing back from blowouts. Never discount a favorite based on a single previous loss.

### Lesson 3: Recent Form vs Different Opponents Is Misleading

MongolZ's Mirage form at PGL was excellent: 13-10 VIT, 13-11 NAVI, 13-10 NAVI Swiss. We used these results to predict MongolZ would win Mirage vs MOUZ. But MOUZ is a different opponent with different playstyle, utility usage, and preparation. Map form against Team A doesn't predict performance against Team B — especially when the H2H tells a different story.

### Lesson 4: 3rd Place Matches Favor the Higher-Ranked Team

In a 3rd place match, the "nothing to lose" narrative for the underdog is weaker than in elimination matches. Both teams lost their semifinal. The higher-ranked team (MOUZ #3) may be MORE motivated to prove themselves after an upset loss, while the lower-ranked team (MongolZ #9) may accept 3rd/4th as a good result either way. Don't apply the same motivation adjustments to 3rd place matches as to elimination matches.

---

## Scorecard

| Category | Predicted | Actual | Assessment |
|----------|-----------|--------|------------|
| Series Winner | MOUZ 2-1 (55%) | MOUZ 2-0 | ✅ (right winner, wrong format) |
| Map 1 (Mirage) | MongolZ 13-11 | MOUZ 13-6 | ❌ (completely wrong) |
| Map 2 (Inferno) | MOUZ 13-9 | MOUZ 13-10 | ✅ |
| Map 3 (Nuke) | MOUZ 13-10 | Not played | N/A |
| MongolZ +1.5 BEST BET | 70% vs 65% | 0 maps won | ❌ |
| MongolZ ML VALUE | 45% vs 35.5% | Lost 0-2 | ❌ |

**Series: ✅ | Market Calls: 0/2 (0%) | Maps: 1/2**

---

*Backtest generated from HLTV.org match data (ID: 2389986) on February 22, 2026*
