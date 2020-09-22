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
            Ockam, Azure Key Vault and a dedicated HSM bring complance to
            your IoT and Edge applications:
          </AnimateOnScroll>
        </Heading>
        <ConfigurationList mt={{ _: 3, lg: 0 }} flex={4}>
          <AnimateOnScroll slideIn="right">
            <ConfigurationItem>
              FIPS 140-2 Level-3
            </ConfigurationItem>
            <ConfigurationItem>
              HIPAA
            </ConfigurationItem>
            <ConfigurationItem>
              PCI-DSS
            </ConfigurationItem>
            <ConfigurationItem>
              eIDAS
            </ConfigurationItem>
            <ConfigurationItem>
              ...and many more
            </ConfigurationItem>
          </AnimateOnScroll>
        </ConfigurationList>
      </Container>
    </StyledPageSection>
  );
};

ConfigurationsSection.propTypes = {};

export default ConfigurationsSection;
