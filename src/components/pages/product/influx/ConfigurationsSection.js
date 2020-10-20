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
        <Heading
          textAlign={{ _: 'center', lg: 'left' }}
          marginRight={{ md: '3.5rem' }}
          flex={4}
          as="h2"
        >
          <AnimateOnScroll slideIn="left">
            The InfluxData Add-on for Ockam is available in the following
            configurations:
          </AnimateOnScroll>
        </Heading>
        <ConfigurationList mt={{ _: 3, lg: 0 }} flex={3}>
          <AnimateOnScroll slideIn="right">
            <ConfigurationItem>Ockam OSS on Github</ConfigurationItem>
            <ConfigurationItem>Ready-to-go Packages</ConfigurationItem>
            <ConfigurationItem>
              Azure
              <Badge ml={2}>Coming soon</Badge>
            </ConfigurationItem>
            <ConfigurationItem>
              AWS
              <Badge ml={2}>Coming soon</Badge>
            </ConfigurationItem>
            <ConfigurationItem>
              Google Cloud
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
