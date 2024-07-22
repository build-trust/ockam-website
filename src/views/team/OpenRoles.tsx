import { FunctionComponent } from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

import { LeverPostingsGroup } from '@typings/lever';
import { HOME_PATH, OPEN_ROLES_ID } from '@consts/paths';

import OpenRolesTabs from './components/OpenRolesTabs';
import OpenPositionIcon from './assets/open-position-icon.svg';

type OpenRolesProps = {
  openRoles: LeverPostingsGroup[];
};

const OPEN_ROLES_DESCRIPTIONS = [' Ockam is a remote-first team and we are globally distributed.'];
const NO_OPEN_ROLES_DESCRIPTION = ['There are currently no open roles available'];

const OpenRoles: FunctionComponent<OpenRolesProps> = ({ openRoles }) => {
  const hasOpenRoles = Boolean(openRoles.length);
  const description = hasOpenRoles ? OPEN_ROLES_DESCRIPTIONS : NO_OPEN_ROLES_DESCRIPTION;

  return (
    <Box
      id={OPEN_ROLES_ID}
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
        {!hasOpenRoles && <Box as={OpenPositionIcon} mx="auto" />}
        <Heading
          fontFamily="neutraface"
          fontSize={{ base: '2.5rem', lg: '5.5rem' }}
          as="h2"
          size="h2"
          lineHeight={1.3}
        >
          Open Roles
        </Heading>

        {description.map((text) => (
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
        {!hasOpenRoles && (
          <Button href={HOME_PATH} h="3.5rem" as="a" variant="primary" alignSelf="center" mt="2rem">
            Read about Ockam
          </Button>
        )}
      </Flex>
      {hasOpenRoles && <OpenRolesTabs openRoles={openRoles} />}
    </Box>
  );
};

export default OpenRoles;
