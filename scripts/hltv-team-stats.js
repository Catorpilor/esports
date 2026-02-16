#!/usr/bin/env node
// Fetch team stats from HLTV (map stats, win rates, match history)
// Primary: tries getTeamStats API
// Fallback: uses WebFetch on stats page URL if API is blocked
// Usage: node scripts/hltv-team-stats.js <teamId> [--months <N>]
// Example: node scripts/hltv-team-stats.js 11861 --months 3

const { HLTV } = require('hltv');

const teamId = parseInt(process.argv[2]);
if (!teamId) {
  console.error('Usage: node scripts/hltv-team-stats.js <teamId> [--months <N>]');
  process.exit(1);
}

const args = process.argv.slice(3);
const monthsIdx = args.indexOf('--months');
const months = monthsIdx !== -1 ? parseInt(args[monthsIdx + 1]) : 3;

const endDate = new Date().toISOString().split('T')[0];
const startDate = new Date(Date.now() - months * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

(async () => {
  try {
    const stats = await HLTV.getTeamStats({
      id: teamId,
      startDate,
      endDate,
    });

    const output = {
      id: stats.id,
      name: stats.name,
      overview: stats.overview,
      currentLineup: stats.currentLineup,
      mapStats: stats.mapStats,
      events: stats.events,
      recentMatches: stats.matches.slice(0, 20).map(m => ({
        date: m.date,
        team1: m.team1,
        team2: m.team2,
        map: m.map,
        result: m.result,
        event: m.event,
      })),
      source: 'hltv-api',
    };

    console.log(JSON.stringify(output, null, 2));
  } catch (apiErr) {
    // API blocked — fallback: print URL for manual/WebFetch access
    console.error(`API blocked (${apiErr.message}). Use WebFetch or web search instead.`);
    console.error(`Stats URL: https://www.hltv.org/stats/teams/${teamId}/?startDate=${startDate}&endDate=${endDate}`);

    // Provide what we CAN get from the non-blocked getTeam endpoint
    try {
      const team = await HLTV.getTeam({ id: teamId });
      const output = {
        id: team.id,
        name: team.name,
        rank: team.rank,
        country: team.country,
        players: team.players,
        source: 'hltv-team-fallback',
        note: 'Team stats API blocked by Cloudflare. Map stats not available via API. Use web search for map-specific win rates.',
        statsUrl: `https://www.hltv.org/stats/teams/${teamId}/?startDate=${startDate}&endDate=${endDate}`,
      };
      console.log(JSON.stringify(output, null, 2));
    } catch (teamErr) {
      console.error('Both endpoints failed:', teamErr.message);
      process.exit(1);
    }
  }
})();
