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
    href={`${TEAM_PATH}#open-roles`}
    passHref
  >
    See the Open Roles
  </Button>
);

export default OpenRolesButton;
