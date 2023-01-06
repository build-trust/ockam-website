/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable array-callback-return */
import { FC, useMemo } from 'react';
import { Flex, Text, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { BLOG_PATH } from '@consts/paths';
import NextIcon from '@assets/icons/next-icon.svg';
import PrevIcon from '@assets/icons/previous-icon.svg';
import { useBlogPostsContext } from '@root/contextProviders/BlogPostsProvider';
import { BlogPost } from '@root/typings/BlogPost';

const BlogsPagination: FC = () => {
  const { groupedBlogPostsByCategory } = useBlogPostsContext();

  const router = useRouter();

  // creating a sorted list of linear blogs 
  const sortedLinearGroupedBlogs = useMemo(() => {
    const groupedBlogs: BlogPost[] = [];
    Object.entries(groupedBlogPostsByCategory).map((groupedBlogPost) => {
      const groupedBlog = groupedBlogPost[1];
      groupedBlog.forEach((blog) => groupedBlogs.push(blog));
    });
    return groupedBlogs;
  }, [groupedBlogPostsByCategory]);

  // find index w.r.t slug
  const currentBlogIndex = useMemo(
    () => sortedLinearGroupedBlogs.findIndex((blogPost) => blogPost.slug === router.query.slug),
    [router.query.slug, sortedLinearGroupedBlogs]
  );

  const isNotLastPost = currentBlogIndex !== sortedLinearGroupedBlogs.length - 1;

  /*
    @param type // next and previous
    based on the type it redirects to next and previous blog
  */
  const handleNextPreviousBlog = (type: string) => {
    // handling next blog
    if (type === 'next')
      router.push(`${BLOG_PATH}/${sortedLinearGroupedBlogs[currentBlogIndex + 1].slug}`);

    // handling previous blog
    if (type === 'previous')
      router.push(`${BLOG_PATH}/${sortedLinearGroupedBlogs[currentBlogIndex - 1].slug}`);
  };

  return (
    <Flex fontFamily='Inter' justifyContent="space-between" gap={8} flexDirection={{ base: 'column', sm: 'row' }}>
      <Flex
        onClick={() => handleNextPreviousBlog('previous')}
        justifyContent="center"
        flexDirection="column"
        cursor="pointer"
      >
        {currentBlogIndex !== 0 && (
          <Flex gap={4} alignItems='center'>
            <Icon as={PrevIcon} w={8} h={8} />
            <Flex flexDirection="column">
              <Text fontSize="14px" color="black" fontWeight='normal'>
                Previous Article
              </Text>
              <Text fontSize="18px" noOfLines={1} width="200px" fontWeight="semibold" color="black">
                {sortedLinearGroupedBlogs[currentBlogIndex - 1]?.data?.title}
              </Text>
            </Flex>
          </Flex>
        )}
      </Flex>

      {isNotLastPost && (
        <Flex justifyContent="flex-end" gap={7} cursor="pointer">
          <Flex
            onClick={() => handleNextPreviousBlog('next')}
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Flex flexDirection="row" gap={4} alignItems="center">
              <Flex flexDirection="column" alignItems="flex-end">
                <Text fontSize="14px" fontWeight='normal' color="black">
                  Next Article
                </Text>
                <Text maxWidth="200px" fontSize="18px" fontWeight="semibold" noOfLines={1} color="black">
                  {sortedLinearGroupedBlogs[currentBlogIndex + 1]?.data?.title}
                </Text>
              </Flex>
              <Icon as={NextIcon} w={8} h={8} />
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default BlogsPagination;
