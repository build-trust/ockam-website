import { FunctionComponent } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  ListItemProps,
  Icon,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import parse, { domToReact, HTMLReactParserOptions } from 'html-react-parser';

import { OPEN_ROLES_PATH } from '@consts/paths';
import { LeverPosting, LeverPostingList } from '@typings/lever';
import GreenIconWrapper from '@components/GreenIconWrapper';
import CheckIcon from '@assets/icons/check.svg';

const ListItemWrapper: FunctionComponent<ListItemProps> = ({ children, ...restProps }) => (
  <ListItem display="flex" {...restProps}>
    <GreenIconWrapper as="span" w={6} h={6} mr={3}>
      <Icon as={CheckIcon} color="white" w="full" h="full" />
    </GreenIconWrapper>
    <Box as="span" flex={1}>
      {children}
    </Box>
  </ListItem>
);

// @ts-ignore
const replaceListItem: HTMLReactParserOptions['replace'] = ({ children }) => {
  if (!children) return null;

  return <ListItemWrapper>{domToReact(children)}</ListItemWrapper>;
};

const DetailsList: FunctionComponent<LeverPostingList> = ({ text, content }): JSX.Element => {
  const parsedListItems = parse(content, {
    replace: replaceListItem,
  });

  return (
    <Box pb={16} key={text}>
      <Heading as="h3" fontSize="4xl" mb={{ base: 10, lg: 12 }}>
        {text}
      </Heading>
      <List spacing={{ base: 6, lg: 7 }}>{parsedListItems}</List>
    </Box>
  );
};

type OpenRoleProps = { openRole: LeverPosting };

const OpenRole: FunctionComponent<OpenRoleProps> = ({ openRole }) => {
  const ApplyButton = (
    <Button
      as="a"
      href={openRole.applyUrl}
      target="_blank"
      colorScheme="avocado"
      color="black"
      mt={{ base: 10, lg: 0 }}
    >
      Apply
    </Button>
  );

  return (
    <Container variant="section" alignItems="flex-start">
      <Box maxW="3xl" pb={16}>
        <Button size="lg" color="brand.900" as="a" href={OPEN_ROLES_PATH} variant="link" mb={10}>
          <ArrowBackIcon w={6} h={6} mr={2} /> Back to Job Positions
        </Button>

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align={{ lg: 'center' }}
          justifyContent={{ lg: 'space-between' }}
          mb={{ base: 16, lg: 24 }}
        >
          <Box position="relative" flex={1}>
            <Heading as="h2" size="h2" lineHeight={1.3}>
              {openRole.text}
            </Heading>

            <Box
              position="absolute"
              bottom={-3}
              left={0}
              maxW="3xs"
              w="100%"
              h="0.25rem"
              bgColor="avocado.500"
              borderRadius="md"
            />
          </Box>

          {ApplyButton}
        </Flex>

        <Box fontSize={{ lg: 'lg' }} color="gray.500" lineHeight={1.4}>
          <Box dangerouslySetInnerHTML={{ __html: openRole.description }} />
          <Box dangerouslySetInnerHTML={{ __html: openRole.additional }} />
        </Box>

        <Box maxW="md" h="1px" bgColor="gray.200" my={{ base: 10, lg: 20 }} />

        {openRole.lists.map(DetailsList)}

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align={{ lg: 'center' }}
          justify={{ lg: 'space-between' }}
          pb={16}
        >
          <Heading as="h3" fontSize="4xl">
            Join the Ockam Team
          </Heading>
          {ApplyButton}
        </Flex>
      </Box>
    </Container>
  );
};

export default OpenRole;
