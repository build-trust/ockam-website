import { createContext, FunctionComponent, ReactNode, useState, useMemo, useCallback } from 'react';

import { BlogPost } from '@typings/BlogPost';
import filterBlogPostsBySearchValue from '@utils/filterBlogPostsBySearchValue';

type SearchValueProviderProps = {
  children: ReactNode;
  posts: BlogPost[];
};

type SearchValueContextType = {
  searchValue: string;
  handleSearchValueChange: (value: string) => void;
  handleRemoveSearchQuery: () => void;
  searchPosts: BlogPost[];
};

export const SearchValueContext = createContext<Partial<SearchValueContextType>>({});

const SearchValueProvider: FunctionComponent<SearchValueProviderProps> = ({ children, posts }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchValueChange = (value: string): void => setSearchValue(value);

  const handleRemoveSearchQuery = useCallback((): void => {
    handleSearchValueChange!('');
  }, []);

  const searchPosts = useMemo(
    () => filterBlogPostsBySearchValue(posts, searchValue),
    [posts, searchValue]
  );

  const value = useMemo(
    () => ({ searchValue, handleSearchValueChange, handleRemoveSearchQuery, searchPosts }),
    [searchValue, handleRemoveSearchQuery, searchPosts]
  );

  return <SearchValueContext.Provider value={value}>{children}</SearchValueContext.Provider>;
};

export default SearchValueProvider;
