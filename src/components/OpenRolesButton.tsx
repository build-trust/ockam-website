import { FunctionComponent } from 'react';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';

import { TEAM_PATH } from '@consts/paths';

const OpenRolesButton: FunctionComponent = () => (
  <Button
    as={Link}
    size="lg"
    colorScheme="avocado"
    color="black"
    fontSize="1rem"
    px="1.5rem"
    py="1rem"
    href={`${TEAM_PATH}#open-roles`}
    passHref
  >
    See the Open Roles
  </Button>
);

export default OpenRolesButton;
