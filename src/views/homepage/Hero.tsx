import { FunctionComponent } from 'react';
import {
  chakra,
  Container,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  useTheme,
} from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';

import { IntegrityIcon, AuthenticityIcon, PrivacyIcon, ControlIcon } from '@components/icons';
import LineDivider from '@components/LineDivider';
import StepsLabel from '@components/StepsLabel';

const SUBHEADING_TEXTS = [
  { icon: IntegrityIcon, text: 'Integrity' },
  { icon: AuthenticityIcon, text: 'Authenticity' },
  { icon: PrivacyIcon, text: 'Privacy' },
  { icon: ControlIcon, text: 'Control' },
];

const Hero: FunctionComponent = () => {
  const { gradients } = useTheme();

  return (
    <Container variant="section" pt={{ base: 10, lg: 12 }} pb={{ base: 10, lg: 0 }}>
      <Heading as="h1" size="h1" fontWeight="extrabold" textAlign="center" mb={{ base: 8, lg: 10 }}>
        Build{' '}
        <chakra.span bgImage={gradients.primaryGradient} bgClip="text">
          Trust
        </chakra.span>
        .
      </Heading>

      <List
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        flexDirection="row"
        mb={{ base: 16, lg: 20 }}
      >
        {SUBHEADING_TEXTS.map(({ text, icon: IconComponent }) => (
          <ListItem
            key={text}
            display="flex"
            alignItems="center"
            px={{ base: 4, lg: 8 }}
            mb={{ base: 5, lg: 0 }}
            fontSize={{ base: 'lg', lg: 'xl' }}
            fontWeight="medium"
            lineHeight={1}
            color="brand.900"
          >
            <ListIcon as={IconComponent} w={6} h={6} mr={4} />
            {text}
          </ListItem>
        ))}
      </List>

      <Text mb={{ base: 20, lg: 24 }} maxW="3xl" fontSize={{ base: 'lg', lg: 'xl' }} align="center">
        Modern applications are distributed, interconnected, and have Zero-Trust in network
        boundaries. These applications must exchange data with Trust.
      </Text>

      <Flex direction="column" align="center">
        <StepsLabel mb={12}>
          <LineDivider
            bottom="100%"
            h={20}
            bg="linear-gradient(180deg, #4FDAB8 0%, rgba(79, 218, 184, 0) 202.69%);"
            gradientDir="fromBottomToTop"
          />
          Ockam Empowers Developers
          <LineDivider top="100%" h={16} />
        </StepsLabel>
        <ArrowDownIcon w={6} h={6} color="avocado.400" />
      </Flex>
    </Container>
  );
};

export default Hero;
