import { FunctionComponent } from 'react';
import {
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsProps,
  useBreakpointValue,
} from '@chakra-ui/react';

import { LeverPostingsGroup } from '@typings/lever';
import Card from '@components/Card';

import OpenRolesCustomTab from './OpenRolesCustomTab';
import OpenRoleCard from './OpenRoleCard';

type OpenRolesProps = Omit<TabsProps, 'children'> & { openRoles: LeverPostingsGroup[] };

const OpenRolesTabs: FunctionComponent<OpenRolesProps> = ({ openRoles, ...restProps }) => {
  const tabsOrientation = useBreakpointValue({ base: 'horizontal', lg: 'vertical' });

  if (!openRoles) return null;

  const allRoles: LeverPostingsGroup = {
    title: 'All Open Roles',
    postings: [],
  };
  openRoles.forEach((openRole) => allRoles.postings.push(...(openRole.postings || [])));
  const openRolesToRender = [allRoles, ...openRoles];

  return (
    <Tabs
      orientation={tabsOrientation as TabsProps['orientation']}
      variant="unstyled"
      display="flex"
      flexDirection={{ base: 'column', lg: 'row' }}
      alignItems={{ base: 'center', lg: 'flex-start' }}
      w="full"
      {...restProps}
    >
      <TabList
        as={Card}
        minW={270}
        w={{ base: 'full', lg: 270 }}
        px={5}
        py={2}
        mr={{ lg: 20, xl: 36 }}
        mb={{ base: 10, lg: 0 }}
        flexWrap="wrap"
      >
        {openRolesToRender.map(({ title, postings }) => (
          <OpenRolesCustomTab rolesCount={postings?.length} key={title} id={title}>
            {title}
          </OpenRolesCustomTab>
        ))}
      </TabList>

      <TabPanels>
        {openRolesToRender.map(({ title, postings }) => (
          <TabPanel id={title} key={title} p={0}>
            {postings?.map((role) => (
              <OpenRoleCard key={`${role.text}_${title}}`} {...role} />
            ))}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default OpenRolesTabs;
