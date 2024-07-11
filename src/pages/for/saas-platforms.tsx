/* eslint-disable react/no-unescaped-entities */
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
import heroImageSrc from '@views/for/saas-platforms/assets/hero-image.png';
import FEATURES from '@views/for/saas-platforms/consts/features';
import { CONTACT_PAGE_PATH, SIGNUP_PATH } from '@consts/paths';
import FormSection from '@views/for/common/FormSection';

const SaaSPlatforms = (): ReactElement => (
  <Box>
    <HeroContainer>
      <HeroContentWrapper>
        <TextContainer>
          <HeroHeading>
            Instant time <br />
            to{' '}
            <Box as="span" color="brand.500">
              value
            </Box>
          </HeroHeading>
          <HeroDescription>
            Add instant, private, and secure connections to your enterprise products.{' '}
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
        <Box
          as={Image}
          mx="auto"
          src={heroImageSrc}
          alt="Secure connection illustration"
          maxWidth={{ base: '35rem', lg: 'initial' }}
          width={{ base: '100%', lg: '50%' }}
        />
      </HeroContentWrapper>
    </HeroContainer>
    <WhiteContainer>
      <StackContainer>
        {FEATURES.map(({ title, subTitle, description, alt, imageSrc }) => (
          <FlexContainer>
            <TextContainer>
              <Box>
                <Title>{title}</Title>
                {subTitle && <SubTitle>{subTitle}</SubTitle>}
              </Box>
              <Description>{description}</Description>
            </TextContainer>
            <Box
              as={Image}
              mx="auto"
              src={imageSrc}
              alt={alt}
              maxWidth={{ base: '25rem', lg: 'initial' }}
              width={{ base: '100%', lg: '50%' }}
            />
          </FlexContainer>
        ))}
      </StackContainer>
    </WhiteContainer>
    <FormSection />
  </Box>
);

interface SaaSPlatformsProps {
  allPageMessage?: AllPageMessage | null;
}
export async function getStaticProps(): Promise<{ props: SaaSPlatformsProps }> {
  return {
    props: {
      allPageMessage: await allPageMessageProps,
    },
  };
}

SaaSPlatforms.getLayout = (page: ReactElement, pageProps?: SaaSPlatformsProps): ReactNode => (
  <DarkLayout
    except={pageProps?.allPageMessage?.except}
    message={pageProps?.allPageMessage?.message}
  >
    {page}
  </DarkLayout>
);

export default SaaSPlatforms;
