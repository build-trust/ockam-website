import { ReactElement, ReactNode } from 'react';
import { Box, Heading, List, ListItem, Link, Text } from '@chakra-ui/react';

import { getAllRazors } from '@api/mdxApi';
import SEOHead from '@components/SEOHead';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import RazorLayout from '@layouts/RazorLayout';

type Metadata = {
  title?: string;
  description?: string;
};

type Post = {
  // eslint-disable-next-line
  content?: any;
  data: Metadata;
  filePath: string;
};
type PageProps = { previousEpisodes: Post[] };

const TheRazorSignupPage: NextPageWithLayout<PageProps> = ({
  previousEpisodes,
}: {
  previousEpisodes: Post[];
}) => (
  <Box pt={{ base: 10, lg: 20 }} background="#ECFDF9" mx="auto">
    <SEOHead
      subTitle="The Razor - newsletter signup"
      description="The latest & most interesting news about secure-by-design systems, developer experience, and related tooling"
      ogImageSrc="/the-razor.gif"
    />
    <Box maxW="4xl" mx="auto" pb={8} textAlign="center">
      <Text color="brand.900">
        <strong>Sign up. Be inspired. Build trust.</strong>&nbsp; Save hours of your time, with our
        regular roundup of the most interesting things we&apos;ve been reading each months.
        We&apos;ll save your inbox too - it&apos;s only one email per month!{' '}
      </Text>
    </Box>
    <iframe
      id="why"
      title="The Razor - signup"
      width="100%"
      height="350px"
      src="https://cdn.forms-content.sg-form.com/c0e4f080-70c9-11ee-8f0b-1239171df302"
    />
    <Box maxW="4xl" mx="auto" pb={8} textAlign="center">
      <Heading mb={2}>Previous episodes</Heading>
      <List>
        {previousEpisodes.map((data) => (
          <ListItem>
            {data.data.title} &mdash;{' '}
            <Link
              href={`/the-razor/${data.filePath.replace(/\.mdx$/, '')}`}
              style={{ textDecoration: 'underline' }}
              _hover={{ color: 'brand.400' }}
            >
              {data.data.description}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  </Box>
);

TheRazorSignupPage.getLayout = (page: ReactElement): ReactNode => <RazorLayout>{page}</RazorLayout>;

export function getStaticProps(): { props: PageProps } {
  const previousEpisodes = getAllRazors(true);
  return { props: { previousEpisodes } };
}

export default TheRazorSignupPage;
