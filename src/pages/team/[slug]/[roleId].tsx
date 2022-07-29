import { ReactElement, ReactNode } from 'react';
import { GetServerSidePropsContext, GetStaticPathsResult } from 'next';
import { useRouter } from 'next/router';

import leverApi from '@api/leverApi';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import MainLayout from '@layouts/MainLayout';
import { LeverPosting } from '@typings/lever';
import { OpenRole } from '@views/open-role';
import SEOHead from '@components/SEOHead';

const OpenRolePage: NextPageWithLayout<{ openRole: LeverPosting }> = ({ openRole }) => {
  const router = useRouter();
  const canonicalPath = `/blog/${router.query.slug}/${router.query.roleId}`;

  return (
    <>
      <SEOHead subTitle={openRole.text} canonicalPath={canonicalPath} />

      <OpenRole openRole={openRole} />
    </>
  );
};

OpenRolePage.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

type GetServerSidePropsReturnType = {
  props?: { openRole: LeverPosting };
  revalidate?: number;
  notFound?: boolean;
};

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({
  params,
}: GetServerSidePropsContext): Promise<GetServerSidePropsReturnType> {
  try {
    const { data } = await leverApi.postingsService.getRole(params?.roleId as string);

    return {
      props: {
        openRole: data,
      },
      revalidate: 60,
    };
  } catch (e) {
    return { notFound: true, revalidate: 60 };
  }
}

export default OpenRolePage;
