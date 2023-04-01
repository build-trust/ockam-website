import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

const Word = styled.span`
  transition: opacity 1s;
`;

type Props = {
  words: string[];
  interval?: number;
};

const RotatingText: FC<Props> = ({ words, interval }) => {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    const timeout = interval || 2000;
    setTimeout(() => {
      const next = position === words.length - 1 ? 0 : position + 1;
      setPosition(next);
    }, timeout);
  });
  return <Word>{words[position]}</Word>;
};
export default RotatingText;
