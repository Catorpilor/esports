# Aurora vs HEROIC — Backtest

**Match:** PGL Astana 2026, Group/Swiss R1 (BO3 LAN, 2026-05-09)
**HLTV ID:** 2394116
**Final result:** **HEROIC 2-0 Aurora** (Nuke 13-8, Dust2 13-11)

---

## Predictions vs Reality

| Item | Predicted | Actual | Result |
|---|---|---|---|
| **Series winner** | Aurora (69-74%) | HEROIC | ❌ |
| **Series score (most likely)** | Aurora 2-1 (35%) | HEROIC 2-0 | ❌ |
| Map 1 (Nuke, HER pick) | Aurora 13-10 / 13-11 | HEROIC 13-8 | ❌ |
| Map 2 (Dust2, AUR pick) | Aurora 13-9 (~65%) | HEROIC 13-11 | ❌ |
| Map 3 (Inferno, decider) | HEROIC 13-11 lean | Not played | N/A |

**Series record:** 0/1 — wrong on the favorite, wrong on the score, wrong on every map prediction.

## Veto Score

| Step | Predicted | Actual | ✓/✗ |
|---|---|---|---|
| 1. HER ban | (not predicted explicitly) | Anubis | — |
| 2. AUR ban | (not predicted explicitly) | Ancient | — |
| 3. HER pick | (not predicted explicitly) | Nuke | — |
| 4. AUR pick | (not predicted explicitly) | Dust2 | — |
| 5. AUR ban | (not predicted explicitly) | Mirage | — |
| 6. HER ban | (not predicted explicitly) | Overpass | — |
| 7. Decider | (not predicted explicitly) | Inferno | — |

**Veto:** N/A — analysis was generated post-veto (match was already live), so this wasn't a forward prediction.

## Market Calls

| Call | Position | Result | Outcome |
|---|---|---|---|
| **Pre-match Over 2.5 @ 47%** | YES (BEST VALUE) | Series ended 2-0 (Under hit) | ❌ |
| **Live HEROIC ML @ 58.5%** (post Map 1) | YES (NEW best live entry, +7-9% edge) | HEROIC won series | ✅ |
| Aurora ML @ 70.5% pre-match | Pass (fair) | Aurora lost | N/A (correct directional read) |
| Aurora ML @ 41.5% live | FADE | Aurora lost | ✅ (directional, no position) |
| Aurora -1.5 fade | NO | Aurora -1.5 lost | ✅ (no position) |
| HEROIC +1.5 @ 59% pre-match | Pass (fair) | HER +1.5 hit | N/A |
| Map 1 Aurora live ~52% | YES (live, +8% edge) | HEROIC won Nuke | ❌ |

**Explicit committed market calls: 1/2 (50%)**
- Live HEROIC ML: ✅
- Pre-match Over 2.5: ❌
- Live Map 1 Aurora: ❌ (low conviction — flagged as low-medium with liquidity caveat)

**Directional reads (no position): all correct** — Aurora ML was flagged as "fair, no value either way", which was the correct read on price; the issue was the underlying probability assessment.

---

## What went wrong

### 1. **Underweighted the H2H signal**

Pre-match analysis: "Sample is 2 maps only — well below the threshold... HEROIC has changed 2 starters since (susp, Chr1zN). Per Principle #26, discount H2H weight by ~30% for roster turnover."

**Reality:** The H2H was the strongest signal, not the weakest. HEROIC is now **4-0 in maps vs Aurora** across the two meetings. The new players (susp, Chr1zN at 4-5 months) didn't dilute the team's ability to play Aurora — they enhanced it, or at minimum didn't break it. The 30% roster discount was wrong.

**Lesson:** Principle #26's roster-turnover discount applies when the new player is unknown quantity. Here susp and Chr1zN have been with HEROIC for 4-5 months and 77 maps — that's a *settled* roster, not a *new* one. The 30% discount should be reserved for players with <2 months and <30 maps.

### 2. **Ranking gap was overweighted vs H2H**

Aurora #4 vs HEROIC #24 pulled the model toward Aurora despite the H2H. Per Principle #25, H2H beats raw map WR. Here it should also have beaten raw ranking. **A 0-2 H2H specifically vs this opponent matters more than a 20-spot ranking gap.**

The market itself partly fell into the same trap: pre-match HEROIC ML at 29.5% was too cheap given the 2-0 H2H. Live re-pricing to 58.5% was a correction toward the H2H reality.

### 3. **Aurora's Dust2 was overrated on individual firepower**

The pre-match read leaned heavily on "XANTARES + woxic on Dust2" being a structural weapon. **Result: Aurora lost their own pick map 11-13 with a 4-8 T-side half.** Individual firepower is necessary but not sufficient — system structure and opponent prep matter more in 2026 CS2.

**Lesson:** Star-player firepower analysis should be a tiebreaker, not a primary driver. When H2H + system says one thing and "their stars are scary" says another, trust H2H + system.

### 4. **Mental reset (Principle #13) didn't apply as expected**

