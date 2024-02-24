import { FC, ReactElement, useEffect, useState } from 'react';
import { Box, Flex, Heading, Image, Spinner, Text } from '@chakra-ui/react';
import { HiCheck } from 'react-icons/hi';

import { User } from '@root/components/Auth';
import colors from '@root/theme/colors';

type Props = {
  user?: User;
  nextCallback: Function;
};
const Welcome: FC<Props> = ({ user, nextCallback }) => {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (user && !signedIn) {
      setSignedIn(true);
      setTimeout(() => {
        nextCallback();
      }, 10000);
    }
  }, [setSignedIn, signedIn, nextCallback, user]);

  const doneIcon = (): ReactElement => (
    <Box
      display="inline-block"
      opacity={signedIn ? '1' : '0'}
      width={signedIn ? 'auto' : '0'}
      transition="opacity 0.5s 1s linear, width 0s 0.7s"
      height="43px"
      verticalAlign="middle"
    >
      <HiCheck color={colors.avocado['500']} />
    </Box>
  );
  const spinner = (): ReactElement => (
    <Box
      display="inline-block"
      opacity={signedIn ? '0' : '1'}
      width={signedIn ? '0' : 'auto'}
      transition="opacity 0.5s 0s linear, width 0s 0.6s"
      height="43px"
      verticalAlign="middle"
    >
      <Spinner color="avocado.500" marginRight="12px" />
    </Box>
  );

  const avatar = (): ReactElement | undefined => {
    if (!user?.avatar) return undefined;
    return (
      <Box
        width="2rem"
        height="2rem"
        borderRadius="50%"
        overflow="hidden"
        position="relative"
        borderColor="grey.50"
        borderWidth="1px"
        borderStyle="solid"
        display="inline-block"
        mr={4}
        verticalAlign="middle"
      >
        <Image src={user?.avatar} objectFit="contain" sizes="48px" alt={user.email} />
      </Box>
    );
  };

  const userDetails = (): ReactElement | undefined => {
    if (user) {
      return <span>{user.email}</span>;
    }
    return undefined;
  };

  return (
    <Box>
      <Heading
        opacity={signedIn ? '0' : '1'}
        height={signedIn ? '0' : 'auto'}
        transition="opacity 1s 2s ease-in-out, height 0s 3s"
      >
        {spinner()}
        {doneIcon()}
        <span style={{ marginLeft: 4 }}>Checking account details</span>
      </Heading>
      <Heading opacity={signedIn ? '1' : '0'} transition="opacity 1s 3.1s ease-in-out">
        {avatar()}Welcome {userDetails()}
      </Heading>
      <Text
        opacity={signedIn ? '1' : '0'}
        transition="opacity 1s 3.1s ease-in-out"
        mx={0}
        my={4}
        maxW="45em"
        letterSpacing="-0.5px"
      >
        Congratulations on creating your account. We&apos;ll now walk you through configuring your
        initial plan, installing Ockam, and then using it to establish your first secure channel.
      </Text>
      <Flex
        direction="row"
        justifyContent="flex-start"
        align="center"
        opacity={signedIn ? '1' : '0'}
        transition="opacity 1s 3.1s ease-in-out"
      >
        <Spinner size="xs" />
        <Text mx={0} my={4} maxW="45em" letterSpacing="-0.5px">
          &nbsp;Loading plan information&hellip;
        </Text>
      </Flex>
    </Box>
  );
};

export default Welcome;
