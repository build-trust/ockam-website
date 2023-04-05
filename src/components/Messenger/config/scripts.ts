type ScriptLine = {
  [key: string]: string;
};

const influxScript: ScriptLine[] = [
  { invite: 'iot' },
  { invite: 'ockam' },
  { sender: 'iot', message: "I've got some data I need to send to InfluxDB" },
  { sender: 'ockam', message: 'Ok, let me get them for you' },
  { invite: 'influx' },
  { sender: 'influx', message: 'Yo?' },
  { sender: 'ockam', message: "Hey @Influx, I've got @IoT here who wants to send you some data" },
  {
    sender: 'influx',
    message:
      "No can do, sorry. I'm in a private on-prem data center and we're not going to expose my ports directly to the internet",
  },
  {
    sender: 'ockam',
    message: "I've already connected the two of you! No exposing yourself to the internet required",
  },
  { sender: 'iot', message: 'Hey @Influx 👋' },
  { sender: 'influx', message: '🤯' },
  { sender: 'influx', message: "Hi @IoT 👋 We're connected. It worked! Send me what you've got" },
  { sender: 'ockam', message: "Let's goooo!!! Set your data free 🙌" },
];

const confluentScript: ScriptLine[] = [
  { invite: 'producer' },
  { invite: 'ockam' },
  { sender: 'producer', message: 'Hey @Ockam, I need send some data to a Kafka consumer' },
  { sender: 'ockam', message: 'No problem, let me add them...' },
  { sender: 'producer', message: 'Wait...' },
  {
    sender: 'producer',
    message:
      "It contains Personally Identifiable Information (PII), I don't want to send it through Confluent Cloud like we normally do",
  },
  { sender: 'ockam', message: 'I see!' },
  {
    sender: 'ockam',
    message:
      "It's fine though, I'll set it up so it's encrypted before it leaves you and only the consumer can decrypt it",
  },
  { invite: 'confluent' },
  { invite: 'consumer' },
  { sender: 'ockam', message: 'You all ready?' },
  { sender: 'consumer', message: "Yep, let's do this" },
  { sender: 'confluent', message: '🙈' },
  { sender: 'producer', message: '@Consumer sent! You get it?' },
  { sender: 'consumer', message: "Got it! Woah, I didn't even have to change any code!!" },
  { sender: 'confluent', message: "And I couldn't see it 😅" },
  { sender: 'ockam', message: "Let's goooo!!! Set your data free 🙌" },
];

const dbAdjacentScript: ScriptLine[] = [
  { invite: 'apache' },
  { invite: 'ockam' },
  { sender: 'apache', message: 'Hey @Ockam, I need to connect to the production database' },
  { sender: 'ockam', message: '1 sec, I can make that happen...' },
  { invite: 'postgres' },
  {
    sender: 'ockam',
    message: 'Welcome to the party @Postgres 😁. The @Web server wanted to connect to you',
  },
  {
    sender: 'postgres',
    message: "np. I'm in a private subnet. You'll need to update the security groups...",
  },
  { sender: 'postgres', message: 'And the NACLs...' },
  { sender: 'postgres', message: "And the make sure they're connecting over TLS..." },
  { sender: 'ockam', message: 'Wait. Stop.' },
  { sender: 'postgres', message: 'Actually, are they even in the same network?' },
  { sender: 'ockam', message: "It's already done" },
  { sender: 'apache', message: 'Hey @Postgres 👋' },
  { sender: 'postgres', message: 'Oh, you can already talk to me!?' },
  { sender: 'postgres', message: "And it's encrypted!" },
  { sender: 'ockam', message: "Let's goooo!!! Set your data free 🙌" },
];

const lotsOfThingsScript: ScriptLine[] = [
  { invite: 'app' },
  { invite: 'ockam' },
  { sender: 'app', message: 'Hey @Ockam, I need to connect to a couple of things' },
  {
    sender: 'app',
    message: "Can you connect me to the InfluxDB cluster in my company's private on-prem network?",
  },
  { sender: 'ockam', message: 'Not a problem!' },
  { invite: 'influx' },
  { sender: 'influx', message: 'Hey @App, what have you got for me?' },
  { sender: 'app', message: 'Sending it through now...' },
  {
    sender: 'app',
    message:
      "@Ockam, I need to send some messages using Kafka, but I don't want Confluent Cloud to be see my data",
  },
  { sender: 'ockam', message: 'I got you...' },
  { invite: 'confluent' },
  { invite: 'consumer' },
  { sender: 'app', message: "I've got the data you need @Consumer. Coming through now" },
  { sender: 'consumer', message: 'Cheers, got it.' },
  { sender: 'confluent', message: '🙈' },
  { sender: 'confluent', message: "Seriously though, I couldn't see a thing. Nice one." },
  {
    sender: 'app',
    message:
      'A few more for you @Ockam. I need the production database, and some of the fleet of IoT devices',
  },
  { sender: 'ockam', message: "Yeeaahh... let's really get this party started!" },
  { invite: 'postgres' },
  { invite: 'meter' },
  { invite: 'battery' },
  { invite: 'inverter' },
  { invite: 'pv' },
  { invite: 'utility' },
  { sender: 'inverter', message: "You're all here! 👋" },
  {
    sender: 'utility',
    message:
      "Hey all, we've got exceptionally high demand on the grid right now and a power station is offline",
  },
  { sender: 'app', message: '@PV can you send excess solar back in?' },
  { sender: 'pv', message: '@Battery how you looking?' },
  {
    sender: 'battery',
    message: "I'm fully charged 🔋 We can comfortably send in any excess solar",
  },
  { sender: 'pv', message: '@Inverter you know what to do then!' },
  { sender: 'inverter', message: "Roger 🙏. @Utility it's on its way" },
  { sender: 'utility', message: "That's a huge help, thank you!" },
  {
    sender: 'confluent',
    message: "There's some events coming through now, I still can't see what they are though 🙈",
  },
  { sender: 'consumer', message: 'Yep, IoT data has arrived here' },
  { sender: 'influx', message: 'Here too' },
  { sender: 'postgres', message: '👍' },
  { sender: 'app', message: 'Thanks everyone!' },
  { sender: 'ockam', message: 'Just happy to be able to bring you all together 😁' },
];
const scripts = [influxScript, confluentScript, dbAdjacentScript, lotsOfThingsScript];

const randomScript = (): ScriptLine[] =>
  scripts[Math.min(Math.floor(Math.random() * scripts.length), scripts.length - 1)];

export { scripts, influxScript, confluentScript, dbAdjacentScript, randomScript };
export type { ScriptLine };
