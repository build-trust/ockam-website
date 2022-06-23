import { FunctionComponent } from 'react';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';

import { TEAM_PATH } from '@consts/paths';

const OpenRolesButton: FunctionComponent = () => (
  <Link href={`${TEAM_PATH}#open-roles`} passHref>
    <Button as="a" size="lg" colorScheme="avocado" color="black">
      See the Open Roles
    </Button>
  </Link>
);

export default OpenRolesButton;
