import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from '@emotion/styled';

import Heading from '../Heading';

import AuthorBox from './AuthorBox';
import PostDetailsBox from './PostDetailsBox';

const PostHeader = styled('div')`
  margin-bottom: 5.5rem;
`;

const PostContent = styled('div')`
  display: grid;
`;

const PostBody = styled('div')`
  grid-area: body;
`;

const LearnPost = ({ title, body, date, author, authorAvatar }) => {
  return (
    <>
      <PostHeader>
        <PostDetailsBox>{date}</PostDetailsBox>
        <Heading as="h1" mb={3}>
          {title}
        </Heading>
        <AuthorBox image={authorAvatar} name={author} />
      </PostHeader>
      <PostContent>
        <PostBody>
          <MDXRenderer>{body}</MDXRenderer>
        </PostBody>
      </PostContent>
    </>
  );
};

LearnPost.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.shape({}).isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorAvatar: PropTypes.string.isRequired,
};

export default LearnPost;
