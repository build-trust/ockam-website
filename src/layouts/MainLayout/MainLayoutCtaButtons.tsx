import { FunctionComponent } from 'react';
import { Button, Flex, useBreakpointValue } from '@chakra-ui/react';

const MainLayoutCtaButtons: FunctionComponent = () => {
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
        href="mailto:hello@ockam.io"
        target="_blank"
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
