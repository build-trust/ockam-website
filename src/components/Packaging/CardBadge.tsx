import { Flex, FlexProps, Text, useColorModeValue } from '@chakra-ui/react';

const CardBadge = (props: FlexProps): JSX.Element => {
  const { children, ...flexProps } = props;
  const accentColor = useColorModeValue('avocado.600', 'avocado.200');
  return (
    <Flex
      borderBottom={accentColor}
      position="absolute"
      right={0}
      top={0}
      width="240px"
      transform="rotate(0deg)"
      py={2}
      justifyContent="center"
      alignItems="center"
      {...flexProps}
    >
      <Text
        fontSize="xs"
        textTransform="uppercase"
        fontWeight="bold"
        letterSpacing="wider"
        color={useColorModeValue('white', 'gray.800')}
      >
        {children}
      </Text>
    </Flex>
  );
};

export default CardBadge;
