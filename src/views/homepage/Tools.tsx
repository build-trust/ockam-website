import { FunctionComponent } from 'react';
import { Container, Heading } from '@chakra-ui/react';
import Image from 'next/image';

import CodeImage from '@assets/images/tools.png';

const Tools: FunctionComponent = () => (
  <Container variant="section" pt={{ base: 16, lg: 24 }} pb={{ base: 20, lg: 30 }}>
    <Heading as="h2" size="h2" bgColor="white" mb={{ base: 12, lg: 16 }}>
      Simple Tools
    </Heading>

    <Image src={CodeImage} width={1181 / 2} height={896 / 2} placeholder="blur" />
  </Container>
);

export default Tools;
