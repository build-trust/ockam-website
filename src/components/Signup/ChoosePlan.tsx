import { FC, MouseEvent, ReactElement, useCallback, useEffect, useState } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import { HiCheck } from 'react-icons/hi';

import {
  FEATURES,
  Feature,
  SEGMENTS,
  TIERS,
  Tier,
  darken,
  gentlyLighten,
  tierLimit,
} from '@root/components/Packaging/tiers';
import PricingCard from '@root/components/Packaging/PricingCard';
import ActionButton from '@root/components/Packaging/ActionButton';
import { CONTACT_FORM_PATH } from '@root/consts/paths';

import MarketplaceSetup from './MarketplaceSetup';
import Sponsorship from './Sponsorship';

const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);

const cta = (tier: Tier, currentPlan?: string): string => {
  if (currentPlan && capitalize(currentPlan) === tier.name) return 'Your current plan';
  if (tier.price === 0) return 'Get started';
  if (tier.name === 'Business Critical') return 'Contact Sales';
  if (tier.name === 'Enterprise') return 'Contact Sales';
  return 'Start 14 day trial';
};

type Props = {
  onComplete: Function;
  hideNext: Function;
  showNext: Function;
  hasPaymentMethod: boolean;
  currentPlan?: string;
};
const ChoosePlan: FC<Props> = ({
  onComplete,
  hideNext,
  showNext,
  currentPlan,
  hasPaymentMethod,
}) => {
  const [purchasing, setPurchasing] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const [purchasedPlan, setPurchasedPlan] = useState<string>();
  const [setupMarketplace, setSetupMarketplace] = useState<boolean>(false);
  const [setupSponsorship, setSetupSponsorship] = useState<boolean>(false);

  const purchase = useCallback(
    async (plan: string): Promise<void> => {
      setPurchasing(true);
      setPurchasedPlan(plan);
      // if (user) {
      //   Auth0Api.managementApi.updateUserMetadata(user.token, user.userId, { plan });
      // }
      setPurchasing(true);
      setTimeout(() => {
        const t = TIERS.find((tier) => tier.name === plan);
        if (t?.marketplaceOnly) {
          if (hasPaymentMethod) {
            setTimeout(() => {
              onComplete();
            }, 2000);
          } else {
            showNext();
            setSetupMarketplace(true);
          }
        } else if (t?.sponsorship) {
          showNext();
          setSetupSponsorship(true);
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
          }, 2000);
        }
      }, 4000);
    },
    [onComplete, showNext, hasPaymentMethod],
  );

  useEffect(() => {
    if (setupMarketplace || setupSponsorship) {
      showNext();
      window.scrollTo(0, 0);
    } else {
      hideNext();
    }
  }, [hideNext, setupMarketplace, setupSponsorship, showNext]);

  const onClick = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    const plan = (e.target as HTMLButtonElement).getAttribute('data-plan');
    if (plan) {
      await purchase(plan);
    }
  };

  const expanded = SEGMENTS.reduce((p, c, cIdx) => {
    if (c.expanded) {
      p.push(cIdx);
    }
    return p;
  }, [] as number[]);

  const hasFeature = (tier: Tier, feature: Feature): boolean => {
    if (feature.tiers.indexOf('*') >= 0) return true;
    if (feature.tiers.indexOf(tier.name) >= 0) return true;
    return false;
  };

  const CARDS = TIERS.filter((tier) => !['Platform'].includes(tier.name)).map((tier, idx) => {
    const features = FEATURES.filter((f) => f.onCard)
      .filter((feature) => {
        const segment = SEGMENTS.find((s) => s.tiers.includes(tier.name));
        if (idx > 0) {
          if (feature.hasLimits) {
            if (tierLimit(tier, feature) === tierLimit(TIERS[idx - 1], feature)) {
              return false;
            }
            return true;
          }
          // if (feature.tiers.indexOf('*') >= 0) return false;
          if (hasFeature(TIERS[idx - 1], feature) && segment?.tiers.includes(TIERS[idx - 1].name))
            return false;
        }
        if (feature.tiers.indexOf('*') >= 0) return true;
        if (feature.tiers.indexOf(tier.name) >= 0) return true;
        return false;
      })
      .map((feature) => {
        const f = { ...feature };
        if (f.hasLimits) {
          f.limits = tierLimit(tier, feature);
        }
        return f;
      });
    return { ...tier, features, tier };
  });

  const planSelection = (): ReactElement => (
    <>
      <Heading as="h2" size="h2" mb="8">
        Choose a plan
      </Heading>
      <Text variant="readabilityOptimized">
        We&apos;ve a range of plans to suit any need. If you plan to use Ockam within your
        organization get started for free with a 14 day trial on one of our fully-featured Company
        plans. Individual users can sign up for one of our Developer plans.
      </Text>

      <Text variant="readabilityOptimized">
        For a complete list of the features and differences between each plan take a look at our{' '}
        <Link href="/pricing" isExternal={false} color="brand.600">
          pricing page
        </Link>
        .
      </Text>
      <Accordion style={{ width: '100%' }} allowMultiple defaultIndex={expanded}>
        {SEGMENTS.map((segment) => (
          <AccordionItem
            key={segment.name}
            style={{
              width: '100%',
              borderStyle: 'none',
              backgroundColor: 'white',
              borderRadius: 15,
            }}
            p="4"
            shadow="2xl"
            my={8}
            aria-expanded={segment.expanded}
            width="100%"
          >
            <AccordionButton _hover={{ background: 'white' }}>
              <Box as="span" flex="1" textAlign="left">
                <Heading as="h3" size="h4">
                  For {segment.name}
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel padding={{ base: '0', lg: '0' }}>
              <Text variant="readabilityOptimized" mx={4}>
                {segment.text}
              </Text>
              <Flex
                direction={{ base: 'column', xl: 'row' }}
                gap={4}
                alignItems={{ base: 'stretch' }}
                mt={4}
              >
                {CARDS.filter((card) => segment.tiers.includes(card.name)).map((card) => (
                  <PricingCard
                    key={card.name}
                    data={{
                      price: card.price,
                      name: card.name,
                      priceUnit: card.price_unit,
                      priceInterval: card.price_interval,
                      features: card.features,
                      floor: card.floor,
                      onlyFloor: card.onlyFloor,
                    }}
                    fade={purchasing && purchasedPlan !== card.name}
                    showPrice={segment.name !== 'Companies'}
                    segmentColor={segment.color}
                    borderStyle="solid"
                    borderColor="#ddd"
                    borderWidth="1px"
                    borderRadius={15}
                    isPopular={card.isPopular}
                    display="flex"
                    flexDirection="column"
                    previousTier={
                      TIERS[
                        TIERS.findIndex(
                          (tier: Tier) =>
                            tier.name ===
                            segment.tiers[segment.tiers.findIndex((t) => t === card.name) - 1],
                        )
                      ]
                    }
                    button={
                      <ActionButton
                        variant="outline"
                        borderWidth="2px"
                        href="#"
                        onClick={onClick}
                        data-plan={card.name}
                        border="none"
                        mt="4"
                        mb={8}
                        isLoading={!purchased && purchasedPlan === card.name}
                        leftIcon={purchased ? <HiCheck /> : undefined}
                        borderColor={darken(segment.color)}
                        color={darken(segment.color)}
                        background={gentlyLighten(segment.color)}
                        _hover={{
                          background: darken(segment.color),
                          color: gentlyLighten(segment.color),
                        }}
                      >
                        {!purchased && cta(card.tier, currentPlan)}
                      </ActionButton>
                    }
                  />
                ))}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );

  return (
    <Box transition="opacity 1s ease-in" opacity={purchased ? 0 : 1}>
      {!setupMarketplace && !setupSponsorship && planSelection()}
      {setupMarketplace && <MarketplaceSetup plan={purchasedPlan} />}
      {setupSponsorship && <Sponsorship />}
    </Box>
  );
};

export default ChoosePlan;
