import React, { ReactElement, ReactNode } from 'react';
import { Container } from '@chakra-ui/react';

import MainLayout from '@layouts/MainLayout';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import OurLogoSection from '@root/views/style-guide/OurLogoSection';
import OurColorsSection from '@root/views/style-guide/OurColorsSection';
import TypographySection from '@root/views/style-guide/TypographySection';
import TeamPhotosSection from '@root/views/style-guide/TeamPhotosSection';
import GraphicsSection from '@root/views/style-guide/GraphicsSection';
import IconSection from '@root/views/style-guide/IconsSection';
import { logos } from '@root/consts/styleGuide/logos';
import colors from '@root/consts/styleGuide/colors';
import photoSamples from '@root/consts/styleGuide/photoSamples';
import graphics from '@root/consts/styleGuide/graphics';
import typographyData from '@root/consts/styleGuide/typographyData';
import { IMdxContent } from '@root/typings/StyleGuide';
import MiscellaneousSection from '@root/views/style-guide/MiscellaneousSection';
import { getStyleGuideSections } from '@root/api/mdxApi';
import { getBase64Icons } from '@root/api/iconsApi';

type StyleGuideProps = {
  styleGuideSections: IMdxContent[];
  base64Icons: string[];
};

const StyleGuide: NextPageWithLayout<StyleGuideProps> = ({ styleGuideSections, base64Icons }) => (
  <Container
  
  alignItems= "center"
    variant="section"
    pb={{ base: 10, lg: 20 }}
    mt={{ base: 0, lg: 20 }}
  >
    <OurLogoSection logos={logos} />
    <OurColorsSection colors={colors} />
    <TeamPhotosSection samples={photoSamples} />
    <GraphicsSection graphics={graphics} />
    <TypographySection typography={typographyData} />
    <IconSection icons={base64Icons} />
    <MiscellaneousSection styleGuideSections={styleGuideSections} />
  </Container>
);

StyleGuide.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

export default StyleGuide;

export const getStaticProps = async (): Promise<{
  props: { styleGuideSections: IMdxContent[], base64Icons: string[] };
}> => {
  const styleGuideSections = await getStyleGuideSections();
  const base64Icons = await getBase64Icons();
  return {
    props: {
      styleGuideSections,
      base64Icons,
    },
  };
};
