import { CloseIcon } from '@chakra-ui/icons';
import { Box, Slide, Text, useDisclosure } from '@chakra-ui/react';
import { FC, useEffect, useRef } from 'react';

type Props = {
  message?: string;
};
const Notice: FC<Props> = ({ message }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const noticeRef = useRef<HTMLDivElement>(null);

  const closeNotice = (): void => {
    onClose();
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        onOpen();
      }, 1000);
    }
  }, [message]);

  return (
    <Slide direction="top" in={isOpen} style={{ zIndex: 1000 }}>
      <Box
        ref={noticeRef}
        zIndex="1000"
        textAlign="center"
        py={4}
        // boxSizing="border-box"
        // position="absolute"
        width="100%"
        background="#A0F6E1"
        fontWeight="bold"
        boxShadow="0px 5px 10px rgba(0, 0, 0, 0.25)"
        border="none"
        color="#242A31"
        position="relative"
        pr={5}
      >
        <Text color="inherit">{message}</Text>

        <CloseIcon
          onClick={closeNotice}
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
export default Notice;
