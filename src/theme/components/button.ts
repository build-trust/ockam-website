import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    lineHeight: 1,
    borderRadius: 'base',
  },
  variants: {
    primary: {
      bg: 'brand.500',
      color: 'brand.800',
      _hover: {
        bg: 'brand.400',
      },
    },
    ghost: {
      bg: 'transparent',
      color: 'brand.500',
      border: '1px solid',
      borderColor: 'brand.500',
      _hover: {
        bg: 'brand.400',
        color: 'white',
      },
    },
  },
  sizes: {
    sm: {
      h: 8,
      minH: 8,
      py: 2,
      px: 3,
      fontSize: 'xs',
    },
    md: {
      h: 10, // 40px TODO 42
      minH: 10,
      py: '0.875rem', // 14px
      px: 8, // 32px
      fontSize: 'sm', // 14px
    },
    lg: {
      h: 14, // 56px TODO 58
      minH: 14,
      py: '1.25rem', // 20px
      px: 8,
      fontSize: 'lg', // 18px
    },
  },
});

export default Button;
