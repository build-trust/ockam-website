import { FunctionComponent } from 'react';
import { SimpleGrid, TabsProps } from '@chakra-ui/react';

import {
  CustomTab,
  CustomTabList,
  CustomTabs,
  CustomTabPanel,
  CustomTabPanels,
  useTabsWithHash,
} from '@components/CustomTabs';
import { CATEGORIES, MEMBERS } from '@consts/team';

import TeamMemberCard from './TeamMemberCard';

const ALL_MEMBERS_KEY = 'all-members';
const categoriesHashes = ['all', ...Object.values(CATEGORIES)].map((category) =>
  category.split(' ')[0].toLowerCase()
);

const getMembersForSpecificCategory = (
  category: typeof CATEGORIES[keyof typeof CATEGORIES]
): Partial<typeof MEMBERS> => MEMBERS.filter((member) => member.categories.includes(category));

const TeamTabs: FunctionComponent<Omit<TabsProps, 'children'>> = (props) => {
  const { tabIndex, handleTabsChange } = useTabsWithHash({
    tabsNames: categoriesHashes,
    sectionName: 'team',
  });

  return (
    <CustomTabs index={tabIndex} onChange={handleTabsChange} {...props}>
      <CustomTabList minW={250} w={{ base: 'full', lg: 'auto' }} mr={{ lg: 20, xl: 18 }}>
        <CustomTab itemCount={MEMBERS.length} key={ALL_MEMBERS_KEY} id={ALL_MEMBERS_KEY}>
          All Team Members
        </CustomTab>

        {Object.values(CATEGORIES).map((category) => (
          <CustomTab
            itemCount={getMembersForSpecificCategory(category).length}
            key={category}
            id={category}
          >
            {category}
          </CustomTab>
        ))}
      </CustomTabList>

      <CustomTabPanels>
        <CustomTabPanel id={ALL_MEMBERS_KEY} key={ALL_MEMBERS_KEY}>
          <SimpleGrid
            columns={{ base: 1, xl: 2 }}
            spacingY={{ base: 5, lg: 8 }}
            spacingX={{ lg: 6 }}
          >
            {MEMBERS.map(
              (member) =>
                member && <TeamMemberCard key={`${member.name}_${member.surname}`} {...member} />
            )}
          </SimpleGrid>
        </CustomTabPanel>

        {Object.values(CATEGORIES).map((category) => (
          <CustomTabPanel id={category} key={category}>
            <SimpleGrid
              columns={{ base: 1, xl: 2 }}
              spacingY={{ base: 5, lg: 8 }}
              spacingX={{ lg: 6 }}
              id={category}
            >
              {getMembersForSpecificCategory(category)?.map(
                (member) =>
                  member && <TeamMemberCard key={`${member.name}_${member.surname}`} {...member} />
              )}
            </SimpleGrid>
          </CustomTabPanel>
        ))}
      </CustomTabPanels>
    </CustomTabs>
  );
};

export default TeamTabs;
