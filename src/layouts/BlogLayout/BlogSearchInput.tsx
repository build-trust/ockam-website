import { ChangeEvent, FunctionComponent, useContext, KeyboardEvent, useState } from 'react';
import { Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import { MobileNavbarContext } from '@contextProviders/MobileNavbarProvider';
import { SearchValueContext } from '@contextProviders/SearchValueProvider';

const BlogSearchInput: FunctionComponent<InputProps> = ({ ...restProps }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const { onToggleMobileNav } = useContext(MobileNavbarContext);
  const { handleSearchValueChange } = useContext(SearchValueContext);

  const handleBlogSearchInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => setInputValue(value);

  const updateSearchValue = (): void => handleSearchValueChange!(inputValue);

  const handleSearchValueUpdate = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      updateSearchValue();
      onToggleMobileNav!();
    }
  };

  const handleIconClick = (): void => {
    updateSearchValue();
    onToggleMobileNav!();
  };

  return (
    <InputGroup {...restProps}>
      <Input
        variant="outline"
        value={inputValue}
        onChange={handleBlogSearchInputChange}
        placeholder="Search the article"
        onKeyDown={handleSearchValueUpdate}
      />
      <InputRightElement _hover={{ cursor: 'pointer' }} onClick={handleIconClick}>
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  );
};

export default BlogSearchInput;
