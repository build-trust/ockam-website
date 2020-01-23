import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';
import FocusLock from 'react-focus-lock';
import { Global } from '@emotion/core';
import { useSpring, animated } from 'react-spring';

import normalizeCss from '../theme/normalizeCss';
import globalStyles from '../theme/globalStyles';
import ThemeProvider from '../components/themeProvider';
import mdxComponents from '../components/mdxComponents';
import Header from '../components/Header';
import Content from '../components/pages/Content';
import useUnderViewport from '../hooks/useUnderViewport';
import Footer from '../components/Footer';

const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  position: relative;
  flex-direction: column;
  overflow-y: hidden;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.text};

  body {
    font-size: ${props => props.theme.fontSizes.body};
  }
`;

const Wrapper = styled.div`
  z-index: 11;
  position: relative;
  width: 100%;
  background-color: transparent;
  ${props =>
    props.isCollapsedHeader &&
    `
      position: fixed;
      background-color: ${props.theme.colors.accentBackground};
  `};
`;

const AnimatedWrapper = animated(Wrapper);

const ChildrenWrapper = styled('div')`
  ${props =>
    props.isCollapsedHeader &&
    `
      margin-top: ${props.headerHeight}px;
  `};
`;

const PageLayout = ({ children, isOpenSidebar, setIsOpenSidebar, themeName }) => {
  const ref = useRef();
  const [isCollapsedHeader, headerHeight] = useUnderViewport(ref);
  const toCollapsedAnimation = useSpring(
    { height: isCollapsedHeader ? 0 : -headerHeight}
  );

  const toFullAnimation = useSpring(
    { height: isCollapsedHeader ? -headerHeight : 0}
  );

  const trans = value => `translateY(${value}px)`;
  return (
    <ThemeProvider themeName={themeName}>
      <MDXProvider components={mdxComponents}>
        <PageWrapper>
          <Global styles={normalizeCss} />
          <Global styles={globalStyles} />
          <FocusLock disabled={!isOpenSidebar}>
            <AnimatedWrapper
              ref={ref}
              isCollapsedHeader={isCollapsedHeader}
              style={{ transform: isCollapsedHeader ? toCollapsedAnimation.height.interpolate(trans) : toFullAnimation.height.interpolate(trans)}}
            >
              <Content>
                <Header
                  isCollapsedHeader={isCollapsedHeader}
                  openSidebar={() => setIsOpenSidebar(true)}
                />
              </Content>
            </AnimatedWrapper>
            <ChildrenWrapper
              isCollapsedHeader={isCollapsedHeader}
              headerHeight={headerHeight}
            >
              {children}
            </ChildrenWrapper>
          </FocusLock>
          <Footer />
        </PageWrapper>
      </MDXProvider>
    </ThemeProvider>
  );
};

PageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  location: PropTypes.shape({}).isRequired,
  isOpenSidebar: PropTypes.bool.isRequired,
  setIsOpenSidebar: PropTypes.func.isRequired,
  themeName: PropTypes.string,
};

PageLayout.defaultProps = {
  themeName: 'dark',
};

export default PageLayout;
