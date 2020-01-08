import { useTheme } from 'emotion-theming';

import ockamLogo from '../assets/ockam-logo.svg';
import ockamLogoInvert from '../assets/ockam-logo-invert.svg';

const useThemeLogo = () => {
  const theme = useTheme();
  const logoImage = theme.name === 'light' ? ockamLogo : ockamLogoInvert;
  return logoImage;
};

export default useThemeLogo;
