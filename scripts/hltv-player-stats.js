#!/usr/bin/env node
// Fetch player stats from HLTV
// Primary: tries getPlayerStats API (detailed stats)
// Fallback: uses getPlayer API (basic stats + achievements)
// Usage: node scripts/hltv-player-stats.js <playerId> [--months <N>]
// Example: node scripts/hltv-player-stats.js 7938 --months 3

const { HLTV } = require('hltv');

const playerId = parseInt(process.argv[2]);
if (!playerId) {
  console.error('Usage: node scripts/hltv-player-stats.js <playerId> [--months <N>]');
  process.exit(1);
}

const args = process.argv.slice(3);
const monthsIdx = args.indexOf('--months');
const months = monthsIdx !== -1 ? parseInt(args[monthsIdx + 1]) : 3;

const endDate = new Date().toISOString().split('T')[0];
const startDate = new Date(Date.now() - months * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

(async () => {
  // Try detailed stats first
  try {
    const stats = await HLTV.getPlayerStats({
      id: playerId,
      startDate,
      endDate,
    });

    const output = {
      id: stats.id,
      name: stats.name,
      ign: stats.ign,
      age: stats.age,
      country: stats.country,
      team: stats.team,
      overview: stats.overviewStatistics,
      individual: stats.individualStatistics,
      recentMatches: stats.matches.slice(0, 20).map(m => ({
        date: new Date(m.date).toISOString().split('T')[0],
        team1: m.team1,
        team2: m.team2,
        map: m.map,
        kills: m.kills,
        deaths: m.deaths,
        rating: m.rating,
      })),
      source: 'hltv-player-stats',
    };

    console.log(JSON.stringify(output, null, 2));
  } catch (statsErr) {
    // Fallback to basic player profile
    try {
      const player = await HLTV.getPlayer({ id: playerId });
      const output = {
        id: player.id,
        name: player.name,
        ign: player.ign,
        image: player.image,
        age: player.age,
        country: player.country,
        team: player.team,
        statistics: player.statistics,
        achievements: player.achievements.slice(0, 10),
        source: 'hltv-player-fallback',
        note: 'Detailed stats API blocked by Cloudflare. Basic profile stats only.',
        statsUrl: `https://www.hltv.org/stats/players/${playerId}/?startDate=${startDate}&endDate=${endDate}`,
      };
      console.log(JSON.stringify(output, null, 2));
    } catch (playerErr) {
      console.error('Both endpoints failed:', playerErr.message);
      process.exit(1);
    }
  }
})();
