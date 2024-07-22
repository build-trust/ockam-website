import { FunctionComponent } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from 'next/link';

import { LeverPosting } from '@typings/lever';
import { OPEN_ROLE_PATH } from '@consts/paths';
import { generateSlug } from '@utils/generateSlug';
import Card from '@components/Card';

type OpenRoleCardProps = Pick<LeverPosting, 'text' | 'categories' | 'id'>;

const OpenRoleCard: FunctionComponent<OpenRoleCardProps> = ({ text, categories, id }) => (
  <Link
    as={`${OPEN_ROLE_PATH}/${generateSlug(text)}/${id}`}
    href={`${OPEN_ROLE_PATH}/[slug]/[roleId]`}
    passHref
    legacyBehavior
  >
    <Card
      as="a"
      _hover={{ svg: { color: 'brand.500' } }}
      maxW="initial"
      direction="row"
      boldBorderColor="gray.200"
      border="1px solid"
      borderRadius="0.75rem"
      borderBottom="1px solid"
      borderColor="gray.200"
      p="1.5rem"
      mb="1rem"
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
    </Card>
  </Link>
);

export default OpenRoleCard;
