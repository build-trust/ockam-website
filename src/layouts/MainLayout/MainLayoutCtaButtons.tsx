import { FunctionComponent } from 'react';
import { Box, Button, Flex, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import styled from 'styled-components';

import { CONTACT_FORM_PATH } from '@consts/paths';

const GitHubButton = styled.a`
  display: inline-block;

  padding: 5px 10px;
  border: 1px solid rgba(1, 4, 9, 0.8);
  border-radius: 3px;

  color: rgb(14, 17, 22);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  white-space: nowrap;
  background-color: rgb(231, 236, 240);
`;
type Props = {
  landingPage?: boolean;
};
const MainLayoutCtaButtons: FunctionComponent<Props> = ({ landingPage }) => {
  const buttonsSize = useBreakpointValue({ base: 'lg', lg: 'md' });
  const contactHref = landingPage ? '#contact' : CONTACT_FORM_PATH;
  const gitHubCTA = (): JSX.Element => (
    <Box mt="2">
      <GitHubButton
        className="github-button"
        href="https://github.com/build-trust/ockam"
        data-color-scheme="no-preference: light_high_contrast; light: light_high_contrast; dark: dark_high_contrast;"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star build-trust/ockam on GitHub"
      >
        Star us on GitHub
      </GitHubButton>
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
