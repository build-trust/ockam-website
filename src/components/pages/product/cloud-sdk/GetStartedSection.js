import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import PageSection from '../../PageSection';
import Heading from '../../../Heading';
import githubIcon from '../../../../assets/homepage/github-icon.svg';
import GetStartedCard from '../../../GetStartedCard';
import sendIcon from '../../../../assets/homepage/send-icon.svg';
import useSiteMetadata from '../../../../hooks/useSiteMetadata';
import { media } from '../../../../utils/emotion';
import IconListItem from "../../../IconLisItem";
import {ReactComponent as CodeIcon } from '../../../../assets/core-icon.svg';
import {ReactComponent as VaultIcon } from '../../../../assets/vault-icon.svg';
import {ReactComponent as TransferIcon } from '../../../../assets/transfer-icon.svg';
import {ReactComponent as DocIcon } from '../../../../assets/doc-icon.svg';
import {ReactComponent as SupportIcon } from '../../../../assets/support-icon.svg';
import {ReactComponent as CloudIcon } from '../../../../assets/cloud-icon.svg';
import AnimateOnScroll from "../../../AnimateOnScroll";
import useModal from "../../../../hooks/useModal";
import ContactModal from "../../../../modals/ContactModal";

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

const GetStartedSection = () => {
  const siteMetaData = useSiteMetadata();
  const [, showContactModal] = useModal(ContactModal);
  return (
    <PageSection>
      <AnimateOnScroll transformY animateOnce>
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
              Plugin the Transport SDK element for your cloud environment
            </GetStartedItem>
            <GetStartedItem icon={VaultIcon}>
              Choose a Vault implimentation for your cloud provider&apos;s HSM from the open source library, or build your own
            </GetStartedItem>
            <GetStartedItem icon={CloudIcon}>
              Add a Cloud Service integration from the Ockam Library.
            </GetStartedItem>
          </GetStartedCard>
          <GetStartedCard
            onClick={() => showContactModal()}
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
      </AnimateOnScroll>
    </PageSection>
  );
};

GetStartedSection.propTypes = {};

export default GetStartedSection;
