import { Heading, HeadingProps, Text, TextProps } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface HeroHeadingProps extends HeadingProps {}
export const HeroHeading = ({ children, ...headingProps }: HeroHeadingProps): ReactElement => (
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

interface HeroDescriptionProps extends TextProps {}
export const HeroDescription = ({ children, ...textProps }: HeroDescriptionProps): ReactElement => (
  <Text
    color="white"
    fontWeight={{ base: 500 }}
    fontSize={{ base: '1.125rem', lg: '1.25rem' }}
    {...textProps}
  >
    {children}
  </Text>
);
