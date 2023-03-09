import { FunctionComponent } from 'react';
import { Container, SimpleGrid, Text, Heading, Box } from '@chakra-ui/react';
import Image from 'next/image';

import CodeTwoImage from '@assets/images/code2.png';
import CopyToClipboard from '@components/CopyToClipboard';
import Transition from '@root/components/Transition/Transition';

const CODE_TEXT = `# Install Ockam Command
brew install ockam
# If you don't use Homebrew, look for alternate ways to install here:
# https://docs.ockam.io/#install

# Check that everything was installed correctly by enrolling with Ockam Orchestrator.
#
# This will create a Space and Project for you in the Orchestrator and provision an
# End-to-End Encrypted Cloud Relay service in your \`default\` project at \`/project/default\`.
ockam enroll
ockam project information --output json > default-project.json

# -- APPLICATION SERVICE --

# Start an application service, listening on a local ip and port, that clients would access
# through the cloud encrypted relay. We'll use a simple http server for this first example but
# this could be any other application service.
python3 -m http.server --bind 127.0.0.1 5000

# In a new terminal window, setup an ockam node, called \`s\`, as a sidecar next to the 
# application service. Then create a tcp outlet, on the \`s\` node, to send raw tcp traffic to the
# service. Finally create a forwarder in your default Orchestrator project.
ockam node create s --project default-project.json
ockam tcp-outlet create --at /node/s --from /service/outlet --to 127.0.0.1:5000
ockam forwarder create s --at /project/default --to /node/s

# -- APPLICATION CLIENT --

# Setup an ockam node, called \`c\`, as a sidecar next to our application client. Then create an
# end-to-end encrypted secure channel with s, through the cloud relay. Finally, tunnel traffic
# from a local tcp inlet through this end-to-end secure channel.
ockam node create c --project default-project.json
ockam secure-channel create --from /node/c --to /project/default/service/forward_to_s/service/api \\
  | ockam tcp-inlet create --at /node/c --from 127.0.0.1:7000 --to -/service/outlet

# Access the application service, that may be in a remote private network though the end-to-end
# encrypted secure channel, via your private and encrypted cloud relay.
curl --head 127.0.0.1:7000`;

const TITLE = 'Powerful Protocols, Made Simple';
const TEXTS = [
  [
    'To be private and secure by design, applications must have granular control over every trust and access decision.',
    'This requires a variety of complex cryptographic and messaging protocols to work together in a secure and scalable way.',
    'Developers have to think about creating unique cryptographic keys and issuing credentials to all application entities. They have to design ways to safely store secrets in hardware and securely distribute roots of trust. They must setup communication channels that guarantee data authenticity and integrity. They must enforce authorization policies. They also need protocols that rotate and revoke credentials.',
  ],
  [
    'All of this gets very complicated, very quickly.',
    'At Ockam, our mission is to empower every developer with simple tools to create applications that build trust in data.',
    'We’ve taken proven cryptographic protocols and made them easy to use on the command line or invoke as a programming library. We handle all the underlying complexity and give you high-level and composable building blocks to create end-to-end, application layer trust in data.',
    'Here is one example of this in action …',
  ],
];

const Tools: FunctionComponent = () => (
  <Container variant="section" pt={{ base: 16, lg: 24 }} pb={{ base: 20, lg: 30 }}>
    <Heading as="h2" size="h2" bgColor="white" mb={{ base: 12, lg: 16 }}>
      {TITLE}
    </Heading>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacingX={16} mb={{ base: 20, lg: 16 }}>
        {TEXTS.map((column) => (
          <Box key={`${column[1]}column`} _notLast={{ mb: { base: 5, lg: 0 } }}>
            {column.map((text) => (
              <Text key={text} fontSize={{ lg: 'lg' }} _notLast={{ mb: { base: 5, lg: 4 } }}>
                {text}
              </Text>
            ))}
          </Box>
        ))}
      </SimpleGrid>

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
        <CopyToClipboard
          codeText={CODE_TEXT}
          display="none"
          position="absolute"
          top="9%"
          right="4%"
        />
        <Transition delay={200} duration={500}>
          <Image
            src={CodeTwoImage}
            width={2080 / 2}
            height={1301 / 2}
            alt="Code block 2"
            placeholder="blur"
          />
        </Transition>
      </Box>
    </Container>
  );

export default Tools;
