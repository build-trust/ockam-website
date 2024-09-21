import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import {
  Image,
  Box,
  Flex,
  useTheme,
  useDisclosure,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import BlogPostsProvider from '@contextProviders/BlogPostsProvider';
import { BlogPost } from '@root/typings/BlogPost';
import AllPageNotice, { AllPageMessage } from '@root/components/AllPageNotice';

import LayoutFooter from '../components/LayoutFooter';

import BlogLayoutSidebar from './BlogLayoutSidebar/BlogLayoutSidebar';
import BlogLayoutMobileNav from './BlogLayoutMobileNav/BlogLayoutMobileNav';

type BlogLayoutProps = {
  children?: ReactNode;
  blogPosts: BlogPost[];
  newsletterPopup?: boolean;
  allPage?: AllPageMessage | null;
  codetour?: boolean;
};

const BlogLayout: FunctionComponent<BlogLayoutProps> = ({
  children,
  blogPosts,
  newsletterPopup,
  allPage,
  codetour,
}) => {
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollY, setScrollY] = useState(0);
  const [shownPopup, setShownPopup] = useState(false);

  useEffect(() => {
    if (!newsletterPopup) return () => {};
    const handleScroll = (): void => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [newsletterPopup]);

  useEffect(() => {
    if (!newsletterPopup) return;
    const scrollPerc = scrollY / document.body.scrollHeight;
    if (scrollPerc >= 0.6 && !shownPopup) {
      setShownPopup(true);
      onOpen();
    }
  }, [scrollY, onOpen, shownPopup, newsletterPopup]);

  return (
    <BlogPostsProvider blogPosts={blogPosts}>
      <AllPageNotice message={allPage?.message} except={allPage?.except} />
      <BlogLayoutMobileNav isCodetour={codetour} />
      <BlogLayoutSidebar className={codetour ? 'codetour' : ''} />

      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent background="#ECFDF9">
            <ModalCloseButton />
            <ModalBody>
              <Image src="/logo.razor.gif" mx="auto" />
              <Heading size="md" my="5">
                Not enough time to keep up-to-date?
              </Heading>
              Save yourself hours - our once a month round-up will summarize the best articles
              we&apos;ve been reading, products we&apos;ve found, and other inspirational sources
              that are helping us to build high trust software & systems.
              <iframe
                src="https://cdn.forms-content.sg-form.com/c0e4f080-70c9-11ee-8f0b-1239171df302"
                title="The Razor - signup"
                width="100%"
                height="400px"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>

      <Flex
        w="full"
        direction="column"
        pl={{
          base: 'none',
          lg: codetour ? 'none' : theme.sizes.container.sidebar,
          huge: theme.sizes.container.sidebar,
        }}
      >
        <Box w="full" maxW={!codetour ? 'container.blogBodyMax' : ''} mx="auto">
          <Box as="main" w="full" h="full" mx="auto" px={{ base: 5, md: 4, '1.5xl': 12 }}>
            {children}
          </Box>

          <LayoutFooter mt={24} px={10} />
        </Box>
      </Flex>
    </BlogPostsProvider>
  );
};

export default BlogLayout;
