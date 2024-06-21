import { Box, Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';

const Footer = (): ReactElement => (
  <Box as="footer" bg="brand.800" color="white" px={{ base: '0.75rem' }} py={{ base: '2.5rem' }}>
    <Flex justifyContent={{ base: 'space-between', lg: 'unset' }} maxW="70rem" mx="auto">
      Content
    </Flex>
  </Box>
);

export default Footer;
