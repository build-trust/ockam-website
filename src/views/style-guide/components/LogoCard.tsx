import { Box, Image, Text } from '@chakra-ui/react';
import { LogoContent } from '@root/typings/StyleGuide';
import { FunctionComponent } from 'react';

export const LogoCard: FunctionComponent<LogoContent> = ({
  isDark,
  logo,
  heading,
  description,
}) => (
  <Box minWidth="335px" width="calc(33% - 26px)">
    <Box
      backgroundColor={isDark ? 'brand.900' : 'white'}
      borderRadius="4px"
      height="246px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderWidth="1px"
    >
      <Image src={`/logo/${logo}.svg`} />
    </Box>
    <Box marginTop="20px">
      <Text color="brand.900" fontWeight="bold" fontSize="lg" marginBottom="12px">
        {heading}
      </Text>
      <Text color="gray.500" fontSize="sm">
        {description}
      </Text>
    </Box>
  </Box>
);
