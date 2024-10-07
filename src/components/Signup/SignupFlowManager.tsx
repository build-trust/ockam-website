import { Steps, Step, useSteps } from 'chakra-ui-steps';
import { FC, ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Flex, theme } from '@chakra-ui/react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useRouter } from 'next/router';

import { User, currentUser, isSignedIn, stashParams } from '@root/components/Auth';
import OrchestratorAPI, {
  Space,
  User as OUser,
  UnverifiedEmailError,
} from '@components/Orchestrator';

import ChoosePlan from './ChoosePlan';
import Download from './Download';
import Deploy from './Deploy';
import Welcome from './Welcome';
import Experience from './Experience';
import MarketplaceSetup from './MarketplaceSetup';
import Notice from './Notice';
import UserDetails from './UserDetails';
import { TIERS } from '../Packaging/tiers';
import VerifyEmailModal from './VerifyEmail';

type Props = {
  install: MDXRemoteSerializeResult;
  terms: MDXRemoteSerializeResult;
};

type ParamsDict = {
  [key: string]: string;
};

const SignupFlowManager: FC<Props> = ({ install, terms }): ReactElement => {
  const steps = useMemo(
    () => [
      { title: 'Get started', description: 'Setup your account' },
      { title: 'Update details', description: 'Tell us who you are' },
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
  const [userDetails, setUserDetails] = useState<OUser>();
  const [api, setApi] = useState<OrchestratorAPI>();
  const [spaces, setSpaces] = useState<Space[]>();
  const [space, setSpace] = useState<Space>();
  const [currentPlan, setCurrentPlan] = useState<string>();
  const [hasPaymentMethod, setHasPaymentMethod] = useState(false);
  const [customer, setCustomer] = useState<string>();
  const [product, setProduct] = useState<string>();
  const [marketplaceFulfilment, setMarketplacceFulfilment] = useState<boolean>(false);
  const [returningDelegate, setReturningDelegate] = useState<boolean>(false);
  const [completedDelegate, setCompletedDelegate] = useState<boolean>(false);
  const [verifyEmail, setVerifyEmail] = useState<boolean>(false);

  const [transitioning, setTransitioning] = useState(false);
  // const [nextHidden, setNextHidden] = useState(false);
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
    (
      u: boolean,
      rd: boolean,
      ud: OUser | undefined,
      s: boolean,
      cp: boolean,
      hp: boolean,
      mf: boolean,
    ): number => {
      if (!ud?.accepted_tos || !ud?.details?.name || !ud?.details?.company)
        return numberForStep('Update details');
      if (rd && u && s) return numberForStep('Payment');
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

  const getUserDetails = async (a: OrchestratorAPI): Promise<OUser | undefined> => {
    return a.getUser();
  };

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
      setMessage("👋 Welcome back - We're completing the AWS Marketplace setup for you...");
    setTimeout(() => {
      setMessage(undefined);
    }, 5000);
    return isFulfilling;
  }, [purchaseParams]);

  const getPaymentMethod = useCallback(
    async (a: OrchestratorAPI, s: Space, cp: string, ud: OUser): Promise<boolean> => {
      const params = purchaseParams();
      const customerId = params.customer || params.aws_customer_id;
      const productId = params.product || params.aws_product_id;

      if (customerId) setCustomer(customerId);
      if (productId) setProduct(productId);
      const customerAwsID = params.CustomerAWSAccountID;

      if (customerId && productId) {
        const pm = await a.createPaymentMethod(productId, customerId, customerAwsID);
        if (pm) await a.updatePaymentMethod(s.id, pm.id);
        if (ud.details?.name && ud.details?.company && ud.email) {
          await a.updateBuyerContact(
            ud.details.name,
            ud.details.company,
            ud.email,
            productId,
            customerId,
          );
        }
        setCompletedDelegate(true);
        window.sessionStorage.removeItem('pdid');
        setHasPaymentMethod(true);
        return true;
      }
      if (s.payment_method) {
        setHasPaymentMethod(true);
        return true;
      }
      const tier = TIERS.find((t) => t.name === cp.replace('developer-', ''));
      if (tier && !tier.marketplaceOnly) {
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

  const next = useCallback((): void => {
    setTransitioning(true);
    setTimeout(() => {
      nextStep();
      setTransitioning(false);
      window.scrollTo(0, 0);
    }, 1200);
  }, [nextStep]);

  const jump = useCallback(
    (st: number): void => {
      if (activeStep !== st) {
        setTransitioning(true);
        setTimeout(() => {
          setStep(st);
          window.scrollTo(0, 0);
          setTransitioning(false);
        }, 1200);
      }
    },
    [setStep, activeStep],
  );

  const stepClicked = useCallback(
    (i: number) => {
      if (
        i <=
        determineCurrentStep(
          !!user,
          returningDelegate,
          userDetails,
          !!space,
          !!currentPlan,
          hasPaymentMethod,
          marketplaceFulfilment,
        )
      ) {
        jump(i);
      }
    },
    [user, returningDelegate, space, currentPlan, hasPaymentMethod, marketplaceFulfilment],
  );

  const prev = (): void => {
    setTransitioning(true);
    setTimeout(() => {
      prevStep();
      setTransitioning(false);
      window.scrollTo(0, 0);
    }, 1200);
  };

  const jumpToLatest = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (data?: { [key: string]: any }) => {
      const leaveMessage = data?.leaveMessage;
      const ud = data?.userDetails;
      if (!leaveMessage) setMessage(undefined);
      const latestStep = determineCurrentStep(
        !!user,
        returningDelegate,
        ud || userDetails,
        !!space,
        !!currentPlan,
        hasPaymentMethod,
        marketplaceFulfilment,
      );
      jump(latestStep);
    },
    [
      user,
      returningDelegate,
      userDetails,
      space,
      currentPlan,
      hasPaymentMethod,
      marketplaceFulfilment,
    ],
  );

  const spaceSelected = (s: Space): void => {
    setSpace(s);
    jumpToLatest({ leaveMessage: true });
  };

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

  const updatedUserDetails = (userDetails: OUser) => {
    setUserDetails(userDetails);
  };

  const displayStep = useCallback(
    (step: number, cp?: string, c?: string, p?: string, cd?: boolean): ReactElement => {
      switch (step) {
        case 0:
          return <Welcome user={user} spaces={spaces} spaceSelected={spaceSelected} api={api} />;
          break;
        case 1:
          return (
            <UserDetails
              next={jumpToLatest}
              updated={updatedUserDetails}
              userDetails={userDetails}
              api={api}
              terms={terms}
            />
          );
        case 2:
          return (
            <ChoosePlan
              spaceId={space?.id}
              api={api}
              updatePlan={updatePlan}
              onComplete={planChosen}
              currentPlan={cp}
            />
          );
        case 3:
          if (user && cp && api && space && userDetails?.details?.company_domain) {
            return (
              <MarketplaceSetup
                hasPaymentMethod={hasPaymentMethod}
                complete={next}
                user={user}
                customer={c}
                product={p}
                plan={cp}
                api={api}
                companyDomain={userDetails?.details?.company_domain}
                spaceId={space.id}
                isDelegate={returningDelegate}
                completedDelegate={!!cd}
              />
            );
          }
        case 4:
          return <Download install={install} next={next} prev={prev} />;
        case 5:
          return <Experience next={next} prev={prev} />;
        case 6:
          return <Deploy prev={prev} />;
        default:
          return <></>;
      }
    },
    [
      hasPaymentMethod,
      install,
      next,
      user,
      spaces,
      spaceSelected,
      api,
      planChosen,
      terms,
      customer,
      product,
      currentPlan,
      userDetails,
      space,
      returningDelegate,
      completedDelegate,
    ],
  );

  const stateMachine = useCallback(async (): Promise<void> => {
    try {
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
        const ud = await getUserDetails(a);
        setUserDetails(ud);
        const ss = await getSpaces(a);
        let s = await getSpace(ss);
        const pdid = router.query.pdid || window.sessionStorage.getItem('pdid');
        const rd = !!pdid;
        if (rd) {
          setReturningDelegate(true);
          setMessage(
            `You've been asked to complete the setup of this Ockam Orchestrator account. We need to capture a few details…`,
          );
          const pd = await a.getPaymentDelegate(pdid as string);
          if (pd) {
            window.sessionStorage.setItem('pdid', pd.id);
            if (pd.space_id) {
              s = { id: pd.space_id, name: '' };
            }
            setSpace(s);
          }
        }
        let cp;
        await checkMarketplaceFulfilment();
        if (s) {
          cp = await getPlan(s.id, ss);
          if (cp && ud) await getPaymentMethod(a, s, cp, ud);
        }
        setIsLoaded(true);
      }
    } catch (error) {
      setVerifyEmail(true);
      if (error instanceof UnverifiedEmailError) {
        setVerifyEmail(true);
        // setMessage('📨 Check your inbox! Verify your email address and then refresh this page');
        // setTimeout(() => {
        //   router.reload();
        // }, 5000);
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
      {message && <Notice message={message} />}
      <VerifyEmailModal open={verifyEmail} />
      <Box style={{ transition: '200ms ease-in opacity', opacity: returningDelegate ? '0' : '1' }}>
        <Steps
          variant="circles"
          orientation="vertical"
          mobileBreakpoint={theme.breakpoints.sm}
          activeStep={activeStep}
          colorScheme="avocado"
          mb={12}
          size="sm"
          minW={{ base: '250px' }}
          onClickStep={stepClicked}
          sx={{
            '& .cui-steps__vertical-step-container': {
              _hover: { cursor: 'pointer' },
            },
          }}
        >
          {steps.map(({ title, description }) => (
            <Step key={`step-${title}`} label={title} description={description} />
          ))}
        </Steps>
      </Box>
      <Box transition="opacity 1s 0s ease-in-out" opacity={transitioning ? '0' : '1'} width="100%">
        {displayStep(activeStep, currentPlan, customer, product, completedDelegate)}
      </Box>
    </Flex>
  );
};
export default SignupFlowManager;
