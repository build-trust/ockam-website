import { FunctionComponent, useState } from 'react';
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

import MoveLayerDownIcon from '@assets/icons/move-layer-down.svg';

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
        as={IconButton}
        minW={2}
        minH={2}
        height={7}
        width={7}
        backgroundColor="gray.100"
        _active={{ backgroundColor: 'gray.200' }}
        icon={<MoveLayerDownIcon width={14} height={14}  />}
      />
      <MenuList maxWidth={32} minWidth={32}>
        <RadioGroup defaultValue={selectedImageType}>
          <Stack>
            {downloadOptions.map((option: string) => (
              <MenuItem key={option} _hover={{ bg: 'avocado.400' }} padding={0}>
                <Radio
                  width="100%"
                  px={4}
                  py={2}
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
