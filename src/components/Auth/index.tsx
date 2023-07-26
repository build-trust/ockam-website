import { Auth0Client } from '@auth0/auth0-spa-js';
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

const Auth: FunctionComponent<Props> = ({ loginPath, logoutPath, callbackPath, children }) => {
  const router = useRouter();

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
    await auth0.logout();
  }, [auth0]);

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
    checkLoggedIn().catch(console.error);
  }, [checkLoggedIn]);

  return <>{children}</>;
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

const isLoggedIn = (): boolean => !!currentUser();

export { currentUser, isLoggedIn, User };

export default Auth;
