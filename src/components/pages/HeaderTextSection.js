import React from 'react';
import styled from '@emotion/styled';
import PropTypes from "prop-types";

import { media } from '../../utils/emotion';

import PageSection from './PageSection';

const Wrapper = styled('div')`
  margin-top: 14rem;
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
  padding-bottom:  8rem;
`;

const HeaderTextSection = ({ children }) => {
  return (
    <Wrapper>
      <PageSection>
        <Container>
          {children}
        </Container>
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
