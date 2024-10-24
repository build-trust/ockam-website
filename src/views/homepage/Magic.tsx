import { FunctionComponent } from 'react';
import { Box, Container, Flex, Text, Heading, TextProps, FlexProps } from '@chakra-ui/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import SideBySidePanel from '@root/components/mdx/SideBySidePanel';
import CodeBlock from '@root/components/mdx/CodeBlock';
import GradientContainer from '@root/layouts/components/GradientContainer';

import Hero from './Hero';

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
  zIndex?: number | string;
} & FlexProps;

const Magic: FunctionComponent<Props> = ({ magic, ...restProps }) => (
  <Flex
    flexDir="column"
    alignContent="center"
    justifyContent="center"
    mt={20}
    width="100%"
    id="magic"
    {...restProps}
  >
    <GradientContainer flexDir="column" justifyContent="flex-start" pt={32} h1={14} h2={6}>
      <Hero
        text="The _Magic_"
        subtext="of Ockam means you can stop <punching holes in firewalls|sending plaintext through kafka brokers|exposing private databases|asking customers to setup VPNs|waiting for IT to set up a PrivateLink|exposing data via reverse proxies>"
        darkGradient
      />
    </GradientContainer>
    <Container variant="section" py={{ base: 0, lg: 0 }} maxW="container.max" px={0}>
      <Box
        pt={{ base: 16, lg: 4 }}
        pb={{ base: 4, lg: 4 }}
        boxShadow="2xl"
        borderRadius={{ base: 0, lg: '15' }}
        borderStyle="none"
        background="white"
        width="100%"
        mx="auto"
      >
        <Container variant="section">
          <Box id="magic-parts" visibility="hidden" position="absolute" left={0} top="-80px" />

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
