import { FunctionComponent } from 'react';
import { Flex, Box, Container, Text, SimpleGrid, Heading, useTheme } from '@chakra-ui/react';
import Image from 'next/image';

import StepsLabel from '@components/StepsLabel';
import LineDivider from '@components/LineDivider';

const TEXTS = [
  [
    '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida congue mauris. Fusce rutrum venenatis nibh at iaculis. Lorem ipsum dolor sit amet, consectetur.',
    '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida congue mauris. Fusce rutrum venenatis nibh at iaculis. Lorem ipsum dolor sit amet, consectetur.',
  ],

  [
    '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida congue mauris. Fusce rutrum venenatis nibh at iaculis. Lorem ipsum dolor sit amet, consectetur.',
  ],
];

const Infrastructure: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Flex bgImg={{ lg: '/infrastructure-bg.png' }} bgPos="bottom" bgRepeat="no-repeat">
      <Container variant="section">
        <StepsLabel mb={6}>
          <LineDivider bottom="100%" h={{ base: 24, lg: 20 }} bg={gradients.tertiary} />
          2. Get Trust
        </StepsLabel>

        <Heading as="h2" size="h2" mb={{ base: 6, lg: 8 }}>
          Build Complex Infrastructure
        </Heading>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacingX={16} mb={{ base: 16, lg: 30 }}>
          {TEXTS.map((column) => (
            <Box key={`${column[1]}column`} mb={{ lg: 8 }}>
              {column.map((text, index) => (
                <Text
                  key={text}
                  fontSize={{ lg: 'lg' }}
                  mb={{ base: 4, lg: index + 1 === column.length ? 0 : 4 }}
                >
                  {text}
                </Text>
              ))}
            </Box>
          ))}
        </SimpleGrid>

        <Box
          display={{ base: 'none', lg: 'initial' }}
          pr={{ lg: 16 }}
          my={{ lg: 'auto' }}
          transform="translateY(6px)"
        >
          <Image src="/infrastructure.png" width={956} height={425} />
        </Box>
      </Container>
    </Flex>
  );
};

export default Infrastructure;
