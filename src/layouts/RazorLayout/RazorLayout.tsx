import { FunctionComponent, ReactNode } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import { MainLayout } from '@root/layouts';
import { Hero } from '@views/homepage';

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
    <MainLayout backgroundColor="#ECFDF9" hasGradient>
      <GradientContainer
        bottomOnly
        pt={{ base: '5em', sm: '10em', md: '10em', lg: '15em' }}
        minH="100vh"
      >
        {!isEpisode && (
          <Hero
            text={title || 'The Razor'}
            subtext={
              subtext ||
              'The latest & most interesting news about secure-by-design systems, developer experience, and related tooling'
            }
          />
        )}
      </GradientContainer>
      {children}
      <Box width="100%" p={0} m={0} backgroundColor="#ECFDF9" letterSpacing="-0.03em">
        <Heading maxW="2xl" mx="auto" mb={2}>
          Want more? Not subscribed?
        </Heading>
        {signupCTAText}
        {signupForm}
      </Box>
    </MainLayout>
  );
};

export default RazorLayout;
