#!/usr/bin/env node
// Fetch event details from HLTV
// Usage: node scripts/hltv-event.js --id <eventId>
//        node scripts/hltv-event.js --name <eventName>
// Example: node scripts/hltv-event.js --id 8047
//          node scripts/hltv-event.js --name "PGL Cluj-Napoca 2026"

const { HLTV } = require('hltv');

const args = process.argv.slice(2);
const flagIdx = args.indexOf('--id') !== -1 ? args.indexOf('--id') : args.indexOf('--name');

if (flagIdx === -1 || !args[flagIdx + 1]) {
  console.error('Usage: node scripts/hltv-event.js --id <eventId>');
  console.error('       node scripts/hltv-event.js --name <eventName>');
  process.exit(1);
}

const useId = args[flagIdx] === '--id';
const value = args.slice(flagIdx + 1).join(' ');

(async () => {
  try {
    const event = useId
      ? await HLTV.getEvent({ id: parseInt(value) })
      : await HLTV.getEventByName({ name: value });

    console.log(JSON.stringify(event, null, 2));
  } catch (err) {
    console.error('Error fetching event:', err.message);
    process.exit(1);
  }
})();
