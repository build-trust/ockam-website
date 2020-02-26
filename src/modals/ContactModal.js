import React, {useRef} from 'react';
import PropTypes from 'prop-types';

import Modal from '../components/modal/Modal';
import ModalTitle from '../components/modal/ModalTitle';
import Text from '../components/Text';
import useForm from '../hooks/useForm';
import contactFormValidator from '../validators/contactFormValidator';
import Button from '../components/Button';
import contactFormErrorHandler from '../errors/contactFormErrorHandler';
import ContactForm from '../forms/ContactForm';

const ContactModal = ({ isActive, hide }) => {

  const contactFormRef = useRef();
  const handleSubmit = () => {
    contactFormRef.current.submit();
    return Promise.resolve('success');
  };

  const [{ values, pending, errors }, onChange, onSubmit, setRef] = useForm(
    handleSubmit,
    {
      onError: contactFormErrorHandler,
      validate: contactFormValidator,
    }
  );
  return (
    <Modal hide={hide} isActive={isActive}>
      <ModalTitle>Let's contact us</ModalTitle>
      <Text mb={4}>Let us know how we can help you.</Text>
      <ContactForm
        ref={contactFormRef}
        pending={pending}
        values={values}
        errors={errors}
        onChange={onChange}
        onSubmit={onSubmit}
        setRef={setRef}
      />
      <Button mt={4} width="100%" type="submit" onClick={onSubmit}>Send</Button>
    </Modal>
  );
};

ContactModal.propTypes = {
  hide: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

ContactModal.defaultProps = {
  isActive: false,
};

export default ContactModal;
