import { FunctionComponent } from 'react';
import { Text, Box, Heading, Icon } from '@chakra-ui/react';

import DeveloperIcon from '@assets/icons/developer.svg';
import imageRectanglePlaceholder from '@assets/images/placeholders/feature-image-placeholder-rectangle.png';
import Image from '@components/Image'
import GreenIconWrapper from '@components/GreenIconWrapper';

const KeyManagementSection: FunctionComponent = () => (
  <Box py={24} position="relative">
    <Box
      id="keyManagement"
      visibility="hidden"
      position="absolute"
      left={0}
      top={{ base: '100px', lg: '80px' }}
    />
    <Box>
      <Box display="flex" alignItems="center" flexDirection="row" mb={10}>
        <GreenIconWrapper mr={4} w={14} h={14}>
          <Icon as={DeveloperIcon} color="white" w={6} h={6} />
        </GreenIconWrapper>
        <Heading as="h3" fontSize='5xl'>
          Developer First
        </Heading>
      </Box>

      <Text mb={12}>
        A lot happened when you ran this demo. It started two local applications - an echo service
        and an echo client - on your computer. In a production scenario, these two applications
        would be running in two separate private networks. Each application, on startup, created a
        vault to store private keys and generated a unique cryptographic identity.
      </Text>
      <Box mb={6}>
        <Image src={imageRectanglePlaceholder}  />
      </Box>
      <Heading mb={8} as="h3" fontSize='5xl' textAlign="center">
        Feature of Ockam One - Developer First
      </Heading>
      <Text mb={8} textAlign="center">
        A lot happened when you ran this demo. It started two local applications - an echo service
        and an echo client - on your computer. In a production scenario, these two applications
        would be running in two separate private networks. Each application, on startup, created a
        vault to store private keys and generated a unique cryptographic identity.
      </Text>
    </Box>
  </Box>
);

export default KeyManagementSection;
