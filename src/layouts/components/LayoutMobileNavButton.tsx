import { FunctionComponent } from 'react';
import { IconButton } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

type LayoutMobileNavButtonProps = {
  isOpenMobileNav: boolean | undefined;
  onClick: (() => void) | undefined;
};

const LayoutMobileNavButton: FunctionComponent<LayoutMobileNavButtonProps> = ({
  isOpenMobileNav,
  onClick,
}) => (
  <IconButton
    aria-label="Website Menu"
    size="xs"
    w={6}
    h={6}
    p={1}
    variant="ghost"
    sx={{
      svg: {
        w: 'full',
        h: 'full',
      },
    }}
    ml="auto"
    icon={isOpenMobileNav ? <CloseIcon /> : <HamburgerIcon />}
    onClick={onClick}
  />
);

export default LayoutMobileNavButton;
