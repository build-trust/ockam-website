import { FunctionComponent } from 'react';
import { Box, Flex, FlexProps } from '@chakra-ui/react';

import SpeachBubbleTriangle from './SpeachBubbleTriangle';

type CardProps = FlexProps & {
  speachBubbleTriangle?: 'left' | 'right';
  boldBorderPosition?: 'Left' | 'Right' | 'Top' | 'Bottom';
  boldBorderOnHover?: boolean;
  boldBorderGradient?: string;
  boldBorderColor?: string;
  boldBorderSize?: FlexProps['borderWidth'];
};

// eslint-disable-next-line complexity
const getBoldBorderAbsoluteStyles = ({
  boldBorderPosition,
  boldBorderColor,
  borderRadius,
  boldBorderGradient,
  boldBorderSize,
}: Pick<
  CardProps,
  | 'boldBorderColor'
  | 'boldBorderGradient'
  | 'borderRadius'
  | 'boldBorderPosition'
  | 'boldBorderSize'
>): Partial<FlexProps> => {
  const boldBorderAbsolutePosition = {
    left: boldBorderPosition !== 'Right' && 0,
    right: boldBorderPosition !== 'Left' && 0,
    top: boldBorderPosition !== 'Bottom' && 0,
    bottom: boldBorderPosition !== 'Left' && 0,
  };

  const boldBorderAbsoluteRadius = {
    borderTopLeftRadius:
      boldBorderPosition === 'Left' || boldBorderPosition === 'Top' ? borderRadius : 0,
    borderTopRightRadius:
      boldBorderPosition === 'Right' || boldBorderPosition === 'Top' ? borderRadius : 0,
    borderBottomLeftRadius:
      boldBorderPosition === 'Left' || boldBorderPosition === 'Bottom' ? borderRadius : 0,
    borderBottomRightRadius:
      boldBorderPosition === 'Right' || boldBorderPosition === 'Bottom' ? borderRadius : 0,
  };

  return {
    [`border${boldBorderPosition}Color`]: 'transparent',
    _before: {
      content: '""',
      position: 'absolute',
      display: 'block',
      h: boldBorderPosition === 'Left' || boldBorderPosition === 'Right' ? 'full' : boldBorderSize,
      w: boldBorderPosition === 'Left' || boldBorderPosition === 'Right' ? boldBorderSize : 'full',
      bg: boldBorderGradient || boldBorderColor,
      ...boldBorderAbsolutePosition,
      ...boldBorderAbsoluteRadius,
    },
  };
};

// eslint-disable-next-line complexity
const Card: FunctionComponent<CardProps> = ({
  children,
  speachBubbleTriangle,
  boldBorderPosition = 'Bottom',
  boldBorderOnHover = false,
  boldBorderGradient,
  boldBorderColor = 'avocado.500',
  boldBorderSize = '4px',
  borderRadius = '4px',
  _hover,
  ...restProps
}) => {
  const boldBorderAbsoluteStyles = getBoldBorderAbsoluteStyles({
    boldBorderPosition,
    boldBorderColor,
    boldBorderGradient,
    borderRadius,
    boldBorderSize,
  });

  const boldBorderRegularStyles = {
    [`border${boldBorderPosition}`]: boldBorderSize,
    [`border${boldBorderPosition}Color`]: boldBorderColor,
  };

  const boldBorderShouldBeAbsolute = !!boldBorderGradient || !!boldBorderOnHover;

  return (
    <Flex
      position="relative"
      direction="column"
      maxW="lg"
      bg="white"
      border="1px"
      borderColor="gray.200"
      borderRadius={borderRadius}
      _hover={{
        ..._hover,
        ...(boldBorderOnHover ? boldBorderAbsoluteStyles : {}),
      }}
      {...(boldBorderShouldBeAbsolute && !boldBorderOnHover ? boldBorderAbsoluteStyles : {})}
      {...(!boldBorderShouldBeAbsolute ? boldBorderRegularStyles : {})}
      {...restProps}
    >
      {!!speachBubbleTriangle && (
        <Box
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
          {...{ [speachBubbleTriangle]: '-5' }}
        >
          <SpeachBubbleTriangle {...(speachBubbleTriangle === 'left' ? { rotate: -90 } : {})} />
        </Box>
      )}

      {children}
    </Flex>
  );
};

export default Card;
