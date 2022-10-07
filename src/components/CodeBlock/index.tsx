import { Box, BoxProps, Code, CodeProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const CodeLib = (props: BoxProps): JSX.Element => (
  <Box as="span" color="brand.500" {...props} />
);
export const CodeFlag = (props: BoxProps): JSX.Element => (
  <Box as="span" color="#DA9A4F" {...props} />
);

export const CodeLog = (props: BoxProps): JSX.Element => (
  <Box as="span" display="block" color="gray.500" {...props} />
);
export const CodeComment = (props: BoxProps): JSX.Element => (
  <CodeLog fontStyle="italic" {...props} />
);

export const CodeLine = ({
  lib = '',
  prefix = '$',
  prefixColor = 'gray.200',
  children,
  ...restProps
}: {
  lib?: string;
  prefix?: string;
  prefixColor?: string;
  children: ReactNode;
} & BoxProps): JSX.Element => (
  <Box as="span" display="block" color="gray.200" {...restProps}>
    {lib && (
      <Box as="span" color={prefixColor}>
        {prefix}
      </Box>
    )}{' '}
    <CodeLib>{lib}</CodeLib> {children}
  </Box>
);

export const CodeBlock = (props: CodeProps): JSX.Element => (
  <Code
    maxW="full"
    bg="linear-gradient(61.72deg, rgba(22, 37, 53, 0.85) 40.59%, rgba(0, 0, 0, 0.85) 175.74%)"
    borderRadius="md"
    boxShadow="xl"
    borderTopWidth={33}
    borderTopColor="rgb(109, 116, 127)"
    {...props}
  />
);
