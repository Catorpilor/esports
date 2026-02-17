# FaZe vs Astralis — Backtest

**Pre-Match Analysis:** [faze-vs-astralis.md](../faze-vs-astralis.md)
**Match:** PGL Cluj-Napoca 2026, Swiss R4 (1-2 bracket, Elimination)
**Date:** February 17, 2026

---

## Actual Result

**Astralis 2-0 FaZe** — FaZe eliminated from PGL Cluj-Napoca 2026.

**Player of the Match:** ryu

---

## Actual Veto

| Step | Action | Map | Notes |
|------|--------|-----|-------|
| 1 | Astralis ban | Anubis | Permaban ✅ |
| 2 | FaZe ban | **Overpass** | Surprise! FaZe banned Astralis's signature map |
| 3 | Astralis pick | **Ancient** | Strong map (100% WR, 2-0) |
| 4 | FaZe pick | **Mirage** | FaZe's best map vs Astralis's worst (20%) |
| 5 | FaZe ban | Inferno | Remove 0% map |
| 6 | Astralis ban | Dust2 | Avoid H2H trauma (4-13 loss) |
| 7 | Decider | **Nuke** | Leftover — never played |

### Veto Prediction vs Actual

| Step | Predicted | Actual | Match? |
|------|-----------|--------|--------|
| 1 | FaZe ban Inferno | Astralis ban Anubis | ❌ (ban order wrong) |
| 2 | Astralis ban Anubis | FaZe ban **Overpass** | ❌ (FaZe banned Overpass, not Inferno!) |
| 3 | FaZe pick Mirage | Astralis pick **Ancient** | ❌ (different team, different map) |
| 4 | Astralis pick Overpass | FaZe pick Mirage | ❌ (Overpass was banned!) |
| 5 | FaZe ban Nuke | FaZe ban Inferno | ❌ (Inferno dropped to step 5) |
| 6 | Astralis ban Dust2 | Astralis ban Dust2 | ✅ |
| 7 | Decider: Ancient | Decider: **Nuke** | ❌ |

