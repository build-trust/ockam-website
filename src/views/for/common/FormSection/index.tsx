/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from 'react';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';

import DBLink from './DBLink';
import backgroundSrc from './assets/background.svg?url';

const FormSection = (): ReactElement => (
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
        mx="auto"
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
          <DBLink href="https://docs.ockam.io/portals/databases/postgres">PostgreSQL</DBLink>
          <DBLink href="https://docs.ockam.io/portals/databases/mongodb">MongoDB</DBLink>
          <DBLink href="https://docs.ockam.io/portals/databases/influxdb">InfluxDB</DBLink>
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
        <Box border="1px solid #2d3748" borderRadius="md" p="4">
          <Text>Form will be added here later</Text>
        </Box>
      </Stack>
    </Flex>
  </Box>
);

export default FormSection;
