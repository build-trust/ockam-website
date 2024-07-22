import { FunctionComponent } from 'react';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

import { LeverPostingsGroup } from '@typings/lever';

import OpenRolesTabs from './components/OpenRolesTabs';

type OpenRolesProps = {
  openRoles: LeverPostingsGroup[];
};

const DESCRIPTIONS = [' Ockam is a remote-first team and we are globally distributed.'];

const OpenRoles: FunctionComponent<OpenRolesProps> = ({ openRoles }) => (
  <Box
    id="open-roles"
    px={{ base: '0.5rem' }}
    maxW="68.375rem"
    mx="auto"
    pb={{ base: '5rem', lg: '12.5rem' }}
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
        Open Roles
      </Heading>

      {DESCRIPTIONS.map((text) => (
        <Text
          fontSize={{ base: '1.125rem' }}
          key={text}
          lineHeight={{ base: 1.4 }}
          fontWeight={{ base: 500 }}
          color="gray.500"
        >
          {text}
        </Text>
      ))}
    </Flex>

    <OpenRolesTabs openRoles={openRoles} />
  </Box>
);

export default OpenRoles;
