import { Steps, Step, useSteps } from 'chakra-ui-steps';
import { FC, ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Button, Flex, theme } from '@chakra-ui/react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

import Auth0Api from '@root/api/auth0Api';
import { User, currentUser, isSignedIn } from '@root/components/Auth';

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
      { title: 'Get started', description: 'Setup your account' },
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
  const searchParams = useSearchParams();
  const [user, setUser] = useState<User>();
  const [transitioning, setTransitioning] = useState(false);
  const [nextHidden, setNextHidden] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>();
  const [currentPlan, setCurrentPlan] = useState<string>();

  const getCurrentPlan = useCallback(async (): Promise<string | undefined> => {
    if (user) {
      const r = await Auth0Api.managementApi.getUserMetadata(user.token, user.userId);
      if (r) {
        return r.data.user_metadata.plan;
      }
    }
    return undefined;
  }, [user]);

  const rememberPlanSelection = useCallback(async (): Promise<void> => {
    const passedPlan = searchParams.get('plan');
    if (passedPlan) {
      window.localStorage.setItem('plan', passedPlan);
      const { pathname, query } = router;
      // @ts-ignore: this dict type actually works here
      const params = new URLSearchParams(query);
      params.delete('plan');
      router.replace({ pathname, query: params.toString() }, undefined, { shallow: true });
    }
  }, [router, searchParams]);

  useEffect(() => {
    async function setup(): Promise<void> {
      await rememberPlanSelection();
      if (!(await isSignedIn())) router.replace('/auth/signin');
      const u = await currentUser();
      const p = window.localStorage.getItem('plan');
      window.localStorage.removeItem('plan');
      if (p) setSelectedPlan(p);
      if (u) setUser(u);
    }
    setup();
  }, [setUser, router, rememberPlanSelection]);

  useEffect(() => {
    if (user) {
      getCurrentPlan().then((p) => {
        if (p) setCurrentPlan(p);
      });
    }
  }, [user, getCurrentPlan]);

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
  const setPlan = (plan: string): void => {
    setCurrentPlan(plan);
  };

  const displayStep = (step: number): ReactElement => {
    switch (step) {
      case 0:
        return <Welcome user={user} nextCallback={next} />;
        break;
      case 1:
        return (
          <ChoosePlan
            onComplete={next}
            onSelected={setPlan}
            user={user}
            hideNext={hideNext}
            showNext={showNext}
            selectedPlan={selectedPlan}
            currentPlan={currentPlan}
          />
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
      <Box transition="opacity 1s 0s ease-in-out" opacity={transitioning ? '0' : '1'} width="100%">
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
