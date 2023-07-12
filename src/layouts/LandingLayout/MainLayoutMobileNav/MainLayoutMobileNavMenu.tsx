import { FunctionComponent } from 'react';
import NextLink from 'next/link';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Link as ChakraLink,
  Box,
  Icon,
} from '@chakra-ui/react';

import { NAV_MENU_ITEMS } from '@consts/navigation';

const MainLayoutMobileNavMenu: FunctionComponent = () => (
  <Accordion allowToggle w="full" mb="auto">
    {NAV_MENU_ITEMS.map(({ icon, ...item }, index) => {
      const CurrentButton = (
        <AccordionButton
          {...(item.href ? { as: item.isExternal ? 'span' : 'a' } : {})}
          fontWeight="medium"
          px={0}
          py={3}
          _hover={{ textDecoration: 'underline' }}
        >
          {item.text} {icon && <Icon as={icon} w={6} h={6} ml={3} />}
          {!item.href && <AccordionIcon w={6} h={6} ml="auto" />}
        </AccordionButton>
      );

      return (
        <AccordionItem
          key={item.text}
          isFocusable={!!item.href}
          borderBottom="none"
          {...(index === 0 ? { borderTop: 'none' } : {})}
        >
          {item.href ? (
            <Box
              href={item.href}
              as={item.isExternal ? ChakraLink : NextLink}
              {...(item.isExternal
                ? { isExternal: true, _hover: { textDecoration: 'none' } }
                : { passHref: true })}
            >
              {CurrentButton}
            </Box>
          ) : (
            CurrentButton
          )}

          {item.children && (
            <AccordionPanel key={item.text} py={1} px={1}>
              {item.children.map((childItem) => (
                <AccordionItem key={childItem.text} isFocusable border="none" cursor="pointer">
                  <Box
                    href={childItem.href}
                    as={item.isExternal ? ChakraLink : NextLink}
                    {...(item.isExternal ? { isExternal: true } : { passHref: true })}
                  >
                    <AccordionButton
                      as={item.isExternal ? 'span' : 'a'}
                      p={3}
                      fontWeight="regular"
                      bgColor="gray.50"
                    >
                      {childItem.text}
                    </AccordionButton>
                  </Box>
                </AccordionItem>
              ))}
            </AccordionPanel>
          )}
        </AccordionItem>
      );
    })}
  </Accordion>
);

export default MainLayoutMobileNavMenu;
