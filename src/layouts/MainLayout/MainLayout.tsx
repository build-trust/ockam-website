import { FunctionComponent, ReactNode, useRef } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import styled from 'styled-components';

import MobileNavbarProvider from '@contextProviders/MobileNavbarProvider';

import LayoutFooter from '../components/LayoutFooter';

import MainLayoutHeader from './MainLayoutHeader';

const GradientContainer = styled(Flex)<{
  leftcolor?: string;
  rightcolor?: string;
  noslice?: boolean;
}>`
  ${({ leftcolor, rightcolor, noslice }): string | undefined =>
    leftcolor &&
    rightcolor &&
    `
    background-image: url(${
      noslice ? '' : '/hero-slice.png'
    }), linear-gradient(#F9F9F9, #F9F9F9), linear-gradient(to right, ${leftcolor}, ${rightcolor});
    background-repeat: no-repeat, repeat-x, no-repeat;
    background-size: 100%, 100%, 100% ${noslice ? '40em' : '75vh'};
    background-position: calc(1px - 1px) calc(75vh - 254*100vw/5120), calc(1px - 1px) calc(${
      noslice ? '40em' : '75vh'
    } - 0px), calc(1px - 1px) calc(1px - 1px);
  `}
`;

type LayoutProps = {
  gradient?: string[];
  children?: ReactNode;
  backgroundColor?: string;
  noslice?: boolean;
};

const MainLayout: FunctionComponent<LayoutProps> = ({
  gradient,
  backgroundColor,
  noslice,
  children,
}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = `${headerRef.current?.clientHeight || 80}px`;
  const hasGradient = !!gradient;
  let leftcolor;
  let rightcolor;
  if (hasGradient) {
    leftcolor = gradient.pop();
    rightcolor = gradient.pop();
  }

  return (
    <MobileNavbarProvider>
      {/* @ts-ignore */}
      <MainLayoutHeader ref={headerRef} hasGradient={hasGradient} />

      <GradientContainer
        direction="column"
        minH="full"
        w="full"
        overflowX="hidden"
        leftcolor={leftcolor}
        rightcolor={rightcolor}
        noslice={noslice}
      >
        <Box as="main" flex={1} w="full" pt={{ base: 0, lg: headerHeight }}>
          {children}
        </Box>
        <Box backgroundColor={backgroundColor}>
          <LayoutFooter backgroundColor={backgroundColor} />
        </Box>
      </GradientContainer>
    </MobileNavbarProvider>
  );
};

export default MainLayout;
