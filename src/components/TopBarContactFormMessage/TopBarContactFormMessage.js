import React, {useState} from 'react';
import styled from "@emotion/styled";
import Close from 'emotion-icons/ion-ios/Close'
import Check from 'emotion-icons/ion-md/Checkmark'

import Text from "../Text";
import useLocation from "../../hooks/useLocation";
import Icon from "../Icon";

const TopBarWrapper = styled('div')`
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  padding: 1.5rem 3rem;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 0.4rem;
  cursor: pointer;
`;

const TopBarContactFormMessage = () => {
  const location = useLocation();
  const [show, setShow] = useState(true);
  const searchParams = new URLSearchParams(location.search);
  const contactFormStatus = searchParams.get('contactFormStatus');
  if(contactFormStatus !== 'success' || !show) return <div />;
  return (
    <TopBarWrapper>
      <Text color="white" mb={0}>
        <Icon icon={Check} size={24} color="white" mr={3} />
Your message was send successfully
      </Text>
      <StyledIcon onClick={() => setShow(false)} icon={Close} color="white" size={32} />
    </TopBarWrapper>
  );
};

TopBarContactFormMessage.propTypes = {

};

export default TopBarContactFormMessage;
