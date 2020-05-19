import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Form from '../components/Form';
import TextField from '../components/forms/TextField';
import TextAreaField from '../components/forms/TextAreaField';
import { media } from '../utils/emotion';
import RecaptchaField from '../components/forms/RecaptchaField';
import useSiteMetadata from '../hooks/useSiteMetadata';

const StyledForm = styled(Form)`
  grid-template-areas:
    'name'
    'surname'
    'email'
    'comapny'
    'title'
    'country'
    'description'
    'recaptcha';

  ${media.desktop`
  grid-template-areas:
    "name surname"
    "email company"
    "title country"
    "description description"
    "recaptcha recaptcha";
  `}
`;

const ContactForm = forwardRef(
  ({ values, errors, onChange, pending, onSubmit, setRef }, ref) => {
    const {
      env: { STAGE, ROOT_URL },
    } = useSiteMetadata();
    const isLocalStage = STAGE === 'LOCAL';
    const returnUrl = `${ROOT_URL}?contactFormStatus=success`;
    return (
      <StyledForm
        ref={ref}
        onSubmit={onSubmit}
        error={errors.form}
        method="POST"
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      >
        <TextField
          required
          value={values.first_name}
          label="First name"
          onChange={onChange}
          errors={errors.first_name}
          disabled={pending}
          name="first_name"
          placeholder="Your first name"
          gridArea="first_name"
          setRef={setRef}
        />
        <TextField
          required
          value={values.last_name}
          label="Last name"
          onChange={onChange}
          errors={errors.last_name}
          disabled={pending}
          name="last_name"
          placeholder="Your last name"
          gridArea="last_name"
          setRef={setRef}
        />
        <TextField
          required
          value={values.email}
          label="Email"
          onChange={onChange}
          errors={errors.email}
          disabled={pending}
          name="email"
          placeholder="Your e-mail"
          gridArea="email"
          setRef={setRef}
        />
        <TextField
          required
          value={values.company}
          label="Company"
          onChange={onChange}
          errors={errors.company}
          disabled={pending}
          name="company"
          placeholder="Your company"
          gridArea="company"
          setRef={setRef}
        />
        <TextField
          required
          value={values.title}
          label="Title"
          onChange={onChange}
          errors={errors.title}
          disabled={pending}
          name="title"
          placeholder="Your title"
          gridArea="title"
          setRef={setRef}
        />
        <TextField
          required
          value={values.country}
          label="Country"
          onChange={onChange}
          errors={errors.country}
          disabled={pending}
          name="country"
          placeholder="Your country"
          gridArea="country"
          setRef={setRef}
        />
        <TextAreaField
          required
          value={values.description}
          label="Message"
          onChange={onChange}
          errors={errors.description}
          disabled={pending}
          name="description"
          placeholder="How can we help you?"
          gridArea="description"
          setRef={setRef}
        />
        <input type="hidden" name="oid" value="00D4T000000FcUg" />
        <input type="hidden" name="retURL" value={returnUrl} />
        {isLocalStage && <input type="hidden" name="debug" value="1" />}
        <RecaptchaField
          onChange={onChange}
          gridArea="recaptcha"
          value={values.recaptcha}
          name="recaptcha"
          errors={errors.recaptcha}
          setRef={setRef}
        />
      </StyledForm>
    );
  }
);

ContactForm.propTypes = {
  values: PropTypes.shape().isRequired,
  errors: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
  pending: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setRef: PropTypes.func.isRequired,
};

export default ContactForm;
