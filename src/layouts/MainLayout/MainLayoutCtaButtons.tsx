import { FunctionComponent } from 'react';
import { Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';

import { CONTACT_FORM_PATH } from '@consts/paths';

type Props = {
  landingPage?: boolean;
};
const MainLayoutCtaButtons: FunctionComponent<Props> = ({ landingPage }) => {
  const buttonsSize = useBreakpointValue({ base: 'lg', lg: 'md' });
  const contactHref = landingPage ? '#contact' : CONTACT_FORM_PATH;
  return (
    <Flex
      w={{ base: 'full', lg: 'auto' }}
      align={{ base: 'stretch', lg: 'center' }}
      direction={{ base: 'column', lg: 'row' }}
    >
      <Link href={contactHref} passHref>
        <Button as="a" variant="solid" colorScheme="avocado" size={buttonsSize} color="black">
          Get a Demo
        </Button>
      </Link>
    </Flex>
  );
};

export default MainLayoutCtaButtons;
