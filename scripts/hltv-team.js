#!/usr/bin/env node
// Fetch team overview from HLTV by team ID or name
// Usage: node scripts/hltv-team.js --id <teamId>
//        node scripts/hltv-team.js --name <teamName>
// Example: node scripts/hltv-team.js --id 11861
//          node scripts/hltv-team.js --name "Aurora"

const { HLTV } = require('hltv');

const args = process.argv.slice(2);
const flagIdx = args.indexOf('--id') !== -1 ? args.indexOf('--id') : args.indexOf('--name');

if (flagIdx === -1 || !args[flagIdx + 1]) {
  console.error('Usage: node scripts/hltv-team.js --id <teamId>');
  console.error('       node scripts/hltv-team.js --name <teamName>');
  process.exit(1);
}

const useId = args[flagIdx] === '--id';
const value = args[flagIdx + 1];

(async () => {
  try {
    const team = useId
      ? await HLTV.getTeam({ id: parseInt(value) })
      : await HLTV.getTeamByName({ name: value });

    console.log(JSON.stringify(team, null, 2));
  } catch (err) {
    console.error('Error fetching team:', err.message);
    process.exit(1);
  }
})();
