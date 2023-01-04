import { useEffect } from 'react';
import { useRouter } from 'next/router';

const CustomDoc410 = (): null => {
  const router = useRouter();
  const { pathname } = router;
  const docsUrl = 'https://docs.ockam.io';

  useEffect(() => {
      router.replace(docsUrl);      
  }, [pathname, router]);

  return null;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-explicit-any
export const getServerSideProps = ({ res }: any) => {
  res.statusCode = 410;
  return { props: {} };
};

export default CustomDoc410;
