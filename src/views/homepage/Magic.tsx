import { FunctionComponent } from 'react';
import { Box, Container, Flex, Text, Heading, TextProps } from '@chakra-ui/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import styled from 'styled-components';

import SideBySidePanel from '@root/components/mdx/SideBySidePanel';
import CodeBlock from '@root/components/mdx/CodeBlock';
import { HeroHeading } from '@root/components/mdx/Headings';

const components = {
  p: (props: TextProps): JSX.Element => <Text mb={8} color="inherit" {...props} width="100%" />,
  h1: Heading,
  Heading,
  code: CodeBlock,
};
type FeatureType = {
  image: string;
  title: string;
  mdx?: MDXRemoteSerializeResult;
  text?: string;
};
type Props = {
  magic: FeatureType[];
};

const GradientContainer = styled(Flex)`
  background-image: radial-gradient(ellipse 300% 140% at bottom, transparent 70%, #f9f9f9 70%),
    radial-gradient(ellipse 150% 130% at top, transparent 70%, #f9f9f9 70%),
    radial-gradient(
      ellipse 300% 140% at bottom,
      transparent 65%,
      rgba(0, 0, 0, 0.07) 70%,
      transparent 70%
    ),
    radial-gradient(
      ellipse 150% 130% at top,
      transparent 65%,
      rgba(0, 0, 0, 0.07) 70%,
      transparent 70%
    ),
    linear-gradient(#f9f9f9, #f9f9f9), linear-gradient(to right, #52c7ea, #4fdab8);
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat-x, no-repeat, no-repeat;
  background-size:
    100% 100%,
    100%,
    100%,
    100% 100%,
    100% 100%,
    100%,
    100% 100%,
    100% 100%;
  background-position:
    0 0,
    0 0,
    0 0,
    0 0,
    calc(1px - 1px) calc(75vh - 0px),
    calc(1px - 1px),
    calc(1px - 1px),
    0 0;
`;

const Magic: FunctionComponent<Props> = ({ magic }) => (
  <Flex
    flexDir="column"
    alignContent="center"
    justifyContent="center"
    mt={20}
    width="100%"
    id="magic"
  >
    <GradientContainer
      minH="70vh"
      flexDir="column"
      justifyContent="flex-start"
      pt={{ base: '10%', sm: '10%', md: '10%', lg: '8%' }}
      mb={{ base: '-15em', sm: '-20em', md: '-16em', lg: '-11em' }}
    >
      <HeroHeading>The magic behind Ockam</HeroHeading>

      <HeroHeading
        as="h2"
        fontWeight="medium"
        size={{ base: 'lg', lg: 'xl' }}
        letterSpacing={{ base: '-1.7px', md: '-2px', lg: '-1.7px' }}
        lineHeight={{ base: 1, md: 1.2, lg: 1 }}
        mt={{ base: 5, lg: 1 }}
        mx="20"
        mb="20"
      >
        Orchestrate end-to-end encryption, mutual authentication, key management, credential
        management, and authorization policy enforcement &mdash; at massive scale.
      </HeroHeading>
    </GradientContainer>
    <Container id="pricing" variant="section" py={{ base: 0, lg: 0 }} maxW="container.max" px={0}>
      <Box
        pt={{ base: 16, lg: 4 }}
        pb={{ base: 4, lg: 4 }}
        boxShadow="2xl"
        borderRadius="15"
        borderStyle="none"
        background="white"
        width="100%"
        mx="auto"
      >
        <Container variant="section">
          <Box id="features" visibility="hidden" position="absolute" left={0} top="-80px" />

          {magic.map((card, ix) => (
            <SideBySidePanel
              image={card.image}
              textOrientation={ix % 2 === 0 ? 'left' : 'right'}
              animate
              key={card.title}
            >
              <Heading width="100%" mb={4}>
                {card.title}
              </Heading>
              {card.mdx && <MDXRemote {...card.mdx} components={components} />}
              {card.text && <Text>{card.text}</Text>}
            </SideBySidePanel>
          ))}
        </Container>
      </Box>
    </Container>
  </Flex>
);

export type { FeatureType };
export default Magic;
