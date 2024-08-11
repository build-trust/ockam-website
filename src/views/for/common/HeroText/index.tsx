import { Box, Heading, HeadingProps, Text, TextProps } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

import ExcalidrawAnimation, { ExcalidrawAnimationProps } from '@components/ExcalidrawAnimation';

export const HeroHeading = ({ children, ...headingProps }: HeadingProps): ReactElement => (
  <Heading
    color="white"
    fontWeight={{ base: 700 }}
    fontFamily="neutraface"
    fontSize={{ base: '2.5rem', lg: '5.5rem' }}
    {...headingProps}
  >
    {children}
  </Heading>
);

export const HeroDescription = ({ children, ...textProps }: TextProps): ReactElement => (
  <Text
    color="white"
    fontWeight={{ base: 500 }}
    fontSize={{ base: '1.125rem', lg: '1.25rem' }}
    {...textProps}
  >
    {children}
  </Text>
);

interface ExcalidrawImageProps
  extends Pick<ExcalidrawAnimationProps, 'animate' | 'aspect' | 'startAt'> {
  src: string;
}
export const ExcalidrawImage = ({
  src,
  startAt,
  animate,
  aspect,
}: ExcalidrawImageProps): ReactElement => (
  <Box background="rgba(160, 246, 225, 0.40)" borderRadius="0.75rem">
    <ExcalidrawAnimation
      src={src}
      mx="auto"
      startAt={startAt}
      animate={animate}
      aspect={aspect}
      flex={1}
      pos="relative"
      top="-0.75rem"
      left="-0.75rem"
    />
  </Box>
);
