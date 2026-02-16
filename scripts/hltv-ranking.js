#!/usr/bin/env node
// Fetch HLTV team rankings
// Usage: node scripts/hltv-ranking.js [--year <Y> --month <M> --day <D>]
// Example: node scripts/hltv-ranking.js
//          node scripts/hltv-ranking.js --year 2026 --month february --day 3

const { HLTV } = require('hltv');

const args = process.argv.slice(2);
const options = {};

const yearIdx = args.indexOf('--year');
if (yearIdx !== -1) options.year = args[yearIdx + 1];

const monthIdx = args.indexOf('--month');
if (monthIdx !== -1) options.month = args[monthIdx + 1];

const dayIdx = args.indexOf('--day');
if (dayIdx !== -1) options.day = args[dayIdx + 1];

(async () => {
  try {
    const rankings = await HLTV.getTeamRanking(options);

    const output = rankings.map(r => ({
      rank: r.place,
      team: r.team,
      points: r.points,
      change: r.change,
      isNew: r.isNew,
    }));

    console.log(JSON.stringify(output, null, 2));
  } catch (err) {
    console.error('Error fetching rankings:', err.message);
    process.exit(1);
  }
})();
