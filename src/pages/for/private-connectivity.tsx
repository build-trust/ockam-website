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
import {
  Description,
  FlexContainer,
  StackContainer,
  SubTitle,
  Title,
  WhiteContainer,
} from '@views/for/common/WhiteContainer';

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
            <Button variant="primary" h="3.5rem" w="12.5rem">
              Get started
            </Button>
            <Button h="3.5rem" w="12.5rem">
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
        <FlexContainer>
          <TextContainer>
            <Box>
              <Title>App-to-app trust</Title>
              <SubTitle>End-to-end guarantees over any multi-top, multi-protocol topology</SubTitle>
            </Box>
            <Description>
              Meeting modern data control expectations requires{' '}
              <Box as="span" color="brand.500" fontWeight="700">
                guarantees
              </Box>{' '}
              that the intended applications are exclusively the apps that can connect to your
              systems. Ockam moves trust to the application layer by building a mutually
              authenticated and encrypted{' '}
              <Box as="span" color="brand.500" fontWeight="700">
                communication
              </Box>{' '}
              channel between those systems.
            </Description>
          </TextContainer>
          <Box
            as={Image}
            mx="auto"
            src={heroImageSrc}
            alt="Secure connection illustration"
            width="max-content"
          />
        </FlexContainer>

        <FlexContainer>
          <TextContainer>
            <Box>
              <Title>No more shared secret keys</Title>
              <SubTitle>Traditional attempts at restricting key access to specific apps</SubTitle>
            </Box>
            <Description>
              Sharing secret keys across many apps and services increases the likelihood of secret
              keys leaking, in addition to eroding any guarantees that only intended apps can{' '}
              <Box as="span" color="brand.500" fontWeight="700">
                access
              </Box>
              sensitive data. Teams then layer in additional credential management approaches,
              network-level controls, and various other security approaches in an attempt to have a
              somewhat reliable assumption that only the intended app(s) were able to use the shared
              secret{' '}
              <Box as="span" color="brand.500" fontWeight="700">
                keys
              </Box>
              .
              <br />
              <br />
              With Ockam, each app generates it&apos;s own{' '}
              <Box as="span" color="brand.500" fontWeight="700">
                unique
              </Box>{' '}
              cryptographically provable identity and encryption keys, and uses those keys to
              establish trusted secure channels directly with other authorized apps as required.{' '}
            </Description>
          </TextContainer>
          <Box
            as={Image}
            mx="auto"
            src={heroImageSrc}
            alt="Secure connection illustration"
            width="max-content"
          />
        </FlexContainer>
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
