import React from 'react';
import styled from '@emotion/styled';

import routerGraphics from '../../../assets/product/router-section.svg';
import Heading from '../../Heading';
import Text from '../../Text';
import DefaultGridSection from '../DefaultGridSection';
import LinkAccent from '../../LinkAccent';
import AnimateOnScroll from '../../AnimateOnScroll';

const Container = styled('div')`
  margin-top: 5rem;
`;

const RouterSection = () => {
  return (
    <AnimateOnScroll threshold={20} delay={50}>
      <Container>
        <DefaultGridSection image={routerGraphics} direction="imageOnLeft">
          <Heading as="h2">Ockam Router</Heading>
          <Text>
            Routing secure messages in a connected device ecosystem is
            complicated to get right. The Ockam Router is a hosted cloud service
            that combines an Ockam Router Service and the Ockam Cloud SDK, in an easy
            to deploy puclic cloud hosted instance.
          </Text>
          <LinkAccent mt={3} to="product/router">
            Learn more about the Ockam Router
          </LinkAccent>
        </DefaultGridSection>
      </Container>
    </AnimateOnScroll>
  );
};

RouterSection.propTypes = {};

export default RouterSection;
