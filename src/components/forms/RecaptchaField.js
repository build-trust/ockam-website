import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { space, layout, flex, grid } from 'styled-system';
import ReCAPTCHA from 'react-google-recaptcha';

import useSiteMetadata from '../../hooks/useSiteMetadata';

import HiddenField from './HiddenField';

const Container = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
  },
  space,
  layout,
  flex,
  grid
);

const RecaptchaField = ({ name, errors, value, gridArea, onChange }) => {
  const recaptchaRef = useRef();
  const {
    env: { RECAPTCHA_SITEKEY },
  } = useSiteMetadata();
  const onSuccessRecaptcha = val => onChange({ [name]: val || '' });

  return (
    <Container gridArea={gridArea}>
      <ReCAPTCHA
        theme="light"
        ref={recaptchaRef}
        sitekey={RECAPTCHA_SITEKEY}
        onChange={onSuccessRecaptcha}
      />
      <HiddenField value={value} name={name} errors={errors} />
    </Container>
  );
};

RecaptchaField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  errors: PropTypes.arrayOf(PropTypes.string),
  gridArea: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

RecaptchaField.defaultProps = {
  value: '',
  errors: [],
  gridArea: undefined,
};

export default RecaptchaField;
