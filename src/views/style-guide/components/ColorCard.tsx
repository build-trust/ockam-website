/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { FunctionComponent, useState } from 'react';
import { Box, Text, Tooltip } from '@chakra-ui/react';

import { TColorCard } from '@root/typings/StyleGuide';

import CopyTextToClipboard from '../../../utils/copyTextToClipboard';

const ColorCard: FunctionComponent<TColorCard> = ({ name, code, type }) => {
  const [copied, setCopied] = useState(false);

  return (
    <Box minWidth={20} width={{ base: '100%', sm: '40%' }}>
      <Box display="flex" alignItems="center">
        <Box
          height={16}
          width={16}
          background={code}
          borderRadius={16}
          borderColor="gray.200"
          borderWidth="1px"
          borderStyle="solid"
          marginRight={3}
        />
        <Box display={{ base: 'block', md: 'flex' }} justifyContent="space-between" width="75%">
          <Box display="flex" alignItems="center">
            <Box>
              <Text color="brand.900" fontSize="sm">
                {name}
              </Text>
              <Text color="gray.500" fontSize="xs">
                {type}
              </Text>
            </Box>
          </Box>
          <Box>
            {code.map((element: string, index: number) => (
              <Tooltip
                closeOnClick={false}
                key={`${element}-${index+1}`}
                label={copied ? 'Copied' : 'Copy'}
              >
                <Text
                  color="gray.500"
                  backgroundColor="gray.100"
                  fontSize="xs"
                  px={2}
                  py={0.5}
                  borderRadius={4}
                  cursor="pointer"
                  margin={1}
                  onClick={() => CopyTextToClipboard(element, setCopied)}
                  maxW="72px"
                >
                  {element}
                </Text>
              </Tooltip>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ColorCard;
