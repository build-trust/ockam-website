import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';

type LinkProps = NextLinkProps & Pick<ChakraLinkProps, 'children'>;

const Link = ({ children, as, href, ...restProps }: LinkProps): JSX.Element => (
  <NextLink as={as} href={href} passHref {...restProps}>
    <ChakraLink
      textDecoration="underline"
      _hover={{
        color: 'brand.500',
      }}
      mb={6}
    >
      {children}
    </ChakraLink>
  </NextLink>
);

export default Link;
