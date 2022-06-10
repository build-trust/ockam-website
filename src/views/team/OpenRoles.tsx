import { FunctionComponent } from 'react';
import { Container, Flex, Heading, Text } from '@chakra-ui/react';

import { LeverPostingsGroup } from '@typings/lever';

import OpenRolesTabs from './components/OpenRolesTabs';

type OpenRolesProps = {
  openRoles: LeverPostingsGroup[];
};

const OpenRoles: FunctionComponent<OpenRolesProps> = ({ openRoles }) => (
  <Container variant="section" id="open-roles" py={{ base: 16, lg: 24 }}>
    <Flex direction="column" maxW="xl" textAlign={{ base: 'left', lg: 'center' }}>
      <Heading as="h2" size="h2" mt={{ base: 1, lg: 0 }} lineHeight={1.3}>
        Open roles
      </Heading>

      <Text fontSize={{ lg: 'lg' }} lineHeight={{ base: 1.5, lg: 1.4 }} my={6}>
        Ockam is a remote-first team and we have an objective-oriented culture.
      </Text>
    </Flex>

    <OpenRolesTabs openRoles={openRoles} py={{ base: 4, lg: 12 }} />
  </Container>
);

export default OpenRoles;
