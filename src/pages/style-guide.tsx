import React, { ReactElement, ReactNode } from 'react';
import { Container } from '@chakra-ui/react';

import MainLayout from '@layouts/MainLayout';
import { NextPageWithLayout } from '@typings/NextPageWithLayout';
import OurLogoSection from '@root/views/style-guide/OurLogoSection';
import { logos } from '@root/consts/logos';

const StyleGuide: NextPageWithLayout = () => (
  <Container
    variant="section"
    alignItems="flex-start"
    pb={{ base: 10, lg: 20 }}
    mt={{ base: 0, lg: 20}}
  >
    <OurLogoSection logos={logos} />
  </Container>
);

StyleGuide.getLayout = (page: ReactElement): ReactNode => <MainLayout>{page}</MainLayout>;

export default StyleGuide;
