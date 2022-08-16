import { ReactElement, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

import leverApi from '@api/leverApi';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import MainLayout from '@layouts/MainLayout';
import { Hero, Quote, Values, OpenRoles } from '@views/team';
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
  try {
    const { data } = await leverApi.postingsService.getGroupedRoles();

    return {
      props: {
        openRoles: [...data] || [],
      },
    };
  } catch (e) {
    return {
      props: {},
    };
  }
}

export default OpenRolesPage;
