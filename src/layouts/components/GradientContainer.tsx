import { Flex } from '@chakra-ui/react';
import styled from 'styled-components';

const GradientContainer = styled(Flex)`
  background-image: radial-gradient(ellipse 300% 140% at bottom, transparent 70%, #f9f9f9 70%),
    radial-gradient(ellipse 150% 130% at top, transparent 70%, #f9f9f9 70%),
    radial-gradient(
      ellipse 300% 140% at bottom,
      transparent 65%,
      rgba(0, 0, 0, 0.07) 70%,
      transparent 70%
    ),
    radial-gradient(
      ellipse 150% 130% at top,
      transparent 65%,
      rgba(0, 0, 0, 0.07) 70%,
      transparent 70%
    ),
    linear-gradient(#f9f9f9, #f9f9f9), linear-gradient(to right, #52c7ea, #4fdab8);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat-x, no-repeat, no-repeat;
  background-size:
    100% 100%,
    100%,
    100%,
    100% 100%,
    100% 100%,
    100%,
    100% 100%,
    100% 100%;
  background-position:
    0 0,
    0 0,
    0 0,
    0 0,
    calc(1px - 1px) calc(75vh - 0px),
    calc(1px - 1px),
    calc(1px - 1px),
    0 0;
`;

export default GradientContainer;
