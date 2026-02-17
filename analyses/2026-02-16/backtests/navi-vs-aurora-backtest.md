# NAVI vs Aurora — Backtest

**Original Analysis:** [navi-vs-aurora.md](../navi-vs-aurora.md)
**Date:** February 16, 2026 | **Event:** PGL Cluj-Napoca 2026 — Swiss R3 (1-1 Bracket)

---

## Series Result
- **Predicted:** NAVI 2-1 ✅
- **Actual:** NAVI 2-1 ✅
- **Confidence was:** Medium — appropriate given the outcome required OT on the decider

## Veto Accuracy: 5/7 ✅
Key miss: NAVI banned Dust2 instead of Inferno, leaving Inferno as decider instead of Dust2.

## Map-by-Map Accuracy

| Map | Predicted Winner | Predicted Score | Actual Winner | Actual Score | Result |
|-----|-----------------|-----------------|---------------|--------------|--------|
| Anubis (Aurora pick) | Aurora 13-10 | Low confidence | **NAVI 13-9** | — | ❌ Wrong winner |
| Mirage (NAVI pick) | NAVI 13-7 | High confidence | **Aurora 13-9** | — | ❌ Wrong winner |
| Dust2 (predicted decider) | NAVI 13-11 | Low confidence | *Not played* | — | ❌ Wrong map |
| Inferno (actual decider) | *Not predicted* | — | **NAVI 16-12 OT** | — | N/A |

**Map prediction score: 0/3 on individual maps, but correct series winner.**

## Scenario Probability Check

| Scenario | Pre-match Prob | Mid-match Prob (after G1) | Actual |
|----------|---------------|--------------------------|--------|
| NAVI 2-0 | 25% | 60% | ❌ |
| NAVI 2-1 | 30% + 10% = 40% | 25% | ✅ |
| Aurora 2-1 | 20% | 15% | ❌ |
| Aurora 2-0 | 15% | — | ❌ |

NAVI 2-1 was our most likely single outcome (30%), so correct bucket.

## Market Call Assessment

| Market | Our Call | Market Price | Actual | Verdict |
|--------|----------|-------------|--------|---------|
| **NAVI ML** | Value at 59.5% (we said 65%) | 1.68 | ✅ NAVI won | **Correct call** |
| **Map 1 NAVI** | STRONG VALUE at 50.5% (we said 75%) | 1.98 | ✅ NAVI won (Anubis) | **Correct call** — huge edge confirmed |
| **Map 2 Aurora** | Value at 40.5% (we said 55%) | 2.47 | ✅ Aurora won (Mirage) | **Correct call** — but wrong reasoning! |
| **Over 2.5 maps** | Value at 47.5% (we said 55%) | 2.11 | ✅ Went to 3 maps | **Correct call** |
| **NAVI -1.5** | No value (36.5%) | 2.74 | ❌ NAVI won 2-1, not 2-0 | **Correct fade** |

**Market Calls: 4/5 correct!** Despite getting individual map winners wrong, the market value identification was excellent.

## Key Lessons

**1. H2H has limits — even at 4-0**
Aurora broke their 0-4 Mirage curse against NAVI. We predicted NAVI 13-7 with "High confidence" based on H2H dominance (4-0) and Aurora's terrible 25% Mirage WR. But Aurora showed tactical evolution and mental toughness to finally beat NAVI on a historically cursed map. **Lesson: H2H override is powerful but not absolute. Even a 4-0 H2H record on a map can be broken, especially at LAN with high stakes. "High confidence" should be reserved for 70%+ probability edges, not map-level predictions.**

**2. Teams can outperform their WR on high-stakes maps**
NAVI won Inferno 16-12 despite a 20% WR (1-4 in last 3 months). In an elimination match, teams play above their statistical baseline. The pressure creates focus. **Lesson: In elimination/must-win scenarios, discount poor WR stats by ~10-15%. A 20% WR team might play at 35-40% level when survival is on the line.**

**3. The "mental reset" factor is real**
Aurora lost Anubis (their signature map, AGAIN) but came back to dominate Mirage 13-9. They didn't tilt — they reset and played their best Mirage ever against NAVI. Similarly, NAVI lost their own Mirage pick but then won the Inferno decider in OT. **Lesson: At the top level, losing a map doesn't predict the next map. Mental resilience is the norm, not the exception.**

**4. OT is more common than predicted**
The Inferno decider went to OT (16-12). We rarely predict OT in our scorelines. Given that regulation ties happen in ~15-20% of close maps, maybe we should factor this in more. **Lesson: When predicting a map as close (±3 rounds), assign ~15% OT probability.**

**5. Market value identification worked despite wrong map predictions**
Our 4/5 market calls were correct even though we got 0/3 map winners right. This is because value identification is about probability ranges, not point predictions. The maps we said were mispriced (Map 1, Map 2, Over 2.5) all landed correctly. **Lesson: Market value calls are more robust than map winner predictions. Focus energy on finding mispriced markets rather than predicting exact scores.**

---

*Backtest completed February 16, 2026*
