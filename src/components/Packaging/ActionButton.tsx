import { Button, ButtonProps } from '@chakra-ui/react';

const ActionButton = (props: ButtonProps): JSX.Element => (
  <Button colorScheme="avocado" size="md" w="full" fontWeight="extrabold" py={2} {...props} />
);
export default ActionButton;
