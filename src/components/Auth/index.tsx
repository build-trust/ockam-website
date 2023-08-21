import { Auth0Client } from '@auth0/auth0-spa-js';
import { useToast } from '@chakra-ui/react';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { FunctionComponent, useCallback, useEffect, useMemo } from 'react';

type Props = {
  loginPath: string;
  logoutPath: string;
  callbackPath: string;
  children: React.ReactNode;
};

type User = {
  email?: string;
  avatar?: string;
  userId?: string;
};

// eslint-disable-next-line consistent-return
const currentUser = (): User | void => {
  if (typeof window !== 'undefined') {
    const email = window.sessionStorage.getItem('email') as string | undefined;
    const avatar = window.sessionStorage.getItem('avatar') as string | undefined;
    const userId = window.sessionStorage.getItem('userId') as string | undefined;
    return { email, avatar, userId };
  }
};
const isLoggedIn = (): boolean => !!currentUser() && !!currentUser()?.userId;
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
const identify = (): void => {
  if (isLoggedIn()) {
    const user = currentUser();
    if (user) {
      // @ts-ignore window.analytics undefined below
      window.analytics.identify(user.userId, { email: user.email });
      trackSignup(user);
    }
  }
};
const Auth: FunctionComponent<Props> = ({ loginPath, logoutPath, callbackPath, children }) => {
  const router = useRouter();
  const toast = useToast();

  const { publicRuntimeConfig } = getConfig();
  const auth0 = useMemo(
    () =>
      new Auth0Client({
        domain: publicRuntimeConfig.auth0.issuerBaseHost as string,
        clientId: publicRuntimeConfig.auth0.clientId as string,
        authorizationParams: {
          redirect_uri: `${publicRuntimeConfig.auth0.baseUrl}${callbackPath}`,
        },
      }),
    [publicRuntimeConfig, callbackPath]
  );

  const checkLoggedIn = useCallback(async () => {
    try {
      if (isLoggedIn()) return;
      await auth0.getTokenSilently();
    } catch (e) {
      /* Do nothing */
    }
  }, [auth0]);

  const login = useCallback(async () => {
    await auth0.loginWithRedirect();
  }, [auth0]);

  const callbackResult = useCallback(async () => {
    await auth0.handleRedirectCallback();
    const user = await auth0.getUser();
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('email', user?.email as string);
      window.sessionStorage.setItem('avatar', user?.picture as string);
      window.sessionStorage.setItem('userId', user?.sub as string);
    }
    router.replace('/download');
  }, [auth0, router]);

  const logout = useCallback(async () => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.removeItem('email');
      window.sessionStorage.removeItem('avatar');
      window.sessionStorage.removeItem('userId');
    }
    await auth0.logout();
    toast({
      position: 'top',
      title: 'You have been logged out.',
      status: 'success',
      duration: 3000,
      isClosable: true,
      onCloseComplete: () => router.replace('/', undefined, { shallow: true }),
    });
  }, [auth0, router, toast]);

  useEffect(() => {
    const path = router.asPath.replace(/\?.*/, '');
    switch (path) {
      case loginPath:
        login();
        break;
      case logoutPath:
        logout();
        break;
      case callbackPath:
        callbackResult();
        break;
      default:
        break;
    }
  }, [router, login, loginPath, logoutPath, logout, callbackPath, callbackResult]);

  useEffect(() => {
    checkLoggedIn().catch();
  }, [checkLoggedIn]);

  return <>{children}</>;
};

export type { User };
export { currentUser, isLoggedIn, identify };
export default Auth;
