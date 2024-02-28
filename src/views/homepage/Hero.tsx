import {
  Box,
  Button,
  Container,
  Heading,
  Link as ChakraLink,
  ResponsiveValue,
  useTheme,
  BoxProps,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import crypto from 'crypto';

// import { BUILD_DEMO } from '@root/consts/externalResources';
// import { CONTACT_FORM_PATH } from '@root/consts/paths';

import ExcalidrawAnimation from '@root/components/ExcalidrawAnimation';

import RotatingHeading from './RotatingHeading';

const sha512 = (input: string): string => {
  const hash = crypto.createHash('sha512');
  hash.update(input);
  return hash.digest('hex');
};

const HeroBox = styled(Box)`
  &:before {
    content: '';
    background: rgb(10, 10, 10);
    background-image: linear-gradient(0deg, rgb(40, 40, 40), rgb(10, 10, 10));
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  color: white;
  overflow: hidden;
  position: relative;
`;

type Props = {
  text?: string;
  subtext?: string;
  image?: string;
  landingPage?: boolean;
  animate?: boolean;
  aspect?: 'width' | 'height';
  darkGradient?: boolean;
  animationStartAt?: number;
  textSize?: ResponsiveValue<
    (string & {}) | '3xl' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'xs' | '4xl'
  >;
  subtextSize?: ResponsiveValue<
    (string & {}) | '3xl' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'xs' | '4xl'
  >;
} & BoxProps;

const Hero: FunctionComponent<Props> = ({
  text,
  subtext,
  image,
  landingPage,
  textSize,
  subtextSize,
  animate,
  aspect,
  darkGradient,
  animationStartAt,
  ...restProps
}) => {
  const { gradients } = useTheme();

  const heroText = (): JSX.Element => {
    if (!text) {
      return (
        <>
          Build{' '}
          <Box as="span" bgImage="linear-gradient(#0A1A2B, #36A7C9)" bgClip="text">
            Trust
          </Box>
        </>
      );
    }
    return (
      <>
        {text.split(/(_\w.*?\w_)/).map((string) => {
          const highlight = string.match(/^_(\w.*?\w)_$/);

          if (highlight) {
            return (
              <Box
                as="span"
                bgImage={darkGradient ? gradients.dark : gradients.primary}
                bgClip="text"
                key={`highlight-${sha512(highlight[1])}`}
              >
                {highlight[1]}
              </Box>
            );
          }
          return string;
        })}
      </>
    );
  };

  const calculatedHeadingSize = ():
    | ResponsiveValue<(string & {}) | '3xl' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'xs' | '4xl'>
    | undefined => {
    if (textSize) return textSize;
    const standard = { base: '5em', sm: '6em', md: '8em', lg: '10em' };
    if (!text) return standard;
    if (text?.length > 33) return { base: '3em', md: '5em', lg: '8em' };
    return standard;
  };
  const calculatedLineHeight = (): ResponsiveValue<number> => {
    const standard = { base: 1, lg: 1 };
    if (!text) return standard;
    if (text?.length > 40) return { base: 1, lg: 1.2 };
    return standard;
  };

  const ctas = (): JSX.Element => {
    if (landingPage) {
      return (
        <Box textAlign="center" my={14}>
          <Button
            as={Link}
            href="#why"
            position="relative"
            borderWidth={1}
            color="white"
            borderStyle="solid"
            borderColor="transparent"
            backgroundColor="rgb(10, 10, 10)"
            backgroundClip="padding-box"
            _before={{
              content: "''",
              backgroundImage: gradients.primary,
              borderRadius: '4px',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
              margin: '-1px',
              boxShadow: '0 0 50px 0px #52c7ea',
            }}
            _hover={{
              backgroundImage: gradients.primary,
              borderColor: 'rgb(10, 10, 10)',
              color: 'rgb(10, 10, 10)',
            }}
            _active={{
              backgroundImage: `${gradients.primary}`,
              color: 'white',
              boxShadow: '0 0 60px 10px #52c7ea',
            }}
            _focus={{
              backgroundImage: `${gradients.primary}`,
              color: 'white',
              boxShadow: '0 0 60px 10px #52c7ea',
            }}
          >
            Tell me more
          </Button>
        </Box>
      );
    }
    return <></>;
  };
  return (
    <HeroBox {...restProps}>
      <Container
        variant="section"
        pt={{ base: 0, lg: 0 }}
        pb={{ base: 0, lg: 0 }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box width="100%">
          <Heading
            as="h1"
            fontSize={calculatedHeadingSize()}
            fontWeight="extrabold"
            textAlign="center"
            color="white"
            letterSpacing="-0.06em"
            mt={0}
            lineHeight={calculatedLineHeight()}
            width="100%"
            mb={4}
          >
            <ChakraLink href="#why" _hover={{ textDecoration: 'none', cursor: 'default' }}>
              {heroText()}
            </ChakraLink>
          </Heading>
          {ctas()}
          <RotatingHeading text={subtext} size={subtextSize} />
        </Box>
        {image && (
          <Box
            width="100%"
            height="auto"
            overflow="hidden"
            background="white"
            borderTopLeftRadius="3xl"
            borderTopRightRadius="3xl"
          >
            <ExcalidrawAnimation
              src={image}
              animate={!!animate}
              hero
              aspect={aspect}
              startAt={animationStartAt}
            />
          </Box>
        )}
      </Container>
    </HeroBox>
  );
};

export default Hero;
