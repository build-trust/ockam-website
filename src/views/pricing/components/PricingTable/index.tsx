import React, { ReactElement } from 'react';
import { Table, TableContainer, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';

import BaseCheckIcon from './assets/check.svg';

const CheckIcon = (): ReactElement => <Box as={BaseCheckIcon} display="inline-block" />;

const PricingTable = (): ReactElement => (
  <TableContainer overflowY="auto" maxH="46.25rem" mx="auto" maxW="68.375rem">
    <Table variant="pricing">
      <Thead position="sticky" top={0} bg="white" zIndex={1}>
        <Tr>
          <Th rowSpan={2} width="15.5rem" fontSize="1.75rem">
            Plan Comparison
          </Th>
          <Th colSpan={2}>Developers</Th>
          <Th colSpan={4}>Companies</Th>
          <Th colSpan={2}>Enterprises</Th>
        </Tr>
        <Tr>
          <Th>Free</Th>
          <Th>Premium</Th>
          <Th>Bronze</Th>
          <Th>Silver</Th>
          <Th>Gold</Th>
          <Th>Platinum</Th>
          <Th>Enterprise</Th>
          <Th>Business Critical</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Production licence</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
        <Tr>
          <Td>Pay-as-you-go</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
        </Tr>
        <Tr>
          <Td>Bring your own cloud (BYOC) relays</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
        <Tr>
          <Td>Bring your own cloud (BYOC) credential authorities</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
        <Tr>
          <Td>Ockam support</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
        </Tr>
        <Tr>
          <Td>Ockam support 24h - response time SLA</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
        </Tr>
        <Tr>
          <Td>Ockam support 4h - response time SLA</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
        <Tr>
          <Td>Uptime 99% SLA</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
        </Tr>
        <Tr>
          <Td>Community-based support</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
        </Tr>
        <Tr>
          <Td>Uptime 99.95% SLA</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
        <Tr>
          <Td>Dedicated nodes</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
        </Tr>
        <Tr>
          <Td>Throughput optimized nodes</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
        <Tr>
          <Td>Yearly commit - 20% discount included</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
        <Tr>
          <Td>Attribute-based access controls</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
        <Tr>
          <Td>Ockam command</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
        <Tr>
          <Td>Portals for mac</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
        <Tr>
          <Td>Programming libraries</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
        <Tr>
          <Td>Secure Channels</Td>
          <Td>1</Td>
          <Td>5</Td>
          <Td>10</Td>
          <Td>Unlimited</Td>
          <Td>Unlimited</Td>
          <Td>Unlimited</Td>
          <Td>Unlimited</Td>
          <Td>Unlimited</Td>
        </Tr>
        <Tr>
          <Td>Secure Channels supported within sales</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>100</Td>
          <Td>1000</Td>
          <Td>Unlimited</Td>
          <Td>Unlimited</Td>
          <Td>Unlimited</Td>
        </Tr>
        <Tr>
          <Td>Projects</Td>
          <Td>1</Td>
          <Td>1</Td>
          <Td>1</Td>
          <Td>3</Td>
          <Td>10</Td>
          <Td>Unlimited</Td>
          <Td>Unlimited</Td>
          <Td>Unlimited</Td>
        </Tr>
        <Tr>
          <Td>Custom branding/whitelabel</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
        <Tr>
          <Td>High availability relays</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
        <Tr>
          <Td>High availability credential authorities</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
        <Tr>
          <Td>High availability multi-region</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
        <Tr>
          <Td>High availability rendezvous routing</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
        <Tr>
          <Td>Custom routes</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
        <Tr>
          <Td>Data transfer</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>$0.10 GB</Td>
          <Td>$0.10 GB</Td>
          <Td>$0.10 GB</Td>
          <Td>$0.00-0.10 GB</Td>
          <Td>$0.00-0.10 GB</Td>
          <Td>$0.00-0.10 GB</Td>
        </Tr>
        <Tr>
          <Td>Data transfer CAP</Td>
          <Td>1 GB/day</Td>
          <Td>1 GB/day</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>-</Td>
          <Td>
            <CheckIcon />
          </Td>
          <Td>
            <CheckIcon />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </TableContainer>
);

export default PricingTable;
