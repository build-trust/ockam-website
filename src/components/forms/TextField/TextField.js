import React from 'react';
import PropTypes from 'prop-types';

import FieldContainer from '../FieldContainer';
import Input from '../Input';
import LabelAsterisk from '../LabelAsterisk';
import FieldErrorMessages from '../FieldErrorMessages';
import Text from '../../Text';

const TextField = ({
  name,
  type,
  label,
  value,
  onChange,
  errors,
  disabled,
  className,
  required,
  tabIndex,
  setRef,
  ...rest
}) => {
  const onChangeHandler = e => {
    onChange({ [name]: e.target.value });
  };

  return (
    <FieldContainer
      className={className}
      ref={setRef ? setRef(name) : undefined}
    >
      <Text mb={1} fontSize="small">
        {label}
        {required && <LabelAsterisk />}
      </Text>
      <Input
        name={name}
        type={type}
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

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  tabIndex: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  required: PropTypes.bool,
  setRef: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  gridArea: PropTypes.string,
};

TextField.defaultProps = {
  type: 'text',
  label: '',
  value: '',
  onChange() {},
  tabIndex: '0',
  errors: [],
  disabled: false,
  className: '',
  required: false,
  setRef: false,
  gridArea: undefined,
};

export default TextField;
