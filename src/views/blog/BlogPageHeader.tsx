import { FunctionComponent, useContext } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

import { SearchValueContext } from '@contextProviders/SearchValueProvider';

const BlogPageHeader: FunctionComponent = () => {
  const { searchValue } = useContext(SearchValueContext);

  return (
    <Box mt={{ base: 10, lg: 8 }} mb={16} ml={{ base: 5, lg: 12 }}>
      <Heading as="h1" size="h2" fontSize="4.5xl" fontWeight="bold" mb={4}>
        {searchValue ? `Search result for "${searchValue}"` : 'Featured Articles'}
      </Heading>

      {!searchValue && (
        <Text fontSize="lg" fontWeight="normal" color="brand.900">
          Articles on Customer Engagement, Support, Product, and more
        </Text>
      )}
    </Box>
  );
};

export default BlogPageHeader;
