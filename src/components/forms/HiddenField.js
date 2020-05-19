import React from 'react';
import PropTypes from 'prop-types';

import FieldContainer from './FieldContainer';
import Input from './Input';
import FieldErrorMessages from './FieldErrorMessages';

const HiddenField = ({
  name,
  value,
  onChange,
  errors,
  className,
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
      <Input
        name={name}
        type="hidden"
        value={value}
        onChange={onChangeHandler}
        errors={errors.length > 0}
        tabIndex={tabIndex}
        {...rest}
      />
      <FieldErrorMessages errors={errors} />
    </FieldContainer>
  );
};

HiddenField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  onChange: PropTypes.func,
  tabIndex: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  required: PropTypes.bool,
  setRef: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  gridArea: PropTypes.string,
};

HiddenField.defaultProps = {
  value: '',
  onChange() {},
  tabIndex: '0',
  errors: [],
  className: '',
  required: false,
  setRef: false,
  gridArea: undefined,
};

export default HiddenField;
