import { ReactElement, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

import leverApi from '@api/leverApi';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { Hero, Values, OpenRoles } from '@views/team';
import { LeverPostingsGroup } from '@typings/lever';
import SEOHead from '@components/SEOHead';
import DarkLayout from '@layouts/DarkLayout';

const OpenRolesPage: NextPageWithLayout<{ openRoles: LeverPostingsGroup[] }> = ({ openRoles }) => (
  <Box>
    <SEOHead subTitle="Open Roles" />
    <Hero />
    <Values />
    <OpenRoles openRoles={openRoles} />
  </Box>
);

OpenRolesPage.getLayout = (page: ReactElement): ReactNode => <DarkLayout>{page}</DarkLayout>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getServerSideProps() {
  try {
    const { data } = await leverApi.postingsService.getGroupedRoles();

    return {
      props: {
        openRoles: [...data] || [],
      },
    };
  } catch {
    return {
      props: {},
    };
  }
}

export default OpenRolesPage;
