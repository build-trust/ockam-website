import { Box, BoxProps, Link as ChakraLink } from '@chakra-ui/react';
import { ReactNode } from 'react';
import NextLink from 'next/link';

type SectionAnchorProps = {
  id: string;
  children: ReactNode;
} & BoxProps;

const SectionAnchor = ({ id, children, ...restProps }: SectionAnchorProps): JSX.Element => (
  <>
    <Box visibility="hidden" position="relative">
      <Box
        id={id}
        visibility="hidden"
        position="absolute"
        left={0}
        top={{ base: '-78px', lg: '-88px' }}
        {...restProps}
      />
    </Box>

    <NextLink href={`#${id}`} passHref>
      <ChakraLink
        _hover={{
          textDecor: 'none',
        }}
      >
        {children}
      </ChakraLink>
    </NextLink>
  </>
);

export default SectionAnchor;
