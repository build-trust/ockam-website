import React, { ReactElement, ReactNode } from 'react';
import { Box, Button } from '@chakra-ui/react';
import Image from 'next/image';

import allPageMessageProps, { AllPageMessage } from '@utils/appPageMessage';
import DarkLayout from '@layouts/DarkLayout';
import {
  ButtonContainer,
  HeroContainer,
  HeroContentWrapper,
  TextContainer,
} from '@views/for/common/HeroContainer';
import { HeroDescription, HeroHeading } from '@views/for/common/HeroText';
import heroImageSrc from '@views/for/private-connectivity/assets/hero-image.png';

const PrivateConnectivity = (): ReactElement => (
  <HeroContainer>
    <HeroContentWrapper>
      <TextContainer>
        <HeroHeading>
          Keep private <br />
          <Box as="span" color="brand.500">
            data
          </Box>{' '}
          private
        </HeroHeading>
        <HeroDescription>
          Never expose a private database to the public internet ever again! Manage access to any
          system with application-level controls.
        </HeroDescription>
        <ButtonContainer>
          <Button variant="primary" h="3.5rem" w="12.5rem">
            Get started
          </Button>
          <Button h="3.5rem" w="12.5rem">
            Contact us
          </Button>
        </ButtonContainer>
      </TextContainer>
      <Box as={Image} mx="auto" src={heroImageSrc} alt="Secure connection illustration" />
    </HeroContentWrapper>
  </HeroContainer>
);

interface PrivateConnectivityProps {
  allPageMessage?: AllPageMessage | null;
}
export async function getStaticProps(): Promise<{ props: PrivateConnectivityProps }> {
  return {
    props: {
      allPageMessage: await allPageMessageProps,
    },
  };
}

PrivateConnectivity.getLayout = (
  page: ReactElement,
  pageProps?: PrivateConnectivityProps,
): ReactNode => (
  <DarkLayout
    except={pageProps?.allPageMessage?.except}
    message={pageProps?.allPageMessage?.message}
  >
    {page}
  </DarkLayout>
);

export default PrivateConnectivity;
