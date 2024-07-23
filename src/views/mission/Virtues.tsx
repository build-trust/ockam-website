import { FunctionComponent } from 'react';
import {
  Box,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from '@chakra-ui/react';

import TimeIsPreciousImage from './assets/time.svg?url';
import DefaultToTransparencyImage from './assets/default.svg?url';
import KeepThingsSimpleImage from './assets/simple.svg?url';
import PerformanceMindsetImage from './assets/mindset.svg?url';
import VirtuesCard from './components/VirtuesCard';

const VIRTUES_TABS = [
  {
    title: 'High-performance mindset',
    mobileTitle: 'Mindset',
    panel: {
      image: PerformanceMindsetImage,
      text: (
        <>
          Ockam is a team of doers, builders, shippers, and finishers. We celebrate things that are
          complete and intentional. Ideas are the easy part. We win by turning ideas into action.
          <br />
          <br />
          At Ockam, it&apos;s essential to embrace a growth mindset. High Performance teams have the
          grit to do the hard things and to maintain a growth mindset. We dream audacious goals, and
          continue to progress towards those goals regardless of obstacles or setbacks. We also
          understand that every team member will win some, and lose some. Learning from losses is an
          essential part of a growth mindset. We strive for continuous improvement in everything
          that we do.
        </>
      ),
    },
  },
  {
    title: 'Keep things simple',
    mobileTitle: 'Simple',
    panel: {
      image: KeepThingsSimpleImage,
      text: (
        <>
          The creation of simple solutions out of complex problems is the basis for our namesake,
          Ockam. Every idea, product, and procedure at Ockam should be governed by the principles in
          Occam&apos;s Razor.
          <br />
          <br />
          We recognize that simplifying is a difficult and iterative journey. But in the end, when
          you keep things simple, they tend to be robust - less goes wrong, and there is less to
          maintain and less to breakdown.
        </>
      ),
    },
  },
  {
    title: 'Default to transparency',
    mobileTitle: 'Transparency',
    panel: {
      image: DefaultToTransparencyImage,
      text: (
        <>
          In the ethos of open source, we believe it&apos;s best to err on the side of disclosure
          and clarity. By making information public, we can reduce the threshold to contribution and
          make collaboration easier. Practicing transparency, even when hiding the details could be
          easier, builds trust.
          <br />
          <br />
          Transparency is closely connected with Ockam&apos;s virtue of Simplicity. To be
          transparent, we must communicate ideas simply. By writing down our plans and showcasing
          our work we demonstrate our virtue of transparency.
        </>
      ),
    },
  },
  {
    title: 'Time is precious',
    mobileTitle: 'Title',
    panel: {
      image: TimeIsPreciousImage,
      text: (
        <>
          Time is the most valuable asset that we have.
          <br />
          <br />
          We trust each team member to use time wisely. Responsible use of time includes our own and
          that of others. We show up on time to meetings, keep meetings on track, and consider the
          impact to others when we take holidays.
          <br />
          <br />
          We value your time. There are 168 hours in a week and we only have two all-hands meetings
          per week. We trust you to manage the remaining ~165 hours in any way you see fit.
        </>
      ),
    },
  },
];

const Virtues: FunctionComponent = () => (
  <Box
    pt={{ base: '3.75rem', lg: '7.5rem' }}
    px={{ base: '0.5rem' }}
    maxW="52rem"
    mx="auto"
    bg="white"
    pb={{ base: '8.75rem', lg: '10rem' }}
  >
    <Flex
      mb={{ base: '4rem' }}
      direction="column"
      textAlign={{ base: 'center' }}
      gap={{ base: '0.75rem', lg: '1.5rem' }}
    >
      <Heading
        as="h2"
        fontFamily="neutraface"
        fontSize={{ base: '2.5rem', lg: '5.5rem' }}
        lineHeight={1.3}
      >
        Ockam’s Virtues
      </Heading>

      <Text
        fontSize={{ base: '1.125rem' }}
        lineHeight={{ base: 1.4 }}
        fontWeight={{ base: 500 }}
        color="gray.500"
      >
        The actions that are embedded in the fabric of what we do.
      </Text>
    </Flex>

    <Tabs variant="ockam">
      <TabList
        display="flex"
        justifyContent="space-between"
        border="1px solid"
        borderColor="gray.200"
        mx="auto"
        maxW={{ base: '20rem', lg: 'initial' }}
      >
        {VIRTUES_TABS.map(({ title, mobileTitle }) => (
          <Tab key={title}>
            <Box as="span" display={{ base: 'none', lg: 'block' }}>
              {title}
            </Box>
            <Box as="span" display={{ base: 'block', lg: 'none' }}>
              {mobileTitle}
            </Box>
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {VIRTUES_TABS.map(({ title, panel }) => (
          <TabPanel key={title}>
            <VirtuesCard title={title} panel={panel} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  </Box>
);

export default Virtues;
