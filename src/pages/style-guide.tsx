import React, { ReactElement, ReactNode } from 'react';
import { Container } from '@chakra-ui/react';

import MainLayout from '@layouts/MainLayout';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import OurLogoSection from '@root/views/style-guide/OurLogoSection';
import { logos } from '@root/consts/logos';
import { IMdxContent } from '@root/typings/StyleGuide';
import MiscellaneousSection from '@root/views/style-guide/MiscellaneousSection';
import { getStyleGuideSections } from '@root/api/mdxApi';

type StyleGuideProps = {
  styleGuideSections: IMdxContent[],
}

const StyleGuide: NextPageWithLayout<StyleGuideProps> = ({ styleGuideSections }) => (
  <Container
    variant="section"
    alignItems="flex-start"
    pb={{ base: 10, lg: 20 }}
    mt={{ base: 0, lg: 20}}
  >
    <OurLogoSection logos={logos} />
    <MiscellaneousSection styleGuideSections={styleGuideSections} />
  </Container>
);

StyleGuide.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

export default StyleGuide;

export const getStaticProps = async (): Promise<{ props: { styleGuideSections: IMdxContent[] } }> => {
  const styleGuideSections = await getStyleGuideSections();
  return {
    props: {
      styleGuideSections
    },
  };
};