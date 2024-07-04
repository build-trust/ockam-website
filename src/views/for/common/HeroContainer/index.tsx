import { Box, BoxProps, Flex, FlexProps, Stack, StackProps } from '@chakra-ui/react';
import { ReactElement } from 'react';

import heroBackgroundSrc from './assets/hero-background.svg?url';

interface HeroContainerProps extends BoxProps {}
export const HeroContainer = ({ children, ...boxProps }: HeroContainerProps): ReactElement => (
  <Box
    py={{ base: '2.5rem', lg: '11.75rem' }}
    px={{ base: '0.75rem' }}
    backgroundPosition="center 0"
    bgImage={`/**/url(${heroBackgroundSrc.src}), linear-gradient(180deg, #0D1721 0%, #162535 100%)`}
    {...boxProps}
  >
    {children}
  </Box>
);

interface HeroContentWrapperProps extends FlexProps {}
export const HeroContentWrapper = ({ children }: HeroContentWrapperProps): ReactElement => (
  <Flex
    maxW="70rem"
    mx="auto"
    textAlign={{ base: 'center', lg: 'left' }}
    gap={{ base: '2rem' }}
    alignItems={{ base: 'center', lg: 'center' }}
    flexDirection={{ base: 'column', lg: 'row' }}
  >
    {children}
  </Flex>
);

interface ButtonContainerProps extends FlexProps {}
export const ButtonContainer = ({ children, ...flexProps }: ButtonContainerProps): ReactElement => (
  <Flex
    alignItems={{ base: 'center', lg: 'flex-start' }}
    flexDirection={{ base: 'column', lg: 'row' }}
    gap="1.5rem"
    {...flexProps}
  >
    {children}
  </Flex>
);

interface TextContainerProps extends StackProps {}
export const TextContainer = ({ children, ...stackProps }: TextContainerProps): ReactElement => (
  <Stack gap="1.5rem" maxW={{ base: '33.75rem' }} {...stackProps}>
    {children}
  </Stack>
);
