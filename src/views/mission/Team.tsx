import { FunctionComponent } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import TeamTabs from './components/TeamTabs';

const Team: FunctionComponent = () => (
  <Box
    id="team"
    px={{ base: '0.5rem' }}
    maxW="70rem"
    mx="auto"
    pb={{ base: '5rem', lg: '15.5rem' }}
  >
    <Flex
      mb={{ base: '2rem', lg: '3.5rem' }}
      direction="column"
      textAlign={{ base: 'center' }}
      gap={{ base: '0.5rem', lg: '1.5rem' }}
    >
      <Heading
        fontFamily="neutraface"
        fontSize={{ base: '2.5rem', lg: '5.5rem' }}
        as="h2"
        size="h2"
        lineHeight={1.3}
      >
        Who is on the Team?
      </Heading>

      <Text
        fontSize={{ base: '1.125rem' }}
        lineHeight={{ base: 1.4 }}
        fontWeight={{ base: 500 }}
        color="gray.500"
      >
        Ockam is a remote-first team and we have
        <br />
        an objective-oriented culture
      </Text>
    </Flex>

    <TeamTabs />
  </Box>
);

export default Team;
