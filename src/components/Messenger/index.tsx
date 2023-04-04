import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Avatar as ChakraAvatar } from '@chakra-ui/react';
import styled, { keyframes, css } from 'styled-components';

const fadeTransitionTimeMs = 2000;

const fadeIn = keyframes`
    from { opacity: 0%; }
    to { opacity: 100%; } 
`;
const fadeTransition = css`
  animation: ${fadeIn} ${fadeTransitionTimeMs / 1000}s ease forwards;
  transition: opacity;
`;

const Messenger = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  height: 400px;
  width: 600px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 0 auto;
  flex-wrap: nowrap;
  position: relative;
  box-shadow: 0 0 200px 10px #52c7ea;
`;

const Heading = styled.div`
  background: #eee;
  height: 80px;
  padding: 5px;
  align-content: center;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  align-self: flex-end;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  position: relative;
`;
const Messages = styled.div`
  display: flex;
  align-content: flex-end;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  color: #333;
`;

const MessageContainer = styled.div`
  ${fadeTransition}
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-top: 5px;
`;
const OckamMessageContainer = styled(MessageContainer)`
  flex-direction: row-reverse;
`;
const Sender = styled.div`
  flex-grow: 1;
  font-size: 11px;
  width: 100%;
  padding: 0 45px;
  order: 1;
  color: #333;
`;
const OckamSender = styled(Sender)`
  text-align: right;
`;
const Message = styled.div`
  background: #ddd;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 0 5px;
  flex-basis: fit-content;
  align-self: flex-start;
  order: 3;
  color: #333;
  max-width: calc(100% - 50px);
`;
const Notice = styled.div`
  ${fadeTransition}
  text-align: center;
  font-size: 10px;
  margin: 2px 10px;
  font-style: italic;
  align-self: center;
  color: #333;
`;
const OckamMessage = styled(Message)`
  background-image: linear-gradient(142.21deg, #4fdab8 4.44%, #52c7ea 94.64%);
  color: white;
  align: right;
`;
const Avatar = styled(ChakraAvatar)`
  align-self: center;
  margin: 0 2 px;
`;
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
};

type ScriptLine = {
  [key: string]: string;
};

const influxScript: ScriptLine[] = [
  { invite: 'influx' },
  { sender: 'influx', message: 'Yo?' },
  { sender: 'ockam', message: "1 sec, I've got an IoT sensor that wants to send you data..." },
  { sender: 'influx', message: "But I'm in a private on-prem network" },
  { sender: 'ockam', message: "That's not going to be a problem" },
  { invite: 'iot' },
  { sender: 'iot', message: 'Hey @Influx 👋' },
  { sender: 'influx', message: "Hi @IoT 👋 We're connected. It worked! Send me what you've got" },
  { sender: 'ockam', message: "Let's goooo!!! Set your data free 🙌" },
];

const confluentScript: ScriptLine[] = [
  { invite: 'producer' },
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
  { invite: 'postgres' },
  { sender: 'postgres', message: 'Yo?' },
  { sender: 'ockam', message: '1 sec, the web server wanted to connect with you...' },
  {
    sender: 'postgres',
    message: "Where are they? I'm in a private subnet. They probably won't be able to reach me",
  },
  {
    sender: 'ockam',
    message:
      "That's why I'm here! I'm going to connect the two of you directly, rather than connecting or opening up networks",
  },
  { invite: 'apache' },
  { sender: 'apache', message: '@postgres hey, can I quickly scan the users table?' },
  { sender: 'postgres', message: 'you got it!' },
  { sender: 'apache', message: 'It worked! That was easy' },
  { sender: 'ockam', message: "Let's goooo!!! Set your data free 🙌" },
];
const scripts = [influxScript, confluentScript, dbAdjacentScript];

const script: ScriptLine[] =
  scripts[Math.min(Math.floor(Math.random() * scripts.length), scripts.length - 1)];

const generateLine = (
  line: ScriptLine,
  idx: number,
  pts: Participant,
  invitedParticipants: string[],
  setInvitedParticipants: Dispatch<SetStateAction<string[]>>
): JSX.Element => {
  let e;
  if (line.sender) {
    if (line.sender === 'ockam') {
      e = (
        <OckamMessageContainer key={`line-${idx}`}>
          <OckamSender>{pts[line.sender].shortname}</OckamSender>
          <Avatar
            borderColor="black"
            src={pts[line.sender].avatar}
            ml={1}
            mr={2}
            size="xs"
            name={pts[line.sender].name}
            style={{ order: 2 }}
          />
          <OckamMessage>{line.message}</OckamMessage>
        </OckamMessageContainer>
      );
    } else {
      e = (
        <MessageContainer key={`line-${idx}`}>
          <Sender>{pts[line.sender].shortname}</Sender>
          <Avatar
            borderColor="#000000"
            src={pts[line.sender].avatar}
            ml={2}
            mr={1}
            size="xs"
            name={pts[line.sender].name}
            style={{ order: 2 }}
          />
          <Message>{line.message}</Message>
        </MessageContainer>
      );
    }
  } else if (line.notice) {
    e = <Notice key={`line-${idx}`}>{line.notice}</Notice>;
  } else if (line.invite) {
    invitedParticipants.push(line.invite);
    setInvitedParticipants(invitedParticipants);
    e = <Notice key={`line-${idx}`}>{pts[line.invite].name} has been invited to the group</Notice>;
  }
  const el = <Row key={`message-${idx}`}>{e}</Row>;
  return el;
};

const MessengerMock: FC = () => {
  const [scriptLine, setScriptLine] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<JSX.Element[]>([]);
  const [invitedParticipants, setInvitedParticipants] = useState<string[]>(['ockam']);
  const { ref } = useInView({
    /* Optional options */
    threshold: 0.3,
    onChange: (inView) => {
      setIsVisible(inView);
    },
  });

  useEffect(() => {
    if (isVisible) {
      if (script.length > scriptLine) {
        const curr = displayedLines;
        const line = script[scriptLine];
        curr.push(
          generateLine(line, scriptLine, participants, invitedParticipants, setInvitedParticipants)
        );
        setDisplayedLines(curr);
        setTimeout(() => {
          setScriptLine(scriptLine + 1);
        }, fadeTransitionTimeMs);
      }
    }
  }, [scriptLine, invitedParticipants, displayedLines, isVisible]);

  const displayParticipants = (): JSX.Element[] => {
    const middleIdx = Math.ceil(invitedParticipants.length / 2);
    return invitedParticipants.map((i, idx) => {
      if (i === 'ockam') {
        return (
          <Avatar
            key={`avatar-${participants[i].shortname}`}
            src={participants[i].avatar}
            name={participants[i].shortname}
            style={{ order: middleIdx }}
          />
        );
      }
      const order = idx > middleIdx ? idx + 1 : idx;
      return (
        <Avatar
          key={`avatar-${participants[i].shortname}`}
          src={participants[i].avatar}
          name={participants[i].shortname}
          style={{ order }}
          size="xs"
        />
      );
    });
  };

  return (
    <Messenger ref={ref}>
      <Heading>{displayParticipants()}</Heading>
      <Messages>{displayedLines.map((el) => el)}</Messages>
    </Messenger>
  );
};
export default MessengerMock;
