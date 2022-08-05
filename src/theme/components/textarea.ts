const Textarea = {
  variants: {
    outline: {
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
};

export default Textarea;
