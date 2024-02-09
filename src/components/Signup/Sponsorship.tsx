import { FC } from 'react';
import { Box, Heading, ListItem, OrderedList, Text, Link } from '@chakra-ui/react';

const Sponsorship: FC = () => (
  <Box pb={8}>
    <Heading as="h2" size="h2" mb="8">
      Surprise!
    </Heading>
    <Text mx={0} maxW="45em" letterSpacing="-0.5px" mb={4}>
      We love that you want to pay us, but we&apos;re not currently accepting payments for our
      developer-level plans. Instead, we want to amplify your support and have it impact other open
      source builders who are making it possible for software to be more private and secure. So take
      that money you were willing to pay us, and instead sponsor the Ockam Open Source project. We
      will then match your contribution and pass it along to other open source developers.
    </Text>
    <Text mx={0} maxW="45em" letterSpacing="-0.5px" mb={4}>
      You can get started today! Here&apos;s the steps:
    </Text>
    <OrderedList>
      <ListItem>
        💞 Become a{' '}
        <Link
          href="https://github.com/sponsors/build-trust"
          style={{ textDecoration: 'underline', color: 'blue' }}
        >
          sponsor to Ockam
        </Link>
      </ListItem>
      <ListItem>
        🌟 Star the{' '}
        <Link
          href="https://github.com/build-trust/ockam"
          style={{ textDecoration: 'underline', color: 'blue' }}
        >
          main Ockam repo
        </Link>
      </ListItem>
      <ListItem>
        That&apos;s it - each month we&pos;ll redistribute 2x the sponsored amount to other projects
      </ListItem>
    </OrderedList>
  </Box>
);

export default Sponsorship;
