import { FunctionComponent } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  ListItemProps,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import parse, { domToReact, Element, DOMNode } from 'html-react-parser';

import { OPEN_ROLES_PATH } from '@consts/paths';
import { LeverPosting, LeverPostingList } from '@typings/lever';
import CheckIcon from '@assets/icons/check.svg';

import JoinTheTeamImage from './assets/join-the-team.svg';

const ListItemWrapper: FunctionComponent<ListItemProps> = ({ children, ...restProps }) => (
  <ListItem display="flex" alignItems="center" justifyContent="center" {...restProps}>
    <Flex
      alignItems={{ base: 'baseline', lg: 'center' }}
      justifyContent="center"
      flexShrink={0}
      borderRadius="100%"
      bg="rgba(116, 223, 255, 0.30)"
      as="span"
      w="0.75rem"
      h="0.75rem"
      mr="0.5rem"
    >
      <Icon as={CheckIcon} color="brand.600" w="full" h="full" />
    </Flex>
    <Box as="span" flex={1} fontSize="1rem" color="brand.800">
      {children}
    </Box>
  </ListItem>
);

const replaceListItem = ({ children }: Element) => {
  if (!children) return null;

  return <ListItemWrapper>{domToReact(children as DOMNode[])}</ListItemWrapper>;
};

const DetailsList: FunctionComponent<LeverPostingList> = ({ text, content }): JSX.Element => {
  const parsedListItems = parse(content, {
    replace: (domNode) => {
      const domElement: Element = domNode as Element;
      return replaceListItem(domElement);
    },
  });

  return (
    <Box pb={16} key={text}>
      <Heading
        as="h2"
        fontFamily="neutraface"
        fontSize={{ base: '2.5rem' }}
        lineHeight={1.3}
        mb={{ base: '1.5rem' }}
        fontWeight={700}
      >
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
      maxW={{ base: '18.5rem', lg: '10rem' }}
      w="100%"
      as="a"
      href={openRole.applyUrl}
      h="3.5rem"
      variant="primary"
      target="_blank"
    >
      Apply
    </Button>
  );

  const boxStyles = {
    a: {
      color: '#52C7EA',
      _hover: {
        color: '#36A7C9',
        textDecoration: 'underline',
      },
    },
  };

  return (
    <Box
      maxW="70rem"
      mx="auto"
      px={{ base: '0.75rem' }}
      pt={{ base: '3.5rem', lg: '6.25rem' }}
      pb={{ base: '5rem', lg: '10rem' }}
    >
      <Button
        as="a"
        fontSize={{ base: '0.875rem', lg: '1rem' }}
        fontWeight={600}
        href={OPEN_ROLES_PATH}
        color="brand.500"
        variant="link"
        mb="3.5rem"
      >
        <ArrowBackIcon w={6} h={6} mr={2} /> Back to all positions
      </Button>

      <Flex
        direction={{ base: 'column', lg: 'row' }}
        align={{ base: 'center' }}
        gap={{ base: '2rem' }}
        justifyContent={{ lg: 'space-between' }}
        mb={{ base: '2rem', lg: '6rem' }}
      >
        <Heading
          as="h1"
          textAlign={{ base: 'center', lg: 'left' }}
          lineHeight={0.95}
          fontFamily="neutraface"
          fontWeight={700}
          fontSize={{ base: '2.5rem', lg: '5.5rem' }}
        >
          {openRole.text}
        </Heading>

        {ApplyButton}
      </Flex>

      <Box
        fontSize="1.125rem"
        color="gray.500"
        lineHeight={1.4}
        mb={{ base: '3.5rem', lg: '5rem' }}
      >
        <Box dangerouslySetInnerHTML={{ __html: openRole.description }} />
      </Box>

      {openRole.lists.map(DetailsList)}

      <Box fontSize="1.125rem" color="gray.500" lineHeight={1.4}>
        <Box sx={boxStyles} dangerouslySetInnerHTML={{ __html: openRole.additional }} />
      </Box>

      <Flex
        mt={{ base: '3.5rem', lg: '5rem' }}
        direction={{ base: 'column', lg: 'row' }}
        align={{ base: 'center', lg: 'center' }}
        p={{ base: '1rem', lg: '1.5rem' }}
        border="1px solid"
        borderColor="gray.100"
        borderRadius="0.75rem"
        gap={{ base: '2.5rem' }}
      >
        <Box as={JoinTheTeamImage} w="100%" maxW={{ base: '15rem', lg: '12rem' }} />

        <Stack textAlign={{ base: 'center', lg: 'left' }} mr={{ base: 'initial', lg: 'auto' }}>
          <Heading
            as="h3"
            fontSize={{ base: '2.5rem' }}
            fontWeight={700}
            lineHeight={1.3}
            fontFamily="neutraface"
            color="brand.900"
          >
            Join the Ockam Team
          </Heading>
          <Text lineHeight={1.3} fontSize={{ base: '1.125rem' }}>
            and start creating tools developers will love
          </Text>
        </Stack>
        {ApplyButton}
      </Flex>
    </Box>
  );
};

export default OpenRole;
