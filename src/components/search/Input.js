import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import debounce from 'lodash/debounce';
import SearchIcon from 'emotion-icons/material/Search';
import styled from '@emotion/styled';

import Icon from '../Icon';
import BaseInput from '../forms/Input';

export const Input = styled(BaseInput)`
  width: 100%;
  background: transparent;
  transition: all 150ms ease-in-out;
  border: none;
  &:focus {
    border: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default connectSearchBox(({ refine, ...rest }) => {
  const debouncedOnChange = debounce(value => refine(value), 200);
  return (
    <Form>
      <Icon icon={SearchIcon} size={24} />
      <Input
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e => debouncedOnChange(e.target.value)}
        {...rest}
      />
    </Form>
  );
});
