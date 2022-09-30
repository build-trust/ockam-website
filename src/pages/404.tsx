import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404 = (): null => {
  const router = useRouter();

  useEffect(() => {
    let reidrectUrl = '/';

    if (router.asPath.includes('learn')) {
      reidrectUrl = '/blog';
    }

    router.replace(reidrectUrl);
  });

  return null;
};

export default Custom404;
