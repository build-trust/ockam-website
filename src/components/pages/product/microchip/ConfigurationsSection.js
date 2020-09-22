import React from 'react';
import styled from '@emotion/styled';
import { flexbox, space } from 'styled-system';

import PageSection from '../../PageSection';
import { media } from '../../../../utils/emotion';
import Heading from '../../../Heading';
import AnimateOnScroll from '../../../AnimateOnScroll';
import Badge from '../../../Badge';

const StyledPageSection = styled(PageSection)`
  padding: 11rem 0;
  background-color: ${({ theme }) => theme.colors.darken};
`;

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.desktop`
    flex-direction: row;
  `}
`;

const ConfigurationItem = styled('div')`
  color: ${props => props.theme.colors.white};
  margin-bottom: 2.5rem;
  &:before {
    content: '';
    width: 0.7rem;
    height: 0.7rem;
    background-color: ${props => props.theme.colors.accent};
    display: inline-block;
    margin-right: 1rem;
  }
`;

const ConfigurationList = styled('div')(flexbox, space);

const ConfigurationsSection = () => {
  return (
    <StyledPageSection darkenBg>
      <Container>
        <Heading textAlign={{ _: 'center', lg: 'left' }} flex={5} as="h2">
          <AnimateOnScroll slideIn="left">
            Ockam Add-ons for Microchip are available for the following chips:
          </AnimateOnScroll>
        </Heading>
        <ConfigurationList mt={{ _: 3, lg: 0 }} flex={4}>
          <AnimateOnScroll slideIn="right">
            <ConfigurationItem>
              ATECC608A
            </ConfigurationItem>
            <ConfigurationItem>
              PolarFire RISC-V
              <Badge ml={2}>Coming soon</Badge>
            </ConfigurationItem>
            <ConfigurationItem>
              ...and more
              <Badge ml={2}>Coming soon</Badge>
            </ConfigurationItem>
          </AnimateOnScroll>
        </ConfigurationList>
      </Container>
    </StyledPageSection>
  );
};

ConfigurationsSection.propTypes = {};

export default ConfigurationsSection;
