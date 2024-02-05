import { FC, MouseEvent, ReactElement, useEffect, useState } from 'react';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { HiCheck } from 'react-icons/hi';

import { SEGMENTS, TIERS, Tier, darken, gentlyLighten } from '@root/components/Packaging/tiers';
import PricingCard from '@root/components/Packaging/PricingCard';
import ActionButton from '@root/components/Packaging/ActionButton';
import { User } from '@root/components/Auth';
import Auth0Api from '@root/api/auth0Api';
import { CONTACT_FORM_PATH } from '@root/consts/paths';

import MarketplaceSetup from './MarketplaceSetup';

const cta = (tier: Tier): string => {
  if (tier.price === '$0') return 'Get started';
  if (tier.name === 'Business Critical') return 'Contact Sales';
  return 'Start 14 day trial';
};

type Props = {
  onComplete: Function;
  hideNext: Function;
  showNext: Function;
  user?: User;
};
const ChoosePlan: FC<Props> = ({ onComplete, user, hideNext, showNext }) => {
  const [purchasing, setPurchasing] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const [purchaedPlan, setPurchasedPlan] = useState<string>();
  const [setupMarketplace, setSetupMarketplace] = useState<boolean>(false);

  useEffect(() => {
    if (setupMarketplace) {
      showNext();
    } else {
      hideNext();
    }
  }, [hideNext, setupMarketplace, showNext]);

  const onClick = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    const plan = (e.target as HTMLButtonElement).getAttribute('data-plan');
    if (plan) {
      setPurchasing(true);
      setPurchasedPlan(plan);
      if (user) {
        Auth0Api.managementApi.updateUserMetadata(user.token, user.userId, { plan });
      }
      setPurchasing(true);
      setTimeout(() => {
        const t = TIERS.find((tier) => tier.name === plan);
        if (t?.marketplaceOnly) {
          showNext();
          setSetupMarketplace(true);
        } else if (t?.contactSalesOnly) {
          setPurchased(true);
          const ctaUrl = `${window.location.protocol}//${
            window.location.host
          }${CONTACT_FORM_PATH}?reason=${encodeURI(
            `The ${plan} plan is only available for purchase via speaking to our sales team.`,
          )}`;
          setTimeout(() => {
            window.location.href = ctaUrl;
          }, 2000);
        } else {
          setPurchased(true);
          setTimeout(() => {
            onComplete();
            showNext();
          }, 2000);
        }
      }, 4000);
    }
  };

  const planSelection = (): ReactElement => (
    <>
      <Heading as="h2" size="h2" mb="8">
        Choose a plan
      </Heading>
      {SEGMENTS.map((segment) => (
        <VStack align="left" mb="8">
          <Heading as="h3" size="h4">
            For {segment.name}
          </Heading>
          <Text mx={0} maxW="45em" letterSpacing="-0.5px">
            {segment.text}
          </Text>
          <Flex
            direction={{ base: 'column', xl: 'row' }}
            gap={4}
            alignItems={{ base: 'start' }}
            mt={4}
          >
            {TIERS.filter((tier) => segment.tiers.includes(tier.name)).map((tier) => (
              <PricingCard
                slim
                fade={purchasing && purchaedPlan !== tier.name}
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
                    data-plan={tier.name}
                    border="none"
                    mt="4"
                    isLoading={!purchased && purchaedPlan === tier.name}
                    leftIcon={purchased ? <HiCheck /> : undefined}
                    borderColor={darken(segment.color)}
                    color={darken(segment.color)}
                    background={gentlyLighten(segment.color)}
                    _hover={{
                      background: darken(segment.color),
                      color: gentlyLighten(segment.color),
                    }}
                  >
                    {!purchased && cta(tier)}
                  </ActionButton>
                }
              />
            ))}
          </Flex>
        </VStack>
      ))}
    </>
  );

  return (
    <Box transition="opacity 1s ease-in" opacity={purchased ? 0 : 1}>
      {!setupMarketplace && planSelection()}
      {setupMarketplace && <MarketplaceSetup plan={purchaedPlan} />}
    </Box>
  );
};

export default ChoosePlan;
