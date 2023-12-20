import { Box, Button, Center, Heading, Text, VStack } from '@chakra-ui/react';
import { ReactElement, useCallback, useEffect, useState } from 'react';

import LogoSygnetBlack from '@public/style-guide/logo/sygnet_black.svg';

const OckamLink = (): ReactElement => {
  const [url, setUrl] = useState('');

  const getUrlFromWindow = (): string => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const link = urlParams.get('link');
    if (link) {
      return `ockam://${link}`;
    }
    return 'ockam://';
  };

  // Take `url` from state and make the browser load it.
  const openUrl = useCallback((): void => {
    if (url) {
      window.location.href = url;
    }
  }, [url]);

  useEffect(() => {
    setUrl(getUrlFromWindow());
  }, []); // Run on mount.

  useEffect(() => {
    openUrl();
  }, [openUrl, url]); // Run whenever the url state changes.

  return (
    <Center minH="100vh" bgColor="#F9F9F9">
      <Box
        bgColor="white"
        transition="all 400ms ease-in-out"
        textAlign="center"
        p={5}
        borderRadius="lg"
        borderWidth="1px"
        shadow="md"
        m={5}
      >
        <VStack spacing={4}>
          <Box as={LogoSygnetBlack} w={175} h={200} />
          <Heading>Launch Ockam 🚀</Heading>
          <Text>
            Before you launch Ockam, please make sure you have the Ockam.app installed from brew
            using
            <br /> <code>`brew install --cask build-trust/ockam/portals`</code>
          </Text>
          <Text fontSize="sm" lineHeight={1.4}>
            Click &apos;Open Ockam&apos; on the dialog box shown above by your browser.
            <br />
            If you don&apos;t see a dialog, please click the <b>Launch Ockam</b> button below.
          </Text>
          <div id="redirect-section">
            <Text id="urlDisplay" p={8}>
              {url}
            </Text>
            <Button colorScheme="avocado" mb="8" onClick={(): void => openUrl()}>
              Launch Ockam
            </Button>
            <Text fontSize="sm">
              Once you install the Ockam.app using brew, and run it, you <br />
              will see a menu icon in your macOS menu bar. You can interact with
              <br />
              Ockam.app using that menu bar icon.
              <br />
              <br />
              Once the app starts, if you&apos;ve not already enrolled with Ockam Orchestrator
              <br />
              please enroll using the menu and then you can accept invitations to access <br />
              services shared with you.
            </Text>
          </div>
        </VStack>
      </Box>
    </Center>
  );
};

export default OckamLink;
