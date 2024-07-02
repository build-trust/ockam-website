import { Auth0Client } from '@auth0/auth0-spa-js';
import { useToast } from '@chakra-ui/react';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { FunctionComponent, useCallback, useEffect } from 'react';

type Props = {
  signinPath: string;
  signupPath: string;
  signoutPath: string;
  callbackPath: string;
  children: React.ReactNode;
};

type User = {
  email?: string;
  avatar?: string;
  userId: string;
};

const { publicRuntimeConfig } = getConfig();
const scope = 'read:current_user update:current_user_metadata';
const audience = `https://${publicRuntimeConfig.auth0.audience}/api/v2/`;

const Auth0 = new Auth0Client({
  domain: publicRuntimeConfig.auth0.issuerBaseHost as string,
  clientId: publicRuntimeConfig.auth0.clientId as string,
  authorizationParams: {
    redirect_uri: `${publicRuntimeConfig.auth0.baseUrl}/auth/callback`,
  },
});

// eslint-disable-next-line consistent-return
const currentUser = async (): Promise<User | void> => {
  if (typeof window !== 'undefined') {
    const email = window.sessionStorage.getItem('email') as string | undefined;
    const avatar = window.sessionStorage.getItem('avatar') as string | undefined;
    const userId = window.sessionStorage.getItem('userId') as string | '';

    return { email, avatar, userId };
  }
};

const isAuthenticated = async (): Promise<boolean> => Auth0.isAuthenticated()

const isSignedIn = async (): Promise<boolean> => {
  try {
    const user = await currentUser();
    return !!user && !!user?.userId;
    // eslint-disable-next-line
  } catch (e: any) {
    if (e?.message === 'Login required') return false;
    throw e
  }
};

const isSignedUp = async (): Promise<boolean> => {
  try {
    const user = await currentUser();
    return !!user && !!user?.token;
    // eslint-disable-next-line
  } catch (e: any) {
    if (e?.message === 'Login required') return false;
    throw e;
  }
};

const trackSignup = (user: User): void => {
  const signup = window.sessionStorage.getItem('signup') as string | undefined;
  if (signup !== '1') {
    // @ts-ignore window.analytics undefined below
    window.analytics.track(`Signup`);
    // @ts-ignore window.rdt undefined below
    if (window.rdt) {
      // @ts-ignore window.rdt undefined below
      window.rdt('track', 'SignUp', {
        currency: 'USD',
        transactionId: user.userId,
        value: 100,
        products: [
          {
            id: 'ockam-web',
            name: 'Ockam Web Authenticate',
            category: 'product category 1',
          },
        ],
      });
    }
    window.sessionStorage.setItem('signup', '1');
  }
};
const identify = async (): Promise<void> => {
  if (await isSignedIn()) {
    const user = await currentUser();
    if (user) {
      // @ts-ignore window.analytics undefined below
      window.analytics.identify(user.userId, { email: user.email });
      trackSignup(user);
    }
  }
};
const Auth: FunctionComponent<Props> = ({
  signinPath,
  signupPath,
  signoutPath,
  callbackPath,
  children,
}) => {
  const router = useRouter();
  const toast = useToast();

  const checkSignedIn = async (): Promise<void> => {
    try {
      await isSignedIn();
    } catch (e) {
      /* Do nothing */
    }
  };

  const signin = async (): Promise<void> => {
    await Auth0.loginWithRedirect({
      authorizationParams: {
        scope,
        audience,
        source: 'ockam-website',
      },
    });
  };

  const signup = async (): Promise<void> => {
    await Auth0.loginWithRedirect({
      authorizationParams: {
        scope,
        audience,
        screen_hint: 'signup',
        source: 'ockam-website',
      },
    });
  };

  const callbackResult = useCallback(async () => {
    await Auth0.handleRedirectCallback();
    const user = await Auth0.getUser();
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('email', user?.email as string);
      window.sessionStorage.setItem('avatar', user?.picture as string);
      window.sessionStorage.setItem('userId', user?.sub as string);
    }
    router.replace('/download');
  }, [router]);

  const signout = useCallback(async () => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.removeItem('email');
      window.sessionStorage.removeItem('avatar');
      window.sessionStorage.removeItem('userId');
    }
    await Auth0.logout();
    toast({
      position: 'top',
      title: 'You have been signed out.',
      status: 'success',
      duration: 3000,
      isClosable: true,
      onCloseComplete: () => router.replace('/', undefined, { shallow: true }),
    });
  }, [router, toast]);

  useEffect(() => {
    const path = router.asPath.replace(/\?.*/, '');
    switch (path) {
      case signinPath:
        signin();
        break;
      case signupPath:
        signup();
        break;
      case signoutPath:
        signout();
        break;
      case callbackPath:
        callbackResult();
        break;
      default:
        break;
    }
  }, [router, signinPath, signupPath, signoutPath, signout, callbackPath, callbackResult]);

  useEffect(() => {
    checkSignedIn().catch();
  });

  return <>{children}</>;
};

export type { User };
export { currentUser, isSignedIn, isSignedUp, identify, isAuthenticated };
export default Auth;
