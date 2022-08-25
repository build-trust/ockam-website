import { FunctionComponent, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

import GrayFeatureBackground from '@views/features/components/GrayFeatureBackground';

type GrayFeatureContainerProps = {
  children: ReactNode;
}

const GrayFeatureContainer: FunctionComponent<GrayFeatureContainerProps> = ({ children }) => (
    <Box position="relative">
      <GrayFeatureBackground />
      <Box zIndex="2" py={24} position="relative">
        {children}
      </Box>
    </Box>
  );

export default GrayFeatureContainer;
