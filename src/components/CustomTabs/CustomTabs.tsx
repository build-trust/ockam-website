import { Tabs, TabsProps, useBreakpointValue } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const CustomTabs: FunctionComponent<TabsProps> = ({ children, ...restProps }) => {
  const tabsOrientation = useBreakpointValue({ base: 'horizontal', lg: 'vertical' });

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
      {children}
    </Tabs>
  );
};

export default CustomTabs;
