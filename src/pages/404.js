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

const HomepageLink = styled(Link)`
  text-decoration: underline;
`;

const NotFoundPage = ({ location }) => {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      window.location = '/';
    }, 5000);
  }

  const currentUrl = location.hostname + location.pathname;

  return (
    <>
      <StyledContent>
        <Global styles={normalizeCss} />
        <Global styles={globalStyles} />
        <SEO />
        <Heading as="h2">404 not found</Heading>
        <div>
          <Heading as="h5" color="white">
            Url &quot;
            {currentUrl}
            &quot; doesn&apos;t exist.
          </Heading>
          <h4>You will be redirected to homepage in 5 seconds...</h4>
          <p>
            Go to
            <HomepageLink to="/">Homepage</HomepageLink>
          </p>
        </div>
      </StyledContent>
    </>
  );
};

NotFoundPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    hostname: PropTypes.string,
  }).isRequired,
};

export default NotFoundPage;
