import { FunctionComponent, useMemo } from 'react';
import Link from 'next/link';
import {
  Box,
  Link as ChakraLink,
  Flex,
  GridItem,
  Heading,
  Text,
  GridItemProps,
} from '@chakra-ui/react';

import { BlogPost } from '@typings/BlogPost';
import ImageWithPlaceholder from '@components/ImageWithPlaceholder';
import PlaceholderBlogPostGreen from '@assets/images/placeholders/placeholder-blog-post-green.png';
import PlaceholderBlogPostBlue from '@assets/images/placeholders/placeholder-blog-post-blue.png';
import PlaceholderBlogPostSilver from '@assets/images/placeholders/placeholder-blog-post-silver.png';
import getRandomImage from '@utils/getRandomImage';
import { BLOG_PATH } from '@consts/paths';

import AuthorInfo from './AuthorInfo';
import CategoryBadge from './CategoryBadge';

type BlogPostCardProps = {
  post: BlogPost;
} & GridItemProps;

const BlogPostCard: FunctionComponent<BlogPostCardProps> = ({ post, ...restProps }) => {
  const {
    data: { title, description, image, category },
    filePath,
  } = post;

  const placeholderImg = useMemo(
    () =>
      getRandomImage([
        PlaceholderBlogPostGreen,
        PlaceholderBlogPostBlue,
        PlaceholderBlogPostSilver,
      ]),
    []
  );

  return (
    <GridItem as="article" {...restProps}>
      <Link
        as={`${BLOG_PATH}/${filePath.replace(/\.mdx?$/, '')}`}
        href={`${BLOG_PATH}/[slug]`}
        passHref
      >
        <ChakraLink
          height="20px"
          _hover={{
            cursor: 'pointer',
            h4: {
              textDecoration: 'underline',
            },
          }}
        >
          <Flex width={{ base: 335, '1.5xl': 312 }} height="full" direction="column">
            <Box width="full" height={{ base: 207, '1.5xl': 194 }} pos="relative">
              <CategoryBadge isOnTop>{category}</CategoryBadge>
              <ImageWithPlaceholder
                src={image}
                layout="fill"
                placeholderImg={placeholderImg}
                alt={title}
              />
            </Box>
            <Heading as="h4" fontSize="xl" mt={6} mb={5} noOfLines={3}>
              {title}
            </Heading>
            <Text mb={6} noOfLines={5}>
              {description}
            </Text>

            <AuthorInfo postInfo={post.data} />
          </Flex>
        </ChakraLink>
      </Link>
    </GridItem>
  );
};

export default BlogPostCard;
