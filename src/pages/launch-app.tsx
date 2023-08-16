import {ReactElement, useCallback, useEffect, useState} from 'react';
import {Box, Button, Center, Heading, Text, VStack} from '@chakra-ui/react';

import LogoSygnetBlack from '@public/style-guide/logo/sygnet_black.svg';

const OckamLink = (): ReactElement => {
    const [url, setUrl] = useState("");

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
    const openUrl = useCallback(
        (): void => {
        if (url) {
            window.location.href = url;
        }
    }, [url]
    );

    useEffect(
        () => {
            setUrl(getUrlFromWindow());
        }, []
    ); // Run on mount.

    useEffect(
        () => {
            openUrl();
        }, [openUrl, url]
    ); // Run whenever the url state changes.

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
                    <Heading as="h1" size="h2">
                        Launching Ockam app 🚀
                    </Heading>
                    <Text fontSize={{ lg: 'lg' }} lineHeight={1.4} >
                        Your link will open automatically<br/>If it does not, click <b>Open</b> below
                    </Text>
                    <div id="redirect-section">
                        <Text id="urlDisplay" p={8}>{url}</Text>
                        <Button colorScheme="avocado" mb="8" onClick={(): void => openUrl()}>
                            Open
                        </Button>
                    </div>
                </VStack>
            </Box>
        </Center>

    );
};

export default OckamLink;