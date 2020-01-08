import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../Heading';
import Text from '../Text';
import Caption from '../Caption';
import Link from '../Link';

const AuthorBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width:4rem;
`;

const Container = styled.div`
  margin-bottom: ${props => props.theme.space.large};
`;

const PostReview = ({ post: { date, slug, title, description, authorAvatar, author} }) => {
  return (
    <Container>
      <Caption>{date}</Caption>
      <Link to={slug}><Heading as='h3'>{title}</Heading></Link>
      <Text>{description}</Text>
      <AuthorBox>
        <Avatar src={authorAvatar.src} alt='image' />
        <Caption>{author}</Caption>
      </AuthorBox>
    </Container>
  );
};

PostReview.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorAvatar: PropTypes.shape({
      src: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default PostReview;
