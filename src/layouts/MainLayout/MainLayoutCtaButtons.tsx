import { FunctionComponent } from 'react';
import { Button, Flex, useBreakpointValue } from '@chakra-ui/react';

import { GitHubIcon } from '@components/icons';

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
        href="https://github.com/build-trust/ockam"
        target="_blank"
        variant="link"
        order={{ base: 1, lg: 0 }}
        my={{ base: 5, lg: 0 }}
        mx={{ base: 0, lg: 6 }}
        colorScheme="gray"
        size={buttonsSize}
        color="brand.900"
        _hover={{
          textDecoration: 'underline',
          svg: { color: 'avocado.500' },
        }}
      >
        <GitHubIcon w={6} h={6} mr={1.5} transition="color 150ms ease-in-out" />
        Go to Source
      </Button>

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
