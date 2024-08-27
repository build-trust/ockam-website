import { FC, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

type Props = {
  open: boolean;
};
const VerifyEmailModal: FC<Props> = ({ open }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const close = () => {
    onClose();
    router.reload();
  };

  useEffect(() => {
    if (open) {
      onOpen();
    }
  }, [open]);

  return (
    <Modal isOpen={isOpen} onClose={close}>
      <ModalOverlay />
      <ModalContent backgroundColor="brand.200">
        <ModalHeader textAlign="center" fontSize={42}>
          📬
        </ModalHeader>
        <ModalHeader textAlign="center" fontSize={32} letterSpacing="-1px">
          Check your inbox!
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Before you can proceed we need to confirm your email address. We&apos;ve already sent you
          an email, just click the link in it and then come back here.
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={close}>
            I&apos;ve verified
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default VerifyEmailModal;
