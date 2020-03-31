import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from '@emotion/styled';

import { media } from '../../utils/emotion';
import Heading from '../Heading';
import BaseSocialBox from '../SocialBox';

import AuthorBox from './AuthorBox';
import PostDetailsBox from './PostDetailsBox';
import BlogContent from './BlogContent';

const Wrapper = styled('div')`
  ${media.desktop`
    padding-top: 7rem;
  `}
`;

const PostHeader = styled('div')`
  margin-bottom: 5.5rem;
`;

const PostContent = styled('div')`
  display: grid;
  grid-row-gap: 2rem;
  grid-template-areas:
    'body'
    'social';
  ${media.desktop`
  grid-row-gap: 0;
  grid-column-gap: 3rem;
  grid-template-columns: 8fr 2fr;
   grid-template-areas:
    "body social";
  `}
`;

const PostBody = styled('div')`
  grid-area: body;
`;

const SocialBox = styled(BaseSocialBox)`
  grid-area: social;
`;

const Post = ({ title, body, date, author, authorAvatar }) => (
  <Wrapper>
    <BlogContent>
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
        <SocialBox />
      </PostContent>
    </BlogContent>
  </Wrapper>
  );

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.shape({}).isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorAvatar: PropTypes.string.isRequired,
};

export default Post;
