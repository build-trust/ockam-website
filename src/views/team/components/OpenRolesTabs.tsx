import { FunctionComponent } from 'react';
import { TabsProps } from '@chakra-ui/react';

import { LeverPostingsGroup } from '@typings/lever';
import {
  CustomTabs,
  CustomTabList,
  CustomTab,
  CustomTabPanel,
  CustomTabPanels,
} from '@components/CustomTabs';

import OpenRoleCard from './OpenRoleCard';

type OpenRolesProps = Omit<TabsProps, 'children'> & { openRoles: LeverPostingsGroup[] };

const OpenRolesTabs: FunctionComponent<OpenRolesProps> = ({ openRoles, ...restProps }) => {
  if (!openRoles) return null;

  const allRoles: LeverPostingsGroup = {
    title: 'All Open Roles',
    postings: [],
  };
  openRoles.forEach((openRole) => allRoles.postings.push(...(openRole.postings || [])));
  const openRolesToRender = [allRoles, ...openRoles];

  return (
    <CustomTabs {...restProps}>
      <CustomTabList minW={270} w={{ base: 'full', lg: 270 }} mr={{ lg: 20, xl: 36 }}>
        {openRolesToRender.map(({ title, postings }) => (
          <CustomTab itemCount={postings?.length} key={title} id={title}>
            {title}
          </CustomTab>
        ))}
      </CustomTabList>

      <CustomTabPanels>
        {openRolesToRender.map(({ title, postings }) => (
          <CustomTabPanel id={title} key={title}>
            {postings?.map((role) => (
              <OpenRoleCard key={`${role.text}_${title}}`} {...role} />
            ))}
          </CustomTabPanel>
        ))}
      </CustomTabPanels>
    </CustomTabs>
  );
};

export default OpenRolesTabs;
