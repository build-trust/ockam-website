import React, { FunctionComponent } from 'react';
import { Icon, Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

import Card from '@components/Card';
import useActiveHashInViewport from '@hooks/useActiveHashInViewport';
import { NAV_FEATURES_ITEMS } from '@consts/navigation';

const FeaturesMenu: FunctionComponent = () => {
  const hashes = NAV_FEATURES_ITEMS.map(({anchor}) => anchor);
  const activeHash = useActiveHashInViewport(hashes);
  return (
    <Card p={3} position="sticky" top="85px" zIndex="2">
      {NAV_FEATURES_ITEMS.map(({ icon, name, anchor }) => (
        <Box
          p={3}
          display="flex"
          alignItems="center"
          backgroundColor={activeHash===anchor ? 'avocado.50' : 'inherit' }
        >
          <Icon width={6} height={6} mr={3.5} as={icon} />
          <NextLink href={anchor} passHref>
            <Link fontSize="lg" color="brand.900">
              {name}
            </Link>
          </NextLink>
        </Box>
      ))}
    </Card>
  )
};

export default FeaturesMenu;
