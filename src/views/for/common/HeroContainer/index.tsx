import { Box, BoxProps, Flex, FlexProps, Stack, StackProps } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface HeroContainerProps extends BoxProps {
  backgroundSrc: string;
}
export const HeroContainer = ({
  children,
  backgroundSrc,
  ...boxProps
}: HeroContainerProps): ReactElement => (
  <Box
    py={{ base: '2.5rem', lg: '11.75rem' }}
    px={{ base: '0.75rem' }}
    backgroundPosition="center 0"
    bgImage={`/**/url(${backgroundSrc}), linear-gradient(180deg, #0D1721 0%, #162535 100%)`}
    {...boxProps}
  >
    {children}
  </Box>
);

export const HeroContentWrapper = ({ children }: FlexProps): ReactElement => (
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

export const ButtonContainer = ({ children, ...flexProps }: FlexProps): ReactElement => (
  <Flex
    alignItems={{ base: 'center', lg: 'flex-start' }}
    flexDirection={{ base: 'column', lg: 'row' }}
    gap="1.5rem"
    {...flexProps}
  >
    {children}
  </Flex>
);

export const TextContainer = ({ children, ...stackProps }: StackProps): ReactElement => (
  <Stack gap="1.5rem" maxW={{ base: '33.75rem' }} {...stackProps}>
    {children}
  </Stack>
);
