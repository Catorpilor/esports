# TYLOO vs Sharks — Backtest / Recap

**Match:** IEM Cologne Major 2026 Stage 1 (BO3 LAN, 2026-06-04)
**HLTV ID:** 2394857
**Final result:** **TYLOO 2-1 Sharks** (reverse sweep from 0-1 down)

| Map | Pick | Score | Winner |
|---|---|---|---|
| 1. Nuke | Sharks pick | 6-13 (4-8, 2-5) | Sharks |
| 2. Inferno | TYLOO pick | 13-5 (8-4, 5-1) | TYLOO |
| 3. Anubis | Decider | 13-10 (6-6, **7-4 TYLOO on T**) | TYLOO |

---

## Predictions vs Reality

| Call | Stage | Prediction | Result |
|---|---|---|---|
| **Sharks ML** | Post Map 1 (TYLOO 0-1) | Sharks ~70% (market 63.5%) → "value" | ❌ TYLOO won |
| **TYLOO Map 2 (Inferno)** | Pre Map 2 | TYLOO ~58% | ✅ won 13-5 |
| **Map 2 / Over 2.5** read | Pre Map 2 | TYLOO holds pick, series to 3 | ✅ |
| **TYLOO ML @ 40.5%** | At decider 6-6 (post-Anubis correction) | TYLOO ~50-52% → value | ✅ **TYLOO won** |

**Series prediction:** ❌ I leaned Sharks ~70% when TYLOO was 0-1 down. TYLOO reverse-swept.
**Final live call:** ✅ Once the Anubis side-balance was corrected, I flipped to TYLOO ML at 40.5% as the value side — and that was the winning call.

---

## The key story: a stale map-meta number nearly cost the read, and the user caught it

### What went wrong
At 0-1 down I called **Sharks ML ~70%** "value" vs the market's 63.5%. That estimate was inflated by a **stale Anubis side-balance assumption**: my reference file had Anubis as "slightly CT-sided (~52-48%)", so I gave Sharks a "slight CT-side edge" in the decider.

**Reality:** Anubis was historically the **most T-sided map** (~56-57% T), and the **January 2026 Season 4 rework** (Bridge + Mid Doors) rebalanced it to ~50/50. It is NOT CT-sided.

With the correct (neutral/slight-T) Anubis:
- TYLOO going to T at 6-6 was at worst neutral, possibly a small edge.
- The decider was ~50-52% TYLOO, not ~48% TYLOO.
- Therefore Sharks ML true ≈ 64-66%, basically **fair at 63.5% — NOT +6.5% value.** My "value" call was a mirage created by bad map data.

### What went right
- **@phan-kim-phuong flagged the Anubis update mid-series.** Incorporating it flipped the decider read to TYLOO, and the live call (TYLOO ML @ 40.5%) hit.
- **The Map 2 read was clean** — TYLOO ~58% on Inferno, won 13-5. Principle #51 applied correctly (didn't tank their Map 2 chances over the Map 1 Nuke blowout).
- **The decider unfolded exactly as the corrected model predicted:** 6-6 half, then **TYLOO won the T side 7-4** — direct confirmation that rebalanced Anubis is no longer CT-favored and the T side is fully viable.

---

## New / reinforced principles

### Principle #52: Verify Map-Meta Freshness Before Every Side-Balance Call
Map side-balance numbers go stale fast — Valve reworks maps mid-year. Before using a CT/T lean in a live read, confirm the number reflects the **current patch**. The Anubis Jan 2026 rework flipped it from "most T-sided" to "~balanced," and a stale reference nearly produced a backwards decider call. **Always sanity-check map-meta against the latest patch, especially for reworked maps.** (Reference file `map-meta.md` updated accordingly.)

### Principle #53: "Must Win 2" Underdogs Are Live When Their Own Pick Is Next
At 0-1 down, an underdog whose OWN pick map (and a true-coinflip decider) remain is NOT a 30% no-hoper. TYLOO at ~30% ML (post Map 1) was a real ~33-36% — and won. When the down-1 team has (a) a competent own-pick map next and (b) a neutral decider, don't over-discount them. The "favorite ~70%" framing in a still-1-1-able series overstates the favorite.

### Principle #54: Decider Pricing Should Collapse Toward 50/50 — Fade Stale Favoritism
At 6-6 in a decider, series ML ≈ map-win probability ≈ ~50/50 (adjusted only for side/economy). Markets that keep the earlier "favorite" priced at 59-63% in a 6-6 decider are over-anchored to prior maps (here, Sharks' Map 1 blowout). The live value was buying the under-priced side (TYLOO at 40.5%) once the scoreline said coinflip.

---

## Updated track record (PGL Astana + IEM Cologne live calls)

| Match | Date | Series ✓ | Notable |
|---|---|---|---|
| Aurora vs HEROIC | 05-09 | ❌ | live HEROIC ML ✅ |
| MongolZ vs magic | 05-09 | ✓ dir | Over 2.5 ❌ ❌ |
| MongolZ vs Falcons | 05-12 | (Falcons led) | +1.5 edge overstated |
| **TYLOO vs Sharks** | 06-04 | ❌ series, ✅ final live call | Map 2 ✅, decider TYLOO ML ✅ after Anubis correction |

**Lesson compounding:** The recurring failure mode is **over-anchoring** — to pre-match favoritism, to live blowouts, or (this time) to stale map data. The fixes (#48-#54) all push the same direction: anchor to the *current* equilibrium (current patch, current scoreline, multi-book consensus) and fade single-signal overreactions in either direction.

---

*Backtest authored 2026-06-04 immediately after match. Pre-match/live analysis: [tyloo-vs-sharks.md](../tyloo-vs-sharks.md). Anubis side-balance correction credit: @phan-kim-phuong.*
