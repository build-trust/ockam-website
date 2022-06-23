import { FunctionComponent } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

const SpeachBubbleTriangle: FunctionComponent<BoxProps & { rotate?: number }> = ({
  rotate,
  ...restProps
}) => (
  <Box
    w={0}
    h={0}
    borderLeftWidth="12px"
    borderRightWidth="12px"
    borderBottomWidth="15px"
    borderColor="transparent"
    borderBottomColor="gray.200"
    transform={`rotate(${rotate || 90}deg)`}
    position="relative"
    _before={{
      content: '""',
      position: 'absolute',
      top: '2px',
      left: '-12px',
      w: 0,
      h: 0,
      borderLeftWidth: '12px',
      borderRightWidth: '12px',
      borderBottomWidth: '15px',
      borderColor: 'transparent',
      borderBottomColor: 'white',
    }}
    {...restProps}
  />
);

export default SpeachBubbleTriangle;
