import { FunctionComponent } from 'react';
import { Flex, Avatar, Heading, FlexProps, Box, Text } from '@chakra-ui/react';

import { MEMBERS } from '@consts/team';

type AuthorSignatureProps = {
  author: string;
  authorAvatar: string;
  authorPosition?: string;
  date?: string;
  withDate?: boolean;
} & FlexProps;

const AuthorSignature: FunctionComponent<AuthorSignatureProps> = ({
  author,
  authorAvatar,
  date,
  authorPosition,
  withDate,
  ...restProps
}) => {
  const memberPosition = MEMBERS.find(
    (member) => `${member.name} ${member.surname}` === author
  )?.position;
  const position = authorPosition || memberPosition;

  return (
    <Flex mt="auto" alignItems="center" {...restProps}>
      <Avatar src={authorAvatar} name={author} size="md" />

      <Box ml={5}>
        <Heading as="h5" fontSize="sm" fontWeight="medium" color="black">
          {author}

          {withDate && (
            <Text as="span" fontSize="sm" fontWeight="regular" color="gray.500">
              {' '}
              {position}
            </Text>
          )}
        </Heading>

        <Heading as="h6" mt={1} fontSize="sm" fontWeight="regular" color="gray.500">
          {withDate ? `Published ${date}` : position}
        </Heading>
      </Box>
    </Flex>
  );
};

export default AuthorSignature;
