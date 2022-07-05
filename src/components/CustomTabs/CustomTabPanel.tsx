import { TabPanel, TabPanelProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const CustomTabPanel: FunctionComponent<TabPanelProps> = ({ children, ...restProps }) => (
  <TabPanel p={0} {...restProps}>
    {children}
  </TabPanel>
);

export default CustomTabPanel;
