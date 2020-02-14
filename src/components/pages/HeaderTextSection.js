import React from 'react';
import styled from '@emotion/styled';

import PageSection from './PageSection';

import { media } from '../../utils/emotion';

const Wrapper = styled('div')`
  margin: 14rem 0;
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

const HeaderTextSection = ({ children }) => {
  return (
    <Wrapper>
      <PageSection>
        <Container>
          {children}
        </Container>
      </PageSection>
    </Wrapper>
  );
};

HeaderTextSection.propTypes = {};

export default HeaderTextSection;
