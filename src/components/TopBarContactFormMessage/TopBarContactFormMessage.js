import React, { useState } from 'react';
import styled from '@emotion/styled';
import Close from 'emotion-icons/ion-ios/Close';
import Check from 'emotion-icons/ion-md/Checkmark';

import Text from '../Text';
import useLocation from '../../hooks/useLocation';
import Icon from '../Icon';
import './style.css';

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 0.4rem;
  cursor: pointer;
`;
/* @todo Refactor classed based container to styled components

      Additional div and ClassName instead of styled-components a was used cause of some issue in SSR production build
*/
const TopBarContactFormMessage = () => {
  const location = useLocation();
  const [show, setShow] = useState(true);
  const searchParams = new URLSearchParams(location.search);
  const contactFormStatus = searchParams.get('contactFormStatus');
  if (contactFormStatus !== 'success' || !show) return null;
  return (
    <div>
      <div className="topBarContactFormMessage">
        <Text color="white" mb={0}>
          <Icon icon={Check} size={24} color="white" mr={3} />
          Your message was sent successfully
        </Text>
        <StyledIcon
          onClick={() => setShow(false)}
          icon={Close}
          color="white"
          size={32}
        />
      </div>
    </div>
  );
};

TopBarContactFormMessage.propTypes = {};

export default TopBarContactFormMessage;
