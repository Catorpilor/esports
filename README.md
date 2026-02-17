# CS2 Match Analysis

Data-driven Counter-Strike 2 match analysis combining HLTV stats, Polymarket betting odds, map pool analysis, and head-to-head history. Produces pre-match reports with map veto predictions, map-by-map breakdowns, and market value identification for BO1/BO3/BO5 series.

## How It Works

1. Input a Polymarket event slug (e.g., `cs2-faze-prv-2026-02-16`)
2. Fetches HLTV data (match, team stats, player ratings, H2H, rankings) via Node.js scripts
3. Fetches Polymarket odds (moneyline, map winners, O/U, handicap)
4. Generates a full analysis report with veto prediction, map-by-map breakdown, and prediction vs market comparison
5. Saves to `analyses/YYYY-MM-DD/{team1}-vs-{team2}.md`
6. After match concludes, backtests are saved to `analyses/YYYY-MM-DD/backtests/{team1}-vs-{team2}-backtest.md`

## Project Structure

```
cs2/
├── analyses/                    # Match reports by date
│   ├── 2026-02-15/
│   │   └── falcons-vs-faze.md
│   ├── 2026-02-16/
│   │   ├── navi-vs-aurora.md
│   │   ├── faze-vs-parivision.md
│   │   ├── mongolz-vs-b8.md
│   │   ├── mouz-vs-vitality.md
│   │   ├── g2-vs-pain.md
│   │   └── backtests/           # Post-match backtests
│   │       ├── navi-vs-aurora-backtest.md
│   │       ├── faze-vs-parivision-backtest.md
│   │       ├── mongolz-vs-b8-backtest.md
│   │       ├── mouz-vs-vitality-backtest.md
│   │       ├── g2-vs-pain-backtest.md
│   │       └── furia-vs-falcons-backtest.md
│   └── 2026-02-17/
│       ├── faze-vs-astralis.md
│       ├── mouz-vs-fut.md
│       ├── furia-vs-parivision.md
│       └── backtests/
│           ├── mouz-vs-fut-backtest.md
│           └── faze-vs-astralis-backtest.md
├── scripts/                     # HLTV data fetching scripts
│   ├── hltv-match.js
│   ├── hltv-matches.js
│   ├── hltv-team.js
│   ├── hltv-team-stats.js
│   ├── hltv-player-stats.js
│   ├── hltv-results.js
│   ├── hltv-ranking.js
│   └── hltv-event.js
└── package.json                 # hltv npm dependency
```

## Setup

```bash
npm install
```

## HLTV Scripts

All scripts output JSON to stdout.

| Script | Usage |
|--------|-------|
| `hltv-match.js` | `node scripts/hltv-match.js <matchId>` |
| `hltv-matches.js` | `node scripts/hltv-matches.js [--event <id>] [--team <id>]` |
| `hltv-team.js` | `node scripts/hltv-team.js --id <id>` or `--name <name>` |
| `hltv-team-stats.js` | `node scripts/hltv-team-stats.js <teamId> [--months <N>]` |
| `hltv-player-stats.js` | `node scripts/hltv-player-stats.js <playerId> [--months <N>]` |
| `hltv-results.js` | `node scripts/hltv-results.js [--team <id>] [--days <N>]` |
| `hltv-ranking.js` | `node scripts/hltv-ranking.js` |
| `hltv-event.js` | `node scripts/hltv-event.js --id <id>` or `--name <name>` |

## Analysis Reports

Each pre-match report covers:

- **Polymarket Odds** — ML, map winners, O/U 2.5, handicap with volume/liquidity
- **Team Overview** — Rankings, form, win rates, star players
- **Map Pool Analysis** — Win rates per map, classifications (permaban/best/weak)
- **Veto Prediction** — Step-by-step with reasoning
- **Map-by-Map Breakdown** — Historical performance, key players, side analysis, predicted scores
- **Player Matchups** — Star players, AWP duel, IGL comparison
- **H2H History** — Previous meetings with map-level detail
- **Tournament Context** — Stakes, bracket position, format
- **Prediction vs Market** — Edge calculation against Polymarket odds, value play identification

## Backtests

After matches conclude, backtest reports compare predictions against actual results:

- Veto accuracy (predicted vs actual, X/7 score)
- Map-by-map prediction vs outcome
- Market call assessment (value plays that hit or missed)
- Lessons learned fed back into the analysis framework (33 principles and counting)

### Track Record (PGL Cluj-Napoca 2026)

| Metric | Score |
|--------|-------|
| Series Winner | 6/9 (67%) |
| Market Calls | 12/22 (55%) |
| Veto Accuracy | 20/49 (41%) |

## Data Sources

- [HLTV.org](https://www.hltv.org) via [`hltv`](https://www.npmjs.com/package/hltv) npm package
- [Polymarket](https://polymarket.com) Gamma API
