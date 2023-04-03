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
import Transition from '@root/components/Transition/Transition';
import CTALink from '@components/CTALink';

const TITLE = 'Ockam is for Everyone';
const TEXTS = [
  'Regardless of your environments or the scale of your deployments, we have a tool or service to suit your needs. If you find that we don\'t, contact us!',
];

const CARDS = [
  {
    icon: PackagesIcon,
    title: 'Ockam Tools',
    text: 'The Tools for Builders',
    items: [
      { text: 'Command Line Interfaces', icon: ArrowIcon },
      { text: 'Rust Crates', icon: ArrowIcon },
      { text: 'Containers', icon: ArrowIcon },
      { text: 'Binary clients', icon: ArrowIcon },
    ],
    link: {
      label: 'Get Started',
      href: 'https://docs.ockam.io/',
    },
  },
  {
    icon: CloudIcon,
    title: 'Orchestrator',
    text: 'The Service for Enterprises',
    items: [
      { text: 'Elastic Scale', icon: ArrowIcon },
      { text: 'Team Collaboration', icon: ArrowIcon },
      { text: 'Add-on Connectors', icon: ArrowIcon },
      { text: 'AWS Marketplace', icon: ArrowIcon },
    ],
    link: {
      label: 'Get Started',
      href: 'https://docs.ockam.io/',
    },
  },
];

type CardGridItemProps = {
  icon: FunctionComponent<SVGAttributes<SVGElement>>;
  title: string;
  text: string;
  items: Array<{
    text: string;
    icon: FunctionComponent<SVGAttributes<SVGElement>>;
  }>;
  link: {
    label: string;
    href: string;
  };
  columnOrder: number;
};

const CardGridItem: FunctionComponent<CardGridItemProps> = ({
  icon,
  title,
  text,
  items,
  columnOrder,
  link,
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
        <CTALink display="block" mt={10} text={link.label} href={link.href} isExternal />
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
      <Transition duration={300} delay={500}>
        <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between">
          <CardGridItem columnOrder={1} {...CARDS[0]} />
        </Box>
      </Transition>
      <Transition
        duration={300}
        delay={500}
        initialState={{ opacity: 0, y: -40 }}
        finalState={{ opacity: 1, y: 0 }}
      >
        <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between">
          <CardGridItem columnOrder={2} {...CARDS[1]} />
        </Box>
      </Transition>
    </Grid>
  </Container>
);

export default Packages;
