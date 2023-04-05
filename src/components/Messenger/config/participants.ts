type ParticipantDetails = {
  name: string;
  avatar: string;
  shortname: string;
};
type Participant = {
  [key: string]: ParticipantDetails;
};
const participants: Participant = {
  ockam: { name: 'Ockam', avatar: '/messenger/logo.ockam.png', shortname: 'Ockam' },
  postgres: {
    name: 'Production DB (Postgres)',
    avatar: '/messenger/logo.postgres.png',
    shortname: 'Postgres',
  },
  kafka: { name: 'Message Bus (Kafka)', avatar: '/messenger/logo.kafka.png', shortname: 'Kafka' },
  apache: { name: 'Web Server (Apache)', avatar: '/messenger/logo.apache.png', shortname: 'Web' },
  iot: { name: 'Sensor (IoT)', avatar: '/messenger/logo.iot.png', shortname: 'IoT' },
  influx: { name: 'InfluxDB', avatar: '/messenger/logo.influx.png', shortname: 'InfluxDB' },
  confluent: {
    name: 'Confluent Cloud',
    avatar: '/messenger/logo.confluent.png',
    shortname: 'Confluent',
  },
  producer: { name: 'Kafka Producer', avatar: '/messenger/logo.kafka.png', shortname: 'Producer' },
  consumer: { name: 'Kafka Consumer', avatar: '/messenger/logo.kafka.png', shortname: 'Consumer' },
  app: { name: 'Application', avatar: '', shortname: 'App' },
  meter: { name: 'Smart Power Meter (IoT)', avatar: '', shortname: 'Smart Meter' },
  battery: { name: 'Smart Battery (IoT)', avatar: '', shortname: 'Smart Battery' },
  inverter: { name: 'Inverter (IoT)', avatar: '', shortname: 'Inverter' },
  pv: { name: 'Photovoltaic Panels (IoT)', avatar: '', shortname: 'PV' },
  utility: { name: 'Electricity Grid Provider', avatar: '', shortname: 'Power Grid' },
};

export type { ParticipantDetails, Participant };
export default participants;
