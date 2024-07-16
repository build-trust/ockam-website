/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement, ReactNode } from 'react';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

import ContactForm from '@views/for/common/FormSection/Form';
import backgroundSrc from '@views/for/common/FormSection/assets/background.svg?url';
import DarkLayout from '@layouts/DarkLayout';

const ContactFormPage = (): ReactElement => (
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
        gap={{ base: '1.5rem', lg: '2rem' }}
        maxW={{ base: '38.125rem' }}
        mx={{ base: 'auto', lg: 'initial' }}
      >
        <Text
          textAlign={{ base: 'center', lg: 'left' }}
          color="white"
          lineHeight={{ base: '95%' }}
          fontWeight={{ base: 700 }}
          fontSize={{ base: '2.5rem', lg: '8.75rem' }}
          fontFamily="neutraface"
        >
          <Text as="span" color="cyan.400">
            Talk
          </Text>{' '}
          to Us
        </Text>
        <Stack
          mx={{ base: 'auto', lg: 'initial' }}
          w={{ base: '100%' }}
          gap={{ base: '1rem' }}
          color="white"
          fontWeight={{ base: 700 }}
        >
          <Box
            maxW="24.8125rem"
            w="100%"
            fontSize="1rem"
            fontWeight={500}
            borderRadius="0.75rem"
            p="1.5rem"
            bg="rgba(116, 223, 255, 0.10)"
          >
            We are here to help! Regardless of your use case for Ockam, reach out to us. Let us know
            what you are working on. We will follow up with a calendar link to schedule 1:1 time
            over a Zoom.
          </Box>
          <Flex gap="1.5rem" alignItems="center">
            <Image
              width={64}
              height={64}
              style={{ borderRadius: '100%' }}
              src="/blog/matthew_gregory-1.png"
              alt="Matthew Gregory"
            />
            <Stack gap="0.25rem" color="white" fontWeight={500}>
              <Text fontSize="1.125rem" color="inherit">
                Matthew Gregory
              </Text>
              <Text fontSize="0.875rem" color="inherit">
                CEO of Ockam
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Stack>

      <Stack gap={{ base: '0.5rem', lg: '1.5rem' }}>
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

ContactFormPage.getLayout = (page: ReactElement): ReactNode => <DarkLayout>{page}</DarkLayout>;

export default ContactFormPage;
