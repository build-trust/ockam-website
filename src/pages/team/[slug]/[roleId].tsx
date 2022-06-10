import axios from 'axios';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { GetServerSidePropsContext, GetStaticPathsResult } from 'next';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import CONFIG from '@config';
import MainLayout from '@layouts/MainLayout';
import { LeverPosting } from '@typings/lever';
import { OpenRole, Footer } from '@views/open-role';
import { generateSlug } from '@utils/generateSlug';

const OpenRolePage: NextPageWithLayout<{ openRole: LeverPosting }> = ({ openRole }) => (
  <>
    <Head>
      <title>
        {CONFIG.app.title} | {openRole.text}
      </title>
    </Head>

    <OpenRole openRole={openRole} />
    <Footer />
  </>
);

OpenRolePage.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

type GetServerSidePropsReturnType = {
  props: { openRole: LeverPosting };
};

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const { data } = await axios.get(`${CONFIG.lever.apiUrl}`, {
    params: { mode: 'json' },
  });

  const paths = data.map((role: LeverPosting) => ({
    params: {
      slug: generateSlug(role?.text),
      roleId: role?.id,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({
  params,
}: GetServerSidePropsContext): Promise<GetServerSidePropsReturnType> {
  const { data } = await axios.get(`${CONFIG.lever.apiUrl}/${params?.roleId}`, {
    params: { mode: 'json' },
  });

  return {
    props: {
      openRole: data,
    },
  };
}

export default OpenRolePage;
