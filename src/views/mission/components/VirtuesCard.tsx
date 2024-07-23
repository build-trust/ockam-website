import Image, { StaticImageData } from 'next/legacy/image';
import { Box, Flex, FlexProps, Heading, Text } from '@chakra-ui/react';
import { FunctionComponent, ReactNode } from 'react';

type VirtuesCardProps = {
  title: string;
  panel: {
    image: StaticImageData;
    text: ReactNode;
  };
} & FlexProps;

const VirtuesCard: FunctionComponent<VirtuesCardProps> = ({ title, panel, ...restProps }) => (
  <Flex
    direction={{ base: 'column', lg: 'row' }}
    align={{ base: 'center', lg: 'flex-start' }}
    p={{ base: '1rem', lg: '2.5rem' }}
    gap={{ base: '4rem' }}
    bgColor="white"
    border="1px"
    borderColor="gray.200"
    borderRadius="0.75rem"
    {...restProps}
  >
    <Image style={{ minWidth: '12rem' }} src={panel.image} width={192} height={192} />

    <Box flex={1}>
      <Heading
        as="h4"
        mb={{ base: '1rem' }}
        fontFamily="neutraface"
        fontWeight={700}
        lineHeight={1.3}
        fontSize="1.75rem"
      >
        {title}
      </Heading>

      <Text fontSize="1rem" lineHeight={1.5} color="gray.500">
        {panel.text}
      </Text>
    </Box>
  </Flex>
);

export default VirtuesCard;
