import React, { ReactElement, ReactNode } from 'react';
import { Box, Button } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';

import allPageMessageProps, { AllPageMessage } from '@utils/appPageMessage';
import DarkLayout from '@layouts/DarkLayout';
import {
  ButtonContainer,
  HeroContainer,
  HeroContentWrapper,
  TextContainer,
} from '@views/for/common/HeroContainer';
import { HeroDescription, HeroHeading } from '@views/for/common/HeroText';
import {
  Description,
  FlexContainer,
  StackContainer,
  SubTitle,
  Title,
  WhiteContainer,
} from '@views/for/common/WhiteContainer';
import FEATURES from '@views/for/private-connectivity/consts/features';
import { CONTACT_PAGE_PATH, SIGNUP_PATH } from '@consts/paths';
import FormSection from '@views/for/common/FormSection';
import ExcalidrawAnimation from '@components/ExcalidrawAnimation';

const PrivateConnectivity = (): ReactElement => (
  <Box>
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
            <Button as={NextLink} href={SIGNUP_PATH} variant="primary" h="3.5rem" w="12.5rem">
              Get started
            </Button>
            <Button as={NextLink} href={CONTACT_PAGE_PATH} variant="ghost" h="3.5rem" w="12.5rem">
              Contact us
            </Button>
          </ButtonContainer>
        </TextContainer>
        <ExcalidrawAnimation src="private-databases" mx="auto" animate aspect="width" flex={1} />
      </HeroContentWrapper>
    </HeroContainer>
    <WhiteContainer>
      <StackContainer>
        {FEATURES.map(({ title, subTitle, description, animationSrc, alt, imageSrc }) => (
          <FlexContainer key={title}>
            <TextContainer>
              <Box>
                <Title>{title}</Title>
                {subTitle && <SubTitle>{subTitle}</SubTitle>}
              </Box>
              <Description>{description}</Description>
            </TextContainer>
            {imageSrc && (
              <Box
                as={Image}
                mx="auto"
                src={imageSrc}
                alt={alt}
                maxWidth={{ base: '25rem', lg: 'initial' }}
                width={{ base: '100%', lg: '50%' }}
              />
            )}
            {animationSrc && (
              <ExcalidrawAnimation
                src={animationSrc}
                animate
                aspect="width"
                mx="auto"
                flex={1}
                maxWidth={{ base: '25rem', lg: 'initial' }}
                width={{ base: '100%', lg: '50%' }}
              />
            )}
          </FlexContainer>
        ))}
      </StackContainer>
    </WhiteContainer>
    <FormSection />
  </Box>
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
