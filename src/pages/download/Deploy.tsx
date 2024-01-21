import { Box, Heading, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { FC } from 'react';

const Deploy: FC = () => (
  <Box mb={4}>
    <Heading as="h2" size="lg" mb="4">
      Deploy
    </Heading>

    <Text mb="4">
      Now you&apos;re ready to build! Now you can take a look at the various{' '}
      <Link href="https://docs.ockam.io/guides/use-cases" color="brand.500">
        Ockam use cases
      </Link>{' '}
      and follow one of associated example guides to how to implement it. Also make sure you connect
      with us to stay updated on the latest changes or to get any help you may need:
    </Text>
    <UnorderedList spacing="2">
      <ListItem>
        <Link color="brand.600" href="https://discord.gg/RAbjRr3kds">
          👾 Discord
        </Link>{' '}
        - Join us at the Build Trust server, full of people interested in building systems that are
        secure-by-design
      </ListItem>
      <ListItem>
        <Link color="brand.600" href="https://github.com/build-trust/ockam/discussions">
          💬 Discussions
        </Link>{' '}
        - Come and introduce yourself, ask for help, etc.
      </ListItem>
      <ListItem>
        <Link color="brand.600" href="https://github.com/build-trust/ockam">
          ⭐️ Star us on GitHub! ⭐️️
        </Link>{' '}
        - Share the 💙, see updates in your feed, help others discover Ockam
      </ListItem>
    </UnorderedList>
  </Box>
);

export default Deploy;