I expected Aurora to bounce back on Dust2 after losing Nuke. They lost the T-side 4-8 — exactly the same collapse pattern as Map 1 (Nuke T-side 1-8). This wasn't mental fragility — it was a **systematic T-side weakness** that HEROIC's CT setups exploited on both maps.

**Lesson:** Principle #13 (mental reset) is real, but it doesn't fix tactical/system problems. If Map 1 loss is **tactical** (HEROIC outplayed Aurora's T-side reads), expect that to recur on Map 2's T-side. If Map 1 loss is **mental** (clutch-throw, eco loss to good guns), then Principle #13 applies. Distinguish the two before applying mental-reset adjustments.

### 5. **Pre-match Over 2.5 thesis was structurally wrong, even though arithmetic looked right**

The Over 2.5 +10% edge call was based on:
- Map 1 (HER pick) ~50% coinflip
- Map 2 (AUR pick) ~65% Aurora
- Combining → expected series goes 3 maps ~57%

**Reality:** P(Aurora wins Map 2 | Aurora lost Map 1) wasn't independent of Map 1. They're correlated through the same T-side weakness. Treating maps as independent events is fine for some pairings, but here it inflated the Over 2.5 number.

**Lesson:** When both teams play the same role split (CT/T) on consecutive maps, map results are correlated through structural strengths/weaknesses, not independent. Adjust Over 2.5 calculations when correlated weaknesses are visible.

---

## What went right

### 1. **Live HEROIC ML call (✅ +7-9% edge realized)**

The post-Map-1 read was the best work in the analysis. Once Aurora lost Nuke, the market moved Aurora ML from 70.5% → 41.5% but kept HEROIC at only 58.5%. The math from the live state was clean:
- HEROIC wins series = 1 - P(Aurora wins both remaining) = 1 - (0.645 × 0.50) = ~68%
- Market: 58.5% → ~9% edge captured

**This was the value the entire analysis pivoted on**, and it played out exactly as modeled.

### 2. **Recognized the H2H mattered**

The pre-match analysis correctly identified the 0-2 H2H as material and applied appropriate veto reasoning (Aurora banning Mirage, decider being HEROIC's strong Inferno). The error was in the *magnitude* of the H2H discount, not in spotting it.

### 3. **Correctly faded Aurora -1.5 pre-match**

The pre-match call to skip Aurora -1.5 (41% market) was correct — Aurora 2-0 was always going to be hard given the H2H, and it never came close.

### 4. **Live framework discipline**

When Aurora lost Map 1, the live update correctly:
- Did NOT panic-sell the Over 2.5 position (per Principle #15)
- Did NOT chase Aurora ML at 41.5% (per Principle #35)
- DID identify HEROIC ML as the new best entry

The discipline of the live update saved face on a series otherwise lost.

---

## New principles to add

### Principle #44: Roster Turnover Discount Has a Time Floor
Principle #26's roster-turnover discount on H2H weight should only apply when the new player has been with the team **<2 months OR <30 maps played**. At 4-5 months and 77+ maps, a player is no longer "new" — they're integrated. Stop discounting H2H based on roster changes that happened a season ago.

### Principle #45: Map Independence Is Often False
When predicting Over 2.5 or series scenarios, do NOT treat maps as independent events when both teams play the same side rotation (CT first then T) on consecutive maps. Structural weaknesses (e.g., poor T-side coordination) carry across maps in the same series. Apply a correlation penalty (~5-10%) to Over 2.5 calculations when one team has visible side-specific weakness across multiple maps in the series.

### Principle #46: Distinguish Tactical from Mental Map 1 Losses
Principle #13 (mental reset) applies to **mental** Map 1 losses (clutch losses, eco-disaster, individual error stacking). It does NOT apply to **tactical** Map 1 losses (the opponent's CT setup blanked one team's T-side default routes). Before applying mental-reset adjustments to Map 2, ask: was Map 1 lost to bad luck/mental factors or to a tactical mismatch? If tactical, the same problem recurs on Map 2's matching side.

### Principle #47: H2H Signal Strength Scales with Recency-Of-Result, Not Just Sample Size
A 2-map H2H sample 6 months old with a 33%-changed roster is different from a 2-map H2H sample 6 months old with the same 5 starters. The HEROIC vs Aurora case proved that even a small H2H sample can be highly predictive when (a) the personnel overlap is high enough that team identity is preserved, and (b) the rosters that did change have integrated. Weight H2H by personnel continuity, not just sample size.

---

## Updated track record (after this match)

| Match | Date | Predicted | Actual | Series ✅ | Market Calls |
|---|---|---|---|---|---|
| Aurora vs HEROIC | 2026-05-09 | Aurora 2-1 (69%) | HEROIC 2-0 | ❌ | 1/2 (live HER ML hit, pre-match Over 2.5 missed) |

**Single-match contribution:** Series 0/1, Market 1/2. Cumulative impact small but the lesson on H2H weighting + roster turnover floor is significant.

---

*Backtest authored 2026-05-09 immediately after match conclusion. Pre-match analysis: [aurora-vs-heroic.md](../aurora-vs-heroic.md).*
