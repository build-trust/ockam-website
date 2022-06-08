import { FunctionComponent } from 'react';
import {
  List,
  ListItem,
  ListIcon,
  Container,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import { IconProps } from '@chakra-ui/icons';

import { CloudIcon, PackagesIcon, CheckIcon, CloseIcon } from '@components/icons';
import { GreenIconWrapper } from '@components/icons/wrappers';
import LineDivider from '@components/LineDivider';
import StepsLabel from '@components/StepsLabel';

const CARDS = [
  {
    icon: PackagesIcon,
    title: 'Hobbiest',
    text: 'Recommended for individual developers working on side projects.',
    items: [
      { text: 'Easy to Use', icon: CheckIcon },
      { text: 'Limited Scale', icon: CloseIcon },
      { text: 'Basic Authorization', icon: CheckIcon },
      { text: 'Limited Addons', icon: CheckIcon },
      { text: 'SLA', icon: CloseIcon },
      { text: 'Free Forever', icon: CheckIcon },
    ],
  },
  {
    icon: CloudIcon,
    title: 'Production',
    text: 'Recommended for users that are new and need guide step by step. ',
    items: [
      { text: 'Enterprise Ready', icon: CheckIcon },
      { text: 'Scaleable', icon: CheckIcon },
      { text: 'BYO Auth Tools', icon: CheckIcon },
      { text: 'All Add-ons', icon: CheckIcon },
      { text: 'SLA', icon: CheckIcon },
      { text: 'Paid Throught AWS Marketplace', icon: CheckIcon },
    ],
  },
];

type CardProps = {
  icon: FunctionComponent<IconProps>;
  title: string;
  text: string;
  items: Array<{
    text: string;
    icon: FunctionComponent<IconProps>;
  }>;
};

const Card: FunctionComponent<CardProps> = ({ icon: IconComponent, title, text, items }) => (
  <Flex
    direction="column"
    align="center"
    borderRadius="md"
    bg="white"
    maxW="lg"
    borderBottom="4px"
    borderBottomColor="avocado.400"
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
          <IconComponent color="white" w={5} h={5} />
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
        {items.map(({ icon: ItemIconComponent, text: itemText }) => (
          <ListItem
            key={itemText}
            display="flex"
            alignItems="center"
            fontSize={{ base: 'sm', lg: 'md' }}
          >
            <ListIcon
              as={ItemIconComponent}
              w={6}
              h={6}
              color="brand.900"
              bgColor="gray.100"
              mr={{ base: 3, lg: 5 }}
            />
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
    <SimpleGrid columns={{ base: 1, lg: 2 }}>
      <Flex direction="column" justify="center" pr={{ base: 0, lg: 24 }}>
        <Heading as="h3" size="h3" mb={{ base: 6, lg: 8 }}>
          Ockam Orchestrator
        </Heading>

        <Text fontSize={{ lg: 'lg' }} mb={{ base: 4, lg: 5 }}>
          Ockam Orchestrator is how applications Trust Data-in-Motion at scale.
        </Text>

        <Text fontSize={{ lg: 'lg' }} mb={{ base: 4, lg: 5 }}>
          Ockam Orchestrator is a managed service that is available through the AWS marketplace.
          Ockam Orchestrator scales with your needs whether it’s to scale message throughput, or to
          connect to your existing cloud services.
        </Text>

        <Text fontSize={{ lg: 'lg' }} mb={{ base: 4, lg: 5 }}>
          Scale, manage service, persistance, storage of data. Managed Ockam cloud. gives you SLAs,
          scale and integrations. Managed, automated, queing.
        </Text>
      </Flex>

      <SimpleGrid columns={2} spacingX={{ lg: 4 }}>
        {CARDS.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </SimpleGrid>
    </SimpleGrid>
  </Container>
);

export default Packages;
