import { ReactElement, ReactNode } from 'react';
import { GetServerSidePropsContext, GetStaticPathsResult } from 'next';
import { useRouter } from 'next/router';

import leverApi from '@api/leverApi';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import MainLayout from '@layouts/MainLayout';
import { LeverPosting } from '@typings/lever';
import { OpenRole } from '@views/open-role';
import SEOHead from '@components/SEOHead';
import { OPEN_ROLE_PATH, OPEN_ROLES_PATH } from '@consts/paths';

const getMetaDescription = (description: string): string => {
  const META_DESCRIPTION_MAX_LENGTH = 150;
  const trimmedDescription = description.substring(0, META_DESCRIPTION_MAX_LENGTH);
  const trimmedDescriptionWithoutTruncatedWords = trimmedDescription.substring(
    0,
    Math.min(trimmedDescription.length, trimmedDescription.lastIndexOf(' '))
  );

  return `${trimmedDescriptionWithoutTruncatedWords} ...`;
};

const OpenRolePage: NextPageWithLayout<{ openRole: LeverPosting }> = ({ openRole }) => {
  const router = useRouter();
  const canonicalPath = `${OPEN_ROLE_PATH}/${router.query.slug}/${router.query.roleId}`;

  return (
    <>
      <SEOHead
        subTitle={openRole.text}
        description={getMetaDescription(openRole.descriptionPlain)}
        canonicalPath={canonicalPath}
      />

      <OpenRole openRole={openRole} />
    </>
  );
};

OpenRolePage.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

type GetServerSidePropsReturnType = {
  props?: { openRole: LeverPosting };
  redirect?: {
    destination: string;
    permanent: boolean;
  };

  revalidate: number;
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
    return {
      redirect: {
        destination: OPEN_ROLES_PATH,
        permanent: false,
      },
      revalidate: 60,
    };
  }
}

export default OpenRolePage;
