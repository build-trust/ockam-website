import { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';

const RotatingHeading: FC = () => (
  <Box my={30}>
    <Heading
      as="h1"
      size={{ base: 'md', lg: 'h2' }}
      fontWeight="extrabold"
      textAlign="center"
      color="white"
      lineHeight={{ base: 1, lg: 1.2 }}
    >
      Ockam enables engineers to build apps
      <br />
      that can Trust data-in-motion
    </Heading>
  </Box>
);
export default RotatingHeading;
