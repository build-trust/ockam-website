import { Box, Flex, ResponsiveValue } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import type { Property } from 'csstype';

import ExcalidrawAnimation from '../ExcalidrawAnimation';

type Props = {
  textOrientation: 'left' | 'right';
  image: string;
  aspect?: 'width' | 'height';
  animate?: boolean;
  children?: ReactNode;
  alignItems?: ResponsiveValue<'start' | 'end' | 'center'>;
  isPanel?: boolean;
  isMinimal?: boolean;
  width?: ResponsiveValue<(string & {}) | '3xl' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'xs' | '4xl'>;
};

const SideBySidePanel: FC<Props> = ({
  textOrientation,
  image,
  aspect,
  children,
  animate,
  alignItems,
  isPanel,
  isMinimal,
  width,
}) => {
  const direction = (): ResponsiveValue<Property.FlexDirection> => {
    if (isMinimal) return 'column';
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
        width: width || '100%',
      };
    if (isMinimal) {
      return {
        borderRadius: '2xl',
        backgroundColor: 'white',
        boxShadow: '2xl',
        overflow: 'hidden',
        px: { base: '8', lg: '8' },
        py: { base: '8', lg: '8' },
        mx: { base: '0' },
      };
    }
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
    <Flex
      direction={direction()}
      gap="4"
      width={width || '100%'}
      height={isMinimal ? '100%' : 'auto'}
      {...panelProps()}
    >
      <Flex
        width={
          isMinimal
            ? '100%'
            : {
                base: '100%',
                lg: '45%',
                xl: '40%',
              }
        }
        direction="column"
        alignItems={alignItems || 'center'}
        justifyContent="center"
      >
        {children}
      </Flex>
      <Box
        width={
          isMinimal
            ? '100%'
            : {
                base: '100%',
                lg: '55%',
                xl: '60%',
              }
        }
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
        <ExcalidrawAnimation src={image} animate={animate || false} aspect={aspect} />
      </Box>
    </Flex>
  );
};

export default SideBySidePanel;
