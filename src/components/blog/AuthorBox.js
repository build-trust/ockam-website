import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

import Caption from "../Caption";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.div`
  border-radius: 50%;
  width:4rem;
  height: 4rem;
  margin-right: 1.6rem;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
`;

const AuthorBox = ({ image, name}) => {
  return (
    <Container>
      <Avatar src={image} alt='image' />
      <Caption fontSize={1} color="text">{name}</Caption>
    </Container>
  );
};

AuthorBox.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default AuthorBox;
