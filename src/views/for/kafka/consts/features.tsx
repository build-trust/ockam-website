/* eslint-disable react/no-unescaped-entities */
import { Box } from '@chakra-ui/react';
import React from 'react';

import anyLanguageSrc from '../assets/any-language.png';
import publicKeySrc from '../assets/public-key.png';
import dataAuthenticity from '../assets/data-authenticity.png';
import keyRotation from '../assets/key-rotation.png';
import shippingSecrets from '../assets/shipping-secrets.png';
import appToTrustSrc from '../assets/app-to-trust.png';
import sharedSecretsSrc from '../assets/shared-secrets.png';
import noAppCodeChangesSrc from '../assets/no-app-code-changes.png';
import selfManagedSrc from '../assets/self-managed.png';
import heterogenousDeploymentsSrc from '../assets/heterogenous-deployments.png';
import getStartedSrc from '../assets/get-started.png';

const FEATURES = [
  {
    title: 'App-to-app trust',
    subTitle: 'An Apache Kafka + Ockam topology',
    description: (
      <>
        Kafka applications that are handling sensitive data require more than encryption to the
        "end". Where's the "end"? What's needed to meet modern data governance expectations are
        guarantees that the intended applications are exclusively the apps that can participate in a
        sensitive message{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          stream
        </Box>
        . Ockam moves trust to the{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          application layer
        </Box>{' '}
        by building a mutually authenticated and encrypted communication channel between all of your
        Kafka apps through your Kafka brokers.
      </>
    ),
    imageSrc: appToTrustSrc,
    alt: 'Illustration of Apache Kafka topology with Ockam secure channels',
  },
  {
    title: 'No more shared secret keys',
    subTitle: 'Traditional attempts at restricting key access to specific apps',
    description: (
      <>
        Sharing secret keys across many apps and services increases the likelihood of secret keys
        leaking, in addition to eroding any guarantees that only intended apps can{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          access
        </Box>{' '}
        sensitive data. Teams then layer in additional credential management approaches,
        network-level controls, and various other security approaches in an attempt to have a
        somewhat reliable assumption that only the intended app(s) were able to use the shared
        secret{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          keys
        </Box>
        .
        <br />
        <br />
        With Ockam, each app generates its own{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          unique
        </Box>{' '}
        cryptographically provable identity and encryption keys, and uses those keys to establish
        trusted secure channels directly with other authorized apps as required.
      </>
    ),
    imageSrc: sharedSecretsSrc,
    alt: 'Illustration of various security controls and a key',
  },
  {
    title: 'No more shipping secrets',
    subTitle: 'Every time a secret is transmitted is an exposure risk',
    description: (
      <>
        Whether it's reading a credential or secret value from a central source, or transmitting a
        secret key to another app, every time a secret value is transmitted over the wire is another
        opportunity for it to leak. Ockam's approach to secret{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          management
        </Box>{' '}
        means each secret key never needs to leave the place where it was generated. By removing the
        need to transmit secrets the risk of an attacker intercepting a secret in transit is also
        removed.
      </>
    ),
    imageSrc: shippingSecrets,
    alt: 'Illustration showing the risk of transmitting secrets to multiple apps',
  },
  {
    title: 'Automated & regular key-rotation',
    subTitle: 'Unique secret keys per app with automatic key rotation',
    description: (
      <>
        Everyone hopes they never have a data breach, but to minimize the impact in case the worst
        happens Ockam apps automatically and regularly{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          rotate
        </Box>{' '}
        their encryption keys. If a secret key is ever leaked the data at risk is reduced to the
        amount sent in the small window of that secret key was active. Don't put your historical and
        future data at risk because rotating secret{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          keys
        </Box>{' '}
        is difficult— it's built-in from the start.
      </>
    ),
    imageSrc: keyRotation,
    alt: 'Illustration showing automated key rotation with multiple keys',
  },
  {
    title: 'Data authenticity & integrity',
    subTitle: '',
    description: (
      <>
        The approach to mutual authentication of every app that Ockam provides results in strong
        data governance{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          guarantees
        </Box>{' '}
        around the authenticity and integrity of the data moving through your system.
      </>
    ),
    imageSrc: dataAuthenticity,
    alt: 'Illustration showing guaranteed authentic data being transferred between two entities',
  },
  {
    title: 'No need to run Public Key Infrastructure (PKI)',
    subTitle: '',
    description: (
      <>
        Nobody loves running their own{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          PKI
        </Box>
        . It's complicated, you still need to work out how to securely handle your root certificate
        and keys, have policies around lifecycle management... a lot of extra infrastructure and
        orchestration.
        <br />
        <br />
        With Ockam, each app generates keys and establishes trust directly there's no need to run
        your own PKI systems.
      </>
    ),
    imageSrc: publicKeySrc,
    alt: 'Illustration indicating no need for Public Key Infrastructure',
  },
  {
    title: 'Any language',
    subTitle: '',
    description: (
      <>
        Ockam can work with any language. You've the flexibility to write your applications in a mix
        of Java, Python, Go, Scala, you name it!
      </>
    ),
    imageSrc: anyLanguageSrc,
    alt: 'Illustration of various programming languages including Java, Python, Go, TypeScript, Ruby, and Rust',
  },
  {
    title: 'No app code changes',
    subTitle: 'No code changes required',
    description: (
      <>
        Just a single configuration change: update the broker host to point to the secure channel
        that Ockam sets up on{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          localhost
        </Box>{' '}
        for each app. It takes a couple of seconds, and won't require you to change any of the
        business logic or implementation in your apps.
      </>
    ),
    imageSrc: noAppCodeChangesSrc,
    alt: 'Illustration of code with a red cross indicating no code changes required',
  },
  {
    title: 'Self-managed deployments',
    subTitle: 'Cloud & On-prem / Bring Your Own Cloud',
    description: (
      <>
        Running Kafka yourself? Maybe a managed offering inside your own VPC? Ockam works wherever
        you need it.
      </>
    ),
    imageSrc: selfManagedSrc,
    alt: 'Illustration showing cloud and on-premise server deployments',
  },
  {
    title: 'Heterogeneous deployments',
    subTitle: '',
    description: (
      <>
        Ockam's agnostic to network-level and cloud-specific features. Run a mix of apps across the
        major cloud vendors to access specific value-add services without the complication of
        configuring secure cross-cloud access to a specific{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          KMS
        </Box>{' '}
        or setting services like Private Link or VPC Peering.
      </>
    ),
    imageSrc: heterogenousDeploymentsSrc,
    alt: 'Illustration showing heterogeneous deployments across multiple cloud vendors including Google Cloud, AWS, and Azure',
  },
  {
    title: 'Available today',
    subTitle: '',
    description: (
      <>
        All of these features are available and production ready, today. There's no waiting to get
        accepted into a beta program, for a professional services team to draft a statement of work,
        or to even speak to our sales team (though we would still love to speak with you!). You can{' '}
        <Box
          as="a"
          target="_blank"
          textDecoration="underline"
          href="https://docs.ockam.io/download"
        >
          create an account for free
        </Box>{' '}
        and have{' '}
        <Box
          as="a"
          target="_blank"
          textDecoration="underline"
          href="https://docs.ockam.io/guides/examples/end-to-end-encrypted-kafka"
        >
          Ockam securing your Kafka environment within minutes
        </Box>
        .
      </>
    ),
    imageSrc: getStartedSrc,
    alt: 'Illustration of a calendar with a check mark indicating availability today',
  },
];

export default FEATURES;
