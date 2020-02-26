import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

import FieldContainer from '../FieldContainer';
import Input from '../Input';
import LabelAsterisk from '../LabelAsterisk';
import FieldErrorMessages from '../FieldErrorMessages';
import Text from "../../Text";

export const TextArea = styled(Input)`
  height: 10rem;
  padding-top: 1.7rem;
  padding-bottom: 1.7rem;
  resize: vertical;
  outline: none;
`;

const TextAreaField = ({
  name,
  label,
  value,
  onChange,
  errors,
  disabled,
  className,
  tabIndex,
  required,
  setRef,
  gridArea,
  ...rest
}) => {
  const onChangeHandler = (e) => {
    onChange({ [name]: e.target.value });
  };

  return (
    <FieldContainer
      className={className}
      ref={setRef ? setRef(name) : undefined}
      gridArea={gridArea}
    >
      <Text mb={1} fontSize="small">
        {label}
        {required && <LabelAsterisk />}
      </Text>
      <TextArea
        name={name}
        as="textarea"
        value={value}
        onChange={onChangeHandler}
        disabled={disabled}
        errors={errors.length > 0}
        tabIndex={tabIndex}
        {...rest}
      />
      <FieldErrorMessages errors={errors} />
    </FieldContainer>
  );
};

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  tabIndex: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
  setRef: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  gridArea: PropTypes.string,
};

TextAreaField.defaultProps = {
  label: '',
  value: '',
  onChange() {},
  tabIndex: '0',
  errors: [],
  disabled: false,
  required: false,
  className: '',
  setRef: false,
  gridArea: undefined,
};

export default TextAreaField;
