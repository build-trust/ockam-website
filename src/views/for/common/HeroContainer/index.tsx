import { Box, BoxProps, Flex, FlexProps } from '@chakra-ui/react';
import { ReactElement } from 'react';

import heroBackgroundSrc from './assets/hero-background.svg?url';

interface HeroContainerProps extends BoxProps {}
export const HeroContainer = ({ children, ...boxProps }: HeroContainerProps): ReactElement => (
  <Box
    py={{ base: '2.5rem', lg: '11.75rem' }}
    px={{ base: '0.75rem' }}
    backgroundPosition="center bottom"
    bgImage={`/**/url(${heroBackgroundSrc.src}), linear-gradient(180deg, #0D1721 0%, #162535 100%)`}
    {...boxProps}
  >
    {children}
  </Box>
);

interface HeroContentWrapperProps extends FlexProps {}
export const HeroContentWrapper = ({ children }: HeroContentWrapperProps): ReactElement => (
  <Flex maxW="66rem" mx="auto" flexDirection={{ base: 'column', lg: 'row' }}>
    {children}
  </Flex>
);
