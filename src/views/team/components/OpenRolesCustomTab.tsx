import {
  Box,
  Button,
  Flex,
  forwardRef,
  useMultiStyleConfig,
  useTab,
  useTheme,
} from '@chakra-ui/react';

const selectedTabStyle = {
  textDecoration: 'underline',
  fontWeight: 'semibold',
};

const OpenRolesCustomTab = forwardRef(({ rolesCount, ...restProps }, ref) => {
  const tabProps = useTab({ ...restProps, ref });
  const isSelected = !!tabProps['aria-selected'];
  const styles = useMultiStyleConfig('Tabs', tabProps);
  const { gradients } = useTheme();

  return (
    <Flex
      textAlign="left"
      justifyContent="flex-start"
      alignItems="center"
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
        fontSize={{ lg: 'lg' }}
        {...tabProps}
      >
        {tabProps.children}
      </Button>

      <Box
        as="span"
        ml={3}
        py="5px"
        px="3px"
        borderRadius="3px"
        fontSize="sm"
        bg={isSelected ? gradients.primary : 'gray.100'}
        color={isSelected ? 'white' : 'inherit'}
      >
        {rolesCount}
      </Box>
    </Flex>
  );
});

export default OpenRolesCustomTab;
