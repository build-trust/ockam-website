import { FunctionComponent } from 'react';
import Link from 'next/link';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';

import { NAV_MENU_ITEMS } from '@consts/navigation';

const MainLayoutMobileNavMenu: FunctionComponent = () => (
  <Accordion allowToggle w="full" mb="auto">
    {NAV_MENU_ITEMS.map((item, index) => {
      const CurrentButton = (
        <AccordionButton as="a" fontWeight="medium" px={0} py={3}>
          {item.text} {!item.href && <AccordionIcon w={6} h={6} ml="auto" />}
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
            <Link href={item.href} passHref>
              {CurrentButton}
            </Link>
          ) : (
            CurrentButton
          )}

          {item.children && (
            <AccordionPanel key={item.text} py={0} px={0}>
              {item.children.map((childItem) => (
                <AccordionItem key={childItem.text} isFocusable border="none" cursor="pointer">
                  <Link href={childItem.href} passHref>
                    <AccordionButton as="a" p={3} fontWeight="regular" bgColor="gray.50">
                      {childItem.text}
                    </AccordionButton>
                  </Link>
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
