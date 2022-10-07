import { FunctionComponent } from 'react';
import { Container, Heading, IconButton, Box } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';
import Image from 'next/image';

import CodeTwoImage from '@assets/images/code2.png';

const CODE_TEXT = `curl --proto '=https' --tlsv1.2 -sSf https://raw.githubusercontent.com/build-trust/ockam/develop/install.sh | sh

ockam node create relay

# -- APPLICATION SERVICE --

python3 -m http.server --bind 127.0.0.1 5000

ockam node create server_sidecar
ockam tcp-outlet create --at /node/server_sidecar --from /service/outlet --to 127.0.0.1:5000
ockam forwarder create server_sidecar --at /node/relay --to /node/server_sidecar

# -- APPLICATION CLIENT --

ockam node create client_sidecar
ockam secure-channel create --from /node/client_sidecar --to /node/relay/service/forward_to_server_sidecar/service/api \\
    | ockam tcp-inlet create --at /node/client_sidecar --from 127.0.0.1:7000 --to -/service/outlet

curl --head 127.0.0.1:7000`;

const copyToClipboard = (): void => {
  if (typeof navigator !== 'undefined') navigator.clipboard.writeText(CODE_TEXT);
};

const Tools: FunctionComponent = () => (
  <Container variant="section" pt={{ base: 16, lg: 24 }} pb={{ base: 20, lg: 30 }}>
    <Heading as="h2" size="h2" bgColor="white" mb={{ base: 12, lg: 16 }}>
      Ockam is Simple to Use
    </Heading>

    <Box
      position="relative"
      _hover={{ button: { display: 'block' } }}
      zIndex={0}
      p={0}
      sx={{
        span: {
          boxShadow: 'xl',
        },
      }}
    >
      <IconButton
        aria-label="Copy code to clipboard"
        colorScheme="avocado"
        bgColor="brand.800"
        _hover={{ bgColor: 'brand.900' }}
        size="sm"
        icon={<CopyIcon />}
        display="none"
        position="absolute"
        top="9%"
        right="4%"
        zIndex={1}
        onClick={copyToClipboard}
      />

      <Image
        src={CodeTwoImage}
        width={2080 / 2}
        height={1301 / 2}
        alt="Code block 2"
        placeholder="blur"
        priority
      />
    </Box>
  </Container>
);

export default Tools;
