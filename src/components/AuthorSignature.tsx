import { FunctionComponent } from 'react';
import { Flex, Heading, FlexProps, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

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
      <Box
        width="3rem"
        height="3rem"
        borderRadius="50%"
        overflow="hidden"
        position="relative"
        borderColor="grey.50"
        borderWidth="1px"
        borderStyle="solid"
      >
        <Image
          src={authorAvatar}
          layout="fill"
          objectFit="contain"
          width={48}
          height={48}
          sizes="48px"

        />
      </Box>

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
