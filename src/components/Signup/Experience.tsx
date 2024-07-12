import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { FC } from 'react';

const examples = [
  {
    title: 'PostgreSQL - Docker',
    href: 'https://docs.ockam.io/portals/databases/postgres/docker',
    text: `We connect a nodejs app in one virtual private
                network with a postgres database in another 
                virtual private network. The example uses docker 
                and docker compose to create these virtual 
                networks.`,
  },
  {
    title: 'PostgreSQL - Kubernetes',
    href: 'https://docs.ockam.io/portals/databases/postgres/kubernetes',
    text: `We connect a nodejs app in one private kubernetes 
                cluster with a postgres database in another 
                private kubernetes cluster. The example uses docker 
                and kind to create these kubernetes clusters.`,
  },
];

const Experience: FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Heading as="h2" size="lg" mb="4">
        Experience
      </Heading>

      <Text variant="readabilityOptimized">
        Our hands-on examples use Ockam to create encrypted portals to various databases running in
        various environments. Choose any of the options below to experience first hand how quickly
        Ockam can connect two private systems.
      </Text>
      <Flex my={12} gap={4}>
        {examples.map(({ title, href, text }) => (
          <LinkBox width="18%" minW="15em" key={title}>
            <Card
              border={`1px solid ${theme.colors.gray[200]}`}
              _hover={{ borderColor: theme.colors.avocado[500] }}
            >
              <CardHeader>
                <Heading size="sm">
                  <LinkOverlay href={href} isExternal={false}>
                    {title}
                  </LinkOverlay>
                </Heading>
              </CardHeader>
              <CardBody>
                <Text size="xs" variant="readabilityOptimized" m={0}>
                  {text}
                </Text>
              </CardBody>
            </Card>
          </LinkBox>
        ))}
      </Flex>
    </Box>
  );
};

export default Experience;
