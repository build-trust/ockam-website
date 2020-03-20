import React, { useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { animated, useTransition } from 'react-spring';

import normalizeCss from '../theme/normalizeCss';
import globalStyles from '../theme/globalStyles';
import ThemeProvider from '../components/themeProvider';
import Header from '../components/Header';
import Content from '../components/pages/Content';
import useUnderViewport from '../hooks/useUnderViewport';
import Footer from '../components/Footer';
import {ModalContextProvider} from "../contexts/ModalContext";
import {LocationContextProvider} from "../contexts/LocationContext";
import TopBarContactFormMessage from "../components/TopBarContactFormMessage/TopBarContactFormMessage";

const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.text};

  body {
    font-size: ${props => props.theme.fontSizes.body};
  }
`;

const HeaderWrapper = styled.div`
  z-index: 11;
  position: relative;
  width: 100%;
  background-color: transparent;

`;

const StickyMenuWrapper = styled(HeaderWrapper)`
  position: fixed;
  top: 0;
  background-color: ${props => props.theme.colors.accentBackground};
`;

const AnimatedStickyMenuWrapper = animated(StickyMenuWrapper);

const PageLayout = ({
  children,
  themeName,
  location,
}) => {
  const ref = useRef();
  const [isCollapsedHeader] = useUnderViewport(ref);
  const transitions = useTransition(isCollapsedHeader, null, {
    from: { transform: 'translate3d(0,-80px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-80px,0)' },
  });

  return (
    <ThemeProvider themeName={themeName}>
      <LocationContextProvider location={location}>
        <ModalContextProvider>
          <PageWrapper>
            <Global styles={normalizeCss} />
            <Global styles={globalStyles} />
            <HeaderWrapper ref={ref}>
              <TopBarContactFormMessage />
              <Content>
                <Header />
              </Content>
            </HeaderWrapper>
            {
              transitions.map(({ item, props, key }) =>
              item && (
                <AnimatedStickyMenuWrapper key={key} style={props}>
                  <Content>
                    <Header
                      isCollapsedHeader
                    />
                  </Content>
                </AnimatedStickyMenuWrapper>
              ))
            }
            {children}
            <Footer />
          </PageWrapper>
        </ModalContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
};

PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  location: PropTypes.shape({}).isRequired,
  themeName: PropTypes.string,
};

PageLayout.defaultProps = {
  themeName: 'dark',
};

export default PageLayout;
