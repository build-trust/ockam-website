import { FunctionComponent } from 'react';
import { Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';

import { CONTACT_FORM_PATH } from '@consts/paths';

const LandingLayoutCtaButtons: FunctionComponent = () => {
  const buttonsSize = useBreakpointValue({ base: 'lg', lg: 'md' });

  return (
    <Flex
      w={{ base: 'full', lg: 'auto' }}
      align={{ base: 'stretch', lg: 'center' }}
      direction={{ base: 'column', lg: 'row' }}
    >
      <Link href={CONTACT_FORM_PATH} passHref>
        <Button as="a" variant="solid" colorScheme="avocado" size={buttonsSize} color="black">
          Get a Demo
        </Button>
      </Link>
    </Flex>
  );
};

export default LandingLayoutCtaButtons;
