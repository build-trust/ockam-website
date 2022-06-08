import { FunctionComponent } from 'react';
import { Button, Flex, useBreakpointValue } from '@chakra-ui/react';

import { GitHubIcon } from '@components/icons';

const MainLayoutCtaButtons: FunctionComponent = () => {
  const goToSourceButtonColorScheme = useBreakpointValue({ base: 'gray', lg: 'gray' });
  const contactUsButtonColorScheme = useBreakpointValue({ base: 'avocado', lg: 'gray' });
  const buttonsSize = useBreakpointValue({ base: 'lg', lg: 'md' });

  return (
    <Flex
      w={{ base: 'full', lg: 'auto' }}
      align={{ base: 'stretch', lg: 'center' }}
      direction={{ base: 'column', lg: 'row' }}
    >
      <Button
        as="a"
        href="#"
        variant="ghost"
        order={{ base: 1, lg: 0 }}
        my={{ base: 5, lg: 0 }}
        mx={{ base: 0, lg: 5 }}
        colorScheme={goToSourceButtonColorScheme}
        size={buttonsSize}
      >
        <GitHubIcon w={6} h={6} mr={2} />
        Go to Source
      </Button>
      <Button
        as="a"
        href="#"
        variant={{ base: 'solid', lg: 'outline' }}
        colorScheme={contactUsButtonColorScheme}
        size={buttonsSize}
        color="black!important" // TODO investigate how to force black color without important
      >
        Contact Us
      </Button>
    </Flex>
  );
};

export default MainLayoutCtaButtons;
