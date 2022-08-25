import { ReactElement, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

import githubApi from '@api/githubApi';
import cratesApi from '@api/cratesApi';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import MainLayout from '@layouts/MainLayout';
import {
  Hero,
  Solution,
  GetStarted,
  Tools,
  Infrastructure,
  Features,
  Cases,
  Packages,
  Stats,
} from '@views/homepage';
import CONFIG from '@config';

type HomePageProps = {
  stars?: number;
  contributors?: number;
  downloads?: number;
};

export async function getStaticProps(): Promise<{ props: HomePageProps; revalidate: number }> {
  try {
    const { data: repoContentsData } = await githubApi.reposService.getRepoContents(
      'ockam-contributors',
      '/CONTRIBUTORS.csv'
    );

    const { data: repoData } = await githubApi.reposService.getRepo('ockam');

    const responses = await cratesApi.cratesService.getProjects(CONFIG.crates.projectsNames);
    const downloadsSum = responses
      .map((resp) => resp.data.crate.downloads)
      .reduce((partialSum, count) => partialSum + count, 0);

    return {
      props: {
        stars: repoData?.stargazers_count,
        contributors:
          (Buffer.from(repoContentsData?.content, 'base64')
            .toString()
            .split(/\r\n|\r|\n/).length || 2) - 2, // minus column names first row and last empty row
        downloads: downloadsSum,
      },
      revalidate: 120,
    };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    return { props: {}, revalidate: 120 };
  }
}

const HomePage: NextPageWithLayout<HomePageProps> = ({ stars, contributors, downloads }) => (
  <Box pt={{ base: 10, lg: 20 }}>
    <Hero />
    <Solution />
    <GetStarted />
    <Tools />
    <Infrastructure />
    <Features />
    <Cases />
    <Packages />
    {stars && contributors && downloads && (
      <Stats stars={stars} contributors={contributors} downloads={downloads} />
    )}
  </Box>
);

HomePage.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

export default HomePage;
