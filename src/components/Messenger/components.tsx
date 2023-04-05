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
const BlueMessageContainer = styled(MessageContainer)`
  flex-direction: row-reverse;
`;
const Sender = styled.div`
  flex-grow: 1;
  font-size: 14px;
  width: 100%;
  padding: 0 45px;
  order: 1;
  color: #333;
`;
const HostSender = styled(Sender)`
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
  font-size: 14px;
  margin: 2px 10px;
  font-style: italic;
  align-self: center;
  color: #333;
`;
const BlueMessage = styled(Message)`
  background-image: linear-gradient(142.21deg, #4fdab8 4.44%, #52c7ea 94.64%);
  color: white;
  align: right;
`;
const Avatar = styled(ChakraAvatar)`
  align-self: center;
  margin: 0 2 px;
`;

export {
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
};
