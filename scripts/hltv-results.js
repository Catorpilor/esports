#!/usr/bin/env node
// Fetch recent match results from HLTV
// Primary: tries getResults API
// Fallback: uses getMatches to show upcoming/recent matches
// Usage: node scripts/hltv-results.js [--team <teamId>] [--event <eventId>] [--days <N>]
// Example: node scripts/hltv-results.js --team 11861 --days 30

const { HLTV } = require('hltv');

const args = process.argv.slice(2);
const options = {};

const teamIdx = args.indexOf('--team');
if (teamIdx !== -1) options.teamIds = [parseInt(args[teamIdx + 1])];

const eventIdx = args.indexOf('--event');
if (eventIdx !== -1) options.eventIds = [parseInt(args[eventIdx + 1])];

const daysIdx = args.indexOf('--days');
const days = daysIdx !== -1 ? parseInt(args[daysIdx + 1]) : 30;

options.startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
options.endDate = new Date().toISOString().split('T')[0];

(async () => {
  try {
    const results = await HLTV.getResults(options);

    const output = results.map(r => ({
      id: r.id,
      date: new Date(r.date).toISOString().split('T')[0],
      team1: r.team1,
      team2: r.team2,
      result: r.result,
      format: r.format,
      map: r.map || null,
      stars: r.stars,
    }));

    console.log(JSON.stringify(output, null, 2));
  } catch (err) {
    console.error(`Results API blocked (${err.message}).`);
    console.error('Fallback: Use hltv-matches.js to list upcoming matches, or hltv-match.js with specific match IDs.');
    console.error('Or use web search: "team name HLTV results 2026"');

    // If team filter was used, try to at least list their upcoming matches
    if (options.teamIds) {
      try {
        const matches = await HLTV.getMatches({ teamIds: options.teamIds });
        console.log(JSON.stringify({
          note: 'Results API blocked. Showing upcoming/live matches instead.',
          matches: matches.map(m => ({
            id: m.id,
            date: m.date ? new Date(m.date).toISOString() : null,
            team1: m.team1,
            team2: m.team2,
            format: m.format,
            event: m.event,
            live: m.live,
          })),
          source: 'hltv-matches-fallback',
        }, null, 2));
      } catch (fallbackErr) {
        process.exit(1);
      }
    } else {
      process.exit(1);
    }
  }
})();
