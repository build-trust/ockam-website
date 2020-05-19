import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { lighten } from 'polished';

import { media } from '../../utils/emotion';
import pattern from '../../assets/hero-pattern.svg';

import PageSection from './PageSection';

const Wrapper = styled('div')`
  ${({ theme }) =>
    `background-image:  linear-gradient(0deg, ${
      theme.colors.background
    } 0%, transparent 30%), url(${pattern}), radial-gradient(50% 87%, ${lighten(
      0.03,
      theme.colors.background
    )} 9%, ${theme.colors.background} 88%)`};
  padding-top: 8.8rem;
  ${media.desktop`
        margin-top: -8.8rem;
        padding-top: 22.8rem;
  `}
`;

const Container = styled('div')`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  ${media.tablet`
      width: 80%;
  `}
`;

const AnchorScroller = styled('div')`
  padding-bottom: 8rem;
`;

const HeaderTextSection = ({ children }) => {
  return (
    <Wrapper>
      <PageSection backgroundColor="transparent">
        <Container>{children}</Container>
      </PageSection>
      <AnchorScroller id="content">&nbsp;</AnchorScroller>
    </Wrapper>
  );
};

HeaderTextSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default HeaderTextSection;
