import { Box, Flex, ResponsiveValue } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import type { Property } from 'csstype';

import ExcalidrawAnimation from '../ExcalidrawAnimation';

type Props = {
  textOrientation: 'left' | 'right';
  image: string;
  animate?: boolean;
  children?: ReactNode;
  alignItems?: 'start' | 'end' | 'center';
  isPanel?: boolean;
};

const SideBySidePanel: FC<Props> = ({
  textOrientation,
  image,
  children,
  animate,
  alignItems,
  isPanel,
}) => {
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

  const panelProps = (): {} => {
    if (!isPanel)
      return {
        mb: { base: '32' },
        px: { base: '8', lg: '0' },
      };
    return {
      borderRadius: '2xl',
      backgroundColor: 'white',
      boxShadow: '2xl',
      overflow: 'hidden',
      px: { base: '8', lg: '8' },
      py: { base: '8', lg: '8' },
      mb: { base: '8', lg: '8 ' },
    };
  };

  return (
    <Flex direction={direction()} gap="4" width="100%" {...panelProps()}>
      <Flex
        width={{
          base: '100%',
          lg: '45%',
          xl: '40%',
        }}
        direction="column"
        alignItems={alignItems || 'center'}
        justifyContent="center"
      >
        {children}
      </Flex>
      <Box
        width={{
          base: '100%',
          lg: '55%',
          xl: '60%',
        }}
        h={{
          base: '50vh',
          lg: 'auto',
          xl: 'auto',
        }}
        maxH={{
          base: '50vh',
          lg: 'min-content',
          xl: 'min-content',
        }}
      >
        <ExcalidrawAnimation src={image} animate={animate || false} />
      </Box>
    </Flex>
  );
};

export default SideBySidePanel;
