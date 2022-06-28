import { FunctionComponent } from 'react';
import { Container, Box, Heading, Flex } from '@chakra-ui/react';
import Image from 'next/image';

import FutureVenturesImage from '@assets/images/investors/future-ventures.png';
import CraftImage from '@assets/images/investors/craft.png';
import OktaImage from '@assets/images/investors/okta.png';
import CoreVenturesGroupImage from '@assets/images/investors/core-ventures-group.png';
import SinewaveVenturesImage from '@assets/images/investors/sinewave-ventures.png';

const INVESTORS = [
  { name: 'Future Ventures', image: FutureVenturesImage, width: { base: '155px', lg: '240px' } },
  { name: 'Craft', image: CraftImage, width: { base: '152px', lg: '217px' } },
  { name: 'Okta', image: OktaImage, width: { base: '89px', lg: '134px' } },
  {
    name: 'Core Ventures Group',
    image: CoreVenturesGroupImage,
    width: { base: '100px', lg: '130px' },
  },
  {
    name: 'Sinewave Ventures',
    image: SinewaveVenturesImage,
    width: { base: '137px', lg: '179px' },
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
            <Image src={investor.image} alt={`${investor.name} image`} />
          </Box>
        ))}
      </Flex>
    </Container>
  </Box>
);

export default Investors;
