import { FunctionComponent, ReactNode } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import { MainLayout } from '@root/layouts';
import { Hero } from '@views/homepage';
import SEOHead from '@root/components/SEOHead';

import GradientContainer from '../components/GradientContainer';

type RazorProps = {
  title?: string;
  subtext?: string;
  children?: ReactNode;
  isEpisode?: boolean;
};
const RazorLayout: FunctionComponent<RazorProps> = ({ children, title, subtext, isEpisode }) => {
  const signupForm = isEpisode ? (
    <iframe
      src="https://cdn.forms-content.sg-form.com/c0e4f080-70c9-11ee-8f0b-1239171df302"
      title="The Razor - signup"
      width="100%"
      height="400px"
    />
  ) : (
    <iframe
      id="why"
      title="The Razor - signup"
      width="100%"
      height="500px"
      src="https://cdn.forms-content.sg-form.com/c0e4f080-70c9-11ee-8f0b-1239171df302"
    />
  );
  const signupCTAText = isEpisode ? (
    <Text maxW="2xl" mx="auto" color="brand.900">
      We save you time, and your inbox, by emailing you only once a month&nbsp;&mdash;&nbsp; with a
      round-up of the best articles on cybersecurity, inspiring developer experiences, building
      systems that are secure-by-design, and related tooling.
    </Text>
  ) : (
    <></>
  );

  return (
    <MainLayout backgroundColor="#F9F9F9" hasGradient>
      <Box w="100%" background="#f9f9f9" pb={20}>
        <SEOHead title={title || 'The Razor'} />
        <GradientContainer
          bottomOnly
          pt={{ base: '5em', sm: '10em', md: '10em', lg: '15em' }}
          h="100vh"
          minH="50em"
          mb="-12em"
        >
          <Hero
            text={title || 'The Razor'}
            textSize={{ base: '3em', sm: '3em', md: '6em', lg: '8em' }}
            subtextSize={{ base: '2em', sm: '2em', md: '4em' }}
            subtext={
              subtext ||
              'The latest & most interesting news about secure-by-design systems, developer experience, and related tooling'
            }
          />
        </GradientContainer>
        <Box
          pt={{ base: 16, lg: 4 }}
          pb={{ base: 4, lg: 4 }}
          boxShadow="2xl"
          borderRadius={{ base: 0, lg: '15' }}
          borderStyle="none"
          background="#ECFDF9"
          width="100%"
          mx="auto"
          maxW="container.max"
        >
          {children}
          <Heading maxW="2xl" mx="auto" mb={2} textAlign="center">
            Want more? Not subscribed?
          </Heading>
          {signupCTAText}
          {signupForm}
        </Box>
      </Box>
    </MainLayout>
  );
};

export default RazorLayout;
