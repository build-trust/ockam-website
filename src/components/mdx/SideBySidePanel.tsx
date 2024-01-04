import { Box, Flex, ResponsiveValue } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import type { Property } from 'csstype';

import ExcalidrawAnimation from '../ExcalidrawAnimation';

type Props = {
  textOrientation: 'left' | 'right';
  image: 'string';
  animate?: boolean;
  children?: ReactNode;
};

const SideBySidePanel: FC<Props> = ({ textOrientation, image, children, animate }) => {
  const direction = (): ResponsiveValue<Property.FlexDirection> => {
    if (textOrientation === 'left') {
      return {
        base: 'column',
        lg: 'row',
      };
    }
    return {
      base: 'column',
      lg: 'row-reverse',
    };
  };

  return (
    <Flex
      direction={direction()}
      gap="4"
      width="100%"
      mb={{ base: '32' }}
      px={{ base: '8', lg: '0' }}
    >
      <Flex
        width={{ base: '100%', lg: '50%' }}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </Flex>
      <Box width={{ base: '100%', lg: '50%' }}>
        <ExcalidrawAnimation src={image} animate={animate || false} />
      </Box>
    </Flex>
  );
};

export default SideBySidePanel;
