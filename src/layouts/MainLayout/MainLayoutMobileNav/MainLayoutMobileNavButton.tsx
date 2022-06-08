import { FunctionComponent } from 'react';
import { IconButton } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

type MainLayoutMobileNavButtonProps = {
  isOpenMobileNav: boolean;
  onClick: () => void;
};

const MainLayoutMobileNavButton: FunctionComponent<MainLayoutMobileNavButtonProps> = ({
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

export default MainLayoutMobileNavButton;
