import { FunctionComponent } from 'react';
import {
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  ButtonProps,
  Link as ChakraLink,
  forwardRef,
  Icon,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

import { NAV_MENU_ITEMS } from '@consts/navigation';

import MainLayoutCtaButtons from '../MainLayoutCtaButtons';

const activeMenuItemStyle = {
  textDecoration: 'none',
  bg: 'none',
  svg: { color: 'avocado.500' },
  _after: {
    content: '" "',
    display: 'block',
    borderRadius: 'sm',
    height: '2px',
    width: '60%',
    bgColor: 'avocado.500',
    position: 'absolute',
    top: '100%',
  },
};

const iconStyles = {
  w: 6,
  h: 6,
  mr: 3,
  borderRadius: 'base',
};

const NavMenuItem = forwardRef<ButtonProps, 'div'>((props, ref) => (
  <Button
    variant="link"
    color="brand.900"
    fontSize="md"
    fontWeight="medium"
    bg="transparent"
    _active={activeMenuItemStyle}
    _hover={activeMenuItemStyle}
    mr={8}
    {...props}
    ref={ref}
  />
));

const MainLayoutDesktopNav: FunctionComponent = () => (
  <>
    <Flex
      display={{ base: 'none', lg: 'flex' }}
      align="center"
      justify="center"
      w="full"
      flexWrap="wrap"
      pl={{ lg: 8, xl: 16 }}
    >
      {NAV_MENU_ITEMS.map(({ icon, ...item }) => {
        const isDropdown = !!item.children;

        if (isDropdown) {
          return (
            <Menu key={item.text} placement="bottom" autoSelect={false}>
              <MenuButton
                as={NavMenuItem}
                rightIcon={<ChevronDownIcon w={6} h={6} color="inherit!important" />}
              >
                {icon && <Icon as={icon} {...iconStyles} />}
                {item.text}
              </MenuButton>

              <MenuList borderColor="gray.50">
                {item.children.map(({ icon: childIcon, ...childItem }) => (
                  <Box
                    key={childItem.text}
                    as={childItem.isExternal ? ChakraLink : NextLink}
                    href={childItem.href}
                    {...(childItem.isExternal ? { isExternal: true } : { passHref: true })}
                  >
                    <MenuItem
                      {...(childItem.isExternal ? { as: 'span' } : { as: 'a' })}
                      color="brand.900"
                      _hover={{
                        bgColor: 'transparent',
                        textDecoration: 'underline',
                        svg: { bgColor: 'avocado.500' },
                      }}
                    >
                      {childIcon && (
                        <Icon
                          as={childIcon}
                          {...iconStyles}
                          p="0.15rem"
                          color="white"
                          bgColor="brand.900"
                        />
                      )}
                      {childItem.text}
                    </MenuItem>
                  </Box>
                ))}
              </MenuList>
            </Menu>
          );
        }

        return (
          <Box
            key={item.text}
            as={item.isExternal ? ChakraLink : NextLink}
            href={item.href}
            {...(item.isExternal
              ? {
                  isExternal: true,
                  _hover: { textDecoration: 'none', svg: { color: 'avocado.500' } },
                }
              : { passHref: true })}
          >
            <NavMenuItem {...(item.isExternal ? { as: 'span' } : { as: 'a' })}>
              {icon && <Icon as={icon} {...iconStyles} />}
              {item.text}
            </NavMenuItem>
          </Box>
        );
      })}
    </Flex>

    <MainLayoutCtaButtons />
  </>
);

export default MainLayoutDesktopNav;
