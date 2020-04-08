import React from 'react';

import PageSection from '../../PageSection';
import Heading from '../../../Heading';
import FeaturesCardGrid from '../../FeaturesCardGrid';
import { ReactComponent as CodeIcon } from '../../../../assets/core-icon.svg';
import { ReactComponent as VaultIcon } from '../../../../assets/vault-icon.svg';
import { ReactComponent as TransferIcon } from '../../../../assets/transfer-icon.svg';
import AnimateOnScroll from "../../../AnimateOnScroll";

const features = [
  {
    title: 'Edge Core SDK',
    icon: CodeIcon,
    description:
      'The core functionality and protocols for Ockam are in the Core SDK. The Core creates interfaces to easily plug in Vaults and Transports to complete the Edge SDK.',
  },
  {
    title: 'Vault',
    icon: VaultIcon,
    description:
      'Vaults are adaptors that allow any cryptographically empowered chip to interface the Ockam Core. Store Ockam identifiers in trusted environments.',
  },
  {
    title: 'Transport',
    icon: TransferIcon,
    description:
      'Transports are adaptors that allow any transport to interface with the Ockam Core. Pick from TCP, Bluetooth, and LoRaWAN.',
  },
];

const ElementsSection = () => {
  return (
    <PageSection>
      <AnimateOnScroll slideIn="down" animateOnce>
        <Heading linked as="h2" mb={5} textAlign="center">
          {' '}
          Elements of the Ockam Edge SDK
        </Heading>
        <FeaturesCardGrid features={features} />
      </AnimateOnScroll>
    </PageSection>
  );
};

ElementsSection.propTypes = {};

export default ElementsSection;
