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

export const WhiteContainer = ({ children, ...boxProps }: BoxProps): ReactElement => (
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

export const StackContainer = ({ children, ...stackProps }: StackProps): ReactElement => (
  <Stack maxW="68.375rem" mx="auto" gap={{ base: '3rem', lg: '7.5rem' }} {...stackProps}>
    {children}
  </Stack>
);

export const FlexContainer = ({ children, ...flexProps }: FlexProps): ReactElement => (
  <Flex
    flexDirection={{ base: 'column-reverse', lg: 'row' }}
    gap={{ base: '0.5rem', lg: '4rem' }}
    alignItems={{ base: 'center', lg: 'center' }}
    {...flexProps}
  >
    {children}
  </Flex>
);

export const TextContainer = ({ children, ...flexProps }: StackProps): ReactElement => (
  <Stack maxW="32.875rem" gap={{ base: '1rem' }} {...flexProps}>
    {children}
  </Stack>
);

export const Title = ({ children, ...textProps }: TextProps): ReactElement => (
  <Text
    fontWeight={{ base: 700 }}
    color="brand.800"
    fontFamily="neutraface"
    fontSize={{ base: '1.375rem', lg: '1.75rem' }}
    mb={{ base: '0.5rem' }}
    {...textProps}
  >
    {children}
  </Text>
);

export const SubTitle = ({ children, ...textProps }: TextProps): ReactElement => (
  <Text
    fontWeight={{ base: 500 }}
    color="brand.800"
    fontSize={{ base: '1rem', lg: '1.125rem' }}
    maxW={{ base: '26.25rem' }}
    {...textProps}
  >
    {children}
  </Text>
);

export const Description = ({ children, ...textProps }: TextProps): ReactElement => (
  <Text
    fontWeight={{ base: 400 }}
    color="gray.500"
    fontSize={{ base: '1rem' }}
    textAlign="justify"
    {...textProps}
  >
    {children}
  </Text>
);
