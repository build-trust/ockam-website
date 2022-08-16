import { FunctionComponent, useMemo } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

import ImageWithPlaceholder from '@components/ImageWithPlaceholder';
import { BlogPostData } from '@typings/BlogPost';
import PlaceholderBlogPostGreen from '@assets/images/placeholders/placeholder-blog-post-green.png';
import PlaceholderBlogPostBlue from '@assets/images/placeholders/placeholder-blog-post-blue.png';
import PlaceholderBlogPostSilver from '@assets/images/placeholders/placeholder-blog-post-silver.png';
import getRandomImage from '@utils/getRandomImage';
import AuthorSignature from '@components/AuthorSignature';

import CategoryBadge from './components/CategoryBadge';

type BlogPostHeaderProps = {
  post: BlogPostData;
};

const BlogPostHeader: FunctionComponent<BlogPostHeaderProps> = ({ post }) => {
  const { title, category, image, author, authorAvatar, authorPosition, date } = post;

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
    <Flex
      mx={{ base: 'auto', '1.5xl': 0 }}
      maxW={{ base: '3xl', '1.5xl': 'full' }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: 'column-reverse', '1.5xl': 'row' }}
    >
      <Box w={{ base: 'full', '1.5xl': 'sm' }} pr={{ '1.5xl': 10 }}>
        <CategoryBadge display={{ base: 'none', '1.5xl': 'block' }}>{category}</CategoryBadge>

        <Heading as="h1" mt={4} mb={8} fontSize={{ base: 'xl', sm: '3xl' }}>
          {title}
        </Heading>

        <AuthorSignature
          withDate
          author={author}
          authorAvatar={authorAvatar}
          authorPosition={authorPosition}
          date={date}
        />
      </Box>

      <Box w={{ base: 'full', '1.5xl': '2xl' }} ml={{ '1.5xl': 'auto' }} pos="relative">
        <CategoryBadge display={{ base: 'block', '1.5xl': 'none' }} isOnTop>
          {category}
        </CategoryBadge>

        <ImageWithPlaceholder
          src={image}
          width={670}
          height={363}
          layout="responsive"
          placeholderImg={placeholderImg}
          alt={title}
        />
      </Box>
    </Flex>
  );
};
export default BlogPostHeader;
