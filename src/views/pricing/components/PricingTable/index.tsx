import React, { ReactElement } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';

import {
  Feature,
  FEATURES,
  hasFeature,
  SEGMENTS,
  Tier,
  tierLimit,
  tiersForSegment,
} from '@root/components/Packaging/tiers';

import BaseCheckIcon from './assets/check.svg';

const CheckIcon = (): ReactElement => <Box as={BaseCheckIcon} display="inline-block" />;

const tiers: Tier[] = SEGMENTS.map((segment) => tiersForSegment(segment.name)).flat();

const PricingTable = (): ReactElement => {
  const showFeatureState = (tier: Tier, feature: Feature): JSX.Element => {
    if (hasFeature(tier, feature)) {
      const limit = tierLimit(tier, feature);
      if (limit) {
        return <Td whiteSpace="nowrap">{limit}</Td>;
      }
      return (
        <Td>
          <CheckIcon />
        </Td>
      );
    }
    return <Td>&ndash;</Td>;
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
            <Th colSpan={segment.tiers.length}>{segment.name}</Th>
          ))}
        </Tr>
        <Tr>
          {tiers.map((tier) => (
            <Th>{tier.name}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {FEATURES.map((feature) => (
          <Tr>
            <Td>{feature.name}</Td>
            {tiers.map((tier) => showFeatureState(tier, feature))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default PricingTable;
