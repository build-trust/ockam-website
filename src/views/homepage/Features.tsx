import { FunctionComponent, SVGAttributes } from 'react';
import { Box, Container, Flex, Text, Heading, Icon, TextProps } from '@chakra-ui/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { IconType } from 'react-icons';
import {
  HiFingerPrint,
  HiHeart,
  HiShieldCheck,
  HiClock,
  HiBan,
  HiGlobeAlt,
  HiLockClosed,
  HiKey,
  HiCubeTransparent,
  HiCloud,
} from 'react-icons/hi';

import GreenIconWrapper from '@components/GreenIconWrapper';
import SideBySidePanel from '@root/components/mdx/SideBySidePanel';
import CodeBlock from '@root/components/mdx/CodeBlock';

const components = {
  p: (props: TextProps): JSX.Element => <Text mb={8} color="inherit" {...props} />,
  h1: Heading,
  Heading,
  code: CodeBlock,
};

const IconLookup: { [key: string]: IconType } = {
  fingerprint: HiFingerPrint,
  shieldcheck: HiShieldCheck,
  clock: HiClock,
  heart: HiHeart,
  ban: HiBan,
  globe: HiGlobeAlt,
  lock: HiLockClosed,
  key: HiKey,
  transparentcube: HiCubeTransparent,
  cloud: HiCloud,
};

type FeatureProps = {
  icon?: FunctionComponent<SVGAttributes<SVGElement>> | string;
  title: string;
  texts?: string[];
  text?: string;
};

const Feature: FunctionComponent<FeatureProps> = ({ icon, title, texts, text }) => {
  const useIcon = typeof icon === 'string' ? IconLookup[icon] : icon;

  const displayText = (): JSX.Element | JSX.Element[] => {
    if (texts && texts?.length > 0) {
      return texts.map((t) => (
        <Text key={t} fontSize="sm" mb={{ base: 4, lg: 2 }} _last={{ mb: { lg: 0 } }}>
          {t}
        </Text>
      ));
    }
    if (text) {
      return (
        <Text key={`${title}-0`} fontSize="sm" mb={{ base: 4, lg: 2 }} _last={{ mb: { lg: 0 } }}>
          {text}
        </Text>
      );
    }
    return <></>;
  };
  return (
    <Flex>
      <Box flex={0} mr={5}>
        <GreenIconWrapper>
          <Icon as={useIcon} color="white" w={6} h={6} />
        </GreenIconWrapper>
      </Box>

      <Box>
        <Text fontWeight="bold" fontSize="xl" color="brand.900" mb={2} letterSpacing="-1px">
          {title}
        </Text>
        {displayText()}
      </Box>
    </Flex>
  );
};

type FeatureType = {
  image: string;
  title: string;
  mdx?: MDXRemoteSerializeResult;
  text?: string;
};
type Props = {
  features: FeatureType[];
};
const Features: FunctionComponent<Props> = ({ features }) => (
  <Container id="pricing" variant="section" py={{ base: 16, lg: 24 }}>
    <Heading
      as="h1"
      fontWeight="extrabold"
      textAlign="center"
      color="white"
      size={{ base: '2xl', lg: '3xl' }}
      letterSpacing={{ base: '-1.5px', lg: '-1.5px' }}
      lineHeight={{ base: 1, lg: 1.5 }}
    >
      How Ockam Works
    </Heading>
    <Heading
      as="h2"
      textAlign="center"
      fontWeight="medium"
      color="rgba(255, 255, 255, 0.8)"
      size={{ base: 'lg', lg: 'xl' }}
      letterSpacing={{ base: '-1.7px', md: '-2px', lg: '-1.7px' }}
      lineHeight={{ base: 1, md: 1.2, lg: 1 }}
      mt={{ base: 5, lg: 1 }}
      mx="20"
      mb="20"
    >
      Orchestrate end-to-end encryption, mutual authentication, key management, credential
      management, and authorization policy enforcement &mdash; at massive scale.
    </Heading>
    <Box
      pt={{ base: 16, lg: 24 }}
      pb={{ base: 20, lg: 24 }}
      boxShadow="2xl"
      borderRadius="15"
      borderStyle="none"
      background="white"
      maxW="container.max"
      mx="auto"
    >
      <Container variant="section">
        <Box id="features" visibility="hidden" position="absolute" left={0} top="-80px" />

        {features.map((card, ix) => (
          <SideBySidePanel
            image={card.image}
            textOrientation={ix % 2 === 0 ? 'left' : 'right'}
            animate
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
);

export { Feature };
export type { FeatureType };
export default Features;
