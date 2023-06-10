import { Button, ButtonProps, Link } from '@chakra-ui/react';

interface ActionButtonProps extends ButtonProps {
  href: string;
}

const ActionButton = (props: ActionButtonProps): JSX.Element => {
  const { href } = props;

  return (
    <Link href={href} textDecoration="none" _hover={{ textDecoration: 'none' }}>
      <Button colorScheme="avocado" size="md" w="full" fontWeight="extrabold" py={2} {...props} />
    </Link>
  );
};
export default ActionButton;
