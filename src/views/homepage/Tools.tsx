import { FunctionComponent } from 'react';
import { Box, Container, Flex, Text, SimpleGrid, Heading, useTheme } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import Image from 'next/image';

import StepsLabel from '@components/StepsLabel';
import LineDivider, { DashedLineDivider } from '@components/LineDivider';
import BorderDot from '@components/BorderDot';

const STEPS = [
  {
    title: 'Get an Ockam Package',
    text: 'Ockam packages are currently available for homebrew, docker, terraform, and as rust libraries.',
  },
  {
    title: 'Set Up Your Infrastructure',
    text: 'Generate identity keys, enroll with Ockam Orchestrator, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida congue mauris. Fusce rutrum venenatis nibh at iaculis. ',
  },
  {
    title: 'Move Data with Trust',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida congue mauris. Fusce rutrum venenatis nibh at iaculis. ',
  },
];

const Tools: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Container variant="section" zIndex={0} pb={{ base: 16, lg: 30 }}>
      <DashedLineDivider />
      <LineDivider top={{ base: -16, lg: 10 }} h={{ base: 28, lg: 14 }} bg={gradients.tertiary} />
      <ArrowDownIcon w={8} h={8} color="avocado.500" mt={{ base: 8, lg: 20 }} />

      <Heading as="h2" size="h2" bgColor="white" py={6}>
        Simple Tools
      </Heading>

      <StepsLabel mb={{ lg: 24 }}>
        1. Add Our Code
        <LineDivider
          display={{ base: 'none', lg: 'block' }}
          top="100%"
          h={{ base: 8, lg: 16 }}
          gradientDir="fromBottomToTop"
          bg={gradients.tertiary}
        />
      </StepsLabel>

      <SimpleGrid columns={{ base: 1, lg: 2 }} w="full">
        <Box my={{ base: 16, lg: 'auto' }} mx={{ base: 'auto', lg: 0 }}>
          <Image src="/tools.png" width={510} height={397} />
        </Box>

        <Box pl={{ lg: 30 }} maxW={{ lg: 'lg' }} my="auto" ml={{ lg: '1px' }} position="relative">
          <BorderDot />

          <Box>
            {STEPS.map((step, index) => (
              <Flex flex={1} key={step.title} mb={{ base: 6, lg: 9 }}>
                <Box
                  bgColor="brand.900"
                  borderRadius="md"
                  w={{ base: 6, lg: 8 }}
                  h={{ base: 6, lg: 8 }}
                  p={{ base: 1.5, lg: 2 }}
                  color="white"
                  fontSize={{ base: 'xs', lg: 'sm' }}
                  fontWeight={{ lg: 'bold' }}
                  textAlign="center"
                  lineHeight={1}
                  mr={5}
                >
                  {index + 1}
                </Box>

                <Box flex={2}>
                  <Heading as="h4" size="h4" mb={{ base: 3, lg: 4 }}>
                    {step.title}
                  </Heading>
                  <Text fontSize="md">{step.text}</Text>
                </Box>
              </Flex>
            ))}
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Tools;
