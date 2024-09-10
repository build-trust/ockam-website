import { tableAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(tableAnatomy.keys);

// define the base component styles
const Table = defineMultiStyleConfig({
  variants: {
    pricing: {
      th: {
        padding: '0 1rem',
        height: '3.75rem',
        letterSpacing: 0,
        textTransform: 'none',
        color: 'brand.800',
        fontWeight: 700,
      },
      tr: {
        '&:first-child': {
          th: {
            // Plan Comparison Cell
            '&:first-child': {
              width: '17.5rem',
              fontSize: '1.75rem',
              fontFamily: 'neutraface',
              borderRight: '1px solid',
              borderBottom: '1px solid',
              borderColor: 'gray.100',
            },
            // Plan Name Cells
            '&:not(:first-child)': {
              textAlign: 'center',
              borderRight: '1px solid',
              borderColor: 'gray.100',

              // Enterprise Cell
              '&:last-child': {
                borderRight: 0,
              },
            },

            // Developers Cell
            '&:nth-child(2)': {
              // width: '12.75rem',
            },
            // Companies Cell
            '&:nth-child(3)': {
              // width: '25.25rem',
            },
            // Enterprises Cell
            '&:nth-child(4)': {
              // width: '12.75rem',
            },
          },
        },
        // Tier cells
        '&:nth-child(2)': {
          th: {
            textAlign: 'center',
            borderBottom: '1px solid',
            borderColor: 'gray.100',
            whiteSpace: 'break-spaces',
          },
        },
      },
      td: {
        color: 'brand.800',
        fontWeight: 500,
        fontSize: '0.75rem',
        whiteSpace: 'break-spaces',
        textAlign: 'center',
        height: '5rem',
        padding: '0 1rem',
        verticalAlign: 'middle',

        '&:first-child': {
          position: 'sticky',
          left: 0,
          width: '17.5rem',
          textAlign: 'left',
          fontSize: '1rem',
          color: '#474D66',
          background: 'white',
          borderRight: '1px solid',
          borderColor: 'gray.100',
        },
        '&:nth-child(3),&:nth-child(7)': {
          borderRight: '1px solid',
          borderColor: 'gray.100',
        },
      },
    },
  },
});

// export the component theme
export default Table;
