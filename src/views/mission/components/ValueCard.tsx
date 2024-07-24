import { FunctionComponent, SVGAttributes } from 'react';
import { Flex, Text, Icon, Stack } from '@chakra-ui/react';

type TimeLineItemProps = {
  icon: FunctionComponent<SVGAttributes<SVGElement>>;
  title: string;
  texts: string[];
  itemPosition: 'left' | 'right';
};

const ValueCard: FunctionComponent<TimeLineItemProps> = ({
  icon,
  title,
  texts,
  itemPosition = 'left',
}) => (
  <Flex
    justifyContent={{ base: 'center', lg: itemPosition === 'right' ? 'flex-start' : 'flex-end' }}
    w="full"
    position="relative"
    alignItems="center"
    mb={{ base: '3rem', lg: '5rem' }}
    _before={{
      display: { base: 'none', lg: 'block' },
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '8px',
      height: '8px',
      backgroundColor: 'white',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    <Flex
      maxW="32.0625rem"
      p="1.75rem"
      borderRadius="0.75rem"
      border="1px solid rgba(116, 223, 255, 0.20)"
      background="linear-gradient(109deg, rgba(5, 39, 75, 0.40) 8.18%, rgba(6, 53, 60, 0.40) 88.15%)"
      backdropFilter="blur(3px)"
      gap={{ base: '1.5rem' }}
      flexDirection={{ base: 'column', lg: 'row' }}
      position="relative"
      w={{ lg: '50%' }}
    >
      <Flex
        borderRadius="0.75rem"
        alignItems="center"
        justifyContent="center"
        alignSelf="flex-start"
        p="0.5rem"
        bg="rgba(116, 223, 255, 0.15)"
      >
        <Icon as={icon} color="white" w={6} h={6} />
      </Flex>

      <Stack gap="0.75rem">
        <Text fontFamily="neutraface" fontWeight={700} fontSize={{ base: '1.75rem' }} color="white">
          {title}
        </Text>

        {texts.map((text) => (
          <Text key={text} fontSize={{ base: '1rem' }} lineHeight={1.5} color="white">
            {text}
          </Text>
        ))}
      </Stack>
    </Flex>
  </Flex>
);

export default ValueCard;
