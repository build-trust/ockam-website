import { FunctionComponent, useMemo } from 'react';
import Link from 'next/link';
import { Box, Link as ChakraLink, Flex, Heading, Text } from '@chakra-ui/react';

import { BlogPost } from '@typings/BlogPost';
import ImageWithPlaceholder from '@components/ImageWithPlaceholder';
import PlaceholderBlogPostGreen from '@assets/images/placeholders/placeholder-blog-post-green.png';
import PlaceholderBlogPostBlue from '@assets/images/placeholders/placeholder-blog-post-blue.png';
import PlaceholderBlogPostSilver from '@assets/images/placeholders/placeholder-blog-post-silver.png';
import getRandomImage from '@utils/getRandomImage';
import { BLOG_PATH } from '@consts/paths';
import AuthorSignature from '@components/AuthorSignature';

import CategoryBadge from './CategoryBadge';

type FeaturedBlogPostProps = {
  post: BlogPost;
};

const FeaturedBlogPost: FunctionComponent<FeaturedBlogPostProps> = ({ post }) => {
  const placeholderImg = useMemo(
    () =>
      getRandomImage([
        PlaceholderBlogPostGreen,
        PlaceholderBlogPostBlue,
        PlaceholderBlogPostSilver,
      ]),
    []
  );

  if (!post) return null;

  const {
    data: { title, description, image, category, author, authorAvatar, authorPosition, date },
    filePath,
  } = post;

  return (
    <Link
      as={`${BLOG_PATH}/${filePath.replace(/\.mdx?$/, '')}`}
      href={`${BLOG_PATH}/[slug]`}
      passHref
    >
      <ChakraLink
        _hover={{
          cursor: 'pointer',
          h3: {
            textDecoration: 'underline',
          },
        }}
      >
        <Flex>
          <Box width={600} height={331}>
            <ImageWithPlaceholder
              src={image}
              width={600}
              height={331}
              layout="fixed"
              placeholderImg={placeholderImg}
              alt={title}
              priority
            />
          </Box>

          <Flex direction="column" w="sm" h="full" p={0} ml={10} my="auto">
            <CategoryBadge>{category}</CategoryBadge>

            <Heading as="h3" fontSize="2xl" mt={4} mb={6} noOfLines={3}>
              {title}
            </Heading>

            <Text mb={6} noOfLines={4}>
              {description}
            </Text>

            <AuthorSignature
              author={author}
              authorAvatar={authorAvatar}
              authorPosition={authorPosition}
              date={date}
            />
          </Flex>
        </Flex>
      </ChakraLink>
    </Link>
  );
};

export default FeaturedBlogPost;
