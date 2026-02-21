# PARIVISION vs MOUZ — Backtest

**Pre-Match Analysis:** [parivision-vs-mouz.md](../parivision-vs-mouz.md)
**Match:** PGL Cluj-Napoca 2026, Legends Stage Semifinal
**Date:** February 21, 2026

---

## Actual Result

**PARIVISION 2-0 MOUZ** — PRV advances to the Grand Final.

---

## Actual Veto

| Step | Action | Map | Notes |
|------|--------|-----|-------|
| 1 | PRV ban | Nuke | Permaban |
| 2 | MOUZ ban | Anubis | Permaban |
| 3 | PRV pick | **Dust2** | PRV's signature |
| 4 | MOUZ pick | **Inferno** | MOUZ's pick from Swiss R1 |
| 5 | MOUZ ban | Ancient | Remove PRV option |
| 6 | PRV ban | Overpass | Remove MOUZ's blowout map |
| 7 | Decider | **Mirage** | Not played |

### Veto Prediction vs Actual

The analysis was live (veto already known), so no veto prediction to evaluate. However, we correctly noted the veto adaptation from Swiss R1 — steps 1-4 identical, steps 5-7 swapped due to both teams adjusting.

---

## Actual Map Scores

| Map | Pick | PRV | MOUZ | Half 1 | Half 2 | Winner |
|-----|------|-----|------|--------|--------|--------|
| Dust2 | PRV | **13** | 11 | 7-5 (PRV T) | 6-6 | PRV |
| Inferno | MOUZ | **13** | 10 | 9-3 (PRV CT) | 4-7 | PRV |
| Mirage | Decider | — | — | — | — | Not played |

---

## Map-by-Map Analysis

### Map 1: Dust2 (PRV Pick) — PRV 13-11

**Predicted:** PRV wins 13-9 (Medium confidence)
**Actual:** PRV wins 13-11
**Result:** ✅ Correct winner, close on margin

PRV won the T side 7-5 (Dust2 is T-sided, so this was expected). Second half was dead even at 6-6. MOUZ made it competitive — closer than the Swiss R1 meeting (13-7) — confirming our Principle #30 assessment that MOUZ would be better prepared the second time. PRV's Dust2 edge is real but narrowing: 13-7 → 13-11 across two meetings.

**PRV's Dust2 H2H vs MOUZ: Now 2-0** (13-7, 13-11). Both wins but the margin is shrinking. A third meeting could flip.

### Map 2: Inferno (MOUZ Pick) — PRV 13-10

**Predicted:** MOUZ wins 13-8 (Medium confidence)
**Actual:** PRV wins 13-10 — **MOUZ's pick stolen!**
**Result:** ❌ Wrong winner

This was the story of the match. Two distinct phases:

**Phase 1 — PRV CT dominance (9-3):** PRV's CT side on Inferno completely shut down MOUZ's T side. Only 3 T rounds for MOUZ was catastrophic. PRV clearly studied the Swiss R1 tape (where they lost Inferno 7-13) and built a specific CT gameplan.

**Phase 2 — MOUZ CT comeback (7-0 run, 3-9 → 10-9):** MOUZ mounted an incredible 7-0 CT run to take the lead 10-9. This was one of the best comebacks of the tournament. MOUZ's CT Inferno is elite (they went 9-0 CT vs NAVI two days prior).

**Phase 3 — Jame breaks the run (10-10 → 10-13):** At 9-10, Jame hit a crucial AWP opening kill on torzsi to stop the bleeding. PRV then won 3 straight to close 13-10. The veteran AWPer's composure in a must-win moment was decisive.

**Why our prediction failed:**
1. **Anti-Strat Tax was REAL but in reverse** — We applied Principle #30 to Dust2 (MOUZ anti-stratting PRV's pick) but underestimated that PRV would ALSO anti-strat MOUZ's Inferno pick. PRV went from losing 7-13 to winning 13-10 on Inferno — a complete tactical flip.
2. **H2H reversal** — MOUZ won Inferno 13-7 in Swiss R1. PRV won 13-10 here. The Inferno H2H is now 1-1. Per Principle #22, the Swiss R1 result was a single data point, not a trend.
3. **We overweighted recent MOUZ form** — MOUZ's 13-4 vs NAVI on Inferno inflated our confidence. But NAVI and PRV play completely different styles. PRV's Jame-centric AWP setup is harder to break on CT Inferno than NAVI's approach.

---

## Market Call Assessment

