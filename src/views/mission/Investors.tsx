import { FunctionComponent } from 'react';
import { Container, Box, Heading, Flex } from '@chakra-ui/react';
import Image from 'next/image';

import FutureVenturesImage from '@assets/images/investors/future-ventures.png';
import CraftImage from '@assets/images/investors/craft.png';
import OktaImage from '@assets/images/investors/okta.png';
import CoreVenturesGroupImage from '@assets/images/investors/core-ventures-group.png';
import SinewaveVenturesImage from '@assets/images/investors/sinewave-ventures.png';

const INVESTORS = [
  { name: 'Future Ventures', image: FutureVenturesImage, width: 240, height: 48 },
  { name: 'Craft', image: CraftImage, width: 217, height: 40 },
  { name: 'Okta', image: OktaImage, width: 134, height: 45 },
  { name: 'Core Ventures Group', image: CoreVenturesGroupImage, width: 130, height: 52 },
  { name: 'Sinewave Ventures', image: SinewaveVenturesImage, width: 179, height: 52 },
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

      <Flex direction="row" alignItems="center" justifyContent="center" flexWrap="wrap">
        {INVESTORS.map((investor) => (
          <Box key={investor.name} m={6}>
            <Image
              src={investor.image}
              width={investor.width}
              height={investor.height}
              alt={`${investor.name} image`}
            />
          </Box>
        ))}
      </Flex>
    </Container>
  </Box>
);

export default Investors;
