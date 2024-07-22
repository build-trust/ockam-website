import { Button, Flex, forwardRef, useMultiStyleConfig, useTab } from '@chakra-ui/react';

const selectedTabStyle = {
  textDecoration: 'underline',
  fontWeight: 'semibold',
};

const CustomTab = forwardRef(({ itemCount, ...restProps }, ref) => {
  const tabProps = useTab({ ...restProps, ref });
  const isSelected = !!tabProps['aria-selected'];
  const styles = useMultiStyleConfig('Tabs', tabProps);

  return (
    <Flex
      textAlign="left"
      justifyContent="flex-start"
      alignItems="center"
      alignContent="flex-start"
      fontWeight="medium"
      w="auto"
      lineHeight={1}
      mr={{ base: 7, lg: 0 }}
    >
      <Button
        __css={styles.tab}
        _hover={selectedTabStyle}
        _selected={selectedTabStyle}
        _active={selectedTabStyle}
        px={1}
        py={4}
        fontSize={{ base: '1.125rem' }}
        textAlign="left"
        variant="link"
        {...tabProps}
      >
        {tabProps.children}
      </Button>

      <Flex
        as="span"
        ml="0.75rem"
        w="1.5rem"
        h="1.5rem"
        flexShrink={0}
        alignItems="center"
        justifyContent="center"
        borderRadius="0.25rem"
        fontSize={{ base: '0.875rem' }}
        fontWeight={{ base: 600 }}
        bg={isSelected ? 'brand.500' : 'gray.100'}
        color={isSelected ? 'white' : 'brand.900'}
      >
        {itemCount}
      </Flex>
    </Flex>
  );
});

export default CustomTab;
