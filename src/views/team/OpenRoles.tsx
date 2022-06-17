import { FunctionComponent } from 'react';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

import { LeverPostingsGroup } from '@typings/lever';

import OpenRolesTabs from './components/OpenRolesTabs';

type OpenRolesProps = {
  openRoles: LeverPostingsGroup[];
};

const DESCRIPTIONS = ['Ockam is a remote-first, globally distributed team.'];

const OpenRoles: FunctionComponent<OpenRolesProps> = ({ openRoles }) => (
  <Container variant="section" id="open-roles" py={{ base: 16, lg: 24 }}>
    <Flex direction="column" maxW="xl" textAlign={{ base: 'left', lg: 'center' }}>
      <Heading as="h2" size="h2" mt={{ base: 1, lg: 0 }} lineHeight={1.3}>
        Open Roles
      </Heading>

      <Box my={6}>
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

    <OpenRolesTabs openRoles={openRoles} py={{ base: 4, lg: 12 }} />
  </Container>
);

export default OpenRoles;
