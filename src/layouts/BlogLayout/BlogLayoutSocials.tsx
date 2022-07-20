import { FunctionComponent } from 'react';
import { Box, BoxProps, Heading, HStack, Link, Icon } from '@chakra-ui/react';

import { LINKEDIN, TWITTER, GITHUB } from '@consts/externalResources';

const SOCIALS = [LINKEDIN, TWITTER, GITHUB];

const BlogLayoutSocials: FunctionComponent<BoxProps> = ({ ...props }) => (
  <Box {...props}>
    <Heading as="h5" fontSize="sm" fontWeight="medium" textTransform="uppercase">
      follow or visit us on
    </Heading>
    <HStack gap={5} mt={5}>
      {SOCIALS.map((social) => (
        <Link href={social.href} isExternal key={social.href}>
          <Icon
            as={social.icon}
            w={6}
            h={6}
            color="gray.500"
            _hover={{ color: 'gray.300' }}
            transition="all 400ms ease-in-out"
          />
        </Link>
      ))}
    </HStack>
  </Box>
);

export default BlogLayoutSocials;
