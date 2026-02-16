#!/usr/bin/env node
// Fetch full match data from HLTV by match ID
// Usage: node scripts/hltv-match.js <matchId>
// Example: node scripts/hltv-match.js 2389960

const { HLTV } = require('hltv');

const matchId = parseInt(process.argv[2]);
if (!matchId) {
  console.error('Usage: node scripts/hltv-match.js <matchId>');
  process.exit(1);
}

(async () => {
  try {
    const match = await HLTV.getMatch({ id: matchId });

    const output = {
      id: match.id,
      status: match.status,
      date: match.date ? new Date(match.date).toISOString() : null,
      event: match.event,
      format: match.format,
      team1: match.team1,
      team2: match.team2,
      winnerTeam: match.winnerTeam || null,
      vetoes: match.vetoes,
      maps: match.maps.map(m => ({
        name: m.name,
        result: m.result || null,
        statsId: m.statsId || null,
      })),
      players: match.players,
      headToHead: match.headToHead,
      odds: match.odds,
      playerOfTheMatch: match.playerOfTheMatch || null,
      highlights: match.highlights,
      streams: match.streams.map(s => ({ name: s.name, link: s.link, viewers: s.viewers })),
    };

    console.log(JSON.stringify(output, null, 2));
  } catch (err) {
    console.error('Error fetching match:', err.message);
    process.exit(1);
  }
})();
