import { ReactElement, ReactNode } from 'react';
import { Box, Link, LinkProps } from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import ArrowRightIcon from './assets/arrow-right.svg';

interface DBLinkProps extends LinkProps, Omit<NextLinkProps, 'as' | 'href'> {
  children: ReactNode;
}
const DBLink = ({ children, ...linkProps }: DBLinkProps): ReactElement => (
  <Link
    display="flex"
    alignItems="center"
    target="_blank"
    as={NextLink}
    color="white"
    p={{ base: '0.5rem' }}
    borderBottom="1px solid rgba(255, 255, 255, 0.50)"
    {...linkProps}
  >
    {children}
    <Box as={ArrowRightIcon} ml="auto" />
  </Link>
);

export default DBLink;
