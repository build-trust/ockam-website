import { FunctionComponent } from 'react';
import { Box, Container, Heading, List, ListItem, ListIcon, useTheme, Text, Flex } from '@chakra-ui/react';
import Image from 'next/image';

import ControlIcon from '@assets/icons/control.svg';
import PrivacyIcon from '@assets/icons/privacy.svg';
import IntegrityIcon from '@assets/icons/integrity.svg';
import AuthenticityIcon from '@assets/icons/authenticity.svg';
import HeroLinearGradient from '@assets//images/hero-linear-gradient.png'
import CopyToClipboard from '@components/CopyToClipboard';
import CodeOneImage from '@assets/images/code1.png';


const CODE_TEXT = `ockam secure-channel create --from /node/n1 --to /node/n2/service/api \\
    | ockam message send "hello ockam" --from /node/n1 --to -/service/uppercase

# Created Secure Channel to /node/n2/service/api
# Received "hello ockam" at /service/uppercase, Responding with "HELLO OCKAM"

# HELLO OCKAM`;

const SUBHEADING_TEXTS = [
  { icon: IntegrityIcon, text: 'Integrity' },
  { icon: AuthenticityIcon, text: 'Authenticity' },
  { icon: PrivacyIcon, text: 'Privacy' },
  { icon: ControlIcon, text: 'Control' },
];


const Hero: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Box
      bgImage={HeroLinearGradient.src}
      bgPosition="center bottom"
      bgRepeat="no-repeat"
    >
      <Container
        variant="section"
        pb={{ base: 10, lg: 16  }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height={{ base: "calc(100vh - 108px)", lg: "50rem" }}
      >
        <Box>
          <Heading as="h1" size="h1" fontWeight="extrabold" textAlign="center">
            Build{' '}
            <Box as="span" bgImage={gradients.primary} bgClip="text">
              Trust
            </Box>
          </Heading>
          <List
            mt={{ base: 8, lg: 10 }}
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            flexDirection="row"
          >
            {SUBHEADING_TEXTS.map(({ text, icon }) => (
              <ListItem
                key={text}
                display="flex"
                alignItems="center"
                px={{ base: 4, lg: 8 }}
                mb={{ base: 5, lg: 0 }}
                fontSize={{ base: 'lg', lg: 'xl' }}
                fontWeight="medium"
                lineHeight={1.3}
                color="brand.900"
              >
                <ListIcon as={icon} w={6} h={6} mr={4} />
                {text}
              </ListItem>
            ))}
          </List>
        </Box>



        <Text maxW="2xl" fontSize="lg" textAlign="center">
          Ockam is a suite of open source tools, programming libraries, and managed cloud services to orchestrate end-to-end encryption, mutual authentication, key management, credential management, and authorization policy enforcement – at massive scale.
        </Text>
        <Flex maxW="46rem"  boxShadow="xl">
          <Box position="relative" fontSize={0} zIndex={0}>
            <CopyToClipboard position="absolute" bottom={5} right={5} codeText={CODE_TEXT} />
            <Image src={CodeOneImage} alt="Code block 1" placeholder="blur" priority />
          </Box>
        </Flex>
      </Container>
    </Box>

  );
};

export default Hero;
