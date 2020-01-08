import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Data as DatabaseIcon } from 'styled-icons/boxicons-regular/Data';
import { Server as ServerIcon } from 'styled-icons/boxicons-regular/Server';
import { Key2 as KeyIcon } from 'styled-icons/remix-line/Key2';
import { darken, rgba } from 'polished';

import PageSection from '../PageSection';
import Heading from '../../Heading';
import Subheading from '../Subheading';
import Card from '../../Card';
import CardBody from '../../Card/CardBody';
import { media } from '../../../utils/emotion';
import Icon from '../../Icon';
import Text from '../../Text';

const StyledCard = styled(Card)`
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 29px 3px
      ${props => rgba(darken(0.1, props.theme.colors.background), 0.2)};
  }
`;

const FeatureCard = ({ children }) => (
  <StyledCard>
    <CardBody>{children}</CardBody>
  </StyledCard>
);

FeatureCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

const FeatureGrid = styled.div`
  display: grid;
  grid-row-gap: 0.2rem;
  ${media.desktop`
    grid-column-gap: 0.2rem;
    grid-rows-gap: 0;
    grid-template-columns: 1fr 1fr 1fr;
`};
`;

const FeaturesSection = () => {
  return (
    <PageSection>
      <Subheading textAlign="center">WE MAKE IT SIMPLE TO</Subheading>
      <Heading
        mb={5}
        width={['100%', '100%', '100%', '80%']}
        textAlign="center"
        mx="auto"
        as="h2"
      >
        Ockam&apos;s Products Enable Developers To Establish An Architecture For
        Trust Within Their Applications.
      </Heading>
      <FeatureGrid>
        <FeatureCard>
          <Icon size={3} color="primary" icon={DatabaseIcon} mb={2} />
          <Heading as="h6">Identity</Heading>
          <Text fontSize="bodySmall">
            Securely manage identities, cryptographic keys, and credentials for
            devices, services, and more.
          </Text>
        </FeatureCard>
        <FeatureCard>
          <Icon size={3} color="primary" icon={KeyIcon} mb={2} />
          <Heading as="h6">Connection</Heading>
          <Text fontSize="bodySmall">
            Enable secure connectivity and messaging to authenticate, establish
            mutual trust, and exchange information trustfully between entities
            and applications
          </Text>
        </FeatureCard>
        <FeatureCard>
          <Icon size={3} color="primary" icon={ServerIcon} mb={2} />
          <Heading as="h6">Messaging</Heading>
          <Text fontSize="bodySmall">
            Interconnect secure hardware with software services to facilitate
            trustful exchange of information within connected systems.
          </Text>
        </FeatureCard>
      </FeatureGrid>
    </PageSection>
  );
};

FeaturesSection.propTypes = {};

export default FeaturesSection;
