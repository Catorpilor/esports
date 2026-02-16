# Falcons vs FaZe — CS2 Backtest Analysis

**Date:** February 15, 2026 | **Format:** BO3
**Event:** PGL Cluj-Napoca 2026 — Swiss Round 2 (1-0 vs 0-1 Bracket)
**Match ID:** [2389957](https://www.hltv.org/matches/2389957/falcons-vs-faze-pgl-cluj-napoca-2026)
**Type:** BACKTEST (post-match, no Polymarket odds)

---

## Actual Result

**Falcons 2-1 FaZe**

| Map | Pick | Score | Half 1 | Half 2 | Winner |
|-----|------|-------|--------|--------|--------|
| Anubis | FaZe | 13-9 | 9-3 (Falcons CT) | 4-6 (FaZe CT) | **Falcons** |
| Dust2 | Falcons | 11-13 | 7-5 (Falcons CT) | 4-8 (FaZe CT) | **FaZe** |
| Ancient | Decider | 13-4 | 10-2 (Falcons CT) | 3-2 | **Falcons** |

---

## Pre-Match Data Snapshot

### Team Overview

| Metric | Falcons | FaZe | Edge |
|--------|---------|------|------|
| HLTV Ranking | #3 | #7 | Falcons |
| PGL Cluj Form | 1-0 (beat 3DMAX 2-0) | 1-0 (beat Heroic 2-0) | Even |
| Win Rate (3mo) | 58% (22W-16L, 38 maps) | 57% (25W-19L, 44 maps) | Even |
| Star Player | m0NESY 1.25, NiKo 1.12 | frozen 1.16, Twistzz 1.11 | **Falcons** |
| H2H Record | **8-1 in maps** | 1-8 in maps | **Falcons dominant** |

### Map Pool Matrix (3 Months)

| Map | Falcons Win% | Maps | FaZe Win% | Maps | Advantage |
|-----|-------------|------|-----------|------|-----------|
| **Mirage** | **86%** | 7 | 33% | 6 | **Falcons** |
| Nuke | 67% | 6 | **70%** | 10 | FaZe |
| Dust2 | 56% | 9 | 62% | 8 | FaZe (stats) / Falcons (H2H) |
| Inferno | 50% | 8 | 60% | 10 | FaZe |
| Anubis | 50% | 4 | 0% | 1 | Falcons |
| Ancient | **25%** | 4 | 57% | 7 | FaZe (stats) / Falcons (H2H) |
| Overpass | N/A | 0 | 50% | 8 | FaZe |

### H2H History (Critical Data)

| Date | Event | Map | Winner | Score |
|------|-------|-----|--------|-------|
| 2026-01 | FISSURE Playground 2 | Dust2 | **Falcons** | 13-6 |
| 2026-01 | FISSURE Playground 2 | Nuke | **Falcons** | 13-11 |
| 2025-05 | BLAST Rivals 2025 S1 | Ancient | **Falcons** | 13-10 |
| 2025-05 | BLAST Rivals 2025 S1 | Dust2 | **Falcons** | 13-6 |
| 2025-04 | PGL Bucharest 2025 | Mirage | **Falcons** | 13-10 |
| 2025-04 | PGL Bucharest 2025 | Ancient | **FaZe** | 16-14 |
| 2025-04 | PGL Bucharest 2025 | Nuke | **Falcons** | 13-4 |
| 2025-02 | PGL Cluj-Napoca 2025 | Ancient | **Falcons** | 13-6 |
| 2025-02 | PGL Cluj-Napoca 2025 | Dust2 | **Falcons** | 13-11 |

**H2H Conclusion:** Falcons absolutely own FaZe — 8-1 in maps across 4 series. FaZe's only win was a close Ancient 16-14. Falcons won every Dust2 (13-6, 13-6, 13-11) and dominated on Ancient despite their poor overall Ancient stats.

---

## Model Prediction (What We Would Have Predicted)

### Predicted Veto

```
1. BAN: FaZe bans Mirage        → ACTUAL: FaZe bans Mirage ✅
   Reason: 33% WR, permaban. Falcons 86% on Mirage.

2. BAN: Falcons ban Overpass     → ACTUAL: Falcons ban Overpass ✅
   Reason: No Overpass data for Falcons. FaZe is 50% on it.

3. PICK: FaZe picks Nuke (70%)  → ACTUAL: FaZe picks Anubis ❌
   Reason: FaZe's best map at 70% WR. Falcons are 67% — close but FaZe has edge.
   WHAT ACTUALLY HAPPENED: FaZe picked Anubis (0% WR, 1 map played!).
   Completely irrational from a stats perspective. Possibly a prepared strat or
   an attempt to surprise Falcons on a map they haven't scouted against FaZe.

4. PICK: Falcons pick Dust2      → ACTUAL: Falcons pick Dust2 ✅
   Reason: 56% WR overall, but 3-0 vs FaZe on Dust2 in H2H (13-6, 13-6, 13-11).
   With Nuke as FaZe's pick (in our model), Falcons would take Dust2.

5. BAN: FaZe bans Anubis (0%)   → ACTUAL: Falcons ban Nuke ❌
   Our model: FaZe bans Anubis (worst map). But since FaZe picked Anubis in
   step 3, the remaining maps and bans shifted entirely.

6. BAN: Falcons ban Inferno      → ACTUAL: FaZe ban Inferno ❌
   Cascade effect from step 3 being wrong.

7. DECIDER: Ancient              → ACTUAL: Ancient ✅ (right map, wrong path)
   FaZe 57% vs Falcons 25% by stats — but H2H shows Falcons 2-1 on Ancient.
```

### Predicted Map Outcomes (Based on Our Model's Veto)

If we had predicted the veto as Nuke/Dust2/Ancient:

| Map | Our Prediction | Confidence |
|-----|---------------|------------|
| Nuke (FaZe pick) | FaZe wins 13-10 | Medium |
| Dust2 (Falcons pick) | Falcons wins 13-9 | Medium-High (H2H dominant) |
| Ancient (Decider) | FaZe wins 13-10 | Low (stats favor FaZe, H2H favors Falcons) |

**Model Series Prediction:** FaZe 2-1 or Falcons 2-1 (toss-up, leaning FaZe due to Nuke + Ancient stats)

### If We Had Known the Actual Veto

| Map | Prediction (given actual veto) | Confidence |
|-----|-------------------------------|------------|
| Anubis (FaZe pick) | Falcons wins ~13-9 | High — FaZe has 0% WR, picking this is reckless |
| Dust2 (Falcons pick) | Falcons wins ~13-9 | Medium — Falcons 3-0 vs FaZe on Dust2 |
| Ancient (Decider) | Unclear — stats say FaZe, H2H says Falcons | Low |

**Adjusted Series Prediction:** Falcons 2-0 or 2-1

---

## Backtest Scorecard

### Veto Prediction Accuracy

| Step | Predicted | Actual | Result |
|------|-----------|--------|--------|
| 1. FaZe ban | Mirage | Mirage | ✅ |
| 2. Falcons ban | Overpass | Overpass | ✅ |
| 3. FaZe pick | Nuke | **Anubis** | ❌ |
| 4. Falcons pick | Dust2 | Dust2 | ✅ |
| 5. Ban | FaZe bans Anubis | Falcons ban Nuke | ❌ (cascade) |
| 6. Ban | Falcons ban Inferno | FaZe ban Inferno | ❌ (cascade) |
| 7. Decider | Ancient | Ancient | ✅ |

**Veto Score: 4/7** (2 permabans + Falcons pick + decider correct; FaZe's pick was completely unpredictable)

### Series Outcome

| Prediction | Actual | Result |
|-----------|--------|--------|
| Model with predicted veto: FaZe 2-1 (slight lean) | Falcons 2-1 | ❌ Wrong winner |
| Model with actual veto: Falcons 2-0 or 2-1 | Falcons 2-1 | ✅ Correct |

### Map-by-Map Accuracy (vs Actual Veto)

| Map | Predicted Winner | Actual Winner | Score Prediction | Actual Score | Result |
|-----|-----------------|---------------|-----------------|--------------|--------|
| Anubis (FaZe pick) | Falcons | **Falcons** | ~13-9 | **13-9** | ✅ Exact |
| Dust2 (Falcons pick) | Falcons | **FaZe** | ~13-9 | 11-13 | ❌ |
| Ancient (Decider) | Toss-up (lean FaZe on stats) | **Falcons** | ~13-10 | **13-4** | ❌ |

---

## Key Lessons

### 1. H2H > Raw Stats (CONFIRMED)

The most important signal in this match was the **8-1 H2H record**. Falcons simply own FaZe psychologically and tactically. Even on Ancient where FaZe had 57% WR vs Falcons' 25%, Falcons demolished FaZe 13-4. The raw map stats were misleading — the H2H was the correct predictor.

**Framework update needed:** When H2H is this lopsided (8-1), it should OVERRIDE map pool stats as the primary predictor. Current framework weights them equally.

### 2. Unpredictable Picks Break the Model

FaZe picking Anubis (0% WR) was a complete anomaly. No statistical model can predict this — it was likely a prepared strat or a psychological gambit. The model correctly identifies this as terrible (and it was — FaZe lost 9-13).

**Lesson:** When a team makes an "irrational" pick, it usually means:
- They've been secretly practicing it (surprise factor)
- They're trying to dodge a worse map
- Desperate/tilted decision-making

In this case, FaZe probably feared all remaining maps vs Falcons (H2H nightmare) and chose the one Falcons wouldn't have scouted.

### 3. FaZe Picking Anubis Was Actually "Rational" in Context

Looking deeper: FaZe's options for picks were Nuke, Dust2, Inferno, Anubis, Ancient. Against Falcons specifically:
- Nuke: Falcons 67%, and beat FaZe 13-4, 13-11 on it in H2H
- Dust2: Falcons beat FaZe 13-6, 13-6, 13-11 — FaZe can't win this vs Falcons
- Inferno: Falcons 50%, FaZe 60% — FaZe's best shot on paper, but H2H unknown
- Ancient: Falcons 25% but beat FaZe 13-10 and 13-6 on it
- Anubis: Falcons 50% (2-2), FaZe 0% (0-1) but **no H2H data on Anubis** — unknown matchup

FaZe chose the only map where Falcons had NO scouting data on them. It was a "we're screwed everywhere else, at least this is a mystery box" pick. Still lost, but the logic is understandable.

### 4. Falcons Lost Their Own Map Pick

Falcons picked Dust2 (56% WR, 3-0 vs FaZe H2H) and lost 11-13. This is a reminder that H2H doesn't guarantee wins — FaZe finally broke through on Dust2 after 3 consecutive losses. The model should account for regression to the mean on extreme H2H streaks.

### 5. Ancient Decider Was a Blowout Despite Stats

Falcons' 25% WR on Ancient was misleading:
- It was a 1-3 record over 4 maps — tiny sample
- 2 of those losses might have been vs top-5 teams
- In H2H, Falcons were 2-1 on Ancient vs FaZe specifically

The 13-4 scoreline (CT half 10-2!) suggests Falcons completely outclassed FaZe tactically, not just individually.

---

## Framework Accuracy Summary

| Category | Score | Notes |
|----------|-------|-------|
| Winner prediction (with predicted veto) | ❌ | Would have called FaZe slight lean |
| Winner prediction (with actual veto) | ✅ | Correctly identifies Falcons |
| Veto bans (steps 1-2) | 2/2 ✅ | Permabans are predictable |
| Veto picks (steps 3-4) | 1/2 | Falcons pick correct, FaZe pick impossible to predict |
| Veto remaining (steps 5-7) | 1/3 | Decider map correct (Ancient) |
| Map winner predictions (actual veto) | 1/3 | Anubis correct, Dust2 and Ancient wrong |
| Score predictions | 1/3 | Anubis 13-9 was exact |

**Overall: The model correctly identifies the key factors (H2H dominance, map pool advantages) but underweights H2H relative to raw stats. FaZe's irrational Anubis pick was unforecastable.**

---

*Backtest generated from HLTV.org data on February 16, 2026*
