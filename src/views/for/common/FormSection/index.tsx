/* eslint-disable react/no-unescaped-entities */
import React, { FC, ReactElement } from 'react';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';

import ContactForm from './Form';
import ExampleLink from './DBLink';
import backgroundSrc from './assets/background.svg?url';

type Example = {
  name: string;
  url: string;
};
type Props = {
  examples?: Example[];
};
const FormSection: FC<Props> = ({ examples }): ReactElement => (
  <Box
    bgImage={`/**/url(${backgroundSrc.src}), linear-gradient(#0D1721, #162535)`}
    bgRepeat="no-repeat"
    bgPosition="center bottom"
    px={{ base: '0.75rem' }}
    py={{ base: '3.75rem', lg: '7.5rem' }}
  >
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      maxW="70rem"
      mx="auto"
      justify="space-between"
      gap={{ base: '2.5rem', lg: 'initial' }}
    >
      <Stack
        flex={{ base: 1 }}
        gap={{ base: '1rem', lg: '2rem' }}
        maxW={{ base: '35.8125rem' }}
        mx={{ base: 'auto', lg: 'initial' }}
      >
        <Text
          textAlign={{ base: 'center', lg: 'left' }}
          color="white"
          lineHeight={{ base: '95%' }}
          fontWeight={{ base: 700 }}
          fontSize={{ base: '2.5rem', lg: '5.5rem' }}
          fontFamily="neutraface"
        >
          It’s{' '}
          <Text as="span" color="cyan.400">
            time
          </Text>{' '}
          to start building...
        </Text>
        <Stack
          mx={{ base: 'auto', lg: 'initial' }}
          w={{ base: '100%' }}
          maxW={{ base: '15rem' }}
          gap={{ base: '1rem' }}
          color="white"
          fontWeight={{ base: 700 }}
          fontFamily="neutraface"
        >
          {examples &&
            examples.map((example) => <ExampleLink href={example.url}>{example.name}</ExampleLink>)}
        </Stack>
      </Stack>

      <Stack gap={{ base: '0.5rem', lg: '1.5rem' }}>
        <Box color="white" textAlign={{ base: 'center', lg: 'left' }}>
          <Text
            color="inherit"
            fontFamily="neutraface"
            fontSize={{ base: '2.5rem' }}
            fontWeight={{ base: 700 }}
          >
            Or, ask our team a{' '}
            <Text as="span" color="brand.500">
              question
            </Text>
          </Text>
          <Text color="inherit" fontWeight={{ base: 500 }} fontSize={{ base: '1rem' }}>
            We'll get back to you within one business day
          </Text>
        </Box>
        <Box
          bg="linear-gradient(140deg, rgba(5, 39, 75, 0.20) 10.78%, rgba(15, 74, 83, 0.20) 95.69%)"
          border="1px solid"
          borderColor="brand.500"
          borderRadius={{ base: '0.75rem' }}
          mx="auto"
          maxW={{ base: '30rem' }}
          p={{ base: '1rem', lg: '2.5rem' }}
        >
          <ContactForm />
        </Box>
      </Stack>
    </Flex>
  </Box>
);

export type { Example };
export default FormSection;
