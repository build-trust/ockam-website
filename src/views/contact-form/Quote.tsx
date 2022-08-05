import { FunctionComponent } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';

import QuoteIcon from '@assets/icons/quote.svg';
import AuthorSignature from '@components/AuthorSignature';

const QUOTE_AUTHOR = {
  author: 'Matthew Gregory',
  authorAvatar: '/blog/matthew_gregory-1.png',
  authorPosition: 'CEO of Ockam',
};

const Quote: FunctionComponent = () => (
  <Box w="28.5rem" display={{ base: 'none', lg: 'block' }}>
    <Icon as={QuoteIcon} w={6} h={5} color="avocado.500" />

    <Text mt={2} fontSize="xl" fontWeight="regular" color="brand.900" lineHeight={1.3}>
      Ockam moves fast, and relies on a culture of Trust. Trust is inherent, not earned. When
      members join the Team, they should assume that they are completely trusted by everyone to
      contribute their best self, from Day 1.
    </Text>

    <AuthorSignature {...QUOTE_AUTHOR} mt={8} />
  </Box>
);

export default Quote;
