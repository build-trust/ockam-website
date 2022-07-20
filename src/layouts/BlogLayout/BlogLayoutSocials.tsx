import { FunctionComponent } from 'react';
import { Box, BoxProps, Heading, HStack, Link, Icon } from '@chakra-ui/react';

import LinkedinIcon from '@assets/icons/linkedin.svg';
import TwitterIcon from '@assets/icons/twitter.svg';
import GitHubIcon from '@assets/icons/github.svg';
import socialsLinks from '@consts/socialsLinks';

const SOCIALS = [
  {
    href: socialsLinks.linkedIn,
    icon: LinkedinIcon,
  },
  {
    href: socialsLinks.twitter,
    icon: TwitterIcon,
  },
  {
    href: socialsLinks.github,
    icon: GitHubIcon,
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
          <Icon as={social.icon} w={6} h={6} color="gray.500" />
        </Link>
      ))}
    </HStack>
  </Box>
);

export default BlogLayoutSocials;
