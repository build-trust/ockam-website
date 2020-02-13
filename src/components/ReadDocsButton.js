import React from 'react';
import FileIcon from 'emotion-icons/boxicons-regular/File';
import PropTypes from 'prop-types';

import Button from './Button';
import Link from './Link';
import Icon from './Icon';

const ReadDocsButton = ({ to, ...rest }) => (
  <Button
    mb={3}
    outline="primary"
    as={Link}
    to={to}
    textAlign="center"
    {...rest}
  >
    <Icon mr={3} color="primary" size={24} icon={FileIcon} />
    Read Docs
  </Button>
);

ReadDocsButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default ReadDocsButton;
