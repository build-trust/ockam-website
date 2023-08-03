import { Box, Flex, Heading, useTheme } from '@chakra-ui/react';
import { FunctionComponent, useMemo } from 'react';

import PlaceholderBlogPostBlue from '@assets/images/placeholders/placeholder-blog-post-blue.png';
import PlaceholderBlogPostGreen from '@assets/images/placeholders/placeholder-blog-post-green.png';
import PlaceholderBlogPostSilver from '@assets/images/placeholders/placeholder-blog-post-silver.png';
import AuthorSignature from '@components/AuthorSignature';
import ImageWithPlaceholder from '@components/ImageWithPlaceholder';
import { BlogPostData } from '@typings/BlogPost';
import getRandomImage from '@utils/getRandomImage';

import CategoryBadge from './components/CategoryBadge';

type BlogPostHeaderProps = {
  post: BlogPostData;
};

const BlogPostHeader: FunctionComponent<BlogPostHeaderProps> = ({ post }) => {
  const { title, category, image, author, authorAvatar, authorPosition, date } = post;
  const { breakpoints } = useTheme();

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
          sizes={`(max-width: ${breakpoints.sm}) 100vw,
          (max-width: ${breakpoints.lg}) 66vw,
          (max-width: ${breakpoints['1.5xl']}) 50vw,
          50vw`}
          layout="intrinsic"
          objectFit="contain"
          placeholderImg={placeholderImg}
          alt={title}
        />
      </Box>
    </Flex>
  );
};
export default BlogPostHeader;
