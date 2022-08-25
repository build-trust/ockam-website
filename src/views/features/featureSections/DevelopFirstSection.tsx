import { FunctionComponent } from 'react';
import { Text, Box, Stack, Heading, Icon, SimpleGrid } from '@chakra-ui/react';

import DeveloperIcon from '@assets/icons/developer.svg';
import imageSquarePlaceholder from '@assets/images/placeholders/feature-image-placeholder-square.png';
import Image from '@components/Image'
import GreenIconWrapper from '@components/GreenIconWrapper';

const DevelopFirstSection: FunctionComponent = () => (
  <Box mb={24} position="relative">
    <Box
      id="developerFirst"
      visibility="hidden"
      position="absolute"
      left={0}
      top={{ base: '100px', lg: '-100px' }}
    />
    <Stack direction={{ base: 'column', lg: 'row'}} pb={24} spacing={14} >
      <Box mx={{base: 'auto', xl: 'none'}}>
        <Image src={imageSquarePlaceholder} layout="fixed" />
      </Box>
      <Box>
        <Heading mb={10} as="h3" fontSize='5xl'>Feature of Ockam One - Developer First</Heading>
        <Text>
          A lot happened when you ran this demo. It started two local applications - an echo service
          and an echo client - on your computer. In a production scenario, these two applications
          would be running in two separate private networks. Each application, on startup, created a
          vault to store private keys and generated a unique cryptographic identity.
        </Text>
      </Box>
    </Stack>
    <SimpleGrid columns={{base: 1, lg: 3}} spacing={5}>
      <Box>
        <GreenIconWrapper mb={3}>
          <Icon as={DeveloperIcon} color="white" w={6} h={6} />
        </GreenIconWrapper>
        <Heading mb={3} as="h4" fontSize='xl'>Developer First</Heading>
        <Text mb={2}>Stripe did is for payment rails. Twilio did it for telecom.</Text>
        <Text>Ockam abstracts away complex infrastructure and cryptogrpahic protocols to empower millions of developers.</Text>
      </Box>
      <Box>
        <GreenIconWrapper mb={3}>
          <Icon as={DeveloperIcon} color="white" w={6} h={6} />
        </GreenIconWrapper>
        <Heading mb={3} as="h4" fontSize='xl'>Developer First</Heading>
        <Text mb={2}>Stripe did is for payment rails. Twilio did it for telecom.</Text>
        <Text>Ockam abstracts away complex infrastructure and cryptogrpahic protocols to empower millions of developers.</Text>
      </Box>
      <Box>
        <GreenIconWrapper mb={3}>
          <Icon as={DeveloperIcon} color="white" w={6} h={6} />
        </GreenIconWrapper>
        <Heading mb={3} as="h4" fontSize='xl'>Developer First</Heading>
        <Text mb={2}>Stripe did is for payment rails. Twilio did it for telecom.</Text>
        <Text>Ockam abstracts away complex infrastructure and cryptogrpahic protocols to empower millions of developers.</Text>
      </Box>
    </SimpleGrid>

  </Box>


  );

export default DevelopFirstSection;
