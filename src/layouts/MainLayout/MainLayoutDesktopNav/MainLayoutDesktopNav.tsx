import { FunctionComponent } from 'react';
import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  ButtonProps,
  forwardRef,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import { NAV_MENU_ITEMS } from '@consts/navigation';

import MainLayoutCtaButtons from '../MainLayoutCtaButtons';

const NavMenuItem = forwardRef<ButtonProps, 'div'>((props, ref) => (
  <Button
    variant="link"
    color="gray.500"
    fontSize="md"
    fontWeight="medium"
    bg="transparent"
    sx={{ ':not(last-child)': { mr: 8 } }}
    _hover={{
      textDecoration: 'none',
      bg: 'none',
      color: 'brand.900',
      _after: {
        content: '" "',
        display: 'block',
        borderRadius: '2px',
        height: '2px',
        width: '60%',
        bgColor: 'avocado.500',
        position: 'absolute',
        top: '100%',
      },
    }}
    {...props}
    ref={ref}
  />
));

const MainLayoutDesktopNav: FunctionComponent = () => (
  <>
    <Flex align="center" w="full" flexWrap="wrap" pl={{ lg: 8, xl: 16 }}>
      {NAV_MENU_ITEMS.map((item) => {
        const isDropdown = !!item.children;

        if (isDropdown) {
          return (
            <Menu placement="bottom">
              <MenuButton as={NavMenuItem} rightIcon={<ChevronDownIcon w={6} h={6} />}>
                {item.text}
              </MenuButton>

              <MenuList borderColor="gray.50">
                {item.children.map((childItem) => (
                  <MenuItem
                    key={childItem.text}
                    color="brand.900"
                    _hover={{ bgColor: 'transparent', textDecoration: 'underline' }}
                  >
                    {childItem.text}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          );
        }

        return (
          <NavMenuItem key={item.text} as="a" href={item.href}>
            {item.text}
          </NavMenuItem>
        );
      })}
    </Flex>

    <MainLayoutCtaButtons />
  </>
);

export default MainLayoutDesktopNav;
