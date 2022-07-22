import { ChangeEvent, FunctionComponent, useContext, KeyboardEvent } from 'react';
import { Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

import { MobileNavbarContext } from '@contextProviders/MobileNavbarProvider';
import { useBlogPostsContext } from '@contextProviders/BlogPostsProvider';
import { BLOG_PATH } from '@consts/paths';

const BlogSearchInput: FunctionComponent<InputProps> = ({ ...restProps }) => {
  const { onToggleMobileNav, isBelowSmallLaptop } = useContext(MobileNavbarContext);
  const { handleSetSearchPostsQuery, searchInputValue, handleSetSearchInputValue } =
    useBlogPostsContext();
  const router = useRouter();

  const handleBlogSearchInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => handleSetSearchInputValue(value);

  const handleSearch = (): void => {
    handleSetSearchPostsQuery(searchInputValue);
    onToggleMobileNav();

    if (isBelowSmallLaptop) handleSetSearchInputValue('');

    if (router.pathname !== BLOG_PATH) {
      router.push({ pathname: BLOG_PATH }, undefined, { shallow: true });
    }
  };

  const handleSearchValueUpdate = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== 'Enter') return;
    handleSearch();
  };

  return (
    <InputGroup {...restProps}>
      <Input
        variant="outline"
        value={searchInputValue}
        onChange={handleBlogSearchInputChange}
        placeholder="Search the article"
        onKeyDown={handleSearchValueUpdate}
      />
      <InputRightElement _hover={{ cursor: 'pointer' }} onClick={handleSearch}>
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  );
};

export default BlogSearchInput;
