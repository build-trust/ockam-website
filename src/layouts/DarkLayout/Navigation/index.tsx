import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import NextLink from 'next/link';
import { ChevronDownIcon } from '@chakra-ui/icons';

import GitHubIcon from './assets/github.svg';
import { NAV_ITEMS, NavItem } from './consts/navItems';
import MobileNavigation from './components/MobileNavigation';
import { navItemFontStyles, NavigationItem } from './components/NavigationItem';
import OckamLogo from './components/OckamLogo';
import useChangeNavbarStyles from './hooks/useChangeNavbarStyles';

function renderNavigationItem({ items, name, href }: NavItem): ReactElement {
  if (items) {
    // Nested Team items, which are rendered as a dropdown on Desktop.
    return (
      <Menu>
        <MenuButton
          display="flex"
          alignItems="center"
          variant="unstyled"
          as={Button}
          rightIcon={<ChevronDownIcon width="1.5rem" height="1.5rem" />}
          {...navItemFontStyles}
        >
          {name}
        </MenuButton>
        <MenuList bg="var(--navbar-bg)">
          {items.map(({ name: nestedItemName, href: nestedItemHref }) => (
            <MenuItem bg="transparent" as={NavigationItem} href={nestedItemHref}>
              {nestedItemName}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }

  // Rest of the nav is rendered as a link.
  return <NavigationItem href={href}>{name}</NavigationItem>;
}

const Navigation = (): ReactElement => {
  // Sets the navbar background color and text color css variables which then can be consumed down the tree.
  // This is done to avoid prop drilling and to keep the Navbar component clean.
  const cssVariables = useChangeNavbarStyles();

  return (
    <Box
      zIndex={100}
      as="nav"
      pos="sticky"
      top={0}
      transition="background 0.4s linear"
      style={{ ...cssVariables }}
      bg="var(--navbar-bg)"
      color="var(--navbar-text)"
      py={{ base: '1rem', lg: '1.125rem' }}
      px={{ base: '0.75rem' }}
    >
      <Flex justifyContent={{ base: 'space-between', lg: 'unset' }} maxW="70rem" mx="auto">
        <OckamLogo width={{ base: '5.25rem', lg: '10.9375rem' }} height="auto" />
        <Flex ml="auto" gap="2.25rem" alignItems="center" display={{ base: 'none', lg: 'flex' }}>
          {NAV_ITEMS.map((item) => renderNavigationItem(item))}
          <NextLink href="https://github.com/build-trust/">
            <GitHubIcon />
          </NextLink>
        </Flex>
        <MobileNavigation display={{ base: 'block', lg: 'none' }} />
      </Flex>
    </Box>
  );
};

export default Navigation;
