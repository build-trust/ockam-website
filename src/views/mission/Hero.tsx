import React, { FunctionComponent } from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

import Values from '@views/mission/Values';
import { TEAM_PATH } from '@consts/paths';

import backgroundSrc from './assets/hero.svg?url';

const Hero: FunctionComponent = () => (
  <Box
    bg={`/**/url(${backgroundSrc.src}), linear-gradient(180deg, #0D1721 0%, #162535 100%)`}
    bgRepeat="no-repeat"
    bgPosition="center -80px, center top"
    pt={{ base: '2.5rem', lg: '10.5rem' }}
    px={{ base: '0.5rem' }}
    pb={{ base: '3rem', lg: '5rem' }}
  >
    <Box maxW="70rem" mx="auto">
      <Box textAlign="center">
        <Heading
          color="white"
          as="h1"
          fontFamily="neutraface"
          fontWeight={700}
          fontSize={{ base: '2.5rem', lg: '8.75rem' }}
          textAlign="center"
          lineHeight={0.95}
          mb={{ base: '0.75rem', lg: '0.5rem' }}
        >
          <Box as="span" color="brand.500">
            Trust
          </Box>
          <br />
          (that&apos;s it)
        </Heading>

        <Text
          color="white"
          lineHeight={1.3}
          fontWeight={400}
          fontSize={{ base: '1.25rem', lg: '1.125rem' }}
          mb={{ base: '2rem', lg: '2.5rem' }}
        >
          The Team is Built with Trust
        </Text>

        <Button h="3.5rem" as={Link} href={`${TEAM_PATH}#open-roles`} variant="primary" passHref>
          See the Open Roles
        </Button>
      </Box>
      <Values />
    </Box>
  </Box>
);

export default Hero;
