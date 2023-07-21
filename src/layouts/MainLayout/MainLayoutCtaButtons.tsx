import { FunctionComponent } from 'react';
import { Box, Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';

import { CONTACT_FORM_PATH } from '@consts/paths';

type Props = {
  landingPage?: boolean;
};
const MainLayoutCtaButtons: FunctionComponent<Props> = ({ landingPage }) => {
  const buttonsSize = useBreakpointValue({ base: 'lg', lg: 'md' });
  const contactHref = landingPage ? '#contact' : CONTACT_FORM_PATH;
  const gitHubCTA = (): JSX.Element => (
    <Box mt="0">
      <a
        className="github-button"
        href="https://github.com/build-trust/ockam"
        data-color-scheme="no-preference: light_high_contrast; light: light_high_contrast; dark: dark_high_contrast;"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star build-trust/ockam on GitHub"
        style={{ paddingTop: '100px' }}
      >
        Star us on GitHub
      </a>
    </Box>
  );

  const buttons = (): JSX.Element => {
    if (landingPage) {
      return (
        <Link href={contactHref} passHref>
          <Button as="a" variant="solid" colorScheme="avocado" size={buttonsSize} color="black">
            Get a Demo
          </Button>
        </Link>
      );
    }
    return gitHubCTA();
  };

  return (
    <Flex
      w={{ base: 'full', lg: 'auto' }}
      align={{ base: 'stretch', lg: 'center' }}
      direction={{ base: 'column', lg: 'row' }}
    >
      {buttons()}
    </Flex>
  );
};

export default MainLayoutCtaButtons;
