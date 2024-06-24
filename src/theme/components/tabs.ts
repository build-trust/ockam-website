import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys);

// define the base component styles
const Tabs = defineMultiStyleConfig({
  variants: {
    ockam: {
      tablist: {
        fontFamily: 'Inter',
        backgroundColor: 'white',
        padding: '0.25rem',
        borderRadius: '6.25rem',
        justifyContent: 'space-between',
        marginBottom: { base: '1rem', lg: '1.5rem' },
        overflow: 'scroll',
      },
      tabpanel: {
        padding: 0,
      },
      tab: {
        padding: '0.5rem',
        borderRadius: '6.25rem',
        color: 'brand.800',
        fontWeight: 400,
        fontSize: '0.875rem',
        _selected: {
          background: 'brand.800',
          color: 'white',
          fontWeight: 600,
        },
      },
    },
  },
});

// export the component theme

export default Tabs;
