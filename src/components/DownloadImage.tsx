import { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { saveAs } from 'file-saver';

type DownloadImageProps = {
  downloadOptions: string[];
  folderName: string;
  imageName: string;
};

const DownloadImage: FunctionComponent<DownloadImageProps> = ({
  downloadOptions,
  folderName,
  imageName,
}) => {
  const [selectedImageType, setSelectedImageType] = useState('png');

  const handleDownloadImage = (): void =>
    saveAs(`/${folderName}/${imageName}.${selectedImageType}`, `${imageName}.${selectedImageType}`);

  return (
    <Menu closeOnSelect={false} placement="bottom-end">
      <MenuButton
        position="absolute"
        top={3}
        right={3}
        width={4}
        height={4}
        as={IconButton}
        backgroundColor="#d3dbe4"
        _active={{ backgroundColor: '#d3dbe4' }}
        icon={<Image src='/icons/download.svg' width={24} height={24} />}
      />
      <MenuList maxWidth={32} minWidth={32}>
        <RadioGroup defaultValue={selectedImageType}>
          <Stack>
            {downloadOptions.map((option: string) => (
              <MenuItem key={option} _hover={{ bg: 'avocado.400' }}>
                <Radio
                  colorScheme="avocado"
                  value={option}
                  onChange={(e): void => {
                    setSelectedImageType(e.target.value);
                  }}
                >
                  {option.toUpperCase()}
                </Radio>
              </MenuItem>
            ))}
          </Stack>
        </RadioGroup>
        <MenuItem as="div" _hover={{ background: 'white' }}>
          <Button onClick={handleDownloadImage} colorScheme="avocado" type="button">
            Download
          </Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DownloadImage;
