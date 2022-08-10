import { FunctionComponent, SVGAttributes } from 'react';
import NextLink from 'next/link';
import { Box, Flex, Heading, Icon, Link as ChakraLink, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import GreenIconWrapper from '@components/GreenIconWrapper';

type ContactExtensiveActionsCardProps = {
  title: string;
  icon: FunctionComponent<SVGAttributes<SVGElement>>;
  text: string;
  actionText: string;
  actionLink: string;
  isExternal?: boolean;
};

const ContactExtensiveActionsCard: FunctionComponent<ContactExtensiveActionsCardProps> = ({
  title,
  icon,
  text,
  actionText,
  actionLink,
  isExternal,
}) => {
  const LinkWrapper = isExternal ? Box : NextLink;

  return (
    <Flex
      direction="column"
      maxW="lg"
      pos="relative"
      _notFirst={{
        borderLeftWidth: { base: 0, lg: '1px' },
        borderTopWidth: { base: '1px', lg: 0 },
        borderColor: 'gray.200',
        pl: { base: 0, lg: 9 },
        pt: { base: 8, lg: 0 },
      }}
      _notLast={{
        pr: { lg: 9 },
      }}
    >
      <Flex align="center" mb={5}>
        <GreenIconWrapper mr={5}>
          <Icon as={icon} w={6} h={6} color="white" />
        </GreenIconWrapper>

        <Heading as="h3" fontSize="xl">
          {title}
        </Heading>
      </Flex>

      <Text mb={7}>{text}</Text>

      {/* TODO repair type check */}
      {/* @ts-ignore */}
      <LinkWrapper
        mt="auto"
        {...(isExternal ? { as: 'span' } : { href: actionLink, passHref: true })}
      >
        <ChakraLink
          {...(isExternal ? { isExternal: true, href: actionLink } : {})}
          display="flex"
          alignItems="center"
          fontSize="md"
          fontWeight="semibold"
        >
          {actionText}
          <ArrowForwardIcon w={6} h={6} ml={1} />
        </ChakraLink>
      </LinkWrapper>
    </Flex>
  );
};

export default ContactExtensiveActionsCard;
