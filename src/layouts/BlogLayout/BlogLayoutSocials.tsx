import { FunctionComponent } from 'react';
import { Box, BoxProps, Heading, HStack, Link } from '@chakra-ui/react';

import { LinkedinIcon, TwitterIcon, GitHubIcon } from '@components/icons';
import socialsLinks from '@consts/socialsLinks';

const SOCIALS = [
  {
    href: socialsLinks.linkedIn,
    Icon: LinkedinIcon,
  },
  {
    href: socialsLinks.twitter,
    Icon: TwitterIcon,
  },
  {
    href: socialsLinks.github,
    Icon: GitHubIcon,
  },
];

const BlogLayoutSocials: FunctionComponent<BoxProps> = ({ ...props }) => (
  <Box {...props}>
    <Heading as="h5" fontSize="sm" fontWeight="medium" textTransform="uppercase">
      follow or visit us on
    </Heading>
    <HStack gap={5} mt={5}>
      {SOCIALS.map((social) => (
        <Link href={social.href} isExternal key={social.href}>
          <social.Icon w={6} h={6} color="gray.500" />
        </Link>
      ))}
    </HStack>
  </Box>
);

export default BlogLayoutSocials;
