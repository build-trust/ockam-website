import {
  Box,
  Button,
  Container,
  Heading,
  Link as ChakraLink,
  ResponsiveValue,
  useTheme,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { BUILD_DEMO } from '@root/consts/externalResources';
import { CONTACT_FORM_PATH } from '@root/consts/paths';

import RotatingHeading from './RotatingHeading';

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
  landingPage?: boolean;
};
const Hero: FunctionComponent<Props> = ({ text, subtext, landingPage }) => {
  const { gradients } = useTheme();

  const heroText = (): JSX.Element => {
    if (!text) {
      return (
        <>
          Build{' '}
          <Box as="span" bgImage={gradients.primary} bgClip="text">
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
              <Box as="span" bgImage={gradients.primary} bgClip="text">
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
    const standard = { base: '3xl', lg: 'h1' };
    if (!text) return standard;
    if (text?.length > 40) return { base: '3xl', lg: '4xl' };
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
          <Link href="#why" passHref>
            <Button
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
          </Link>
        </Box>
      );
    }
    return (
      <Box textAlign="center" my={14}>
        <Link href={BUILD_DEMO.href} passHref>
          <Button
            color="rgb(40, 40, 40)"
            border="1px solid white"
            mb={{ base: 5, sm: 0 }}
            ml={{ base: 2.5, sm: 3 }}
            mr={{ base: 2.5, sm: 3 }}
            _hover={{
              backgroundColor: 'rgb(10, 10, 10)',
              color: 'white',
            }}
          >
            Start Building
          </Button>
        </Link>
        <Link href={CONTACT_FORM_PATH} passHref>
          <Button
            position="relative"
            color="white"
            borderWidth={1}
            borderStyle="solid"
            borderColor="transparent"
            backgroundColor="rgb(10, 10, 10)"
            backgroundClip="padding-box"
            mb={{ base: 5, sm: 0 }}
            ml={{ base: 2.5, sm: 3 }}
            mr={{ base: 2.5, sm: 3 }}
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
            Get a Demo
          </Button>
        </Link>
      </Box>
    );
  };
  return (
    <HeroBox>
      <Container
        variant="section"
        pt={{ base: 10, lg: 16 }}
        pb={{ base: 0, lg: 0 }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Heading
            as="h1"
            size={calculatedHeadingSize()}
            fontWeight="extrabold"
            textAlign="center"
            color="white"
            my={16}
            lineHeight={calculatedLineHeight()}
          >
            <ChakraLink href="#why" _hover={{ textDecoration: 'none', cursor: 'default' }}>
              {heroText()}
            </ChakraLink>
          </Heading>
          {ctas()}
          <RotatingHeading text={subtext} />
        </Box>
      </Container>
    </HeroBox>
  );
};

export default Hero;
