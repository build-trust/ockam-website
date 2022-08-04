const Container = {
  variants: {
    section: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxW: 'container.max',
      px: {
        base: 5,
        lg: 20,
        xl: 30,
      },
      py: 0,
    },
  },
};

export default Container;
