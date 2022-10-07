import { FunctionComponent } from 'react';
import { Box, BoxProps, Icon, Link as ChakraLink, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import ArrowIcon from '@assets/icons/arrow.svg';

type CTALinkProps = {
  href: string;
  text: string;
  isExternal?: boolean;
} & BoxProps;

const CTALink: FunctionComponent<CTALinkProps> = ({ href, text, isExternal, ...restProps }) => (
  <Box
    href={href}
    as={isExternal ? ChakraLink : NextLink}
    {...(isExternal ? { isExternal: true, ...restProps } : { passHref: true })}
    mt="auto"
  >
    <Text
      as={isExternal ? 'span' : 'a'}
      {...(isExternal ? {} : { ...restProps })}
      fontWeight="semibold"
      color="black"
      fontSize="md"
      display="flex"
      alignItems="center"
      mt="auto"
      _hover={{ svg: { color: 'avocado.500' }, textDecoration: 'underline' }}
    >
      {text}
      <Icon as={ArrowIcon} w={5} h={5} ml={2} />
    </Text>
  </Box>
);

export default CTALink;
