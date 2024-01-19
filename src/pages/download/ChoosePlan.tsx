import { FC } from 'react';
import { Box, HStack, Heading, VStack } from '@chakra-ui/react';

import { SEGMENTS, TIERS, Tier, darken, gentlyLighten } from '@root/components/Packaging/tiers';
import PricingCard from '@root/components/Packaging/PricingCard';
import ActionButton from '@root/components/Packaging/ActionButton';

const cta = (tier: Tier): string => {
  if (tier.price === '$0') return 'Get started';
  if (tier.name === 'Business Critical') return 'Contact Sales';
  return 'Start 14 day trial';
};

type Props = {
  onComplete: Function;
};
const ChoosePlan: FC<Props> = ({ onComplete }) => {
  const onClick = (): void => {
    onComplete('plan');
  };
  return (
    <Box>
      <Heading as="h2" size="h2" mb="8">
        Choose a plan
      </Heading>
      {SEGMENTS.map((segment) => (
        <VStack align="left" mb="8">
          <Heading as="h3" size="h4">
            For {segment.name}
          </Heading>
          <HStack>
            {TIERS.filter((tier) => segment.tiers.includes(tier.name)).map((tier) => (
              <PricingCard
                slim
                data={{
                  price: tier.price,
                  name: tier.name,
                  priceUnit: tier.price_unit,
                  priceInterval: tier.price_interval,
                  floor: tier.floor,
                  onlyFloor: tier.onlyFloor,
                }}
                segmentColor={segment.color}
                borderStyle="solid"
                borderColor="#ddd"
                borderWidth="1px"
                borderRadius={15}
                isPopular={tier.isPopular}
                display="flex"
                flexDirection="column"
                button={
                  <ActionButton
                    variant="outline"
                    borderWidth="2px"
                    href="#"
                    onClick={onClick}
                    border="none"
                    mt="4"
                    borderColor={darken(segment.color)}
                    color={darken(segment.color)}
                    background={gentlyLighten(segment.color)}
                    _hover={{
                      background: darken(segment.color),
                      color: gentlyLighten(segment.color),
                    }}
                  >
                    {cta(tier)}
                  </ActionButton>
                }
              />
            ))}
          </HStack>
        </VStack>
      ))}
    </Box>
  );
};

export default ChoosePlan;
