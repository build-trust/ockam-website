const Input = {
  variants: {
    ghost: {
      field: {
        color: 'white',
        bg: 'transparent',
        padding: '0.75rem 0.25rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.50)',
        fontSize: '0.875rem',
        borderRadius: 0,
        fontWeight: 400,
        _focus: {
          borderColor: 'brand.500',
        },
        _invalid: {
          borderColor: 'red.500',
        },
      },
    },
    outline: {
      field: {
        color: 'brand.900',
        borderColor: 'gray.200',
        borderRadius: 'base',

        _focus: {
          borderColor: 'avocado.500',
        },
        _focusVisible: {
          boxShadow: 'none',
        },
        _invalid: {
          borderColor: 'orange.500',
          boxShadow: 'none',
        },
      },
    },
  },
};

export default Input;
