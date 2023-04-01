import { FC, useEffect, useState } from 'react';
import { Avatar as ChakraAvatar } from '@chakra-ui/react';
import styled, { keyframes, css } from 'styled-components';

const fadeTransitionTimeMs = 1800;

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
`;
const Notice = styled.div`
  ${fadeTransition}
  text-align: center;
  font-size: 10px;
  margin: 2px 10px;
  font-style: italic;
  align-self: center;
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
};

type ScriptLine = {
  [key: string]: string;
};

const script: ScriptLine[] = [
  { invite: 'postgres' },
  { sender: 'postgres', message: 'Yo?' },
  { sender: 'ockam', message: '1 sec, the web server wanted to connect with you...' },
  { invite: 'apache' },
  { sender: 'apache', message: '@postgres hey, can I quickly scan the users table?' },
  { sender: 'postgres', message: 'you got it!' },
  { invite: 'kafka' },
  { invite: 'iot' },
  { sender: 'kafka', message: 'Sup?' },
];

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
        <OckamMessageContainer>
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
        <MessageContainer>
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
    e = <Notice>{line.notice}</Notice>;
  } else if (line.invite) {
    invitedParticipants.push(line.invite);
    setInvitedParticipants(invitedParticipants);
    e = <Notice>{pts[line.invite].name} has been invited to the group</Notice>;
  }
  const el = <Row key={`message-${idx}`}>{e}</Row>;
  return el;
};

const MessengerMock: FC = () => {
  const [scriptLine, setScriptLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<JSX.Element[]>([]);
  const [invitedParticipants, setInvitedParticipants] = useState<string[]>(['ockam']);

  useEffect(() => {
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
  }, [scriptLine, invitedParticipants, displayedLines]);

  const displayParticipants = (): JSX.Element[] => {
    const middleIdx = Math.ceil(invitedParticipants.length / 2);
    return invitedParticipants.map((i, idx) => {
      if (i === 'ockam') {
        return (
          <Avatar
            src={participants[i].avatar}
            name={participants[i].shortname}
            style={{ order: middleIdx }}
          />
        );
      }
      const order = idx > middleIdx ? idx + 1 : idx;
      return (
        <Avatar
          src={participants[i].avatar}
          name={participants[i].shortname}
          style={{ order }}
          size="xs"
        />
      );
    });
  };

  return (
    <Messenger>
      <Heading>{displayParticipants()}</Heading>
      <Messages>{displayedLines.map((el) => el)}</Messages>
    </Messenger>
  );
};
export default MessengerMock;
