import { Box, BoxProps, Icon, Link } from '@chakra-ui/react';
import { useRef } from 'react';

import GitHubColorIcon from '@assets/icons/github-color.svg';
import Card from '@components/Card';
import TableOfContent from '@components/TableOfContent';
import useSetFullMaxHeightReducedByTopOffset from '@hooks/useSetFullMaxHeightReducedByTopOffset';

type BlogPostRightNavigationProps = {
  slug?: string;
  tableOfContentSource: HTMLDivElement | null;
} & BoxProps;

const BlogPostRightNavigation = ({
  slug,
  tableOfContentSource,
  ...restProps
}: BlogPostRightNavigationProps): JSX.Element => {
  const stickySidebarRef = useRef<HTMLDivElement>();
  useSetFullMaxHeightReducedByTopOffset(stickySidebarRef);

  return (
    <Box
      display={{ base: 'none', '1.5xl': 'block' }}
      position="absolute"
      right={0}
      top={0}
      h="full"
      {...restProps}
    >
      <Card
        /* @ts-ignore */
        ref={stickySidebarRef}
        w="full"
        overflow="scroll"
        position="sticky"
        top={5}
        right={0}
        px={2}
        py={4}
      >
        <Link
          isExternal
          href={`https://github.com/build-trust/ockam-website/blob/production/src/content/blog/${slug}.mdx`}
          py={3}
          px={2}
          fontWeight="medium"
          borderRadius="md"
          display="flex"
          alignItems="center"
          _hover={{ bgColor: 'avocado.50' }}
        >
          <Icon as={GitHubColorIcon} w={6} h={6} mr={4} />
          Edit on Github
        </Link>

        <TableOfContent tableOfContentSource={tableOfContentSource} px={2} pt={6} />
      </Card>
    </Box>
  );
};

export default BlogPostRightNavigation;
