import { FunctionComponent } from 'react';
import { chakra, Box, Container, Flex, Heading, SimpleGrid, Text, Icon } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import Image from 'next/image';

import QuoteIcon from '@assets/icons/quote.svg';
import MatthewGregoryImage from '@assets/images/matthew-gregory.png';
import LineDivider from '@components/LineDivider';

const Quote: FunctionComponent = () => (
  <Box bgColor="gray.50">
    <Container variant="section" pb={{ base: 10, lg: 20 }}>
      <Flex pt={{ base: 6, lg: 16 }} direction="column" align="center" position="relative">
        <LineDivider top={0} h={{ base: 10, lg: 20 }} gradientDir="fromBottomToTop" />
        <ArrowDownIcon w={8} h={8} color="avocado.500" />
      </Flex>

      <SimpleGrid columns={{ base: 1, lg: 2 }} my={{ base: 10, lg: 8 }}>
        <Flex justify="center">
          <Box bgColor="avocado.500" p={0} width="308" height="417">
            <Image
              src={MatthewGregoryImage}
              width="308"
              height="417"
              alt="Matthew Gregory, CEO of Ockam image"
              placeholder="blur"
              priority
            />
          </Box>
        </Flex>

        <Flex direction="column" justify="center" pt={{ base: 8, lg: 0 }}>
          <Icon as={QuoteIcon} w={10} h={8} color="avocado.500" />
          <Heading as="h2" size="h2" mt={6} mb={4} maxW="lg" lineHeight={1.3}>
            Everything The Team does is based on <chakra.span color="brand.400">Trust</chakra.span>.
          </Heading>

          <Heading as="h2" size="h2" mb={8} maxW="lg" lineHeight={1.3}>
            That’s why <chakra.span color="avocado.300">Trust</chakra.span> is our one-and-only
            value.
          </Heading>

          <Text fontSize="xl" fontWeight="bold" color="brand.900" lineHeight={1.3}>
            Matthew Gregory
          </Text>

          <Text fontWeight="regular" lineHeight={1.5}>
            CEO of Ockam
          </Text>
        </Flex>
      </SimpleGrid>
    </Container>
  </Box>
);

export default Quote;
