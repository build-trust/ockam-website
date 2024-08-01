import { createRef, FC, ReactElement, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FlexProps,
  Heading,
  Image,
  Select,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { HiCheck } from 'react-icons/hi';

import { User } from '@root/components/Auth';
import colors from '@root/theme/colors';

import Orchestrator, { Space } from '../Orchestrator';

type Props = {
  user?: User;
  spaces?: Space[];
  spaceSelected: Function;
};

type SpaceProps = {
  spaces: Space[];
  spaceSelected: Function;
} & FlexProps;

const ChooseSpace: FC<SpaceProps> = ({ spaces, spaceSelected, ...rest }) => {
  const ref = createRef<HTMLSelectElement>();
  const submit = (): void => {
    if (ref.current && ref.current.selectedIndex > 0) {
      const spaceId = ref.current.options[ref.current.selectedIndex].value;
      const space = spaces.find((s) => s.id === spaceId);
      if (space) spaceSelected(space);
    }
  };

  return (
    <Flex direction="column" maxW="2xl" my={8} {...rest}>
      <Select placeholder="Select space..." ref={ref}>
        {spaces.map((s) => (
          <option value={s.id} key={s.id}>
            {s.name}
          </option>
        ))}
      </Select>
      <Button colorScheme="avocado" my="4" onClick={submit} maxW="sm">
        Next
      </Button>
    </Flex>
  );
};

const Welcome: FC<Props> = ({ user, spaces, spaceSelected }) => {
  const [signedIn, setSignedIn] = useState(false);
  const [chooseSpace, setChooseSpace] = useState(false);

  useEffect(() => {
    if (user && spaces && !signedIn) {
      setSignedIn(true);
      if (spaces.length === 1) {
        spaceSelected(spaces[0]);
      } else if (spaces.length === 0) {
        Orchestrator.createSpace(user.token, 'developer-free').then((space) => {
          spaceSelected(space);
        });
      } else {
        setChooseSpace(true);
      }
    }
  }, [setSignedIn, signedIn, user, spaces, spaceSelected]);

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

  const mustChooseSpace = (ifTrue: string, ifFalse: string): string =>
    signedIn && chooseSpace ? ifTrue : ifFalse;

  const ifSignedInNotChooseSpace = (ifTrue: string, ifFalse: string): string =>
    signedIn && !chooseSpace ? ifTrue : ifFalse;

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
        variant="readabilityOptimized"
        opacity={signedIn ? '1' : '0'}
        transition="opacity 1s 3.1s ease-in-out"
      >
        Congratulations on creating your account. We&apos;ll now walk you through configuring your
        initial plan, installing Ockam, and then using it to establish your first secure channel.
      </Text>
      <ChooseSpace
        spaces={spaces || []}
        spaceSelected={spaceSelected}
        opacity={mustChooseSpace('1', '0')}
        height={mustChooseSpace('auto', '0')}
        transition="opacity 1s 3.1s ease-in-out"
        margin={mustChooseSpace('inherit', '0')}
      />
      <Flex
        direction="row"
        justifyContent="flex-start"
        align="center"
        opacity={ifSignedInNotChooseSpace('1', '0')}
        transition="opacity 1s 3.1s ease-in-out"
      >
        <Spinner size="xs" />
        <Text variant="readabilityOptimized">&nbsp;Loading plan information&hellip;</Text>
      </Flex>
    </Box>
  );
};

export default Welcome;
