import { FunctionComponent } from 'react';
import { Container, Box, Heading, Flex } from '@chakra-ui/react';
import Image from 'next/image';

import FutureVenturesImage from '@assets/images/investors/future-ventures.png';
import CraftImage from '@assets/images/investors/craft.png';
import OktaImage from '@assets/images/investors/okta.png';
import CoreVenturesGroupImage from '@assets/images/investors/core-ventures-group.png';
import SinewaveVenturesImage from '@assets/images/investors/sinewave-ventures.png';

const INVESTORS = [
  {
    name: 'Future Ventures',
    image: FutureVenturesImage,
    width: { base: '9.75rem', lg: '15rem' },
  },
  { name: 'Craft', image: CraftImage, width: { base: '9.5rem', lg: '13.5rem' } },
  { name: 'Okta', image: OktaImage, width: { base: '5.5rem', lg: '8.375rem' } },
  {
    name: 'Core Ventures Group',
    image: CoreVenturesGroupImage,
    width: { base: '6.25rem', lg: '8.125rem' },
  },
  {
    name: 'Sinewave Ventures',
    image: SinewaveVenturesImage,
    width: { base: '8.5rem', lg: '11.125rem' },
  },
];

const Investors: FunctionComponent = () => (
  <Box bgColor="gray.50">
    <Container variant="section" pt={12} pb={24}>
      <Heading
        as="h5"
        color="gray.500"
        textTransform="uppercase"
        fontSize="xl"
        fontWeight="bold"
        mb={10}
      >
        Major Investors
      </Heading>

      <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
        {INVESTORS.map((investor) => (
          <Box key={investor.name} m={{ base: 3, lg: 6 }} width={investor.width}>
            <Image src={investor.image} alt={`${investor.name} image`} placeholder="blur" />
          </Box>
        ))}
      </Flex>
    </Container>
  </Box>
);

export default Investors;
