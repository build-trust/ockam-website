import { ReactElement, ReactNode } from 'react';
import { Text, VStack, StackProps } from '@chakra-ui/react';

interface ShadowBoxProps extends StackProps {
  text: ReactNode;
  description: ReactNode;
}
const ShadowBox = ({ text, description, ...stackProps }: ShadowBoxProps): ReactElement => (
  <VStack
    borderRadius={{ base: '0.75rem' }}
    padding={{ base: '1rem', lg: '1.75rem' }}
    gap="0.75rem"
    boxShadow="-10px 10px 25px 0px rgba(255, 255, 255, 0.20)"
    backdropFilter="blur(3px)"
    bgGradient="linear-gradient(108deg, rgba(5, 39, 75, 0.40) 3.79%, rgba(6, 53, 60, 0.40) 93.01%)"
    {...stackProps}
  >
    <Text
      color="white"
      fontSize={{ base: '1.375rem', lg: '1.75rem' }}
      fontWeight={{ base: 700 }}
      fontFamily="neutraface"
    >
      {text}
    </Text>
    <Text color="white" fontSize={{ base: '0.875rem', lg: '1rem' }} fontWeight={{ base: 400 }}>
      {description}
    </Text>
  </VStack>
);

export default ShadowBox;
