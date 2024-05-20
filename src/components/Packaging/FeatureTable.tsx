import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from '@chakra-ui/react';
import { FunctionComponent, ReactNode } from 'react';
import { PiCheckCircleDuotone as Check } from 'react-icons/pi';

import {
  Tier,
  Feature,
  Segment,
  tierColorLight,
  tierColorDark,
  tierLimit,
  lighten,
  darken,
} from '@components/Packaging/tiers';

const hasFeature = (tier: Tier, feature: Feature): boolean => {
  if (feature.tiers.indexOf('*') >= 0) return true;
  if (feature.tiers.indexOf(tier.name) >= 0) return true;
  return false;
};

const featureValue = (tier: Tier, feature: Feature): ReactNode | string => {
  if (hasFeature(tier, feature)) {
    if (feature.hasLimits) {
      return tierLimit(tier, feature) || '';
    }
    return <Check style={{ margin: '0 auto' }} size="1.5em" />;
  }
  return `\u2013`;
};

type FeatureProps = {
  tiers: Tier[];
  features: Feature[];
  segments: Segment[];
};
const FeatureTable: FunctionComponent<FeatureProps> = ({ tiers, features, segments }) => (
  <TableContainer
    fontSize="xs"
    maxWidth={{ base: '100%', lg: 'auto' }}
    margin="0 auto"
    padding="0"
    height={{ base: '30vh', lg: 'auto' }}
    position="relative"
    overflowY="scroll"
  >
    <Table variant="simple">
      <Thead>
        <Tr position="sticky" zIndex="2" style={{ top: 0, left: 0 }}>
          <Th
            key="blank-header-column-1"
            border="none"
            style={{ top: 0, left: 0 }}
            zIndex="2"
            position="sticky"
            p={{ base: 3 }}
            background="white"
          >
            &nbsp;
          </Th>
          {segments.map((segment) => (
            <Th
              whiteSpace="nowrap"
              height="10em"
              colSpan={segment.tiers.length}
              textAlign="center"
              key={`${segment.name}-a`}
              background={darken(segment.color)}
              color={lighten(segment.color)}
              border="none"
              style={{ top: 0 }}
              p={{ base: 2 }}
              px={{ base: 2, lg: 10 }}
            >
              {/* <Box style={{ transform: " rotate(315deg)", }}> */}
              {segment.name}
              {/* </Box> */}
            </Th>
          ))}
        </Tr>
        <Tr position="sticky" zIndex="2" style={{ top: '3.35em', left: 0 }}>
          <Th
            key="blank-header-column-2"
            border="none"
            style={{ top: 0, left: 0 }}
            p={{ base: 2 }}
            background="white"
            zIndex="2"
            position="sticky"
          >
            &nbsp;
          </Th>
          {tiers.map((tier) => (
            <Th
              textAlign="left"
              key={tier.name}
              background={tierColorLight(tier)}
              color={tierColorDark(tier)}
              border="none"
              style={{ top: 0 }}
              p={{ base: 2 }}
              px={{ base: 2, lg: 10 }}
              height="11em"
            >
              <Box style={{ transform: 'rotate(-55deg)' }}>{tier.name}</Box>
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody fontSize={{ base: 'xx-small', lg: 'sm' }}>
        {features.map((feature) => (
          <Tr key={feature.name}>
            <Th
              border="none"
              position="sticky"
              style={{ left: 0 }}
              background="white"
              fontSize={{ base: 'xx-small' }}
              whiteSpace={{ base: 'normal' }}
            >
              {feature.name}
            </Th>
            {tiers.map((tier) => {
              if (hasFeature(tier, feature))
                return (
                  <Td
                    textAlign="center"
                    key={`${feature.name}-${tier.name}`}
                    background={tierColorLight(tier)}
                    color={tierColorDark(tier)}
                    border="none"
                    p={{ base: 2, lg: 4 }}
                  >
                    {featureValue(tier, feature)}️
                  </Td>
                );
              return (
                <Td
                  textAlign="center"
                  background={tierColorLight(tier)}
                  color={tierColorDark(tier)}
                  key={`${feature.name}-${tier.name}`}
                  border="none"
                  p={{ base: 2 }}
                >{`\u2013`}</Td>
              );
            })}
          </Tr>
        ))}
      </Tbody>
      {/* <Tfoot>
        <Tr>
          <Th key="blank-footer-column-1" background="white" position="sticky" style={{ left: 0 }}>
            &nbsp;
          </Th>
          {tiers.map((tier) => (
            <Th
              key={`cta-${tier.name}`}
              color={tierColorDark(tier)}
              p={{ base: 2 }}
              textAlign="center"
            >
              <Link href={tier.cta.url}>{tier.cta.text}</Link> 
            </Th>
          ))}
        </Tr>
      </Tfoot> */}
    </Table>
  </TableContainer>
);

export default FeatureTable;
