/* eslint-disable react/no-unescaped-entities */
import { Box } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';

import { GITHUB_REPO_OCKAM } from '@consts/externalResources';

import productGrowthSrc from '../assets/product-growth.png';
import customerExpSrc from '../assets/customer-exp.png';
import trustSrc from '../assets/trust.png';
import multiCloudSrc from '../assets/multi-cloud.png';
import securitySrc from '../assets/security.png';
import dataAuthenticity from '../assets/data-authenticity.png';
import selfManagedSrc from '../assets/self-managed.png';
import createAgentSrc from '../assets/create-agent.png';
import customerAgentSrc from '../assets/customer-agent.png';
import connectToCustomerSrc from '../assets/connect-to-customer.png';

const FEATURES = [
  {
    title: 'Unlock new product growth',
    subTitle: '',
    description: (
      <>
        If you're running a SaaS platform, Ockam allows you to offer new capabilities to your
        highest value customers. Our{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          zero-trust
        </Box>{' '}
        and{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          networkless
        </Box>{' '}
        approach provides secure point-to-point connections to customer-hosted systems.
        <br />
        <br />
        Expand into high ACV customer segments with features that support entirely private
        connectivity demanded by large enterprises. Add new high-value features that integrate into{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          self-hosted
        </Box>{' '}
        systems.
      </>
    ),
    imageSrc: productGrowthSrc,
    alt: 'Illustration showing a SaaS platform connected to various customer-hosted systems',
  },
  {
    title: 'Frictionless customer experience',
    subTitle: '',
    description: (
      <>
        Your customers get the user experience they deserve. Instead of pushing all the hard
        connectivity problems, such as setting up VPNs or changing firewall configurations, you can
        offer a holistic solution that feels like a natural{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          part of your product
        </Box>
        .
        <br />
        <br />
        Provide them a custom your-company-agent to run that will have their systems connected
        within minutes.
      </>
    ),
    imageSrc: customerExpSrc,
    alt: 'Illustration showing a secure portal established between a SaaS app and customer data',
  },
  {
    title: 'Trust at the application level',
    subTitle: 'End-to-end guarantees over any multi-hop, multi-protocol topology',
    description: (
      <>
        Traditional solutions like{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          peering
        </Box>
        ,{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          VPNs
        </Box>
        , and maintaining allow lists - network-level approaches that connect entire networks to
        each other. To reduce lateral movement within the networks further controls are then
        applied.
        <br />
        <br />
        By elevating trust to the application level, Ockam provides fine-grained{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          access controls
        </Box>{' '}
        that map to actual business needs. There's no long-standing assumptions about networks, and
        secure communication guarantees push beyond network perimeters and system boundaries —
        they're established all the way through to the applications processing your data.
      </>
    ),
    imageSrc: trustSrc,
    alt: 'Illustration of secure channel established at the application level over a multi-hop, multi-protocol topology',
  },
  {
    title: 'Support multi-cloud deployments',
    subTitle: '',
    description: (
      <>
        Ockam's agnostic to network-level and cloud-specific features. That means no matter which
        cloud your customers are using, or if they're using multiple clouds, you've a single
        approach that works consistently wherever your customers are. That includes other on-prem
        environments, data centers, or even a server that's under someone's desk.
      </>
    ),
    imageSrc: multiCloudSrc,
    alt: 'Illustration showing support for multi-cloud deployments across Google Cloud, AWS, and Azure',
  },
  {
    title: 'Trust your security team can depend on',
    subTitle: '',
    description: (
      <>
        Ockam's approach uses existing and well established open source technologies and frameworks.
        The cryptographic and messaging protocols are{' '}
        <Box
          as="a"
          target="_blank"
          textDecoration="underline"
          href="https://docs.ockam.io/reference/protocols"
        >
          publicly documented
        </Box>{' '}
        and the implementations are{' '}
        <Box as="a" target="_blank" textDecoration="underline" href={GITHUB_REPO_OCKAM.href}>
          open source and available on GitHub
        </Box>
        .
        <br />
        <br />
        Also available is a published and independent third-party audit by the security research
        firm{' '}
        <Box as="a" target="_blank" textDecoration="underline" href="https://www.trailofbits.com/">
          Trail of Bits
        </Box>
        .
      </>
    ),
    imageSrc: securitySrc,
    alt: 'Illustration of five stars representing trust and reliability',
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
        around the authenticity and integrity of the messages moving through your system.
      </>
    ),
    imageSrc: dataAuthenticity,
    alt: 'Illustration showing guaranteed authentic data being transferred between two entities',
  },
  {
    title: 'Self-managed deployments',
    subTitle: 'Cloud & On-prem / Bring Your Own Cloud',
    description: (
      <>
        Ockam Orchestrator is a cloud-based fully managed solution that allows you to be successful
        within minutes. With SLA guarantees and publicly available historical uptime{' '}
        <Box as="span" color="gray.500" fontWeight="700">
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
  {
    title: 'Create an agent',
    subTitle: 'It’s as simple as that',
    description: (
      <>
        Either add Ockam to your existing distribution, or wrap one of our existing deployment
        options with your own branding to a custom package within minutes.
      </>
    ),
    imageSrc: createAgentSrc,
    alt: 'Illustration of creating an agent with custom branding',
  },
  {
    title: 'Customer runs your agent',
    subTitle: '',
    description: (
      <>
        Add a way for a customer to request a ticket. They then run{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          your agent
        </Box>
        , passing in the ticket. That's all they have to do! No managing hostnames or routes,
        changing ingress rules on firewalls.
      </>
    ),
    imageSrc: customerAgentSrc,
    alt: 'Illustration showing the process of a customer running your agent with a secure connection established',
  },
  {
    title: 'Connect to your customer',
    subTitle: '',
    description: (
      <>
        Whenever you need to connect to the customer system start an Ockam Inlet. A mutually
        authenticated secure portal will be immediately established. And via what we call{' '}
        <Box as={NextLink} textDecoration="underline" href="/">
          virtual adjacency
        </Box>{' '}
        the customer system will be accessible as though it was running on{' '}
        <Box as="span" color="gray.500" fontWeight="700">
          localhost
        </Box>
        . All without the need to for the customer to make their systems reachable from the public
        internet. And without the risk of you being able to reach anything else in their network due
        to a misconfiguration on their end. A true point to point connection. Exactly what you need,
        and nothing more.
      </>
    ),
    imageSrc: connectToCustomerSrc,
    alt: 'Illustration showing a virtual adjacency between a SaaS platform and customer data',
  },
];

export default FEATURES;
