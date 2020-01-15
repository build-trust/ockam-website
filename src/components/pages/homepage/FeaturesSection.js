import React from 'react';

import { ReactComponent as FingerprintIcon } from '../../../assets/fingerprint-icon.svg';
import { ReactComponent as HandsIcon } from '../../../assets/hands-icon.svg';
import { ReactComponent as MessageIcon } from '../../../assets/message-icon.svg';
import PageSection from '../PageSection';
import Heading from '../../Heading';
import Subheading from '../Subheading';
import FeaturesCardGrid from "../FeaturesCardGrid";

const features = [
  {
    icon: FingerprintIcon,
    title: "Identity",
    description: `Securely manage identities, cryptographic keys, and credentials for devices, services, and more.`,
  },
  {
    icon: HandsIcon,
    title: "Connection",
    description: `Enable secure connectivity and messaging to authenticate, establish
     mutual trust, and exchange information trustfully between entities and applications`,
  },
  {
    icon: MessageIcon,
    title: "Messaging",
    description: `Interconnect secure hardware with software services to facilitate
     trustful exchange of information within connected systems.`,
  },
];

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
      <FeaturesCardGrid features={features} />
    </PageSection>
  );
};

FeaturesSection.propTypes = {};

export default FeaturesSection;
