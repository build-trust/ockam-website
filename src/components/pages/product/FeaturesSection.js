import React from 'react';

import { ReactComponent as FingerprintIcon } from '../../../assets/fingerprint-icon.svg';
import { ReactComponent as ListIcon } from '../../../assets/list-icon.svg';
import { ReactComponent as LockIcon } from '../../../assets/lock-icon.svg';
import { ReactComponent as KeyIcon } from '../../../assets/key-icon.svg';
import { ReactComponent as HandsIcon } from '../../../assets/hands-icon.svg';
import { ReactComponent as MessageIcon } from '../../../assets/message-icon.svg';
import { ReactComponent as TwinsIcon } from '../../../assets/twins-icon.svg';
import { ReactComponent as CloudIcon } from '../../../assets/cloud-icon.svg';
import PageSection from '../PageSection';
import Heading from '../../Heading';
import Subheading from '../Subheading';
import FeaturesCardGrid from "../FeaturesCardGrid";

const featuresIdentity = [
  {
    icon: FingerprintIcon,
    title: "Decentralized Identifiers",
    description: `Cryptographically provable, decentralized identifiers (DIDs) for each device to ensure data integrity and protect against identity spoofing.`,
  },
  {
    icon: ListIcon,
    title: "Device And Service Registry",
    description: `Ockam Blockchain based registry for discovering public keys, protocols, endpoints and other metadata about a device or a service.`,
  },
  {
    icon: LockIcon,
    title: "Hardware Vault And Cryptography",
    description: `Ockam Blockchain based registry for discovering public keys, protocols, endpoints and other metadata about a device or a service.`,
  },
  {
    icon: KeyIcon,
    title: "Key And Credential Management",
    description: `Ockam Blockchain based registry for discovering public keys, protocols, endpoints and other metadata about a device or a service.`,
  },
];

const featuresConnectivity = [
  {
    icon: HandsIcon,
    title: "Trustful Communication",
    description: `Use Verifiable Credentials and Peer-to-peer Mutual Authentication to establish trust: device-to-device or device-to-service.`,
  },
  {
    icon: MessageIcon,
    title: "End-To-End Encrypted Messaging",
    description: `Secure, efficient and scalable end-to-end encrypted messaging to protect against tampering, replay, snooping and man-in-the-middle attacks.`,
  },
  {
    icon: TwinsIcon,
    title: "Trusted Twins",
    description: `Cloud based, persistent, mutually trusted twin of each device so applications can interact with device state and enqueue messages even when a device is offline.`,
  },
  {
    icon: CloudIcon,
    title: "Ockam Blockchain Network",
    description: `A fast finality, safety favouring, light client friendly, and horizontally scalable blockchain network that is optimized for connected devices.`,
  },
];

const FeaturesSection = () => {
  return (
    <PageSection>
      <Heading
        mb={5}
        width={['100%', '100%', '100%', '80%']}
        textAlign="center"
        mx="auto"
        as="h2"
      >
        Features Of Ockam
      </Heading>
      <Subheading textAlign="center">SECURE IDENTITY & CREDENTIAL MANAGEMENT</Subheading>
      <FeaturesCardGrid features={featuresIdentity} cardPadding='2.4rem' />
      <Subheading mt={5} mb={4} textAlign="center">SECURE CONNECTIVITY & MESSAGING</Subheading>
      <FeaturesCardGrid features={featuresConnectivity} cardPadding='2.4rem' />
    </PageSection>
  );
};

FeaturesSection.propTypes = {};

export default FeaturesSection;
