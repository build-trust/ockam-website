import { Box, BoxProps, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ReactElement, useState } from 'react';

import BrandAssetPopover, { BrandAssetPopoverTrigger } from '@components/BrandAssetPopover';
import { HOME_PATH } from '@consts/paths';

import OckamLogoIcon from './assets/logo.svg';

interface OckamLogoProps extends BoxProps {}
const OckamLogo = (boxProps: OckamLogoProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const closePopover = (): void => setIsOpen(false);
  const openPopover = (e: MouseEvent): void => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <BrandAssetPopover bg="var(--navbar-bg)" isOpen={isOpen} onClose={closePopover}>
      <BrandAssetPopoverTrigger>
        <Link as={NextLink} href={HOME_PATH} flex={0}>
          <Box as={OckamLogoIcon} onContextMenu={openPopover} {...boxProps} />
        </Link>
      </BrandAssetPopoverTrigger>
    </BrandAssetPopover>
  );
};

export default OckamLogo;
