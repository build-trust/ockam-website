import React from 'react';
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Text from '../../Text';
import Heading from '../../Heading';
import homepageHeaderImage from '../../../assets/homepage/header-section-image.svg';
import HeaderGridSection from '../HeaderGridSection';
import Subheading from "../Subheading";
import IconListItem from "../../IconLisItem";
import { ReactComponent as MessageIcon } from '../../../assets/message-icon.svg';
import  { ReactComponent as HandsIcon } from '../../../assets/hands-icon.svg';
import  { ReactComponent as FingerPrint } from '../../../assets/fingerprint-icon.svg';

const ListContainer = styled('div')`
  margin-right: 3rem;
`;

const ListItem = ({ children, icon, ...rest }) => <IconListItem containerStyle={{ marginBottom: "2rem"}} icon={icon} iconStyle={{ marginTop: 1}} {...rest}>{ children }</IconListItem>;

ListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  icon: PropTypes.string.isRequired,
};

const HeaderSection = () => {

  return (
    <HeaderGridSection image={homepageHeaderImage}>
      <Subheading mb={3}>Ockam makes it as simple as it should be.</Subheading>
      <Heading as="h1" fontSize={[5, 6, 8]}>
        Build connected systems
        <br />
        you can trust.
      </Heading>
      <Text mt={4}>
        Your customers expect security and data privacy from your products.
        Ockam’s developer tools enable you to:
      </Text>
      <ListContainer>
        <ListItem icon={MessageIcon}>
          Send end-to-end encrypted messages through your connected system,
        </ListItem>
        <ListItem icon={HandsIcon}>
          Establish authenticated channels between endpoints regardless of the
          transports or route,
        </ListItem>
        <ListItem icon={FingerPrint}>
          Create and manage cryptographic keys, unique device identifiers, and
          verifiable credentials in your connected environments.
        </ListItem>
      </ListContainer>
    </HeaderGridSection>
)};

export default HeaderSection;
