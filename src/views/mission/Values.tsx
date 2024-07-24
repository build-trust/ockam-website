import { FunctionComponent } from 'react';
import { Heading } from '@chakra-ui/react';

import ClarityIcon from '@assets/icons/clarity.svg';
import RocketIcon from '@assets/icons/rocket.svg';
import TeamIcon from '@assets/icons/team.svg';
import HelpIcon from '@assets/icons/help.svg';
import SearchZoomInIcon from '@assets/icons/search-zoom-in.svg';
import ValueCard from '@views/mission/components/ValueCard';

const MISSION_AND_VISION_CARDS = [
  {
    title: `Ockam’s Vision`,
    texts: ['Ockam sees a future where all applications can be interoperable - everywhere.'],
    icon: ClarityIcon,
  },
  {
    title: 'Our Mission',
    texts: [
      'To empower every builder with simple developer tool, so they can create applications that Trust Data-in-Motion',
    ],
    icon: RocketIcon,
  },
];

const TRUST_VALUES_CARDS = [
  {
    title: 'Trust The Team',
    texts: [
      'Ockam moves fast, and relies on a culture of Trust. Trust is inherent, not earned. When members join the Team, they should assume that they are completely trusted by everyone to contribute their best self, from Day 1. ',
    ],
    icon: TeamIcon,
  },
  {
    title: 'Take Responsibility',
    texts: [
      `Everyone is accountable for their role’s Responsibilities. Ockam’s culture is Responsibility driven, not a consensus or ownership driven culture.`,
      `The responsibility of the Team is to provide an environment where every individual is empowered to act and trusted to be world-class in their role. `,
    ],
    icon: HelpIcon,
  },
  {
    title: 'Be Curious',
    texts: [
      `We are curious learners, who strive to understand 'why?'. Understanding ‘why’ we gain a clearer understanding of ‘for who’, ‘when’, ‘what’ and ‘how’—it means understanding motivations, emotions, priorities of others.`,
      `Understanding ‘why’ aligns the entire Team to prioritize, make fast decisions, and to align all of our efforts to all pull in the same direction.`,
    ],
    icon: SearchZoomInIcon,
  },
];

const Values: FunctionComponent = () => (
  <>
    <Heading
      as="h2"
      color="white"
      textAlign="center"
      fontWeight={700}
      fontSize={{ base: '2.5rem' }}
      fontFamily="neutraface"
      lineHeight={1.3}
      mt={{ base: '5.5rem', lg: '8.75rem' }}
      mb={{ base: '3.5rem', lg: '5rem' }}
    >
      The Team is Built on Trust
    </Heading>

    {MISSION_AND_VISION_CARDS.map((card, index) => (
      <ValueCard key={card.title} {...card} itemPosition={index % 2 ? 'right' : 'left'} />
    ))}

    <Heading
      color="white"
      textAlign="center"
      fontWeight={700}
      fontSize={{ base: '2.5rem' }}
      fontFamily="neutraface"
      lineHeight={1.3}
      mb={{ base: '3.5rem', lg: '5rem' }}
      mt={{ base: '5.5rem', lg: '8rem' }}
    >
      We believe in Trust
    </Heading>

    {TRUST_VALUES_CARDS.map((card, index) => (
      <ValueCard key={card.title} {...card} itemPosition={index % 2 ? 'right' : 'left'} />
    ))}
  </>
);

export default Values;
