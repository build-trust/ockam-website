import { FunctionComponent } from 'react';
import { Box, BoxProps, useTheme } from '@chakra-ui/react';

import BorderDot from '@components/BorderDot';

const LineDivider: FunctionComponent<BoxProps & { gradientDir?: 'fromBottomToTop' }> = ({
  gradientDir,
  ...restProps
}) => {
  const { gradients } = useTheme();

  return (
    <Box
      w="3px"
      borderBottomRadius="3px"
      position="absolute"
      left="50%"
      bg={gradients.primary}
      {...(gradientDir === 'fromBottomToTop'
        ? { transform: 'rotate(180deg) translateX(50%)' }
        : { transform: 'translateX(-50%)' })}
      {...restProps}
    />
  );
};

export const DashedLineDivider: FunctionComponent<BoxProps & { withDot?: boolean }> = ({
  withDot,
  ...restProps
}) => (
  <Box
    display={{ base: 'none', lg: 'block' }}
    position="absolute"
    right="1.5px"
    top={0}
    w="50%"
    h="full"
    zIndex={-1}
    borderLeft="dashed 2px"
    borderColor="avocado.100"
    {...restProps}
  >
    {withDot && <BorderDot left="-8.5px" />}
  </Box>
);

export default LineDivider;
