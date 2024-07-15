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
import { ExcalidrawImage, HeroDescription, HeroHeading } from '@views/for/common/HeroText';
import {
  Description,
  FlexContainer,
  StackContainer,
  SubTitle,
  Title,
  WhiteContainer,
} from '@views/for/common/WhiteContainer';
import FEATURES from '@views/for/kafka/consts/features';
import { CONTACT_PAGE_PATH, SIGNUP_PATH } from '@consts/paths';
import FormSection from '@views/for/common/FormSection';
import ExcalidrawAnimation from '@components/ExcalidrawAnimation';
import heroImage from '@views/for/kafka/assets/hero.svg?url';

const Kafka = (): ReactElement => (
  <Box>
    <HeroContainer backgroundSrc={heroImage.src}>
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
        <ExcalidrawImage src="insecure-kafka" />
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

interface KafkaProps {
  allPageMessage?: AllPageMessage | null;
}
export async function getStaticProps(): Promise<{ props: KafkaProps }> {
  return {
    props: {
      allPageMessage: await allPageMessageProps,
    },
  };
}

Kafka.getLayout = (page: ReactElement, pageProps?: KafkaProps): ReactNode => (
  <DarkLayout
    except={pageProps?.allPageMessage?.except}
    message={pageProps?.allPageMessage?.message}
  >
    {page}
  </DarkLayout>
);

export default Kafka;
