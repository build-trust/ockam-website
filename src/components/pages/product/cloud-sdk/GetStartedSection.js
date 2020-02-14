import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import PageSection from '../../PageSection';
import Heading from '../../../Heading';
import githubIcon from '../../../../assets/homepage/github-icon.svg';
import GetStartedCard from '../../../GetStartedCard';
import config from '../../../../../config';
import sendIcon from '../../../../assets/homepage/send-icon.svg';
import useSiteMetadata from '../../../../hooks/useSiteMetadata';
import { media } from '../../../../utils/emotion';
import IconListItem from "../../../IconLisItem";
import {ReactComponent as CodeIcon } from '../../../../assets/core-icon.svg';
import {ReactComponent as VaultIcon } from '../../../../assets/vault-icon.svg';
import {ReactComponent as TransferIcon } from '../../../../assets/transfer-icon.svg';
import {ReactComponent as DocIcon } from '../../../../assets/doc-icon.svg';
import {ReactComponent as SupportIcon } from '../../../../assets/support-icon.svg';

const GetStartedGrid = styled('div')`
  display: grid;
  grid-column-gap: 0.2rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 0.2rem;
  ${media.desktop`
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 0.2rem;

  `}
`;

const GetStartedItem = ({ icon, children }) => <IconListItem fontSize="bodySmall" icon={icon} iconStyle={{ color: 'primary'}}>{children}</IconListItem>;

GetStartedItem.propTypes = {
  icon: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

const GetStartedSection = props => {
  const siteMetaData = useSiteMetadata();
  return (
    <PageSection>
      <Heading as="h2" mb={5} textAlign="center">
        Get started!
      </Heading>
      <GetStartedGrid>
        <GetStartedCard
          to={siteMetaData.ockamLibraryRepo}
          title="Build Your Own"
          icon={githubIcon}
        >
          <GetStartedItem icon={CodeIcon}>
            Get the Cloud SDK Core
          </GetStartedItem>
          <GetStartedItem icon={TransferIcon}>
            Determine Transport for your cloud environment
          </GetStartedItem>
          <GetStartedItem icon={VaultIcon}>
            Choose a Vault from the open source library, or build your own
          </GetStartedItem>
        </GetStartedCard>
        <GetStartedCard
          to={`mailto:${config.general.email}`}
          title="Request a demo"
          icon={sendIcon}
        >
          <GetStartedItem icon={DocIcon}>
            OEM and Enterprise SLA licenses available
          </GetStartedItem>
          <GetStartedItem icon={SupportIcon}>
            Our team is ready to help you get started, to build, or support your Ockam Cloud SDK
          </GetStartedItem>
        </GetStartedCard>
      </GetStartedGrid>
    </PageSection>
  );
};

GetStartedSection.propTypes = {};

export default GetStartedSection;
