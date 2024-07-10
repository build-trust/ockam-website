import { forwardRef, Link, LinkProps } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import NextLink from 'next/link';

export const navItemFontStyles = {
  fontSize: { base: '1.25rem', lg: 'md' },
  fontWeight: { base: 700, lg: 'medium' },
};

export interface NavigationItemProps extends LinkProps {
  children: string;
  href: string;
}
export const NavigationItem = forwardRef(
  ({ children, href, ...linkProps }: NavigationItemProps, ref): ReactElement => (
    <Link
      ref={ref}
      href={href}
      as={NextLink}
      variant="link"
      color="inherit"
      {...navItemFontStyles}
      {...linkProps}
    >
      {children}
    </Link>
  ),
);
