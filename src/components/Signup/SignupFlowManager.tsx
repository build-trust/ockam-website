import { Steps, Step, useSteps } from 'chakra-ui-steps';
import { FC, ReactElement, useEffect, useMemo, useState } from 'react';
import { Box, Button, Flex, theme } from '@chakra-ui/react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useRouter } from 'next/router';

import { User, currentUser, isLoggedIn } from '@root/components/Auth';

import ChoosePlan from './ChoosePlan';
import Download from './Download';
import Enroll from './Enroll';
import Deploy from './Deploy';
import Welcome from './Welcome';

type Props = {
  install: MDXRemoteSerializeResult;
  portals: MDXRemoteSerializeResult;
  enroll: MDXRemoteSerializeResult;
};

const SignupFlowManager: FC<Props> = ({ enroll, install, portals }): ReactElement => {
  const steps = useMemo(
    () => [
      { title: 'Log in', description: 'Setup your account' },
      { title: 'Choose a plan', description: 'Right-size to your needs' },
      { title: 'Download', description: 'Download & Install Ockam' },
      { title: 'Enroll', description: 'Connect your first node' },
      { title: 'Deploy', description: 'Create a secure channel' },
    ],
    [],
  );

  const { nextStep, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });

  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [transitioning, setTransitioning] = useState(false);
  const [nextHidden, setNextHidden] = useState(false);

  useEffect(() => {
    async function setup(): Promise<void> {
      if (!(await isLoggedIn())) router.replace('/auth/login');
      const u = await currentUser();
      if (u) setUser(u);
    }
    setup();
  }, [setUser, router]);

  useEffect(() => {
    const stepName = steps[activeStep].title;
    // @ts-ignore window.analytics undefined below
    window.analytics.track(`Signup - Step - ${stepName}`);
    const generatedUrl = `${window.location.protocol}//${window.location.host}/${window.location.pathname}/${stepName}`;
    // @ts-ignore window.analytics undefined below
    window.analytics.page(generatedUrl);
  }, [steps, activeStep]);

  const hideNext = (): void => {
    setNextHidden(true);
  };

  const showNext = (): void => {
    setNextHidden(false);
  };

  const next = (): void => {
    setTransitioning(true);
    setTimeout(() => {
      showNext();
      nextStep();
      setTransitioning(false);
    }, 1200);
  };

  const prev = (): void => {
    setTransitioning(true);
    setTimeout(() => {
      showNext();
      prevStep();
      setTransitioning(false);
    }, 1200);
  };

  useEffect(() => {});
  const setPlan = (): void => {
    next();
  };

  const displayStep = (step: number): ReactElement => {
    switch (step) {
      case 0:
        return <Welcome user={user} nextCallback={nextStep} />;
        break;
      case 1:
        return (
          <ChoosePlan onComplete={setPlan} user={user} hideNext={hideNext} showNext={showNext} />
        );
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

  const displayNext = (): boolean =>
    !nextHidden && activeStep !== 0 && activeStep < steps.length - 1;
  // activeStep < steps.length - 1 && activeStep !== 0 && nextHidden === true

  const displayBack = (): boolean => activeStep > 0;

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
      <Box transition="opacity 1s 0s ease-in-out" opacity={transitioning ? '0' : '1'}>
        {displayStep(activeStep)}
        <Flex direction="row" justifyContent="space-between">
          {displayNext() && (
            <Button colorScheme="avocado" mb="8" onClick={next}>
              I&apos;ve completed this step
            </Button>
          )}
          {displayBack() && (
            <Button colorScheme="gray" mb="8" onClick={prev}>
              Go back
            </Button>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};
export default SignupFlowManager;
