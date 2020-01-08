import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';

import normalizeCss from '../theme/normalizeCss';
import globalStyles from '../theme/globalStyles';
import SEO from '../components/SEO';
import Heading from '../components/Heading';
import Link from '../components/Link';

const StyledContent = styled.div`
  text-align: center;
`;

const NotFoundPage = ({ location }) => {
  return (
    <>
      <StyledContent>
        <Global styles={normalizeCss} />
        <Global styles={globalStyles} />
        <SEO />
        <Heading>404 not found</Heading>
        <div>
          <h3>
            Error while trying to get
            {location.pathname}
          </h3>
          <p>
            Go to
            {' '}
            <Link to='/'>Homepage</Link>
          </p>
        </div>
      </StyledContent>
    </>
  );
};

NotFoundPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default NotFoundPage;
