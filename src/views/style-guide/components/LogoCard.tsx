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
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleDownloadImage = () => {
    setMenuOpen(false);
    saveAs(`/logo/${logo}.${selectedImageType}`, `${logo}.${selectedImageType}`);

  }

  return (
    <Box minWidth="335px" width="calc(33% - 26px)">
      <Box
        backgroundColor={isDark ? 'brand.900' : 'white'}
        borderRadius="4px"
        height="246px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderWidth="1px"
        position="relative"
      >
        <Image src={`/logo/${logo}.svg`} />
        <Menu isOpen={isMenuOpen} >
          <MenuButton
            position="absolute"
            top="3"
            right="3"
            width="12px"
            height="12px"
            as={IconButton}
            onClick={() => setMenuOpen(true)}
            icon={<Image src="/icon/download.svg" width="100%" height="100%" />}
          />
          <MenuList>
            <RadioGroup defaultValue={selectedImageType}>
              <Stack>
                {downloadOptions.map((option: string) => (
                  <MenuItem key={option}>
                    <Radio value={option} onChange={(e) => {setSelectedImageType(e.target.value)}}>{option.toUpperCase()}</Radio>
                  </MenuItem>
                ))}
              </Stack>
            </RadioGroup>

            <MenuItem>
              {' '}
              <Button onClick={handleDownloadImage} type='button' color='#000000' backgroundColor='#4FDAB8'> Download </Button>{' '}
            </MenuItem>
          </MenuList>
        </Menu>
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
};

export default LogoCard;
