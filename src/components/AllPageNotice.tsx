import { CloseIcon } from '@chakra-ui/icons';
import { Box, Heading, Slide, Text, TextProps, useDisclosure } from '@chakra-ui/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { FC, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { CodeBlock } from './CodeBlock';

interface AllPageMessage {
  message: MDXRemoteSerializeResult;
  except?: string | string[];
}

const components = {
  p: (props: TextProps): JSX.Element => <Text m={1} color="white" {...props} />,
  h1: Heading,
  Heading,
  code: CodeBlock,
};

interface Props {
  message?: MDXRemoteSerializeResult;
  except?: string | string[];
}
const AllPageNotice: FC<Props> = ({ message, except }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const stateKey = 'allpagenotice';
  const pathname = usePathname();

  const shouldShowMessage = useCallback((): boolean => {
    if (except) {
      const excepts = ([] as string[]).concat(except);
      if (excepts.includes(pathname)) return false;
    }
    const session = window.localStorage.getItem(stateKey);
    if (!session) return true;
    const state = JSON.parse(session);
    const yesterday = new Date().getTime() - 1 * 24 * 60 * 60 * 1000;
    if (state.lastClosed > yesterday) return false;
    return true;
  }, [except, pathname]);

  useEffect(() => {
    if (message) {
      if (shouldShowMessage()) setTimeout(onOpen, 2000);
    }
  }, [message, onOpen, shouldShowMessage]);

  const close = (): void => {
    window.localStorage.setItem(stateKey, JSON.stringify({ lastClosed: new Date().getTime() }));
    onClose();
  };

  if (!message) return <></>;

  return (
    <Slide direction="top" in={isOpen} style={{ zIndex: 1000 }}>
      <Box
        zIndex="1000"
        textAlign="center"
        py={1}
        // boxSizing="border-box"
        // position="absolute"
        width="100%"
        background="#EC432D"
        fontWeight="bold"
        boxShadow="0px 5px 10px rgba(0, 0, 0, 0.25)"
        border="none"
        color="white"
        position="relative"
        pr={5}
      >
        {message && <MDXRemote {...message} components={components} />}

        <CloseIcon
          onClick={close}
          aria-label="Close notification"
          boxSize={4}
          mx={2}
          cursor="pointer"
          position="absolute"
          right={0}
          top="calc(50% - var(--chakra-sizes-4)/2 )"
        />
      </Box>
    </Slide>
  );
};

export type { AllPageMessage };
export default AllPageNotice;