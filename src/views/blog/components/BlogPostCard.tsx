import { FunctionComponent, useMemo } from 'react';
import Link from 'next/link';
import { Box, Link as ChakraLink, Flex, Heading, Text, GridItemProps } from '@chakra-ui/react';

import { BlogPost } from '@typings/BlogPost';
import ImageWithPlaceholder from '@components/ImageWithPlaceholder';
import PlaceholderBlogPostGreen from '@assets/images/placeholders/placeholder-blog-post-green.png';
import PlaceholderBlogPostBlue from '@assets/images/placeholders/placeholder-blog-post-blue.png';
import PlaceholderBlogPostSilver from '@assets/images/placeholders/placeholder-blog-post-silver.png';
import getRandomImage from '@utils/getRandomImage';
import { BLOG_PATH } from '@consts/paths';
import AuthorSignature from '@components/AuthorSignature';

import CategoryBadge from './CategoryBadge';

type BlogPostCardProps = {
  post: BlogPost;
} & GridItemProps;

const BlogPostCard: FunctionComponent<BlogPostCardProps> = ({ post }) => {
  const {
    data: { title, description, image, category, author, authorAvatar, authorPosition, date },
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
        <Flex width={{ base: 335, lg: 312 }} height="full" direction="column">
          <Box width="full" height={{ base: 207, lg: 194 }} pos="relative" mb={6}>
            <CategoryBadge isOnTop>{category}</CategoryBadge>

            <ImageWithPlaceholder
              src={image}
              layout="fill"
              placeholderImg={placeholderImg}
              alt={title}
            />
          </Box>

          <Heading as="h4" fontSize="xl" mb={5} noOfLines={2} maxW="90%">
            {title}
          </Heading>

          <Text mb={6} noOfLines={3}>
            {description}
          </Text>

          <AuthorSignature
            author={author}
            authorAvatar={authorAvatar}
            authorPosition={authorPosition}
            date={date}
          />
        </Flex>
      </ChakraLink>
    </Link>
  );
};

export default BlogPostCard;
