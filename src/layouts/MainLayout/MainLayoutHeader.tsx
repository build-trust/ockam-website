import { FunctionComponent, useContext, RefObject } from 'react';
import {
  Box,
  Container,
  Flex,
  forwardRef,
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
// const BlueLink = styled.a`
//   c
//   text-decoration: underline;
// `

import LogoDark from '@assets/logo-dark.svg';
import MainLayoutMobileNav from '@layouts/MainLayout/MainLayoutMobileNav';
import { MainLayoutDesktopNav } from '@layouts/MainLayout/MainLayoutDesktopNav';
import useScroll from '@hooks/useScroll';
import { HOME_PATH } from '@consts/paths';
import { MobileNavbarContext } from '@contextProviders/MobileNavbarProvider';

import LayoutMobileHeader from '../components/LayoutMobileHeader';

const BrandAssetHelper: FunctionComponent = forwardRef((props) => (
  <Popover
    returnFocusOnClose={false}
    isOpen={props.isOpen}
    onClose={props.onClose}
    placement="right"
    closeOnBlur
  >
    <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverHeader>Looking for our logo?</PopoverHeader>
      <PopoverBody>
        You can find our logo and the rest of our brand assets over in the{' '}
        <Link href="/style-guide">
          <a style={{ fontWeight: 'bold', color: '#51cbdd', textDecoration: 'underline' }}>
            style guide
          </a>
        </Link>
      </PopoverBody>
    </PopoverContent>
  </Popover>
));

const MainLayoutHeader: FunctionComponent = forwardRef((props, ref) => {
  const { isScrolled } = useScroll(40, true, ref as RefObject<HTMLDivElement>);
  const { isBelowSmallLaptop } = useContext(MobileNavbarContext);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const headerDesktopPaddingY = isScrolled ? 5 : 8;

  if (isBelowSmallLaptop) {
    return (
      <LayoutMobileHeader>
        <MainLayoutMobileNav />
      </LayoutMobileHeader>
    );
  }

  const handleMouse = (): void => {
    onToggle();
  };
  return (
    <Box
      ref={ref}
      as="header"
      w="full"
      pos="fixed"
      top={0}
      zIndex={1}
      bgColor="white"
      boxShadow={isScrolled ? 'md' : 'none'}
      py={{ base: 4, lg: headerDesktopPaddingY }}
      transition="all 400ms ease-in-out"
    >
      <Container variant="section" display="flex" w="full">
        <Flex w="full" alignItems="center">
          <BrandAssetHelper isOpen={isOpen} onClose={onClose} />
          <Link href={HOME_PATH} passHref>
            <Box as="a" flex={0} pr={{ base: 2, xl: 4 }} maxW="11rem" h="auto">
              <Box
                as={LogoDark}
                alt="Homepage link"
                transition="all 400ms ease-in-out"
                w={{ base: '7.875rem', lg: isScrolled ? '8.75rem' : '11rem' }}
                h={{ base: '2.25rem', lg: isScrolled ? '2.5rem' : '3.125rem' }}
                onContextMenu={handleMouse}
              />
            </Box>
          </Link>

          <MainLayoutDesktopNav />
        </Flex>
      </Container>
    </Box>
  );
});
export default MainLayoutHeader;
