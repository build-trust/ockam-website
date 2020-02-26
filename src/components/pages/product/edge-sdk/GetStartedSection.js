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
  const onShowContactModal = () => showContactModal();
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
              Get the Edge SDK Core
            </GetStartedItem>
            <GetStartedItem icon={TransferIcon}>
              Plugin the Transport SDK element for your edge hardware
            </GetStartedItem>
            <GetStartedItem icon={VaultIcon}>
              Choose a Vault implimentation from the open source library, or build your own
            </GetStartedItem>
          </GetStartedCard>
          <GetStartedCard
            title="Request a demo"
            icon={sendIcon}
            onClick={onShowContactModal}
          >
            <GetStartedItem icon={DocIcon}>
              OEM and Enterprise SLA licenses available.
            </GetStartedItem>
            <GetStartedItem icon={SupportIcon}>
              Our team is ready to help you get started, to build, or support your Ockam Edge SDK
            </GetStartedItem>
          </GetStartedCard>
        </GetStartedGrid>
      </AnimateOnScroll>
    </PageSection>
  );
};

export default GetStartedSection;
