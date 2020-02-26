import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import { space, layout, flex, grid } from "styled-system";
import ReCAPTCHA from "react-google-recaptcha";

import useLocation from "../../hooks/useLocation";

import HiddenField from "./HiddenField";

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
}, space, layout, flex, grid);

const RecaptchaField = ({ name, errors, value, gridArea, onChange}) => {
  const recaptchaRef  = useRef();
  const location = useLocation();
  const isLocalStage = location.hostname === 'localhost';
  const GOOGLE_RECAPTCHA_SITEKEY = isLocalStage ? '6LfIDtwUAAAAAIt2vgTj7LTIJ9tqwlNKV4fZecbK' : '6Ldn5tYUAAAAACN3T6WAycLimoSDoolYQJ1hPuNj';

  const onSuccessRecaptcha = (val) => onChange({ [name]: val || '' })

  return (
    <Container gridArea={gridArea}>
      <ReCAPTCHA
        theme="light"
        ref={recaptchaRef}
        sitekey={GOOGLE_RECAPTCHA_SITEKEY}
        onChange={onSuccessRecaptcha}
      />
      <HiddenField value={value} name={name} errors={errors} />
    </Container>
  );
};

RecaptchaField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
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
