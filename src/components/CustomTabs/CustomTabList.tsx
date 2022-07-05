import { FunctionComponent } from 'react';
import { TabList, TabListProps } from '@chakra-ui/react';

import Card from '@components/Card';

const CustomTabList: FunctionComponent<TabListProps> = ({ children, ...restProps }) => (
  <TabList as={Card} px={5} py={2} mr={5} mb={{ base: 10, lg: 0 }} flexWrap="wrap" {...restProps}>
    {children}
  </TabList>
);

export default CustomTabList;
