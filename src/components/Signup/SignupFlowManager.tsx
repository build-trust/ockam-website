import { Steps, Step, useSteps } from 'chakra-ui-steps';
import { FC, ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Button, Flex, theme } from '@chakra-ui/react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useRouter } from 'next/router';

import { User, currentUser, isSignedIn, stashParams } from '@root/components/Auth';
import OrchestratorAPI, { Space, UnverifiedEmailError } from '@components/Orchestrator';

import ChoosePlan from './ChoosePlan';
import Download from './Download';
import Deploy from './Deploy';
import Welcome from './Welcome';
import Experience from './Experience';
import MarketplaceSetup from './MarketplaceSetup';
import Notice from './Notice';

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
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const [api, setApi] = useState<OrchestratorAPI>();
  const [spaces, setSpaces] = useState<Space[]>();
  const [space, setSpace] = useState<Space>();
  const [currentPlan, setCurrentPlan] = useState<string>();
  const [hasPaymentMethod, setHasPaymentMethod] = useState(false);
  const [customer, setCustomer] = useState<string>();
  const [product, setProduct] = useState<string>();
  const [marketplaceFulfilment, setMarketplacceFulfilment] = useState<boolean>(false);

  const [transitioning, setTransitioning] = useState(false);
  const [nextHidden, setNextHidden] = useState(false);
  const [message, setMessage] = useState<string>();

  const numberForStep = useCallback(
    (title: string): number => {
      const idx = steps.findIndex((s) => s.title === title);
      if (idx) return idx;
      return 0;
    },
    [steps],
  );

  const determineCurrentStep = useCallback(
    // eslint-disable-next-line complexity
    (u: boolean, s: boolean, cp: boolean, hp: boolean, mf: boolean): number => {
      if (mf) return numberForStep('Payment');
      if (u && s && cp && hp) return numberForStep('Download');
      if (u && s && cp) return numberForStep('Payment');
      if (u && s) return numberForStep('Choose a plan');
      return 0;
    },
    [numberForStep],
  );

  const purchaseParams = useCallback((): ParamsDict => {
    let p = {};
    if (router.query) p = { ...p, ...router.query };
    return p;
  }, [router.query]);

  const signIn = useCallback(async (): Promise<void> => {
    await stashParams();
    router.replace('/auth/signup');
  }, [router]);

  const getSpaces = useCallback(
    async (a: OrchestratorAPI): Promise<Space[]> => {
      if (spaces && spaces.length > 0) return spaces;
      const ss = await a.getSpaces();
      setSpaces(ss);
      return ss || [];
    },
    [spaces],
  );

  const getSpace = useCallback(
    async (ss: Space[]): Promise<Space | undefined> => {
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
    if (s && s.subscription_plan) setCurrentPlan(s.subscription_plan.name);
    return s?.subscription_plan?.name;
  }, []);

  const checkMarketplaceFulfilment = useCallback(async (): Promise<boolean> => {
    const params = purchaseParams();
    const isFulfilling =
      !!(params.customer || params.aws_customer_id) && !!(params.product || params.aws_product_id);
    setMarketplacceFulfilment(isFulfilling);
    if (isFulfilling)
      setMessage(
        "👋 Welcome back - there's just a few more details required to complete the AWS Marketplace setup...",
      );
    return isFulfilling;
  }, [purchaseParams]);

  const getPaymentMethod = useCallback(
    async (a: OrchestratorAPI, s: Space): Promise<boolean> => {
      const params = purchaseParams();
      const customerId = params.customer || params.aws_customer_id;
      const productId = params.product || params.aws_product_id;

      if (customerId) setCustomer(customerId);
      if (productId) setProduct(productId);
      const customerAwsID = params.CustomerAWSAccountID;

      if (customerId && productId) {
        const pm = await a.createPaymentMethod(productId, customerId, customerAwsID);
        if (pm) await a.updatePaymentMethod(s.id, pm.id);
        setHasPaymentMethod(true);
        return true;
      }
      if (s.payment_method) {
        setHasPaymentMethod(true);
        return true;
      }
      return false;
    },
    [purchaseParams],
  );

  useEffect(() => {
    const stepName = steps[activeStep].title;
    window.analytics.track(`Signup - Step - ${stepName}`);
    const generatedUrl = `${window.location.protocol}//${window.location.host}/${window.location.pathname}/${stepName}`;
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
      window.scrollTo(0, 0);
      setTransitioning(false);
    }, 1200);
  }, [nextStep, showNext]);

  const jump = useCallback(
    (st: number): void => {
      if (activeStep !== st) {
        setTimeout(() => {
          setTransitioning(true);
          setTimeout(() => {
            setStep(st);
            window.scrollTo(0, 0);
            setTransitioning(false);
          }, 1200);
        }, 1200);
      }
    },
    [setStep, activeStep],
  );

  const prev = (): void => {
    setTransitioning(true);
    setTimeout(() => {
      showNext();
      prevStep();
      window.scrollTo(0, 0);
      setTransitioning(false);
    }, 1200);
  };

  const spaceSelected = useCallback(
    (s: Space): void => {
      setSpace(s);
      jump(
        determineCurrentStep(!!user, true, !!currentPlan, hasPaymentMethod, marketplaceFulfilment),
      );
    },
    [user, currentPlan, hasPaymentMethod, marketplaceFulfilment, determineCurrentStep, jump],
  );

  const updatePlan = useCallback(
    async (a: OrchestratorAPI, spaceId: string, plan: string): Promise<void> => {
      await a.updatePlan(spaceId, plan);
    },
    [],
  );

  const planChosen = useCallback(
    async (plan: string): Promise<void> => {
      setCurrentPlan(plan);
      next();
    },
    [next],
  );

  const displayStep = useCallback(
    (step: number, cp?: string, c?: string, p?: string): ReactElement => {
      switch (step) {
        case 0:
          return <Welcome user={user} spaces={spaces} spaceSelected={spaceSelected} api={api} />;
          break;
        case 1:
          return (
            <ChoosePlan
              spaceId={space?.id}
              api={api}
              updatePlan={updatePlan}
              onComplete={planChosen}
              hideNext={hideNext}
              showNext={showNext}
              currentPlan={cp}
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
              customer={c}
              product={p}
              plan={cp}
              api={api}
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
    [
      hasPaymentMethod,
      install,
      next,
      hideNext,
      showNext,
      user,
      spaces,
      spaceSelected,
      api,
      planChosen,
    ],
  );

  const displayNext = (): boolean =>
    !nextHidden && activeStep !== 0 && activeStep < steps.length - 1;
  // activeStep < steps.length - 1 && activeStep !== 0 && nextHidden === true

  const displayBack = (): boolean => activeStep > 0;

  const stateMachine = useCallback(async (): Promise<void> => {
    try {
      const minLoadingTime = 7000;
      const start = new Date().getTime();
      const signedIn = await isSignedIn();
      if (!signedIn) signIn();
      const u = await currentUser();
      if (u) {
        setUser(u);
        const a = new OrchestratorAPI(
          process.env.OCKAM_API_BASE_URL || 'https://subscriptions.orchestrator.ockam.io/',
          u.token,
        );
        setApi(a);
        const ss = await getSpaces(a);
        const s = await getSpace(ss);
        let cp = false;
        let hp = false;
        const mf = await checkMarketplaceFulfilment();
        if (s) {
          cp = !!(await getPlan(s.id, ss));
          hp = await getPaymentMethod(a, s);
        }
        const st = determineCurrentStep(!!u, !!s, cp, hp, mf);
        const end = new Date().getTime();
        const duration = end - start;
        setTimeout(
          () => {
            jump(st);
            setIsLoaded(true);
          },
          Math.max(minLoadingTime - duration, 0),
        );
      }
    } catch (error) {
      if (error instanceof UnverifiedEmailError) {
        setMessage('📨 Check your inbox! Verify your email address and then refresh this page');
        setTimeout(() => {
          router.reload();
        }, 5000);
      } else {
        console.error(error);
      }
    }
  }, [
    signIn,
    getSpaces,
    getSpace,
    getPlan,
    getPaymentMethod,
    determineCurrentStep,
    checkMarketplaceFulfilment,
    jump,
  ]);

  useEffect(() => {
    if (router.isReady && !isLoaded) {
      stateMachine().then(() => {});
    }
  }, [router.isReady, isLoaded]);

  return (
    <Flex mx="auto" pb="32" p={8} direction={{ base: 'row' }} w="100%">
      <Notice message={message} />
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
        {displayStep(activeStep, currentPlan, customer, product)}
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
