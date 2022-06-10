import { FunctionComponent } from 'react';
import { Box, Container, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import Image from 'next/image';

import LineDivider from '@components/LineDivider';
import { QuoteIcon } from '@components/icons';

const Quote: FunctionComponent = () => (
  <Box bgColor="gray.50">
    <Container variant="section" pb={{ base: 10, lg: 20 }}>
      <Flex pt={{ base: 6, lg: 16 }} direction="column" align="center" position="relative">
        <LineDivider top={0} h={{ base: 10, lg: 20 }} gradientDir="fromBottomToTop" />
        <ArrowDownIcon w={8} h={8} color="avocado.500" />
      </Flex>

      <Text
        fontSize={{ base: 'lg', lg: 'xl' }}
        lineHeight={{ base: 1.4, lg: 1.3 }}
        my={{ base: 6, lg: 8 }}
        maxW="2xl"
        textAlign="center"
      >
        Ockam builds open source tools that empower any developer, of any skill level, to build
        trustful connected ecosystems.
      </Text>

      <SimpleGrid columns={{ base: 1, lg: 2 }} my={{ base: 10, lg: 8 }}>
        <Flex justify="center">
          <Box bgColor="avocado.500" p={0} width="308" height="417">
            <Image src="/matthew-gregory.png" width="308" height="417" />
          </Box>
        </Flex>

        <Flex direction="column" justify="center" pt={{ base: 8, lg: 0 }}>
          <QuoteIcon w={10} h={8} color="avocado.500" />

          <Heading as="h2" size="h2" mt={6} mb={8} maxW="lg" lineHeight={1.3}>
            Before We Wrote The Code, We Shipped Our Values
          </Heading>

          <Text fontSize="xl" fontWeight="bold" color="brand.900" lineHeight={1.3}>
            Matthew Gregory
          </Text>
          <Text fontWeight="regular" lineHeight={1.5}>
            Ceo of Ockam
          </Text>
        </Flex>
      </SimpleGrid>
    </Container>
  </Box>
);

export default Quote;
