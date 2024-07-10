import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  IconButtonProps,
  Stack,
  useDisclosure,
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { ReactElement, useEffect } from 'react';

import HamburgerIcon from '../../assets/hamburger.svg';
import GitHubIcon from '../../assets/github.svg';
import { NavigationItem, navItemFontStyles } from '../NavigationItem';
import { NAV_ITEMS, NavItem } from '../../consts/navItems';

function renderMobileNavigationItem({ items, name, href }: NavItem): ReactElement {
  if (items) {
    // Nested Team items, which are rendered as a dropdown.
    return (
      <Accordion allowToggle key={name}>
        <AccordionItem border="none">
          <AccordionButton
            display="flex"
            alignItems="center"
            variant="unstyled"
            as={Button}
            {...navItemFontStyles}
          >
            {name}
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel p={0} pt="1rem">
            <Stack gap="1rem" alignItems="center">
              {items.map(({ name: nestedItemName, href: nestedItemHref }) => (
                <NavigationItem
                  key={nestedItemHref}
                  href={nestedItemHref}
                  fontWeight={500}
                  color="gray.200"
                  fontSize="0.875rem"
                >
                  {nestedItemName}
                </NavigationItem>
              ))}
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  }

  // Rest of the nav is rendered as a link.
  return (
    <NavigationItem key={href} href={href}>
      {name}
    </NavigationItem>
  );
}

interface MobileNavigationProps extends Omit<IconButtonProps, 'aria-label'> {}
const MobileNavigation = (props: MobileNavigationProps): ReactElement => {
  const { isOpen, onOpen: openDrawer, onClose: closeDrawer } = useDisclosure();
  const { breakpoints } = useTheme();
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.lg})`);

  useEffect(() => {
    if (isDesktop) {
      closeDrawer();
    }
  }, [isDesktop, closeDrawer]);

  return (
    <>
      <IconButton
        onClick={openDrawer}
        minHeight="auto"
        minWidth="auto"
        height="auto"
        width="auto"
        variant="transparent"
        aria-label="Toggle navigation"
        icon={<HamburgerIcon />}
        cursor="pointer"
        {...props}
      />
      <Drawer isOpen={isOpen} placement="right" size="full" onClose={closeDrawer}>
        <DrawerOverlay bg="brand.800" />
        <DrawerContent color="white">
          <DrawerCloseButton height="1.5rem" width="1.5rem" />
          <DrawerBody display="flex" flexDir="column">
            <Flex direction="column" gap="1.5rem" alignItems="center" mt="auto" pb="1.5rem">
              {NAV_ITEMS.map((item) => (
                <Box key={item.name} onClick={item.items ? undefined : closeDrawer}>
                  {renderMobileNavigationItem(item)}
                </Box>
              ))}
              <Box onClick={closeDrawer}>
                <NextLink href="https://github.com/build-trust/">
                  <GitHubIcon height="2.625rem" width="2.625rem" />
                </NextLink>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavigation;
