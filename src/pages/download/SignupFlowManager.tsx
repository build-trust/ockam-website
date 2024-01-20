import { Steps, Step, useSteps } from 'chakra-ui-steps';
import { FC, ReactElement, useEffect } from 'react';
import { Box, Button, Flex, theme } from '@chakra-ui/react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import ChoosePlan from './ChoosePlan';
import Download from './Download';
import Enroll from './Enroll';
import Deploy from './Deploy';

type Props = {
  install: MDXRemoteSerializeResult;
  portals: MDXRemoteSerializeResult;
  enroll: MDXRemoteSerializeResult;
};

const SignupFlowManager: FC<Props> = ({ enroll, install, portals }): ReactElement => {
  const steps = [
    { title: 'Log in', description: 'Setup your account' },
    { title: 'Choose a plan', description: 'Right-size to your needs' },
    { title: 'Download', description: 'Download & Install Ockam' },
    { title: 'Enroll', description: 'Connect your first node' },
    { title: 'Deploy', description: 'Create a secure channel' },
  ];

  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 1,
  });

  useEffect(() => {
    // @ts-ignore window.analytics undefined below
    window.analytics.track(`Signup - Step ${activeStep + 1}`);
  }, [activeStep]);

  const setPlan = (): void => {
    nextStep();
  };
  const displayStep = (step: number): ReactElement => {
    switch (step) {
      case 1:
        return <ChoosePlan onComplete={setPlan} />;
        break;
      case 2:
        return <Download install={install} portals={portals} />;
        break;
      case 3:
        return <Enroll enroll={enroll} />;
        break;
      case 4:
        return <Deploy />;
        break;
      default:
        return <></>;
    }
  };

  return (
    <Flex mx="auto" mb="32" p={8} direction={{ base: 'row' }} w="100%">
      <Box>
        <Steps
          variant="circles"
          orientation="vertical"
          mobileBreakpoint={theme.breakpoints.sm}
          activeStep={activeStep}
          colorScheme="avocado"
          mb={12}
          size="sm"
          minW={{ base: '250px' }}
        >
          {steps.map(({ title, description }) => (
            <Step key={`step-${title}`} label={title} description={description} />
          ))}
        </Steps>
      </Box>
      <Box>
        {displayStep(activeStep)}
        <Button colorScheme="avocado" mb="8" onClick={prevStep}>
          Go back
        </Button>
        {activeStep < steps.length - 1 && activeStep !== 1 && (
          <Button colorScheme="avocado" mb="8" onClick={nextStep}>
            I&apos;ve completed this step
          </Button>
        )}
      </Box>
    </Flex>
  );
};
export default SignupFlowManager;
