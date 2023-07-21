import { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';

type Props = {
  text?: string;
};
const RotatingHeading: FC<Props> = ({ text }) => {
  const msg = text || 'Ockam enables developers to build apps<br />that can Trust data-in-motion';
  return (
    <Box my={30}>
      <Heading
        as="h1"
        size={{ base: 'md', lg: 'h2' }}
        fontWeight="extrabold"
        textAlign="center"
        color="white"
        lineHeight={{ base: 1, lg: 1.2 }}
        dangerouslySetInnerHTML={{ __html: msg }}
      />
    </Box>
  );
};
export default RotatingHeading;
