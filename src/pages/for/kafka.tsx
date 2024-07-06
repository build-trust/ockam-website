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
import heroImageSrc from '@views/for/kafka/assets/hero-image.png';
import FEATURES from '@views/for/kafka/consts/features';
import { CONTACT_PAGE_PATH, SIGNUP_PATH } from '@consts/paths';

const Kafka = (): ReactElement => (
  <Box>
    <HeroContainer>
      <HeroContentWrapper>
        <TextContainer>
          <HeroHeading>
            Encrypt Kafka <br />
            <Box as="span" color="brand.500">
              the right
            </Box>{' '}
            way
          </HeroHeading>
          <HeroDescription>
            Don't settle for naive end-to-end encryption when you need app-to-app trust
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
          width="max-content"
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
            <Box as={Image} mx="auto" src={imageSrc} alt={alt} width="max-content" />
          </FlexContainer>
        ))}
      </StackContainer>
    </WhiteContainer>
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

Kafka.getLayout = (page: ReactElement, pageProps?: PrivateConnectivityProps): ReactNode => (
  <DarkLayout
    except={pageProps?.allPageMessage?.except}
    message={pageProps?.allPageMessage?.message}
  >
    {page}
  </DarkLayout>
);

export default Kafka;
