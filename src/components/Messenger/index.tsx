import { FC, useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Box } from '@chakra-ui/react';

import { randomScript, ScriptLine } from './config/scripts';
import Participants, { Participant } from './config/participants';
import {
  fadeTransitionTimeMs,
  Messenger,
  Heading,
  Row,
  Messages,
  MessageContainer,
  BlueMessageContainer,
  Sender,
  HostSender,
  Message,
  Notice,
  BlueMessage,
  Avatar,
} from './components';

type PerformaceState = {
  invited?: string[];
  scriptLine?: number;
  spoken?: JSX.Element[];
  host?: string;
};
const MessengerMock: FC = () => {
  const [script] = useState(randomScript());
  const [participants] = useState(Participants);
  const [performance, setPerformance] = useState<PerformaceState>({
    invited: [],
    scriptLine: 0,
    spoken: [],
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isPlayable, setIsPlayable] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (): void => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const { ref } = useInView({
    threshold: 0.65,
    onChange: (inView) => {
      setIsVisible(inView);
    },
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible && scrollPosition > 300) {
      setIsPlayable(true);
    } else {
      setIsPlayable(false);
    }
  }, [scrollPosition, isVisible]);

  const invited = performance.invited || [];
  const scriptLine = performance.scriptLine || 0;
  const displayedLines = performance.spoken || [];

  const generateLine = useCallback(
    (line: ScriptLine, idx: number, pts: Participant, ps: PerformaceState): PerformaceState => {
      let e;
      const p = { ...ps };
      if (line.sender) {
        if (line.sender === p.host) {
          e = (
            <BlueMessageContainer key={`line-${idx}`}>
              <HostSender>{pts[line.sender].shortname}</HostSender>
              <Avatar
                borderColor="black"
                src={pts[line.sender].avatar}
                ml={1}
                mr={2}
                size="xs"
                name={pts[line.sender].name}
                style={{ order: 2 }}
              />
              <BlueMessage>{line.message}</BlueMessage>
            </BlueMessageContainer>
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
        if (!p.host) {
          p.host = line.invite;
          e = <Notice key={`line-${idx}`}>{pts[line.invite].name} has created a group</Notice>;
        } else {
          e = (
            <Notice key={`line-${idx}`}>
              {pts[line.invite].name} has been invited to the group
            </Notice>
          );
        }
        p.invited?.push(line.invite);
      }
      const el = <Row key={`message-${idx}`}>{e}</Row>;
      p.scriptLine = idx;
      if (!p.spoken) p.spoken = [];
      p.spoken.push(el);
      return p;
    },
    []
  );

  const reset = (): void => {
    setPerformance({
      scriptLine: 0,
    });
  };
  useEffect(() => {
    if (isPlayable) {
      if (script.length > scriptLine) {
        if (scriptLine + 1 > (performance.spoken?.length || 0)) {
          const line = script[scriptLine];
          const p = { ...performance };
          const state = generateLine(line, scriptLine, participants, p);
          setPerformance(state);
          const next = (): void => {
            setTimeout(() => {
              const nextState = { ...state };
              nextState.scriptLine = scriptLine + 1;
              setPerformance(nextState);
            }, fadeTransitionTimeMs);
          };
          next();
        }
      } else {
        setTimeout(() => {
          reset();
        }, 10000);
      }
    }
  }, [performance, isPlayable, scriptLine, generateLine, participants, script]);

  const displayParticipants = (): JSX.Element[] => {
    const middleIdx = Math.ceil(invited.length / 2);
    return invited.map((i, idx) => {
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
    <Box width={{ base: 380, lg: 600 }} margin="0 auto">
      <Messenger ref={ref}>
        <Heading>{displayParticipants()}</Heading>
        <Messages>{displayedLines.map((el) => el)}</Messages>
      </Messenger>
    </Box>
  );
};
export default MessengerMock;
