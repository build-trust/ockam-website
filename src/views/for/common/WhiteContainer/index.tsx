import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Stack,
  StackProps,
  Text,
  TextProps,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

interface WhiteContainerProps extends BoxProps {}
export const WhiteContainer = ({ children, ...boxProps }: WhiteContainerProps): ReactElement => (
  <Box
    pt={{ base: '3.75rem', lg: '7.5rem' }}
    px={{ base: '0.75rem' }}
    pb={{ base: '3.75rem', lg: '12.5rem' }}
    borderTopLeftRadius={{ base: '1rem' }}
    borderTopRadius={{ base: '1rem' }}
    background="white"
    position="relative"
    top="-1rem"
    {...boxProps}
  >
    {children}
  </Box>
);

export const StackContainer = ({ children, ...stackProps }: StackProps) => (
  <Stack maxW="68.375rem" mx="auto" gap={{ base: '3rem', lg: '7.5rem' }}>
    {children}
  </Stack>
);

export const FlexContainer = ({ children, ...flexProps }: FlexProps) => (
  <Flex
    gap={{ base: '0.5rem', lg: '4rem' }}
    alignItems={{ base: 'center', lg: 'center' }}
    {...flexProps}
  >
    {children}
  </Flex>
);

export const TextContainer = ({ children, ...flexProps }: StackProps) => (
  <Stack maxW="32.875rem" gap={{ base: '1rem' }}>
    {children}
  </Stack>
);

export const Title = ({ children, ...textProps }: TextProps) => (
  <Text
    fontWeight={{ base: 700 }}
    color="brand.800"
    fontFamily="neutraface"
    fontSize={{ base: '1.375rem', lg: '1.75rem' }}
    mb={{ base: '0.5rem' }}
  >
    {children}
  </Text>
);

export const SubTitle = ({ children, ...textProps }: TextProps) => (
  <Text fontWeight={{ base: 500 }} color="brand.800" fontSize={{ base: '1rem', lg: '1.125rem' }}>
    {children}
  </Text>
);

export const Description = ({ children, ...textProps }: TextProps) => (
  <Text fontWeight={{ base: 400 }} color="gray.500" fontSize={{ base: '1rem' }} textAlign="justify">
    {children}
  </Text>
);
