import { FunctionComponent } from 'react';
import { Box, BoxProps, useTheme } from '@chakra-ui/react';

const StepsLabel: FunctionComponent<BoxProps> = ({ children, ...restProps }) => {
  const { gradients } = useTheme();

  return (
    <Box
      textTransform="uppercase"
      position="relative"
      color="white"
      fontSize="md"
      fontWeight="bold"
      p={2}
      borderRadius="4px"
      lineHeight={1}
      bg={gradients.secondaryGradient}
      {...restProps}
    >
      {children}
    </Box>
  );
};

export default StepsLabel;
