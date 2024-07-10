import { Flex } from '@chakra-ui/react';
import styled, { FlattenSimpleInterpolation, css } from 'styled-components';

type Props = {
  h1?: number;
  h2?: number;
  $bottomonly?: string;
};

const GradientContainer = styled(Flex)<Props>`
  background-image:
    ${(props): false | FlattenSimpleInterpolation | undefined =>
        !props.$bottomonly &&
        css`radial-gradient(ellipse 300% 140% at bottom, transparent 70%, #f9f9f9 70%),`}
      radial-gradient(ellipse 150% 130% at top, transparent 70%, #f9f9f9 70%),
    ${(props): false | FlattenSimpleInterpolation | undefined =>
        !props.$bottomonly &&
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
    ${(props): false | FlattenSimpleInterpolation | undefined =>
        !props.$bottomonly && css`no-repeat,`}
      no-repeat,
    ${(props): false | FlattenSimpleInterpolation | undefined =>
        !props.$bottomonly && css`no-repeat,`}
      no-repeat,
    no-repeat,
    no-repeat;
  background-size:
    ${(props): false | FlattenSimpleInterpolation | undefined =>
        !props.$bottomonly && css`100% 100%,`}
      100%,
    ${(props): false | FlattenSimpleInterpolation | undefined => !props.$bottomonly && css`100%,`}
      100% 100%,
    100%,
    100%,
    100% 100%;
  background-position:
    ${(props): false | FlattenSimpleInterpolation | undefined => !props.$bottomonly && css`0 0,`} 0
      0,
    ${(props): false | FlattenSimpleInterpolation | undefined => !props.$bottomonly && css`0 0,`} 0
      0,
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
