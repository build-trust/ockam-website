import { FunctionComponent } from 'react';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

import TeamTabs from './components/TeamTabs';

const DESCRIPTIONS = ['Ockam is a remote-first team and we have an objective-oriented culture.'];

const Team: FunctionComponent = () => (
  <Container variant="section" py={{ base: 16, lg: 24 }}>
    <Flex direction="column" maxW="xl" textAlign={{ base: 'left', lg: 'center' }}>
      <Heading as="h2" size="h2" mt={{ base: 1, lg: 0 }} lineHeight={1.3}>
        Who is on the Team?
      </Heading>

      <Box mt={6}>
        {DESCRIPTIONS.map((text, index) => (
          <Text
            key={text}
            fontSize={{ lg: 'lg' }}
            lineHeight={{ base: 1.5, lg: 1.4 }}
            mb={index + 1 === DESCRIPTIONS.length ? 0 : 2}
          >
            {text}
          </Text>
        ))}
      </Box>
    </Flex>
    <TeamTabs py={{ base: 10, lg: 16 }} />
  </Container>
);

export default Team;
