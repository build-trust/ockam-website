import { FunctionComponent, SVGAttributes } from 'react';
import { Button, Flex, Heading, Icon, Text, Box, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

import Card from '@components/Card';
import GreenIconWrapper from '@components/GreenIconWrapper';

type ContactMainActionsCardProps = {
  title: string;
  icon: FunctionComponent<SVGAttributes<SVGElement>>;
  text: string;
  link: {
    href: string;
    text: string;
    isExternal?: boolean;
  };
};

const ContactMainActionsCard: FunctionComponent<ContactMainActionsCardProps> = ({
  title,
  icon,
  text,
  link,
}) => (
  <Card w={{ base: '21rem', md: '23rem' }} align="center" px={{ base: 6, md: 8 }} pt={6} pb={9}>
    <Flex align="center" mb={6}>
      <GreenIconWrapper mr={4}>
        <Icon as={icon} w={6} h={6} color="white" />
      </GreenIconWrapper>

      <Heading as="h4" fontSize="xl">
        {title}
      </Heading>
    </Flex>

    <Text mb={8} textAlign="center" fontWeight="regular" color="brand.900">
      {text}
    </Text>

    <Box
      alignSelf="stretch"
      href={link.href}
      as={link.isExternal ? ChakraLink : NextLink}
      {...(link.isExternal
        ? { isExternal: true, _hover: { textDecoration: 'none' }, mt: 'auto' }
        : { passHref: true })}
    >
      <Button
        as={link.isExternal ? 'span' : 'a'}
        mt="auto"
        colorScheme="avocado"
        size="md"
        color="black"
        w="full"
      >
        {link.text}
      </Button>
    </Box>
  </Card>
);
export default ContactMainActionsCard;
