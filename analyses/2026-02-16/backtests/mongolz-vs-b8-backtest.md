# The MongolZ vs B8 — Backtest

**Original Analysis:** [mongolz-vs-b8.md](../mongolz-vs-b8.md)
**Date:** February 16, 2026 | **Event:** PGL Cluj-Napoca 2026 — Swiss R3 (1-1 Bracket)

---

## Series Result
- **Predicted:** B8 wins 2-1 ❌ — **Wrong winner**
- **Actual:** MongolZ wins 2-1
- **Note:** Analysis was started while match was LIVE (1-1, heading to Nuke decider)

## Actual Maps

| Map | Pick | MongolZ | B8 | Winner |
|-----|------|---------|-----|--------|
| Ancient | B8 | **13** | 9 | MongolZ |
| Mirage | MongolZ | 7 | **13** | B8 |
| Nuke | Decider | **19** | 17 (OT) | MongolZ |

## Market Call Assessment

- **Market call: B8 ML at 45.5% was "STRONG VALUE"** ❌ — **Wrong call**
- The market at 54.5% MongolZ was actually correct — they knew something the stats didn't

## Key Lessons

**1. 0% WR can still produce a win in OT**
MongolZ went from averaging 4.3 rounds on Nuke (scores of 4-13, 7-13, 2-13) to winning 19-17 in OT. This is the most extreme example of Principle #12 (Elimination Pressure) we've seen. A 0% WR map is NOT the same as a 0% chance of winning. The elimination pressure adjustment of +10-15% was far too conservative — the real adjustment was closer to +35%.

**2. The market was smarter than the stats**
Polymarket had MongolZ at 54.5% despite the 0% Nuke WR. The market was likely pricing in: (a) MongolZ's overall superiority as a team, (b) B8's equally unknown/bad Nuke, (c) intangibles like MongolZ's momentum from winning Game 1. Our model over-indexed on the 0% Nuke stat and underweighted the overall team quality.

**3. "Unknown" opponent Nuke ≠ "good" opponent Nuke**
We assumed B8's unknown Nuke was better than MongolZ's proven-bad Nuke. But B8 was ALSO bad on Nuke — hence the 12-12 regulation and deep OT. Both teams struggled, and in a battle of two bad Nuke teams, overall team quality matters more than map-specific WR.

**4. Don't overweight map WR on small samples in extreme ways**
0-3 on Nuke is technically 0%, but it's only 3 maps. The confidence interval on 0/3 is enormous — the true WR could be anywhere from 0% to 35%+. We treated 0% as near-absolute when we should have applied small sample skepticism (Principle #10) more aggressively.

**5. OT is even more common than we thought**
Third match in a row with OT in our tracked matches (NAVI 16-12 Inferno, now MongolZ 19-17 Nuke). Principle #16 (OT frequency) is being validated repeatedly.

---

*Backtest completed February 16, 2026*
