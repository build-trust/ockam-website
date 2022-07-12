import { FunctionComponent } from 'react';
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

import CategoryBadge from './CategoryBadge';
import AuthorInfo from './AuthorInfo';

type FeaturedBlogPostProps = {
  post: BlogPost;
} & GridItemProps;

const FeaturedBlogPost: FunctionComponent<FeaturedBlogPostProps> = ({ post, ...restProps }) => {
  const {
    data: { title, description, image, category },
    filePath,
  } = post;

  return (
    <GridItem as="article" colSpan={3} {...restProps}>
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
                placeholderImg={getRandomImage([
                  PlaceholderBlogPostGreen,
                  PlaceholderBlogPostBlue,
                  PlaceholderBlogPostSilver,
                ])}
                alt={title}
              />
            </Box>
            <Flex direction="column" w="sm" minH="full" p={0} ml={10}>
              <CategoryBadge>{category}</CategoryBadge>
              <Heading as="h3" fontSize="2xl" mt={4} mb={6} noOfLines={3}>
                {title}
              </Heading>
              <Text noOfLines={4}>{description}</Text>
              <AuthorInfo mt="auto" postInfo={post.data} />
            </Flex>
          </Flex>
        </ChakraLink>
      </Link>
    </GridItem>
  );
};

export default FeaturedBlogPost;
