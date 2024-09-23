import React, { ReactElement } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';

import {
  Feature,
  FEATURES,
  gentlyLighten,
  hasFeature,
  isLastTierInSegment,
  SEGMENTS,
  Tier,
  tierColor,
  tierColorLight,
  tierLimit,
  tiersForSegment,
} from '@root/components/Packaging/tiers';

import BaseCheckIcon from './assets/check.svg';

const CheckIcon = (): ReactElement => <Box as={BaseCheckIcon} display="inline-block" />;

const tiers: Tier[] = SEGMENTS.map((segment) => tiersForSegment(segment.name)).flat();

const columnEdgeStyle = '1px solid #EFF1F1';

const PricingTable = (): ReactElement => {
  const showFeatureState = (tier: Tier, feature: Feature): JSX.Element => {
    const key = `tier-feature-${tier.name}-${feature.name}`;
    if (hasFeature(tier, feature)) {
      const limit = tierLimit(tier, feature);
      if (limit) {
        return (
          <Td
            whiteSpace="nowrap"
            key={key}
            backgroundColor={tierColorLight(tier)}
            style={{ borderRight: isLastTierInSegment(tier) ? columnEdgeStyle : 'none' }}
          >
            {limit}
          </Td>
        );
      }
      return (
        <Td
          key={key}
          backgroundColor={tierColorLight(tier)}
          style={{ borderRight: isLastTierInSegment(tier) ? columnEdgeStyle : 'none' }}
        >
          <CheckIcon />
        </Td>
      );
    }
    return (
      <Td
        key={key}
        backgroundColor={tierColorLight(tier)}
        style={{ borderRight: isLastTierInSegment(tier) ? columnEdgeStyle : 'none' }}
      >
        &ndash;
      </Td>
    );
  };

  return (
    <Table variant="pricing" maxW="68.375rem" mx="auto">
      <Thead
        position="sticky"
        top="calc(5.375rem + var(--navbar-offset, 0px))"
        bg="white"
        zIndex={1}
      >
        <Tr>
          <Th rowSpan={2} width="15.5rem" fontSize="1.75rem">
            Plan Comparison
          </Th>
          {SEGMENTS.map((segment) => (
            <Th
              colSpan={segment.tiers.length}
              key={`th-${segment.name}`}
              backgroundColor={segment.color}
            >
              {segment.name}
            </Th>
          ))}
        </Tr>
        <Tr>
          {tiers.map((tier) => (
            <Th key={`tier-${tier.name}`} backgroundColor={gentlyLighten(tierColor(tier))}>
              {tier.name}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {FEATURES.map((feature) => (
          <Tr key={`feature-${feature.name}`}>
            <Td>{feature.name}</Td>
            {tiers.map((tier) => showFeatureState(tier, feature))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default PricingTable;
