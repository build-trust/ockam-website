import React, { ReactElement, ReactNode } from 'react';
import { Box, Button, Stack } from '@chakra-ui/react';
import Image from 'next/image';

import allPageMessageProps, { AllPageMessage } from '@utils/appPageMessage';
import DarkLayout from '@layouts/DarkLayout';
import { HeroContainer, HeroContentWrapper } from '@views/for/common/HeroContainer';
import { HeroDescription, HeroHeading } from '@views/for/common/HeroText';

const PrivateConnectivity = (): ReactElement => (
  <HeroContainer>
    <HeroContentWrapper>
      <Stack gap="1.5rem">
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
        <Stack direction="row" spacing="1.5rem">
          <Button variant="primary" h="3.5rem" w="12.5rem">
            Get started
          </Button>
          <Button h="3.5rem" w="12.5rem">
            Contact us
          </Button>
        </Stack>
      </Stack>
      <Box flexShrink={0}>
        <Image
          src="" // Placeholder image, replace with actual path
          alt="Secure connection illustration"
          width={500} // Adjust as needed
          height={300} // Adjust as needed
        />
      </Box>
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
