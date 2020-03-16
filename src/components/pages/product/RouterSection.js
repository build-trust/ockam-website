import React from 'react';
import styled from '@emotion/styled';

import routerGraphics from '../../../assets/product/router-section.svg';
import Text from '../../Text';
import DefaultGridSection from '../DefaultGridSection';
import AnimateOnScroll from '../../AnimateOnScroll';
import Link from "../../Link";
import Button from "../../Button";

const Container = styled('div')`
  margin-top: 5rem;
`;

const RouterSection = () => {
  return (
    <AnimateOnScroll threshold={20} delay={50}>
      <Container>
        <DefaultGridSection title="Ockam Router" contentAlign="top" image={routerGraphics} direction="imageOnLeft">
          <Text>
            Routing secure messages in a connected device ecosystem is
            complicated to get right. The Ockam Router is a hosted cloud service
            that combines an Ockam Router Service and the Ockam Cloud SDK, in an easy
            to deploy puclic cloud hosted instance.
          </Text>
          <Button textAlign="center" as={Link} width={{ _: "100%", lg: 'auto'}} variant='white' mt={3} to="product/router">
            Learn more about the Ockam Router
          </Button>
        </DefaultGridSection>
      </Container>
    </AnimateOnScroll>
  );
};

RouterSection.propTypes = {};

export default RouterSection;
