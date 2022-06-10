import { FunctionComponent } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from 'next/link';

import { LeverPosting } from '@typings/lever';
import { OPEN_ROLE_PATH } from '@consts/paths';
import { generateSlug } from '@utils/generateSlug';

type OpenRoleCardProps = Pick<LeverPosting, 'text' | 'categories' | 'id'>;

const OpenRoleCard: FunctionComponent<OpenRoleCardProps> = ({ text, categories, id }) => (
  <Link href={`${OPEN_ROLE_PATH}/${generateSlug(text)}/${id}`}>
    <Flex
      position="relative"
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      mb={4}
      py={6}
      px={5}
      cursor="pointer"
      _hover={{
        svg: { color: 'avocado.500' },
        borderLeftColor: 'transparent',
        _before: {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'block',
          h: 'full',
          w: '4px',
          bgColor: 'avocado.500',
          borderTopLeftRadius: 'md',
          borderBottomLeftRadius: 'md',
        },
      }}
    >
      <Box flex={1}>
        <Text lineHeight={1.3} fontWeight="bold" fontSize="xl" color="brand.900" mb={2}>
          {text}
        </Text>
        <Text fontWeight="regular" lineHeight={1.5} color="brand.900">
          {categories.location}
        </Text>
      </Box>

      <ArrowForwardIcon w={6} h={6} />
    </Flex>
  </Link>
);

export default OpenRoleCard;
