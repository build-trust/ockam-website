import { useEffect } from 'react';
import { useRouter } from 'next/router';

const CustomJob410 = (): null => {
  const router = useRouter();
  const { pathname } = router;
  const teamOpenRoleUrl = '/team#open-roles'

  useEffect(() => {
      router.replace(teamOpenRoleUrl);
  }, [pathname, router]);

  return null;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-explicit-any
export const getServerSideProps = ({ res }: any) => {
  res.statusCode = 410;
  return { props: {} };
};

export default CustomJob410;
