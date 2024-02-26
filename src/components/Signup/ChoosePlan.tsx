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

import { SEGMENTS, TIERS, Tier, darken, gentlyLighten } from '@root/components/Packaging/tiers';
import PricingCard from '@root/components/Packaging/PricingCard';
import ActionButton from '@root/components/Packaging/ActionButton';
import { User } from '@root/components/Auth';
import Auth0Api from '@root/api/auth0Api';
import { CONTACT_FORM_PATH } from '@root/consts/paths';

import MarketplaceSetup from './MarketplaceSetup';
import Sponsorship from './Sponsorship';

const cta = (tier: Tier, currentPlan?: string): string => {
  if (currentPlan && currentPlan === tier.name) return 'Your current plan';
  if (tier.price === '$0') return 'Get started';
  if (tier.name === 'Business Critical') return 'Contact Sales';
  return 'Start 14 day trial';
};

type Props = {
  onComplete: Function;
  onSelected: Function;
  hideNext: Function;
  showNext: Function;
  currentPlan?: string;
  selectedPlan?: string;
  user?: User;
};
const ChoosePlan: FC<Props> = ({
  onComplete,
  onSelected,
  user,
  hideNext,
  showNext,
  currentPlan,
  selectedPlan,
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
      onSelected(plan);
      if (user) {
        Auth0Api.managementApi.updateUserMetadata(user.token, user.userId, { plan });
      }
      setPurchasing(true);
      setTimeout(() => {
        const t = TIERS.find((tier) => tier.name === plan);
        if (t?.marketplaceOnly) {
          showNext();
          setSetupMarketplace(true);
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
    [onComplete, onSelected, showNext, user],
  );

  const alreadySelected = useCallback((): void => {
    if (selectedPlan && !currentPlan) {
      purchase(selectedPlan);
    }
  }, [selectedPlan, currentPlan, purchase]);

  useEffect(() => {
    if (setupMarketplace || setupSponsorship) {
      showNext();
    } else {
      hideNext();
      alreadySelected();
    }
  }, [hideNext, setupMarketplace, setupSponsorship, showNext, alreadySelected]);

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
                alignItems={{ base: 'start' }}
                mt={4}
              >
                {TIERS.filter((tier) => segment.tiers.includes(tier.name)).map((tier) => (
                  <PricingCard
                    key={tier.name}
                    slim
                    fade={purchasing && purchasedPlan !== tier.name}
                    data={{
                      price: tier.price,
                      name: tier.name,
                      priceUnit: tier.price_unit,
                      priceInterval: tier.price_interval,
                      floor: tier.floor,
                      onlyFloor: tier.onlyFloor,
                    }}
                    current={currentPlan === tier.name}
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
                        isLoading={!purchased && purchasedPlan === tier.name}
                        leftIcon={purchased ? <HiCheck /> : undefined}
                        borderColor={darken(segment.color)}
                        color={darken(segment.color)}
                        background={gentlyLighten(segment.color)}
                        _hover={{
                          background: darken(segment.color),
                          color: gentlyLighten(segment.color),
                        }}
                      >
                        {!purchased && cta(tier, currentPlan)}
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
