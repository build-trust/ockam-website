import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';
import FocusLock from 'react-focus-lock';
import { Global } from '@emotion/core';
import { animated, useTransition } from 'react-spring';

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
`

const AnimatedStickyMenuWrapper = animated(StickyMenuWrapper);

const PageLayout = ({
  children,
  isOpenSidebar,
  setIsOpenSidebar,
  themeName,
}) => {
  const ref = useRef();
  const [isCollapsedHeader] = useUnderViewport(ref);
  console.log('isCollapsedHeader',isCollapsedHeader);

  const transitions = useTransition(isCollapsedHeader, null, {
    from: { transform: 'translate3d(0,-80px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-80px,0)' },
  });

  return (
    <ThemeProvider themeName={themeName}>
      <MDXProvider components={mdxComponents}>
        <PageWrapper>
          <Global styles={normalizeCss} />
          <Global styles={globalStyles} />
          <FocusLock disabled={!isOpenSidebar}>
            <HeaderWrapper ref={ref}>
              <Content>
                <Header
                  isCollapsedHeader={false}
                  openSidebar={() => setIsOpenSidebar(true)}
                />
              </Content>
            </HeaderWrapper>
            {
              transitions.map(({ item, props, key }) =>
              item && (
                <AnimatedStickyMenuWrapper key={key} style={props}>
                  <Content>
                    <Header
                      isCollapsedHeader
                      openSidebar={() => setIsOpenSidebar(true)}
                    />
                  </Content>
                </AnimatedStickyMenuWrapper>
              ))
            }
            {children}
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
