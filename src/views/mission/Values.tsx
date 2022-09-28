import { FunctionComponent } from 'react';
import { Container, Heading, useTheme } from '@chakra-ui/react';

import ClarityIcon from '@assets/icons/clarity.svg';
import RocketIcon from '@assets/icons/rocket.svg';
import TeamIcon from '@assets/icons/team.svg';
import HelpIcon from '@assets/icons/help.svg';
import SearchZoomInIcon from '@assets/icons/search-zoom-in.svg';
import ValueCard from '@views/mission/components/ValueCard';
import StepsLabel from '@components/StepsLabel';
import LineDivider from '@components/LineDivider';
import SectionAnchor from '@components/SectionAnchor';

const MISSION_AND_VISION_CARDS = [
  {
    title: `Our Vision`,
    texts: ['Ockam is building a future where all applications can be interoperable - everywhere.'],
    icon: ClarityIcon,
  },
  {
    title: 'Our Mission',
    texts: [
      'To empower every developer with simple tools so they can create applications that Trust Data-in-Motion',
    ],
    icon: RocketIcon,
  },
];

const TRUST_VALUES_CARDS = [
  {
    title: 'Trust The Team',
    texts: [
      'Ockam moves fast, and we rely on a culture of Trust. Trust is inherent, not earned. When you join The Team, you are trusted to be your best self, from Day 1.',
    ],
    icon: TeamIcon,
  },
  {
    title: 'Take Responsibility',
    texts: [
      `Everyone is accountable for their role’s Responsibility. Ockam’s culture is responsibility driven - not consensus or ownership driven.`,
      `The responsibility of The Team is to provide an environment where every individual is empowered to act, and trusted to be world-class in their role. The Team aims to allow you to be your best.`,
    ],
    icon: HelpIcon,
  },
  {
    title: 'Be Curious',
    texts: [
      `We are curious learners, who strive to understand 'why?'. By understanding ‘why’ we gain a clearer understanding of ‘for who’, ‘when’, ‘what’ and ‘how’. Curiosity includes understanding the motivations, emotions, priorities of others.`,
      `Understanding ‘why’ aligns the entire Team to prioritize, to make fast decisions, and to align all of our efforts - so that we all pull in the same direction.`,
    ],
    icon: SearchZoomInIcon,
  },
];

const Values: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <>
      <Container variant="section" pt={16}>
        <SectionAnchor id="values">
          <Heading as="h2" size="h2" fontWeight="bold" lineHeight={1.3} mb={{ lg: 10 }}>
            The Team is Built with Trust
          </Heading>
        </SectionAnchor>

        {MISSION_AND_VISION_CARDS.map((card, index) => (
          <ValueCard key={card.title} {...card} itemPosition={index % 2 ? 'right' : 'left'} />
        ))}
      </Container>

      <Container variant="section" pt={{ base: 32, lg: 24 }} pb={{ base: 20, lg: 30 }}>
        <StepsLabel>
          <LineDivider
            h={{ base: 28, lg: 40 }}
            bottom={{ base: '150%', lg: '100%' }}
            bg={gradients.tertiary}
          />
          Our Only Value
        </StepsLabel>

        <Heading as="h2" size="h2" fontWeight="bold" lineHeight={1.3} my={6}>
          We believe in Trust
        </Heading>

        {TRUST_VALUES_CARDS.map((card, index) => (
          <ValueCard key={card.title} {...card} itemPosition={index % 2 ? 'right' : 'left'} />
        ))}
      </Container>
    </>
  );
};

export default Values;
