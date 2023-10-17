import { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';

type Props = {
  text?: string;
};
const RotatingHeading: FC<Props> = ({ text }) => {
  const msg = text || 'Ockam enables developers to build apps that can Trust data-in-motion';
  return (
    <Box mb={10}>
      <Heading
        as="h1"
        size={{ base: 'md', lg: 'h2' }}
        fontWeight="medium"
        textAlign="center"
        color="rgba(255, 255, 255, 0.8)"
        letterSpacing="-0.08em"
        lineHeight={{ base: 1, lg: 1.2 }}
        dangerouslySetInnerHTML={{ __html: msg }}
        maxW="26em"
        mx="auto"
        style={{ textWrap: 'balance' }}
      />
    </Box>
  );
};
export default RotatingHeading;
