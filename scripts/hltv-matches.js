#!/usr/bin/env node
// List upcoming/live matches from HLTV, optionally filtered by event or team
// Usage: node scripts/hltv-matches.js [--event <eventId>] [--team <teamId>]
// Example: node scripts/hltv-matches.js --event 8047
//          node scripts/hltv-matches.js --team 11861

const { HLTV } = require('hltv');

const args = process.argv.slice(2);
const options = {};

const eventIdx = args.indexOf('--event');
if (eventIdx !== -1) options.eventIds = [parseInt(args[eventIdx + 1])];

const teamIdx = args.indexOf('--team');
if (teamIdx !== -1) options.teamIds = [parseInt(args[teamIdx + 1])];

(async () => {
  try {
    const matches = await HLTV.getMatches(options);

    const output = matches.map(m => ({
      id: m.id,
      date: m.date ? new Date(m.date).toISOString() : null,
      team1: m.team1 || null,
      team2: m.team2 || null,
      format: m.format || null,
      event: m.event || null,
      live: m.live,
      stars: m.stars,
      title: m.title || null,
    }));

    console.log(JSON.stringify(output, null, 2));
  } catch (err) {
    console.error('Error fetching matches:', err.message);
    process.exit(1);
  }
})();