**Veto Score: 1/7** — Only Astralis banning Dust2 was correct. The massive surprise: **FaZe banned Overpass** (Astralis's signature, 75% WR). Our model predicted FaZe would ban Inferno first — instead, they prioritized removing Astralis's best map.

### Why FaZe Banned Overpass

This is a textbook application of **Principle #18 (Permaban Flexibility Against Elite Maps)**:
- Astralis's Overpass was 75% (6-2) — their clear signature and first pick in nearly every match
- By banning Overpass, FaZe guaranteed Astralis couldn't play their best map
- FaZe pushed their Inferno ban to Step 5 (second ban phase) — a gamble that it wouldn't get picked before then
- **The gamble worked:** Astralis picked Ancient (not Inferno) at Step 3, so FaZe could safely ban Inferno at Step 5

This is the SAME pattern we saw with NAVI banning Dust2 vs Aurora and FaZe banning Dust2 vs PARIVISION. Teams consistently break permabans to remove elite opponent maps. Our model even has a principle for this (#18) but we failed to apply it here.

### The Cascade Effect

FaZe banning Overpass changed the entire veto:
- Astralis lost their signature pick → fell back to Ancient (100%, 2-0)
- Our predicted Map 2 (Overpass) never existed → replaced by Ancient
- Our predicted decider (Ancient) shifted to Nuke
- The entire map sequence was wrong

---

## Actual Map Scores

| Map | Pick | FaZe | Astralis | Half 1 | Half 2 | Winner |
|-----|------|------|----------|--------|--------|--------|
| Ancient | Astralis | 5 | **13** | 4-8 | 1-5 | Astralis |
| Mirage | FaZe | 9 | **13** | 4-8 | 5-5 | Astralis |

---

## Map-by-Map Analysis

### Map 1: Ancient (Astralis Pick) — Astralis 13-5

**Predicted:** Ancient as decider, FaZe wins 13-11 (Low confidence)
**Actual:** Ancient as Astralis pick, Astralis wins 13-5
**Result:** ❌ Wrong winner, wrong context (pick vs decider)

**What happened:**
- Astralis dominated from the start: 8-4 first half (Astralis CT), then 5-1 second half (Astralis T)
- FaZe managed only 4 CT rounds and 1 T round — a complete collapse
- FaZe's 40% Ancient WR (2-3) showed its ugly side

**Why our prediction failed:**
1. **We predicted Ancient as decider** — Astralis picked it (100% WR, now 3-0). As a deliberate pick with preparation, Astralis was far more dangerous than as a leftover decider.
2. **FaZe's H2H edge was thin** — we cited FaZe 13-7 over Astralis at ESL Pro League S22 on Ancient. One map. Per Principle #10, this was too small to override Astralis's genuine comfort on the map.
3. **FaZe's Ancient is genuinely bad** — 2-3 with a 4-13 loss to Falcons and 11-13 to PARIVISION. The H2H gave false confidence.

### Map 2: Mirage (FaZe Pick) — Astralis 13-9

**Predicted:** FaZe wins 13-8 (High confidence)
**Actual:** Astralis wins 13-9
**Result:** ❌ Wrong winner — our highest confidence call was wrong

This is the biggest miss. We predicted this with "High confidence" based on:
- FaZe 67% Mirage vs Astralis 20% (1-4)
- Astralis had been "demolished on Mirage" at PGL (5-13 NAVI, 4-13 FUT)

**What happened:**
- Astralis led 8-4 at half (Astralis on CT). FaZe couldn't break Astralis's CT side.
- Second half was even (5-5) but Astralis's 8-4 lead was enough.
- FaZe managed only 9 rounds on their own pick — a disastrous result.

**Why Astralis won FaZe's Mirage:**
1. **FaZe's form was catastrophic** — 1 win in last 6 series. Even "good" maps become mediocre when a team is in free fall.
2. **Astralis's Mirage 20% WR was misleading** — their losses were to NAVI (#1), FUT (hot team), and fnatic (competitive). The opponents were strong. The sole win (13-11 vs FURIA) shows they CAN compete on Mirage.
3. **Elimination pressure cut both ways** — we assumed FaZe's experience would help them under pressure (karrigan). Instead, FaZe was mentally broken from 2 consecutive series losses. Astralis, also facing elimination, had less to lose.
4. **ryu as Player of the Match** — Astralis's relatively unknown AWPer delivered the series-defining performance. An X-factor we couldn't model.
5. **Principle #3 (Recent Form > Rankings)** — FaZe's #7 ranking masked a 1-5 slump. Astralis's #12 ranking masked a team that just crushed 3DMAX 2-0. Form divergence matters.

---

## Market Call Assessment

| Market Call | Prediction | Polymarket | Actual | Result |
|-------------|-----------|------------|--------|--------|
| FaZe ML | 60% (no value) | 63.5% | FaZe lost 0-2 | N/A (no call) |
| Astralis ML | 40% (no value) | 36.5% | Astralis won 2-0 | N/A (no call) |
| Over 2.5 maps | **BEST BET** (60% vs 46%) | 46.0% | Under (2 maps) | ❌ |
| Astralis +1.5 | **Value** (75% vs 64%) | 64.0% | Astralis won 2-0 | ✅ |
| FaZe Map 1 | **Conditional Value** (70% if Mirage) | 57.0% | FaZe lost Mirage 9-13 | ❌ |

**Market Calls: 1/3** — The Astralis +1.5 call hit (easily — they swept). The Over 2.5 BEST BET missed again. The conditional Map 1 FaZe call was wrong.

---

## Why Our Model Failed

### 1. Overlooked Form Decline
FaZe was 1-5 in their last 6 series. We noted this as a "red flag" but still gave them 60% ML. A team on a 5-series losing streak should not be 60% against anyone — their floor has dropped, not just temporarily.

### 2. Failed to Apply Our Own Principle #18
We have a principle that says teams break permabans to remove elite opponent maps. FaZe did exactly this — banned Overpass instead of Inferno. Our model should have predicted this as the primary veto scenario, not an afterthought.

### 3. "High Confidence" on a Map Where Both Teams Are Struggling
We called Mirage "High confidence FaZe" based on WR differential (67% vs 20%). But FaZe's 67% was on 3 maps (tiny sample), and their recent form was terrible. "High confidence" should require BOTH strong map stats AND strong current form.

### 4. Over 2.5 Maps — Same Error as MOUZ-FUT
For the second time today, our Over 2.5 "BEST BET" lost to a sweep. The pattern is clear: when one team is significantly better than the model accounts for, they win both the opponent's pick AND their own map. The structural assumption that "each team wins their pick" breaks down when there's a form/talent gap the model underweights.

---

## Lessons Learned

### Lesson 1: Form Discount — Teams on 4+ Series Losing Streaks Should Be Penalized

FaZe at 1-5 should have been modeled at ~50-52% ML, not 60%. When a team has lost 4+ consecutive series:
- Apply a -8 to -10% form discount to their ML probability
- Their "pick map" is no longer safe — form issues infect even good maps
- This overrides ranking prestige (#7 vs #12)

### Lesson 2: Apply Principle #18 Proactively in Every Veto

FaZe banning Overpass was predictable using our own Principle #18. Going forward:
- For EVERY analysis, build a "permaban break" veto scenario as the primary alternative
- If the opponent has a map with >70% WR and 5+ maps, assume a ~40-50% chance the team breaks their permaban to remove it
- Score both veto scenarios and analyze the map pool implications of each

### Lesson 3: "High Confidence" Requires Form + Stats Alignment

Never assign "High confidence" to a map prediction based solely on WR differential when the picking team is in poor form. FaZe's 1-5 streak should have downgraded Mirage from "High confidence" to "Medium" at best.

### Lesson 4 (Confirmed): Principle #24 — Sweeps Keep Happening

Third sweep prediction miss at PGL. Our model consistently sets sweep probability too low:
- MOUZ-FUT: predicted 20% MOUZ 2-0, actual 2-0
- FaZe-Astralis: predicted 15% Astralis 2-0, actual 2-0
- Running theme: the underdog winning the favorite's pick → instant sweep

Across all Feb 17 matches, 2/2 completed series were sweeps. The market (54% Under for this match) was more accurate than our model (40% Under).

---

## Scorecard

| Category | Predicted | Actual | Assessment |
|----------|-----------|--------|------------|
| Series Winner | FaZe 2-1 (60%) | Astralis 2-0 | ❌ |
| Map 1 | FaZe wins Mirage 13-8 (High) | Astralis wins Ancient 13-5 | ❌ (different map entirely) |
| Map 2 | Astralis wins Overpass 13-10 | Astralis wins Mirage 13-9 | ❌ (different map, wrong winner on Mirage) |
| Map 3 | FaZe wins Ancient 13-11 (Low) | Not played | N/A |
| Over 2.5 BEST BET | 60% (vs 46% market) | Under — 2 maps | ❌ |
| Astralis +1.5 VALUE | 75% (vs 64% market) | Astralis won 2-0 | ✅ |
| FaZe Map 1 | Conditional Value 70% | FaZe lost | ❌ |
| Veto Accuracy | — | 1/7 | Poor |

**Series: ❌ | Market Calls: 1/3 | Veto: 1/7**

---

*Backtest generated from HLTV.org match data (ID: 2389972) on February 17, 2026*
