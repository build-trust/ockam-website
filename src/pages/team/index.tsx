import { ReactElement, ReactNode } from 'react';
import axios from 'axios';
import { Box } from '@chakra-ui/react';

import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import MainLayout from '@layouts/MainLayout';
import { Hero, Quote, Values, OpenRoles } from '@views/team';
import CONFIG from '@config';
import { LeverPostingsGroup } from '@typings/lever';
import SEOHead from '@components/SEOHead';

const OpenRolesPage: NextPageWithLayout<{ openRoles: LeverPostingsGroup[] }> = ({ openRoles }) => (
  <Box pt={{ base: 10, lg: 20 }}>
    <SEOHead subTitle="Open Roles" />

    <Hero />
    <Quote />
    <Values />
    <OpenRoles openRoles={openRoles} />
  </Box>
);

OpenRolesPage.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getServerSideProps() {
  const { data } = await axios.get(CONFIG.lever.apiUrl, {
    params: {
      mode: 'json',
      group: 'team',
    },
  });

  return {
    props: {
      openRoles: [...data] || [],
    },
  };
}

export default OpenRolesPage;
