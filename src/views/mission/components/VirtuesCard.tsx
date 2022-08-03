import Image, { StaticImageData } from 'next/image';
import { Box, Flex, FlexProps, Heading, Text } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

type VirtuesCardProps = {
  title: string;
  panel: {
    image: StaticImageData;
    texts: string[];
  };
} & FlexProps;

const VirtuesCard: FunctionComponent<VirtuesCardProps> = ({ title, panel, ...restProps }) => (
  <Flex
    direction={{ base: 'column-reverse', lg: 'row' }}
    align={{ base: 'center', lg: 'flex-start' }}
    py={{ base: 10, lg: 8 }}
    px={{ base: 5, lg: 8 }}
    pr={{ lg: 12 }}
    bgColor="white"
    border="1px"
    borderColor="gray.200"
    borderRadius="base"
    {...restProps}
  >
    {panel.image && (
      <Box pr={{ lg: 9 }}>
        <Image src={panel.image} width={404} height={436} placeholder="blur" />
      </Box>
    )}

    <Box flex={1}>
      <Heading as="h4" size="h4" mb={{ base: 6, lg: 9 }}>
        {title}
      </Heading>

      {panel.texts.map((text) => (
        <Text key={text} _notLast={{ mb: 5 }}>
          {text}
        </Text>
      ))}
    </Box>
  </Flex>
);

export default VirtuesCard;
