import { FunctionComponent, SVGAttributes } from 'react';
import {
  List,
  ListItem,
  ListIcon,
  Container,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Box,
  Icon,
} from '@chakra-ui/react';

import CloudIcon from '@assets/icons/cloud.svg';
import PackagesIcon from '@assets/icons/packages.svg';
import CheckIcon from '@assets/icons/check.svg';
import CloseIcon from '@assets/icons/close.svg';
import GreenIconWrapper from '@components/GreenIconWrapper';
import LineDivider from '@components/LineDivider';
import StepsLabel from '@components/StepsLabel';

const CARDS = [
  {
    icon: PackagesIcon,
    title: 'Hobby',
    text: 'Recommended for your side project.',
    items: [
      { text: 'Two Collaborators', icon: CheckIcon },
      { text: 'Limited Scale', icon: CloseIcon },
      { text: 'Basic Authorization', icon: CheckIcon },
      { text: 'Limited Addons', icon: CheckIcon },
      { text: 'Free', icon: CheckIcon },
    ],
  },
  {
    icon: CloudIcon,
    title: 'Production',
    text: 'Recommended for your team at work.',
    items: [
      { text: 'Team Collaboration', icon: CheckIcon },
      { text: 'Scaleable', icon: CheckIcon },
      { text: 'Enterprise Authorization', icon: CheckIcon },
      { text: 'All Add-ons', icon: CheckIcon },
      { text: 'SLA', icon: CheckIcon },
    ],
  },
];

const DESCRIPTIONS = [
  'Ockam Orchestrator enables distributed applications to Trust Data-in-Motion at scale - with ease.',
  'Ockam offers Orchestrator as a managed service through the AWS marketplace.',
  'We are committed to empowering all developers. That’s why we sponsor your hobby projects. All applications should be built with Trust.',
  'Orchestrator was built for builders that build big things. It can move massive amounts of data through dynamic and complicated service architectures.',
];

type CardProps = {
  icon: FunctionComponent<SVGAttributes<SVGElement>>;
  title: string;
  text: string;
  items: Array<{
    text: string;
    icon: FunctionComponent<SVGAttributes<SVGElement>>;
  }>;
};

const Card: FunctionComponent<CardProps> = ({ icon, title, text, items }) => (
  <Flex
    direction="column"
    align={{ lg: 'center' }}
    maxW="lg"
    bg="white"
    borderRadius="base"
    borderBottom={{ base: 0, lg: '4px' }}
    borderBottomColor={{ base: 'none', lg: 'avocado.500' }}
  >
    <SimpleGrid>
      <Flex
        direction="column"
        align={{ base: 'center', lg: 'initial' }}
        w="full"
        h="full"
        border="1px"
        borderColor="gray.100"
        pt={{ base: 4, lg: 6 }}
        px={{ base: 4, lg: 6 }}
        textAlign={{ base: 'center', lg: 'left' }}
      >
        <GreenIconWrapper>
          <Icon as={icon} color="white" w={6} h={6} />
        </GreenIconWrapper>

        <Flex direction="column" pt={{ base: 4, lg: 6 }}>
          <Text fontWeight="bold" fontSize={{ lg: 'xl' }} color="brand.900" mb={2}>
            {title}
          </Text>

          <Text mb={5} fontWeight="regular" fontSize={{ base: 'sm', lg: 'md' }}>
            {text}
          </Text>
        </Flex>
      </Flex>

      <List
        spacing={8}
        border="1px"
        borderColor="gray.100"
        borderBottom={0}
        borderTop={0}
        w="full"
        h="full"
        py={6}
        px={{ base: 3, lg: 6 }}
      >
        {items.map(({ icon: itemIcon, text: itemText }) => (
          <ListItem
            key={itemText}
            display="flex"
            alignItems="center"
            fontSize={{ base: 'sm', lg: 'md' }}
          >
            <ListIcon bgColor="gray.100" mr={{ base: 3, lg: 5 }} w={6} h={6} color="brand.900">
              <Icon as={itemIcon} />
            </ListIcon>

            {itemText}
          </ListItem>
        ))}
      </List>
    </SimpleGrid>
  </Flex>
);

const Packages: FunctionComponent = () => (
  <Container variant="section" py={{ base: 16, lg: 20 }}>
    <StepsLabel mb={{ base: 6, lg: 16 }}>
      <LineDivider
        h={32}
        bottom="100%"
        gradientDir="fromBottomToTop"
        bg="linear-gradient(180deg, #4FDAB8 0%, rgba(79, 218, 184, 0) 100%);"
      />
      Ockam is for you
    </StepsLabel>

    <Box
      id="products"
      visibility="hidden"
      position="absolute"
      left={0}
      top={{ base: '50px', lg: '80px' }}
    />

    <SimpleGrid columns={{ base: 1, lg: 2 }}>
      <Flex direction="column" justify="center" pr={{ base: 0, lg: 24 }}>
        <Heading as="h3" size="h3" mb={{ base: 6, lg: 8 }}>
          Ockam Orchestrator
        </Heading>

        {DESCRIPTIONS.map((text) => (
          <Text key={text} fontSize={{ lg: 'lg' }} mb={{ base: 4, lg: 5 }}>
            {text}
          </Text>
        ))}
      </Flex>

      <SimpleGrid
        columns={2}
        spacingX={{ lg: 4 }}
        borderRadius="base"
        borderBottom={{ base: '4px', lg: 0 }}
        borderBottomColor={{ base: 'avocado.500', lg: 'none' }}
      >
        {CARDS.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </SimpleGrid>
    </SimpleGrid>
  </Container>
);

export default Packages;
