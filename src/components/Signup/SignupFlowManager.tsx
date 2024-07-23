import { Steps, Step, useSteps } from 'chakra-ui-steps';
import { FC, ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Button, Flex, theme } from '@chakra-ui/react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useRouter } from 'next/router';

import { User, currentUser, isSignedIn } from '@root/components/Auth';

import ChoosePlan from './ChoosePlan';
import Download from './Download';
import Deploy from './Deploy';
import Welcome from './Welcome';
import Experience from './Experience';

type Props = {
  install: MDXRemoteSerializeResult;
};

const SignupFlowManager: FC<Props> = ({ install }): ReactElement => {
  const steps = useMemo(
    () => [
      { title: 'Get started', description: 'Setup your account' },
      { title: 'Choose a plan', description: 'Right-size to your needs' },
      { title: 'Download', description: 'Download & Install Ockam' },
      { title: 'Experience', description: 'Try a hands-on example' },
      { title: 'Deploy', description: 'Create a secure channel' },
    ],
    [],
  );

  const { nextStep, prevStep, activeStep, setStep } = useSteps({
    initialStep: 0,
  });

  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [transitioning, setTransitioning] = useState(false);
  const [nextHidden, setNextHidden] = useState(false);
  const [currentPlan, setCurrentPlan] = useState<string>();

  const getCurrentPlan = useCallback(async (u: User): Promise<string | undefined> => {
    if (u) {
      let { userId } = u;
      if (!userId) {
        const stored = localStorage.getItem('ajs_user_id');
        if (!stored) return undefined;

        userId = JSON.parse(stored);
      }
      const response = await fetch(`/api/user?userid=${userId}`);
      if (response) {
        const data = await response.json();
        return data?.subscription?.plan?.name;
      }
    }
    return undefined;
  }, []);

  const maybeStoreSubDetails = async (params: URLSearchParams): Promise<void> => {
    const customer = params.get('customer');
    const product = params.get('product');
    if (customer && product) {
      window.sessionStorage.setItem('customer', customer);
      window.sessionStorage.setItem('product', product);
    }
  };

  const maybeUpdateSubscription = useCallback(
    async (u: { userId: String }, params: URLSearchParams): Promise<void> => {
      const customerId = window.sessionStorage.getItem('customer') || params.get('customer');
      const productId = window.sessionStorage.getItem('product') || params.get('product');
      let { userId } = u;
      if (!userId) {
        const stored = localStorage.getItem('ajs_user_id');
        if (stored) userId = JSON.parse(stored);
      }

      if (customerId && productId && userId) {
        const response = await fetch('/api/update_subscription', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, customerId, productId }),
        });

        if (response.status === 200) {
          const { pathname } = router;
          window.sessionStorage.removeItem('customer');
          window.sessionStorage.removeItem('product');
          router.replace({ pathname, query: '' }, undefined, { shallow: true });
        }
      }
    },
    [router],
  );

  useEffect(() => {
    const { query } = router;
    isSignedIn().then((isIn) => {
      if (isIn) {
        currentUser().then((u) => {
          if (u) {
            // @ts-ignore: this dict type actually works here
            const params = new URLSearchParams(query);
            maybeUpdateSubscription(u, params).then(() => {
              getCurrentPlan(u).then((plan) => {
                if (plan) {
                  setCurrentPlan(plan);
                  setStep(2);
                } else if (JSON.stringify(u) !== JSON.stringify(user)) {
                  setUser(u);
                  setStep(1);
                }
              });
            });
          }
        });
      } else {
        // @ts-ignore: this dict type actually works here
        const params = new URLSearchParams(query);
        maybeStoreSubDetails(params).then(() => {
          router.replace('/auth/signup');
        });
      }
    });
  }, [
    router,
    setStep,
    setUser,
    user,
    maybeUpdateSubscription,
    getCurrentPlan,
    setCurrentPlan,
    activeStep,
  ]);

  useEffect(() => {
    const stepName = steps[activeStep].title;
    // @ts-ignore window.analytics undefined below
    window.analytics.track(`Signup - Step - ${stepName}`);
    const generatedUrl = `${window.location.protocol}//${window.location.host}/${window.location.pathname}/${stepName}`;
    // @ts-ignore window.analytics undefined below
    window.analytics.page(generatedUrl);
    // window.scrollTo(0, 0);
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

  const displayStep = (step: number): ReactElement => {
    switch (step) {
      case 0:
        return <Welcome user={user} nextCallback={next} />;
        break;
      case 1:
        return (
          <ChoosePlan
            onComplete={next}
            hideNext={hideNext}
            showNext={showNext}
            currentPlan={currentPlan}
          />
        );
        break;
      case 2:
        return <Download install={install} />;
        break;
      case 3:
        return <Experience />;
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
    <Flex mx="auto" pb="32" p={8} direction={{ base: 'row' }} w="100%">
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
          {displayNext() && activeStep === 1 && (
            <Button colorScheme="avocado" mb="8" onClick={next}>
              Skip this for now
            </Button>
          )}
          {displayNext() && activeStep !== 1 && (
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
