import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Link from '../Link';

const ContactButton = ({
  contactAsButton,
  isCollapsedHeader,
  onClick,
  linkFontSize,
}) => {
  if (contactAsButton)
    return (
      <Button
        variant="primary"
        size={isCollapsedHeader ? 'small' : 'default'}
        ml={{
          _: 0,
          lg: 3,
        }}
        onClick={onClick}
      >
        Contact
      </Button>
    );
  return (
    <Link
      fontSize={linkFontSize}
      onClick={onClick}
      title="Contact"
      padding={{
        _: 2,
        lg: 3,
      }}
    >
      Contact
    </Link>
  );
};

ContactButton.propTypes = {
  contactAsButton: PropTypes.bool.isRequired,
  isCollapsedHeader: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  linkFontSize: PropTypes.number.isRequired,
};

ContactButton.defaultProps = {
  isCollapsedHeader: false,
};

export default ContactButton;
