import { Box, Flex, LinkBox, LinkOverlay, ResponsiveValue, useTheme } from '@chakra-ui/react';
import { FC, ReactElement, ReactNode } from 'react';
import type { Property } from 'csstype';

import ExcalidrawAnimation from '../ExcalidrawAnimation';
import CTALink from '../CTALink';

type Props = {
  textOrientation: 'left' | 'right';
  image: string;
  aspect?: 'width' | 'height';
  animate?: boolean;
  children?: ReactNode;
  alignItems?: ResponsiveValue<'start' | 'end' | 'center'>;
  isPanel?: boolean;
  isMinimal?: boolean;
  href?: string;
  width?: ResponsiveValue<(string & {}) | '3xl' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'xs' | '4xl'>;
  cta_text?: string;
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
  href,
  width,
  cta_text,
}) => {
  const theme = useTheme();
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
        border: '2px solid transparent',
        mb: { base: '32' },
        px: { base: '8', lg: '0' },
        width: width || '100%',
      };
    if (isMinimal) {
      return {
        borderRadius: { sm: 0, md: '2xl' },
        backgroundColor: 'white',
        boxShadow: { base: 'none', md: '2xl' },
        overflow: 'hidden',
        transition: 'all 0.3s linear',
        border: '2px solid transparent',
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

  const hoverStyle = (): {} => {
    if (isMinimal && href)
      return {
        borderColor: { base: 'transparent', md: theme.colors.gray[200] },
        boxShadow: { base: 'none', md: 'xl' },
      };
    return {};
  };

  const linkOverlay = (): ReactElement => {
    if (href) return <LinkOverlay href={href}>{children}</LinkOverlay>;
    return <>{children}</>;
  };
  const content = (): ReactElement => (
    <>
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
      >
        {linkOverlay()}
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
        px={20}
      >
        <ExcalidrawAnimation src={image} animate={animate || false} aspect={aspect} />

        {href && cta_text && <CTALink text={cta_text} href={href} isExternal={false} />}
      </Box>
    </>
  );

  const component = (): ReactElement => {
    if (href) {
      return (
        <LinkBox
          as="div"
          display="flex"
          flexDirection={direction()}
          gap="4"
          width={width || '100%'}
          height={isMinimal ? '100%' : 'auto'}
          justifyContent={isMinimal ? 'space-between' : 'space-between'}
          alignItems="center"
          _hover={hoverStyle()}
          {...panelProps()}
        >
          {content()}
        </LinkBox>
      );
    }
    return (
      <Flex
        direction={direction()}
        gap="4"
        width={width || '100%'}
        height={isMinimal ? '100%' : 'auto'}
        minH="60vh"
        justifyContent={isMinimal ? 'space-between' : 'space-between'}
        alignItems="center"
        scrollSnapAlign="center"
        scrollMargin="0"
        _hover={hoverStyle()}
        {...panelProps()}
      >
        {content()}
      </Flex>
    );
  };

  return component();
};

export default SideBySidePanel;
