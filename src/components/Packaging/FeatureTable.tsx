import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Link } from '@chakra-ui/react';
import { FunctionComponent, ReactNode } from 'react';
import { PiCheckCircleDuotone as Check } from 'react-icons/pi';

import {
  Tier,
  Feature,
  tierColor,
  tierColorLight,
  tierColorDark,
  tierLimit,
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
};
const FeatureTable: FunctionComponent<FeatureProps> = ({ tiers, features }) => (
  <TableContainer
    fontSize="xs"
    maxWidth={{ base: '100%', lg: 'auto' }}
    margin="0 auto"
    padding="0"
    height={{ base: '80vh', lg: 'auto' }}
    overflowX="scroll"
    overflowY="scroll"
    position="relative"
  >
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th
            key="blank-header-column-1"
            border="none"
            position="sticky"
            style={{ top: 0, left: 0 }}
            borderTop="4px solid white"
            borderBottom="none"
            zIndex="2"
            p={{ base: 2 }}
            background="white"
          >
            &nbsp;
          </Th>
          {tiers.map((tier) => (
            <Th
              textAlign="center"
              key={tier.name}
              borderTop={`4px solid ${tierColor(tier)}`}
              background={tierColorLight(tier)}
              color={tierColorDark(tier)}
              borderBottom="none"
              position="sticky"
              style={{ top: 0 }}
              p={{ base: 2 }}
              px={{ base: 2, lg: 10 }}
            >
              {tier.name}
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
      <Tfoot>
        <Tr>
          <Th
            key="blank-footer-column-1"
            background="white"
            zIndex="2"
            position="sticky"
            style={{ left: 0 }}
          >
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
      </Tfoot>
    </Table>
  </TableContainer>
);

export default FeatureTable;
