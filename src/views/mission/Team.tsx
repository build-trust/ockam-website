import { FunctionComponent } from 'react';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

import SectionAnchor from '@components/SectionAnchor';

import TeamTabs from './components/TeamTabs';

const TITLE = 'Who is on the Team?';
const DESCRIPTIONS = ['Ockam is a remote-first team and we have an objective-oriented culture.'];

const Team: FunctionComponent = () => (
  <Container variant="section" py={{ base: 16, lg: 24 }}>
    <Flex direction="column" maxW="xl" textAlign={{ base: 'left', lg: 'center' }}>
      <SectionAnchor id="team">
        <Heading as="h2" size="h2" mt={{ base: 1, lg: 0 }} lineHeight={1.3}>
          {TITLE}
        </Heading>
      </SectionAnchor>

      <Box mt={6}>
        {DESCRIPTIONS.map((text) => (
          <Text
            key={text}
            fontSize={{ lg: 'lg' }}
            lineHeight={{ base: 1.5, lg: 1.4 }}
            _notLast={{ mb: 2 }}
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
