import { Box, BoxProps, Flex, FlexProps, LinkProps, Text, TextProps } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import ArrowRightIcon from './assets/arrow-right.svg';

export interface WhiteTileProps extends FlexProps, Pick<LinkProps, 'href'> {
  children: ReactNode;
}
const WhiteTile = ({ children, ...flexProps }: WhiteTileProps): ReactElement => (
  <Flex
    alignItems={{ base: 'center' }}
    borderRadius={{ base: '0.75rem' }}
    borderWidth="1px"
    borderColor="gray.200"
    background="white"
    gap={{ base: '1rem' }}
    flexDirection={{ base: 'column', lg: 'row' }}
    padding={{ base: '0.75rem', lg: '1.5rem' }}
    {...flexProps}
  >
    {children}
  </Flex>
);

export const TitleText = ({ children }: TextProps): ReactElement => (
  <Text
    fontFamily="neutraface"
    color="gray.700"
    fontSize={{ base: '1.125rem', lg: '1.25rem' }}
    fontWeight={{ base: 600 }}
  >
    {children}
  </Text>
);

export const DescriptionText = ({ children, ...props }: TextProps): ReactElement => (
  <Text
    color="brand.800"
    fontSize={{ base: '1rem' }}
    fontWeight={{ base: 400 }}
    textAlign={{ base: 'justify', lg: 'left' }}
    {...props}
  >
    {children}
  </Text>
);

interface ImageProps extends FlexProps, Pick<NextImageProps, 'src' | 'alt'> {}
export const Image = (props: ImageProps): ReactElement => (
  <Box as={NextImage} mx="auto" width="fit-content" {...props} />
);

interface LearnMoreLinkProps extends BoxProps {}
export const LearnMoreLink = ({ children, ...props }: LearnMoreLinkProps): ReactElement => (
  <Flex
    gap={{ base: '0.5rem' }}
    color="brand.600"
    fontWeight={600}
    alignItems={{ base: 'center' }}
    fontSize={{ base: '0.875rem', lg: '1rem' }}
    {...props}
  >
    <Text color="inherit">Learn more</Text>
    <ArrowRightIcon />
  </Flex>
);

export default WhiteTile;
