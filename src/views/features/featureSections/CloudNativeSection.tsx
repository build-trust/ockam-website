import { FunctionComponent } from 'react';
import { Text, Box, Heading, Stack } from '@chakra-ui/react';

import GrayFeatureContainer from '@views/features/components/GrayFeatureContainer';
import Image from '@components/Image';
import imageSquarePlaceholder from '@assets/images/placeholders/feature-image-placeholder-square.png';

const DevelopFirstSection: FunctionComponent = () => (
  <Box position="relative">
    <Box
      id="cloudNative"
      visibility="hidden"
      position="absolute"
      left={0}
      top={{ base: '50px', lg: '80px' }}
    />
    <GrayFeatureContainer>
      <Stack direction={{ base: 'column', lg: 'row'}}  >
        <Box mx={{base: 'auto', xl: 'none'}} order={{ base: 0, lg: 2 }} ml={{ base: 'auto', xl: 12 }}>
          <Image src={imageSquarePlaceholder} layout="fixed" />
        </Box>
        <Box order={{ base: 0, lg: 1 }}>
          <Heading mb={10} as="h3" fontSize='5xl'>Feature of Ockam One - Developer First</Heading>
          <Text>
            A lot happened when you ran this demo. It started two local applications - an echo service
            and an echo client - on your computer. In a production scenario, these two applications
            would be running in two separate private networks. Each application, on startup, created a
            vault to store private keys and generated a unique cryptographic identity.
          </Text>
        </Box>
      </Stack>
    </GrayFeatureContainer>
  </Box>
  );

export default DevelopFirstSection;
