import { Box, Button, Heading, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  prev: () => void;
};
const Deploy: FC<Props> = ({ prev }) => (
  <Box mb={4}>
    <Heading as="h2" size="lg" mb="4">
      Deploy
    </Heading>

    <Text mb="4">
      Now you&apos;re ready to build! Now you can take a look at the{' '}
      <Link href="https://docs.ockam.io/" color="brand.500">
        Ockam documentation
      </Link>{' '}
      and follow one of associated example guides on how to implement it in your production
      environment. Also make sure you connect with us to stay updated on the latest changes or to
      get any help you may need:
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
    <Box my={8}>
      <Button colorScheme="gray" mb="8" onClick={prev}>
        Go back
      </Button>
    </Box>
  </Box>
);

export default Deploy;
