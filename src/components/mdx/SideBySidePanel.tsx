import { Box, Flex } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import ExcalidrawAnimation from '../ExcalidrawAnimation';

type Props = {
  textOrientation: 'left' | 'right';
  image: 'string';
  animate?: boolean;
  children?: ReactNode;
};
const SideBySidePanel: FC<Props> = ({ textOrientation, image, children, animate }) => {
  const direction = (): { base: string; lg?: string } => {
    if (textOrientation === 'left') return { base: 'column', lg: 'row' };
    return { base: 'column', lg: 'row-reverse' };
  };

  return (
    <Flex flexDirection={direction()} gap="4" width="100%" mb={{ base: '32' }}>
      <Box width={{ base: '100%', lg: '50%' }}>{children}</Box>
      <Box width={{ base: '100%', lg: '50%' }}>
        <ExcalidrawAnimation src={image} animate={animate || false} />
      </Box>
    </Flex>
  );
};

export default SideBySidePanel;
