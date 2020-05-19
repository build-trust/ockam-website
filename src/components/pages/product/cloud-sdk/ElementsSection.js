import React from 'react';

import PageSection from '../../PageSection';
import Heading from '../../../Heading';
import FeaturesCardGrid from '../../FeaturesCardGrid';
import { ReactComponent as CodeIcon } from '../../../../assets/core-icon.svg';
import { ReactComponent as VaultIcon } from '../../../../assets/vault-icon.svg';
import { ReactComponent as TransferIcon } from '../../../../assets/transfer-icon.svg';
import { ReactComponent as CloudIcon } from '../../../../assets/cloud-icon.svg';
import AnimateOnScroll from '../../../AnimateOnScroll';

const features = [
  {
    title: 'Cloud Core SDK',
    icon: CodeIcon,
    description:
      'The core functionality and protocols for Ockam are in the Core SDK. The Core creates interfaces to easily plug in Service Integrations, Vaults, and Transports to complete the Cloud SDK.',
  },
  {
    title: 'Service interface',
    icon: CloudIcon,
    description:
      'Service Interfaces in the Ockam Library are adaptors that allow Cloud Service APIs to authenitcate with, and send messages to, the rest of a connected ecosystem.',
  },
  {
    title: 'Vault',
    icon: VaultIcon,
    description:
      'Vaults are adaptors that allow any Hardware Security Modules to interface the Ockam Core. Store Ockam identifiers in cloud based HSMs.',
  },
  {
    title: 'Transport',
    icon: TransferIcon,
    description:
      'Transports are adaptors that allow any transport to interface with the Ockam Core. Pick from TCP and UDP.',
  },
];

const ElementsSection = () => {
  return (
    <PageSection>
      <AnimateOnScroll>
        <Heading linked as="h2" mb={5} textAlign="center">
          Elements of the Ockam Cloud SDK
        </Heading>
      </AnimateOnScroll>
      <FeaturesCardGrid features={features} />
    </PageSection>
  );
};

ElementsSection.propTypes = {};

export default ElementsSection;
