import { FunctionComponent } from 'react';
import { TabsProps } from '@chakra-ui/react';

import { LeverPostingsGroup } from '@typings/lever';
import {
  CustomTabs,
  CustomTabList,
  CustomTab,
  CustomTabPanel,
  CustomTabPanels,
  useTabsWithQueryParam,
} from '@components/CustomTabs';

import OpenRoleCard from './OpenRoleCard';

type OpenRolesProps = Omit<TabsProps, 'children'> & { openRoles: LeverPostingsGroup[] };

const OpenRolesTabs: FunctionComponent<OpenRolesProps> = ({ openRoles, ...restProps }) => {
  const allRoles: LeverPostingsGroup = {
    title: 'All Open Roles',
    postings: [],
  };
  (openRoles || []).forEach((openRole) => allRoles.postings.push(...(openRole.postings || [])));
  const openRolesToRender = [allRoles, ...(openRoles || [])];

  const openRolesQueryParams = openRolesToRender.map((category) =>
    category.title?.toLowerCase().replace(/\s/g, '-')
  );

  const { tabIndex, handleTabsChange } = useTabsWithQueryParam({
    tabsNames: openRolesQueryParams,
    queryName: 'tab',
    sectionName: 'open-roles',
  });

  if (!openRoles) return null;

  return (
    <CustomTabs index={tabIndex} onChange={handleTabsChange} {...restProps}>
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
