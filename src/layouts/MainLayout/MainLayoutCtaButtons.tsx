import { FunctionComponent } from 'react';
import { Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';

import { CONTACT_PAGE_PATH } from '@consts/paths';

const MainLayoutCtaButtons: FunctionComponent = () => {
  const contactUsButtonColorScheme = useBreakpointValue({ base: 'avocado', lg: 'gray' });
  const buttonsSize = useBreakpointValue({ base: 'lg', lg: 'md' });

  return (
    <Flex
      w={{ base: 'full', lg: 'auto' }}
      align={{ base: 'stretch', lg: 'center' }}
      direction={{ base: 'column', lg: 'row' }}
    >
      <Link href={CONTACT_PAGE_PATH} passHref>
        <Button
          as="a"
          variant={{ base: 'solid', lg: 'outline' }}
          colorScheme={contactUsButtonColorScheme}
          size={buttonsSize}
          color="black!important" // TODO investigate how to force black color without important
        >
          Contact Us
        </Button>
      </Link>
    </Flex>
  );
};

export default MainLayoutCtaButtons;
