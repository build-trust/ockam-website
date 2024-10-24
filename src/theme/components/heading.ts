const Heading = {
  baseStyle: {
    color: 'brand.900',
    fontWeight: 'bold',
  },
  sizes: {
    h1: {
      fontSize: { base: '7.5xl', lg: '10xl' },
      lineHeight: { base: 0.95 },
    },
    h2: {
      fontSize: { base: '4xl', lg: '4.5xl' },
    },
    h3: {
      fontSize: { base: '2.5xl', lg: '4.5xl' },
    },
    h4: {
      fontSize: { base: 'xl', lg: '2xl' },
    },
  },
  variants: {
    dynamicSizeh1: {
      fontWeight: 'extrabold',
      textAlign: 'center',
      color: 'white',
      letterSpacing: '-0.06em',
      width: '100%',
      mb: 4,
      mt: 0,
    },
    dynamicSizeh2: {
      textWrap: 'balance',
      letterSpacing: '-0.08em',
      color: 'rgba(255, 255, 255, 0.8)',
      textAlign: 'center',
      fontWeight: 'medium',
      mx: 'auto',
      maxW: '20em',
      lineHeight: '1.2em',
    },
  },
};

export default Heading;
