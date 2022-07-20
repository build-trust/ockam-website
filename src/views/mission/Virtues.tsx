import { FunctionComponent } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
} from '@chakra-ui/react';

import PerformanceMindsetImage from '@assets/images/performance-mindset.png';
import KeppThingsSimpleImage from '@assets/images/keep-things-simple.png';
import DefaultToTransparencyImage from '@assets/images/default-to-transparency.png';
import TimeIsPreciousImage from '@assets/images/time-is-precious.png';

import VirtuesCard from './components/VirtuesCard';

const DESCRIPTIONS = ['The actions that are embedded in the fabric of what we do.'];

const VIRTUES_TABS = [
  {
    title: 'High Performance Mindset',
    panel: {
      image: PerformanceMindsetImage,
      texts: [
        'Ockam is a team of doers, builders, shippers, and finishers. We celebrate things that are complete and intentional. Ideas are the easy part. We win by turning ideas into action. ',
        'At Ockam, it’s essential to embrace a growth mindset. High Performance teams have the grit to do the hard things and to maintain a growth mindset. We dream audacious goals, and continue to progress towards those goals regardless of obstacles or setbacks. We also understand that every team member will win some, and lose some. Learning from losses is an essential part of a growth mindset. We strive for continuous improvement in everything that we do.',
      ],
    },
  },
  {
    title: 'Keep Things Simple',
    panel: {
      image: KeppThingsSimpleImage,
      texts: [
        'The creation of simple solutions out of complex problems is the basis for our namesake, Ockam. Every idea, product, and procedure at Ockam should be governed by the principles in Occam’s Razor. ',
        'We recognize that simplifying is a difficult and iterative journey. But in the end, when you keep things simple, they tend to be robust - less goes wrong, and there is less to maintain - and less to breakdown.',
        'OKRs help align the team, so that we have a simple clear direction.',
      ],
    },
  },
  {
    title: 'Default to Transparency',
    panel: {
      image: DefaultToTransparencyImage,
      texts: [
        'In the ethos of open source, we believe it’s best to err on the side of disclosure and clarity. By making information public, we can reduce the threshold to contribution and make collaboration easier. Practicing transparency, even when hiding the details could be easier, builds trust. ',
        'Transparency is closely connected with Ockam’s virtue of Simplicity. To be transparent, we must communicate ideas simply. By writing down our plans and showcasing our work we demonstrate our virtue of transparency.',
      ],
    },
  },
  {
    title: 'Time is Precious',
    panel: {
      image: TimeIsPreciousImage,
      texts: [
        'Time is the most valuable asset that we have.',
        'We trust each team member to use time wisely. Responsible use of time includes our own and that of others. We show up on time to meetings, keep meetings on track, and consider the impact to others when we take holidays.',
        'We value your time. There are 168 hours in a week and we only have two all-hands meetings per week. We trust you to manage the remaining ~165 hours in any way you see fit.',
      ],
    },
  },
];

const activeTabItemStyle = {
  textDecoration: 'none',
  bg: 'none',
  svg: { color: 'avocado.500' },
  _after: {
    content: '" "',
    display: 'block',
    borderRadius: 'sm',
    height: '4px',
    width: '50%',
    bgColor: 'avocado.500',
    position: 'absolute',
    top: 'calc(100% + 4px)',
  },
};

const Virtues: FunctionComponent = () => (
  <Box id="virtues" bgColor="gray.50" pt={{ base: 16, lg: 20 }} pb={{ base: 20, lg: 30 }}>
    <Container variant="section" px={{ base: 5, lg: 220 }}>
      <Box maxW="3xl" mb={{ base: 16, lg: 14 }} textAlign={{ base: 'left', lg: 'center' }}>
        <Heading as="h2" size="h2" mb={6}>
          Ockam&apos;s Virtues
        </Heading>

        {DESCRIPTIONS.map((text) => (
          <Text fontSize={{ lg: 'lg' }} key={text} _notLast={{ mb: 2 }}>
            {text}
          </Text>
        ))}
      </Box>

      <VStack spacing={8} display={{ base: 'block', lg: 'none' }}>
        {VIRTUES_TABS.map(({ title, panel }) => (
          <VirtuesCard key={title} title={title} panel={panel} maxW="lg" />
        ))}
      </VStack>

      <Tabs w="full" display={{ base: 'none', lg: 'initial' }}>
        <TabList display="flex" justifyContent="space-between" px={4} mb={16} borderBottom={0}>
          {VIRTUES_TABS.map(({ title }) => (
            <Tab
              position="relative"
              px={2}
              m={0}
              key={title}
              fontSize="xl"
              fontWeight="bold"
              color="gray.500"
              _hover={activeTabItemStyle}
              _selected={{
                ...activeTabItemStyle,
                color: 'brand.900',
                fontWeight: 'bold',
                _hover: { activeTabItemStyle },
              }}
            >
              {title}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {VIRTUES_TABS.map(({ title, panel }) => (
            <TabPanel key={title} p={0}>
              <VirtuesCard title={title} panel={panel} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  </Box>
);

export default Virtues;
