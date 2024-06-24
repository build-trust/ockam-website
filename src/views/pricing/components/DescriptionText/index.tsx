import { Text, TextProps } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';

interface DescriptionTextProps extends TextProps {
  children: ReactNode;
}
const DescriptionText = ({ children, ...textProps }: DescriptionTextProps): ReactElement => (
  <Text
    textAlign="justify"
    color="white"
    fontWeight={{ base: 500, lg: 700 }}
    fontSize={{ base: '0.875rem', lg: '1rem' }}
    {...textProps}
  >
    {children}
  </Text>
);

export default DescriptionText;
