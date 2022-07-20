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
  >
    <Card
      as="a"
      boldBorderPosition="Left"
      boldBorderOnHover
      _hover={{ svg: { color: 'avocado.500' } }}
      maxW="initial"
      direction="row"
      mb={4}
      py={6}
      px={5}
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
