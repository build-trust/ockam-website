import { FC, ReactNode } from 'react';
import { Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';

type Props = {
  status: 'loading' | 'info' | 'warning' | 'success' | 'error' | undefined;
  children: ReactNode;
};
const BlogAlert: FC<Props> = ({ status, children }) => (
  <Alert status={status} variant="left-accent" mt={2} mb={6} fontFamily="Inter" fontSize="md">
    <AlertIcon mr={6} />
    <AlertDescription mb={-6} lineHeight="200%">
      {children}
    </AlertDescription>
  </Alert>
);
export default BlogAlert;
