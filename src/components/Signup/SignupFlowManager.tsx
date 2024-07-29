import { Steps, Step, useSteps } from 'chakra-ui-steps';
import { FC, ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Button, Flex, theme } from '@chakra-ui/react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useRouter } from 'next/router';

import { User, currentUser, isSignedIn } from '@root/components/Auth';
import Orchestrator, { Space } from '@components/Orchestrator';

import ChoosePlan from './ChoosePlan';
import Download from './Download';
import Deploy from './Deploy';
import Welcome from './Welcome';
import Experience from './Experience';
import MarketplaceSetup from './MarketplaceSetup';

type Props = {
  install: MDXRemoteSerializeResult;
};

type ParamsDict = {
  [key: string]: string;
};

const SignupFlowManager: FC<Props> = ({ install }): ReactElement => {
  const steps = useMemo(
    () => [
      { title: 'Get started', description: 'Setup your account' },
      { title: 'Choose a plan', description: 'Right-size to your needs' },
      { title: 'Payment', description: 'Attach a payment method' },
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
  const [spaces, setSpaces] = useState<Space[]>();
  const [space, setSpace] = useState<Space>();
  const [currentPlan, setCurrentPlan] = useState<string>();
  const [hasPaymentMethod, setHasPaymentMethod] = useState(false);

  const [transitioning, setTransitioning] = useState(false);
  const [nextHidden, setNextHidden] = useState(false);

  const numberForStep = useCallback(
    (title: string): number => {
      const idx = steps.findIndex((s) => s.title === title);
      if (idx) return idx;
      return 0;
    },
    [steps],
  );

  const determineCurrentStep = useCallback(
    (u: boolean, s: boolean, cp: boolean, hp: boolean): number => {
      if (u && s && cp && hp) return numberForStep('Download');
      if (u && s && cp) return numberForStep('Payment');
      if (u && s) return numberForStep('Choose a plan');
      return 0;
    },
    [numberForStep],
  );

  const purchaseParams = useCallback((): ParamsDict => {
    let p = {};
    const stashed = window.sessionStorage.getItem('pre-auth-params');
    if (stashed) p = { ...p, ...JSON.parse(stashed) };
    if (router.query) p = { ...p, ...router.query };
    return p;
  }, [router.query]);

  const stashParams = async (params: URLSearchParams): Promise<void> => {
    window.sessionStorage.setItem('pre-auth-params', JSON.stringify(params.toString()));
  };

  const signIn = useCallback(async (): Promise<void> => {
    const { query } = router;
    // @ts-ignore: this dict type actually works here
    const params = new URLSearchParams(query);
    await stashParams(params);
    router.replace('/auth/signup');
  }, [router]);

  const getSpaces = useCallback(
    async (token: string): Promise<Space[]> => {
      if (spaces && spaces.length > 0) return spaces;
      const ss = await Orchestrator.getSpaces(token);
      setSpaces(ss);
      return ss || [];
    },
    [spaces],
  );

  const getSpace = useCallback(
    async (token: string, ss: Space[]): Promise<Space | undefined> => {
      let s = space;
      if (s) return s;
      if (ss && ss.length > 1) return undefined;
      if (ss && ss.length === 1) [s] = ss;
      if (!s) {
        // no spaces, time to create one
      }
      setSpace(s);
      return s;
    },
    [space],
  );

  const getPlan = useCallback(async (spaceId: string, ss: Space[]): Promise<string | undefined> => {
    const s = ss.find((e) => e.id === spaceId);
    if (s) setCurrentPlan(s.subscription_plan.name);
    return s?.subscription_plan.name;
  }, []);

  const getPaymentMethod = useCallback(async (): Promise<boolean> => {
    const params = purchaseParams();
    const customerId = params.customer || params.aws_customer_id;
    const productId = params.product || params.aws_product_id;
    // const customerAwsID = params.CustomerAWSAccountID;

    if (customerId && productId) {
      // TODO: save marketplace details
      setHasPaymentMethod(true);
      window.sessionStorage.removeItem('pre-auth-params');
      return true;
    }
    return false;
  }, [purchaseParams]);

  useEffect(() => {
    const stepName = steps[activeStep].title;
    // @ts-ignore window.analytics undefined below
    window.analytics.track(`Signup - Step - ${stepName}`);
    const generatedUrl = `${window.location.protocol}//${window.location.host}/${window.location.pathname}/${stepName}`;
    // @ts-ignore window.analytics undefined below
    window.analytics.page(generatedUrl);
    // window.scrollTo(0, 0);
  }, [steps, activeStep]);

  const hideNext = useCallback((): void => {
    setNextHidden(true);
  }, []);

  const showNext = useCallback((): void => {
    setNextHidden(false);
  }, []);

  const next = useCallback((): void => {
    setTransitioning(true);
    setTimeout(() => {
      showNext();
      nextStep();
      setTransitioning(false);
    }, 1200);
  }, [nextStep, showNext]);

  const jump = useCallback(
    (st: number): void => {
      setTimeout(() => {
        setTransitioning(true);
        setTimeout(() => {
          setStep(st);
          setTransitioning(false);
        }, 1200);
      }, 1200);
    },
    [setStep],
  );

  const prev = (): void => {
    setTransitioning(true);
    setTimeout(() => {
      showNext();
      prevStep();
      setTransitioning(false);
    }, 1200);
  };

  const spaceSelected = useCallback(
    (s: Space): void => {
      setSpace(s);
      next();
    },
    [next],
  );

  const displayStep = useCallback(
    (step: number): ReactElement => {
      switch (step) {
        case 0:
          return <Welcome user={user} spaces={spaces} spaceSelected={spaceSelected} />;
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
          return (
            <MarketplaceSetup
              hasPaymentMethod={hasPaymentMethod}
              complete={next}
              hideNext={hideNext}
              user={user}
            />
          );
          break;
        case 3:
          return <Download install={install} />;
          break;
        case 4:
          return <Experience />;
          break;
        case 5:
          return <Deploy />;
          break;
        default:
          return <></>;
      }
    },
    [currentPlan, hasPaymentMethod, install, next, hideNext, showNext, user, spaces, spaceSelected],
  );

  const displayNext = (): boolean =>
    !nextHidden && activeStep !== 0 && activeStep < steps.length - 1;
  // activeStep < steps.length - 1 && activeStep !== 0 && nextHidden === true

  const displayBack = (): boolean => activeStep > 0;

  const stateMachine = useCallback(async (): Promise<void> => {
    const minLoadingTime = 7000;
    const start = new Date().getTime();
    const signedIn = await isSignedIn();
    if (!signedIn) signIn();
    const u = await currentUser();
    if (u) {
      setUser(u);
      let ss = await getSpaces(u.token);
      ss = [];
      const s = await getSpace(u.token, ss);
      let cp = false;
      let hp = false;
      if (s) {
        cp = !!(await getPlan(s.id, ss));
      }
      hp = await getPaymentMethod();
      const st = determineCurrentStep(!!u, !!s, cp, hp);
      const end = new Date().getTime();
      const duration = end - start;
      setTimeout(
        () => {
          jump(st);
        },
        Math.max(minLoadingTime - duration, 0),
      );
    }
  }, [signIn, getSpaces, getSpace, getPlan, getPaymentMethod, determineCurrentStep, jump]);

  useEffect(() => {
    if (router.isReady) {
      stateMachine().then(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

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
