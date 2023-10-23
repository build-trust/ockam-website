import { ReactElement, ReactNode } from 'react';
import { Box, Heading, List, ListItem, Link } from '@chakra-ui/react';

import { getAllRazors } from '@api/mdxApi';
import SEOHead from '@components/SEOHead';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { Hero } from '@views/homepage';
import LandingLayout from '@layouts/LandingLayout';

type Post = {
  // eslint-disable-next-line
  content?: any;
  // eslint-disable-next-line
  data: any;
  filePath: string;
};
type PageProps = { previousEpisodes: Post[] };

const TheRazorSignupPage: NextPageWithLayout<PageProps> = ({ previousEpisodes }) => (
  <Box pt={{ base: 10, lg: 20 }}>
    <SEOHead
      subTitle="The Razor - newsletter signup"
      description="The latest & most interesting news about secure-by-design systems, developer experience, and related tooling"
      ogImageSrc="/the-razor.gif"
    />
    <Hero
      text="The Razor"
      subtext="The latest & most interesting news about secure-by-design systems, developer experience, and related tooling"
      landingPage
    />

    <iframe
      id="why"
      title="The Razor - signup"
      width="100%"
      height="500px"
      src="https://cdn.forms-content.sg-form.com/d0d5f678-5032-11ee-81f9-026e7845c92d"
    />

    <Box maxW="4xl" mx="auto" mb={8} align="center">
      <Heading mb={2}>Previous episodes</Heading>
      <List>
        {previousEpisodes.map((data): ReactNode[] => (
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

TheRazorSignupPage.getLayout = (page: ReactElement): ReactNode => (
  <LandingLayout>{page}</LandingLayout>
);

export function getStaticProps(): { props: PageProps } {
  const previousEpisodes = getAllRazors(true);
  return { props: { previousEpisodes } };
}

export default TheRazorSignupPage;
