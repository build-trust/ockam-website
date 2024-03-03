import { Flex } from '@chakra-ui/react';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';

type Props = {
  bottomOnly?: boolean;
  h1?: number;
  h2?: number;
};

const GradientContainer = styled(Flex)<Props>`
  background-image:
    ${({ bottomOnly }): false | FlattenSimpleInterpolation | undefined =>
        !bottomOnly &&
        css`radial-gradient(ellipse 300% 140% at bottom, transparent 70%, #f9f9f9 70%),`}
      radial-gradient(ellipse 150% 130% at top, transparent 70%, #f9f9f9 70%),
    ${({ bottomOnly }): false | FlattenSimpleInterpolation | undefined =>
        !bottomOnly &&
        css`radial-gradient(
      ellipse 300% 140% at bottom,
      transparent 65%,
      rgba(0, 0, 0, 0.07) 70%,
      transparent 70%
    ),`}
      radial-gradient(
        ellipse 150% 130% at top,
        transparent 65%,
        rgba(0, 0, 0, 0.07) 70%,
        transparent 70%
      ),
    linear-gradient(to right, #52c7ea, #4fdab8);
  background-repeat:
    ${({ bottomOnly }): false | FlattenSimpleInterpolation | undefined =>
        !bottomOnly && css`no-repeat,`}
      no-repeat,
    ${({ bottomOnly }): false | FlattenSimpleInterpolation | undefined =>
        !bottomOnly && css`no-repeat,`}
      no-repeat,
    no-repeat,
    no-repeat;
  background-size:
    ${({ bottomOnly }): false | FlattenSimpleInterpolation | undefined =>
        !bottomOnly && css`100% 100%,`}
      100%,
    ${({ bottomOnly }): false | FlattenSimpleInterpolation | undefined => !bottomOnly && css`100%,`}
      100% 100%,
    100%,
    100%,
    100% 100%;
  background-position:
    ${({ bottomOnly }): false | FlattenSimpleInterpolation | undefined => !bottomOnly && css`0 0,`}
      0 0,
    ${({ bottomOnly }): false | FlattenSimpleInterpolation | undefined => !bottomOnly && css`0 0,`}
      0 0,
    calc(1px - 1px),
    calc(1px - 1px),
    0 0;

  align-content: center;
  justify-content: center;

  padding-bottom: 20em;
  margin-bottom: -16em;
  height: fit-content;
`;

export default GradientContainer;
