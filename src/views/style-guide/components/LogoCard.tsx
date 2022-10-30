/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { FunctionComponent, useState } from 'react';
import { saveAs } from 'file-saver';
import {
  Box,
  Button,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  Text,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';

import { LogoContent } from '@root/typings/StyleGuide';
import { downloadOptions } from '@root/consts/logos';

const LogoCard: FunctionComponent<LogoContent> = ({ isDark, logo, heading, description }) => {
  const [selectedImageType, setSelectedImageType] = useState('png');

  const handleDownloadImage = () =>
    saveAs(`/logo/${logo}.${selectedImageType}`, `${logo}.${selectedImageType}`);

  return (
    <Box minWidth={20} width="calc(33% - 26px)">
      <Box
        backgroundColor={isDark ? 'brand.900' : 'white'}
        borderRadius={4}
        height={246}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderWidth={1}
        position="relative"
      >
        <Image src={`/logo/${logo}.svg`} />
        <Menu closeOnSelect={false} placement="bottom-end" >
          <MenuButton
            position="absolute"
            top={3}
            right={3}
            width={4}
            height={4}
            as={IconButton}
            icon={<Image src="/icon/download.svg" width="100%" height="100%" />}
          />
          <MenuList maxWidth={32} minWidth={32} >
            <RadioGroup defaultValue={selectedImageType}>
              <Stack>
                {downloadOptions.map((option: string) => (
                  <MenuItem key={option} _hover={{ bg: 'avocado.400'}}>
                    <Radio
                      colorScheme="avocado"
                      value={option}
                      onChange={(e) => {
                        setSelectedImageType(e.target.value);
                      }}
                      _checked={{ borderWidth: '4px ', borderColor: 'avocado.600' }}
                    >
                      {option.toUpperCase()}
                    </Radio>
                  </MenuItem>
                ))}
              </Stack>
            </RadioGroup>
            <MenuItem as="div" _hover={{ background: 'white'}}>
              <Button
                onClick={handleDownloadImage}
                colorScheme="avocado"
                type="button"
              >
                {' '}
                Download{' '}
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box marginTop={5}>
        <Text color="brand.900" fontWeight="bold" fontSize="lg" marginBottom={3}>
          {heading}
        </Text>
        <Text color="gray.500" fontSize="sm">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default LogoCard;
