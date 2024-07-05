/* eslint-disable react/no-unescaped-entities */
import { Box } from '@chakra-ui/react';
import React from 'react';

import appToTrustSrc from '../assets/app-to-trust.png';
import sharedSecretsSrc from '../assets/shared-secrets.png';
import shippingSecrets from '../assets/shipping-secrets.png';
import keyRotation from '../assets/key-rotation.png';
import dataAuthenticity from '../assets/data-authenticity.png';
import trustSrc from '../assets/trust.png';
import publicKeySrc from '../assets/public-key.png';
import anyLanguageSrc from '../assets/any-language.png';
import cloudSupportSrc from '../assets/cloud-support.png';
import selfManagedSrc from '../assets/self-managed.png';

const FEATURES = [
  {
    title: 'App-to-app trust',
    subTitle: 'End-to-end guarantees over any multi-top, multi-protocol topology',
    description: (
      <>
        Meeting modern data control expectations requires{' '}
        <Box as="span" color="brand.500" fontWeight="700">
          guarantees
        </Box>{' '}
        that the intended applications are exclusively the apps that can connect to your systems.
        Ockam moves trust to the application layer by building a mutually authenticated and
        encrypted{' '}
        <Box as="span" color="brand.500" fontWeight="700">
          communication
        </Box>{' '}
        channel between those systems.
      </>
    ),
    imageSrc: appToTrustSrc,
    alt: 'Secure connection illustration',
  },
  {
    title: 'No more shared secret keys',
    subTitle: 'Traditional attempts at restricting key access to specific apps',
    description: (
      <>
        Sharing secret keys across many apps and services increases the likelihood of secret keys
        leaking, in addition to eroding any guarantees that only intended apps can{' '}
        <Box as="span" color="brand.500" fontWeight="700">
          access
        </Box>{' '}
        sensitive data. Teams then layer in additional credential management approaches,
        network-level controls, and various other security approaches in an attempt to have a
        somewhat reliable assumption that only the intended app(s) were able to use the shared
        secret{' '}
        <Box as="span" color="brand.500" fontWeight="700">
          keys
        </Box>
        .
        <br />
        <br />
        With Ockam, each app generates its own{' '}
        <Box as="span" color="brand.500" fontWeight="700">
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
        <Box as="span" color="brand.500" fontWeight="700">
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
        <Box as="span" color="brand.500" fontWeight="700">
          rotate
        </Box>{' '}
        their encryption keys. If a secret key is ever leaked the data at risk is reduced to the
        amount sent in the small window of that secret key was active. Don't put your historical and
        future data at risk because rotating secret{' '}
        <Box as="span" color="brand.500" fontWeight="700">
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
        <Box as="span" color="brand.500" fontWeight="700">
          guarantees
        </Box>{' '}
        around the authenticity and integrity of the data moving through your system.
      </>
    ),
    imageSrc: dataAuthenticity,
    alt: 'Illustration showing guaranteed authentic data being transferred between two entities',
  },
  {
    title: 'Trust your security team can depend on',
    subTitle: '',
    description: (
      <>
        Ockam's approach uses existing and well-established open source technologies and frameworks.
        We build trust through transparency so your CISO can be confident everything meets their
        requirements. The cryptographic and messaging protocols are{' '}
        <Box as="span" color="brand.500" fontWeight="700">
          publicly documented
        </Box>{' '}
        and the implementations are{' '}
        <Box as="span" color="brand.500" fontWeight="700">
          open source and available on GitHub
        </Box>
        . We've published an independent third-party audit by the security research firm{' '}
        <Box as="span" color="brand.500" fontWeight="700">
          Trail of Bits
        </Box>
        . The{' '}
        <Box as="span" color="brand.500" fontWeight="700">
          current status of our latest audits and compliance controls
        </Box>{' '}
        are also available.
      </>
    ),
    imageSrc: trustSrc,
    alt: 'Illustration of five stars representing trust and reliability',
  },
  {
    title: 'No need to run Public Key Infrastructure (PKI)',
    subTitle: '',
    description: (
      <>
        Nobody loves running their own{' '}
        <Box as="span" color="brand.500" fontWeight="700">
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
    title: 'Complete multi-cloud support',
    subTitle: '',
    description: (
      <>
        Ockam is agnostic to{' '}
        <Box as="span" color="brand.500" fontWeight="700">
          network-level
        </Box>{' '}
        and cloud-specific features. Whatever cloud you're on, even if you're running a multi-cloud
        setup, Ockam is a single approach that will provide secure point-to-point wherever you need
        it.
      </>
    ),
    imageSrc: cloudSupportSrc,
    alt: 'Illustration showing multi-cloud support with connections to Google Cloud, AWS, and Azure',
  },
  {
    title: 'Self-managed deployments',
    subTitle: 'Cloud & On-prem / Bring Your Own Cloud',
    description: (
      <>
        Ockam Orchestrator is a cloud-based fully managed solution that allows you to be successful
        within minutes. With SLA guarantees and publicly available historical uptime{' '}
        <Box as="span" color="brand.500" fontWeight="700">
          reporting
        </Box>
        , it's the preferred deployment approach for the majority of customers. For those with
        specific self-managed deployment requirements, Ockam Business Critical provides options for
        running entirely within your own VPC or on-prem.
      </>
    ),
    imageSrc: selfManagedSrc,
    alt: 'Illustration showing cloud and on-premise server deployments',
  },
];

export default FEATURES;
