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
import GreenIconWrapper from '@components/GreenIconWrapper';
import LineDivider from '@components/LineDivider';
import StepsLabel from '@components/StepsLabel';

const CARDS = [
  {
    icon: PackagesIcon,
    title: 'Open Source',
    text: 'The Tools for Builders',
    items: [
      { text: 'Manually-configurable Scale', icon: CheckIcon },
      { text: 'Cryptographic Protocols', icon: CheckIcon },
      { text: 'Ready-to-use Packages', icon: CheckIcon },
      { text: 'Community Supported', icon: CheckIcon },
      { text: 'Apache 2 License', icon: CheckIcon },
    ],
  },
  {
    icon: CloudIcon,
    title: 'Orchestrator',
    text: 'The Service for Enterprises',
    items: [
      { text: 'Automation-required Scale', icon: CheckIcon },
      { text: 'Company-wide Access Controls', icon: CheckIcon },
      { text: 'Message guarantees', icon: CheckIcon },
      { text: 'Add-on connectors', icon: CheckIcon },
      { text: 'AWS Marketplace', icon: CheckIcon },
    ],
  },
];

const DESCRIPTIONS = [
  'Ockam Open Source contains all of the cryptographic protocols, packages, and developer tools that a builder - of any  skill or expereince level - would require to move data between their applications with Trust. Ockam is commited to supporting the Open Source community through contributions to discussions and collective learning.',

  'Ockam Orchestrator is a cloud-based, fully-managed service that enables companies to connect their distributed applications with ease. Orchestrator was built for enterprised that build big things. It can move massive amounts of data through dynamic and complicated architectures. If you are starting a new work project, you can be assured that Orchestrator will meet your needs as you move into production and then scale.',

  'The Ockam Orchestrator was built for the Zero-Trust enterprise. Orchestrator Add-ons connect to Key Management, ABAC policy engines, Data Stores, and Messaging infrastructure; such as Confluent Cloud, InfluxData, Okta, Auth0, and KMS.',
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
          The Ockam Products
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
