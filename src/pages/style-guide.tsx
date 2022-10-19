import React, { ReactElement, ReactNode } from 'react';
import { Container } from '@chakra-ui/react'

import MainLayout from '@layouts/MainLayout';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import { getStyleGuideSections } from '@api/mdxApi';
import MiscellaneousSection from '@views/style-guide/MiscellaneousSection';
import { IMdxContent } from '@root/typings/StyleGuide';

type StyleGuideProps = {
  styleGuideSections: IMdxContent[],
}


const StyleGuide: NextPageWithLayout<StyleGuideProps> = ({ styleGuideSections }) => (
    <Container variant="section" alignItems="flex-start"  pb={{ base: 10, lg: 20 }}  mt={10}>
      <MiscellaneousSection styleGuideSections={styleGuideSections} />
    </Container>
  );

StyleGuide.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;



export const getStaticProps = async (): Promise<{ props: { styleGuideSections: IMdxContent[] } }> => {
  const styleGuideSections = await getStyleGuideSections();
  return {
    props: {
      styleGuideSections
    },
  };
};

export default StyleGuide;
