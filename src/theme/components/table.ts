import { tableAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(tableAnatomy.keys);

// define the base component styles
const Table = defineMultiStyleConfig({
  variants: {
    pricing: {
      table: {
        tableLayout: 'fixed',
      },
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
              width: '12.75rem',
              background: '#CDD9E7',
            },
            // Companies Cell
            '&:nth-child(3)': {
              width: '25.25rem',
              background: '#B7FDD7',
            },
            // Enterprises Cell
            '&:nth-child(4)': {
              width: '12.75rem',
              background: '#B5EEFF',
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
            '&:nth-child(2),&:nth-child(6)': {
              borderRight: '1px solid',
              borderColor: 'gray.100',
            },
            // Developers Cells
            '&:nth-child(1), &:nth-child(2)': {
              background: '#E7EEF5',
            },

            // Companies Cells
            '&:nth-child(3), &:nth-child(4), &:nth-child(5), &:nth-child(6)': {
              background: '#DBFEEB',
            },

            // Enterprises Cells
            '&:nth-child(7), &:nth-child(8)': {
              background: '#DAF7FF',
            },
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

        // Developers Cells
        '&:nth-child(2), &:nth-child(3)': {
          background: '#FCFEFF',
        },

        // Companies Cells
        '&:nth-child(4), &:nth-child(5), &:nth-child(6), &:nth-child(7)': {
          background: '#F7FFFD',
        },

        // Enterprises Cells
        '&:nth-child(8), &:nth-child(9)': {
          background: '#F4FDFF',
        },
      },
    },
  },
});

// export the component theme
export default Table;