| Market Call | Prediction | Polymarket | Actual | Result |
|-------------|-----------|------------|--------|--------|
| MOUZ ML | 63% | 59.5% | PRV won 2-0 | ❌ |
| PRV +1.5 | **BEST BET** (78% vs 65.5%) | 65.5% | PRV won 2 maps | ✅ |
| Over 2.5 | Marginal (50-52% vs 46.5%) | 46.5% | 2 maps (Under) | ❌ (no formal call) |
| Map 1 PRV | Slight value (58-60% vs 54.5%) | 54.5% | PRV won 13-11 | ✅ (directional, not formal) |

**Market Calls: 1/1** — PRV +1.5 (BEST BET) cashed again. The only formal value call hit.

**Why PRV +1.5 keeps working:** This is now the 4th consecutive +1.5 underdog BEST BET that has hit (PRV +1.5 vs FaZe, PRV +1.5 vs FURIA, Astralis +1.5 vs FaZe, PRV +1.5 vs MOUZ). The thesis is structurally sound: a team with at least one elite map or a broad map pool will almost always win at least 1 map in a BO3. Per Principle #27, this is our most reliable call type.

**What we missed:** PRV ML was the right play. PRV at 40.5% was undervalued — they had Dust2 as a near-guaranteed map AND had clearly improved their Inferno preparation. The market (and our model) over-indexed on MOUZ's Swiss R1 dominance and NAVI QF win, underestimating PRV's adaptation speed.

---

## Key Lessons

### Lesson 1: Anti-Strat Works Both Ways

We correctly identified Principle #30 (Anti-Strat Tax) for Dust2 — MOUZ would be better prepared for PRV's Dust2 (margin narrowed from 13-7 to 13-11). But we failed to apply the same logic to Inferno. PRV also had the Swiss tape to study MOUZ's Inferno. The anti-strat tax applies to BOTH teams' picks in a rematch, not just the underdog's signature map. Going forward: when two teams play twice at the same event, expect BOTH picks to be weaker the second time.

### Lesson 2: Sweep Probability Assigned to Wrong Side

We gave PRV 2-0 only 15% probability ("unlikely — would need to steal Inferno"). The actual result was exactly this. Meanwhile we gave MOUZ 2-0 at 35% — the highest scenario probability. The model systematically underestimates the underdog's sweep potential while overestimating the favorite's sweep potential. When the underdog has a clear Map 1 edge (PRV's Dust2) AND anti-strat preparation on Map 2, their sweep probability should be higher — perhaps 20-25%.

### Lesson 3: Jame Factor on High-Stakes LAN

Jame is one of the most experienced players in CS history. In a Legends Stage Semifinal, his composure under pressure is an X-factor we didn't weight enough. His AWP opening at 9-10 on Inferno broke MOUZ's 7-0 run and swung the entire series. Per Principle #37 (OT/close maps favor experienced teams), Jame's experience gave PRV a clutch edge in tight situations. This should be extended: veteran AWPers have outsized impact in high-pressure moments, not just OT.

### Lesson 4: Rematch Dynamics Favor the Loser

PRV lost to MOUZ 0-2 in Swiss R1. In the semifinal rematch, PRV won 2-0. The loser of a recent meeting has stronger motivation to adapt AND knows exactly what failed. The winner may become complacent or run the same playbook. When a team rematches an opponent they recently lost to at the same event, increase the loser's probability by ~5-8%. They've had time to fix their mistakes while the winner may rely on the same strategies.

### Lesson 5: Market Was Right on Under 2.5, Wrong on Who Sweeps

Under 2.5 was favored at 53.5% — the market correctly predicted a sweep but assumed MOUZ would be the sweeper. The market's Under probability was sound; it just had the direction wrong. This suggests sweep detection (will it go to 3 maps?) is easier than sweep direction (who sweeps?).

---

## Scorecard

| Category | Predicted | Actual | Assessment |
|----------|-----------|--------|------------|
| Series Winner | MOUZ 2-1 (63%) | PRV 2-0 | ❌ |
| Map 1 (Dust2) | PRV 13-9 | PRV 13-11 | ✅ (right winner) |
| Map 2 (Inferno) | MOUZ 13-8 | PRV 13-10 | ❌ (pick stolen) |
| Map 3 (Mirage) | MOUZ 13-10 | Not played | N/A |
| PRV +1.5 BEST BET | 78% vs 65.5% | PRV won 2 maps | ✅ |
| MOUZ ML | 63% vs 59.5% | MOUZ lost 0-2 | ❌ |

**Series: ❌ | Market Calls: 1/1 (100%) | Maps: 1/2**

---

*Backtest generated from HLTV.org match data (ID: 2389984) on February 22, 2026*
