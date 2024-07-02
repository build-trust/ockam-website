import React, { ReactElement, ReactNode } from 'react';
import { Stack, StackProps, Text } from '@chakra-ui/react';
import Image from 'next/image';

import logoSmallSrc from './assets/logo-small.svg?url';

interface MagicComponentProps extends Omit<StackProps, 'title'> {
  title: ReactNode;
  description: ReactNode;
}

const HeadingWithLogo = ({
  title,
  description,
  ...stackProps
}: MagicComponentProps): ReactElement => (
  <Stack gap={{ base: '1.5rem' }} align="center" {...stackProps}>
    <Image src={logoSmallSrc} alt="" />
    <Stack spacing={{ base: '0.75rem', lg: '1.5re' }}>
      <Text
        color="brand.900"
        fontFamily="neutraface"
        fontSize={{ base: '2.5rem', lg: '5.5rem' }}
        fontWeight={{ base: 700 }}
      >
        {title}
      </Text>
    </Stack>
    <Text
      color="brand.900"
      fontSize={{ base: '1.25rem' }}
      fontWeight={{ base: 500 }}
      textAlign="center"
    >
      {description}
    </Text>
  </Stack>
);

export default HeadingWithLogo;
