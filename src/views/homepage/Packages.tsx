import { FunctionComponent, SVGAttributes } from 'react';
import {
  List,
  ListItem,
  ListIcon,
  Container,
  Flex,
  Text,
  Heading,
  Grid,
  GridItem,
  Box,
  Icon,
} from '@chakra-ui/react';

import ArrowIcon from '@assets/icons/arrow.svg';
import CloudIcon from '@assets/icons/cloud.svg';
import PackagesIcon from '@assets/icons/packages.svg';
import GreenIconWrapper from '@components/GreenIconWrapper';

const TITLE = 'Ockam is for Everyone';
const TEXTS = [
  'We built Ockam with all builders in mind. We have two different configurations for you to choose from:',
];

const CARDS = [
  {
    icon: PackagesIcon,
    title: 'Open Source',
    text: 'The Tools for Builders',
    descriptions: [
      'Ockam Open Source can be used for small scale projects, with simple architectures, that can be manually configured. ',
      'Ockam Open Source has all of the Ockam protocols, tools, and programming libraries that a developer needs to Build Trust. ',
    ],
    items: [
      { text: 'Scale: Manually configurable', icon: ArrowIcon },
      { text: 'Key generation and storage', icon: ArrowIcon },
      { text: 'Secure Channels', icon: ArrowIcon },
      { text: 'End-to-end encrypted messagaging', icon: ArrowIcon },
      { text: 'Ready-to-use Packages', icon: ArrowIcon },
      { text: 'Community Supported', icon: ArrowIcon },
      { text: 'Apache 2 License', icon: ArrowIcon },
    ],
  },
  {
    icon: CloudIcon,
    title: 'Orchestrator',
    text: 'The Service for Enterprises',
    descriptions: [
      'Ockam Orchestrator is a fully-managed cloud service that includes all of the features and tools of Ockam Open Source. Orchestrator also has all of the features that you need to collaborate with your team, to integrate with automated infrastructure, to connect with data-layer stores and message brokers, and to facilitate massive scale throughput. ',
    ],
    items: [
      { text: 'Scale: Automation-required', icon: ArrowIcon },
      { text: 'Key policy management', icon: ArrowIcon },
      { text: 'Add-on connectors to data services', icon: ArrowIcon },
      { text: 'Atribute Based Access Controls (ABAC)', icon: ArrowIcon },
      { text: 'Message delivery guarantees', icon: ArrowIcon },
      { text: 'Enterprise-grade support', icon: ArrowIcon },
      { text: 'AWS Marketplace', icon: ArrowIcon },
    ],
  },
];

type CardGridItemProps = {
  icon: FunctionComponent<SVGAttributes<SVGElement>>;
  title: string;
  text: string;
  descriptions: string[];
  items: Array<{
    text: string;
    icon: FunctionComponent<SVGAttributes<SVGElement>>;
  }>;
  columnOrder: number;
};

const CardGridItem: FunctionComponent<CardGridItemProps> = ({
  icon,
  title,
  text,
  descriptions,
  items,
  columnOrder,
}) => (
  <>
    <GridItem area={`header${columnOrder}`} maxW={{ base: 'lg', lg: '25rem' }}>
      <Flex
        align={{ base: 'center', lg: 'initial' }}
        w="full"
        h="full"
        pt={{ base: 4, lg: 6 }}
        px={{ base: 4, lg: 6 }}
        textAlign="left"
        border="1px"
        borderColor="gray.100"
        borderTopRadius="base"
      >
        <GreenIconWrapper>
          <Icon as={icon} color="white" w={6} h={6} />
        </GreenIconWrapper>

        <Flex flex={1} direction="column" pl={{ base: 4, lg: 6 }}>
          <Text fontWeight="bold" fontSize="xl" color="brand.900" mb={3}>
            {title}
          </Text>

          <Text mb={4} fontWeight="regular" color="brand.900" fontSize={{ base: 'sm', lg: 'md' }}>
            {text}
          </Text>

          {descriptions.map((descriptionText) => (
            <Text
              key={descriptionText}
              fontSize="sm"
              color="gray.500"
              lineHeight={1.5}
              _notLast={{ mb: 4 }}
              _last={{ mb: 8 }}
            >
              {descriptionText}
            </Text>
          ))}
        </Flex>
      </Flex>
    </GridItem>

    <GridItem area={`body${columnOrder}`} mb={{ base: 10, lg: 0 }}>
      <List
        spacing={8}
        w="full"
        h="full"
        py={6}
        px={{ base: 3, lg: 6 }}
        border="1px"
        borderColor="gray.100"
        borderTop={0}
        borderBottom="4px"
        borderBottomColor="avocado.500"
        borderBottomRadius="base"
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
    </GridItem>
  </>
);

const Packages: FunctionComponent = () => (
  <Container variant="section" py={{ base: 16, lg: 24 }}>
    <Box
      id="products"
      visibility="hidden"
      position="absolute"
      left={0}
      top={{ base: '50px', lg: '80px' }}
    />
    <Flex
      direction="column"
      justify="center"
      maxW="41.5rem"
      textAlign="center"
      mb={{ base: 12, lg: 16 }}
    >
      <Heading as="h3" size="h3" mb={{ base: 6, lg: 8 }}>
        {TITLE}
      </Heading>

      {TEXTS.map((text) => (
        <Text key={text} fontSize={{ lg: 'lg' }} mb={{ base: 4, lg: 5 }}>
          {text}
        </Text>
      ))}
    </Flex>

    <Grid
      templateAreas={{
        base: `
        "header1"
        "body1"
        "header2"
        "body2"
      `,
        lg: `
        "header1 header2"
        "body1 body2"
      `,
      }}
      gridTemplateRows={{
        base: 'repeat(4, auto)',
        lg: 'repeat(2, auto)',
      }}
      gridTemplateColumns={{
        base: '100%',
        lg: 'repeat(2, 1fr)',
      }}
      columnGap={16}
    >
      {CARDS.map((card, index) => (
        <CardGridItem key={card.title} columnOrder={index + 1} {...card} />
      ))}
    </Grid>
  </Container>
);

export default Packages;
