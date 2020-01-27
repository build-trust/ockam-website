import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from '@emotion/styled';
import FacebookShareButton from 'react-share/es/FacebookShareButton';
import LinkedinShareButton from 'react-share/es/LinkedinShareButton';
import TwitterShareButton from 'react-share/es/TwitterShareButton';
import FacebookSquare from 'emotion-icons/fa-brands/FacebookSquare';
import LinkedinSquare from 'emotion-icons/fa-brands/Linkedin';
import Twitter from 'emotion-icons/fa-brands/Twitter';

import { media } from '../../utils/emotion';
import Heading from '../Heading';
import Icon from '../Icon';
import Caption from '../Caption';

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

const SocialBox = styled('div')`
  grid-area: social;
`;

const ShareButtonStyled = styled('div')`
  margin-right: 2rem;
  display: inline-block;
  ${media.desktop`
    display: block;
    margin-right: 0;
    margin-bottom: 1rem;
  `}
`;

const ShareButton = ({ button: Button, url, children, ...rest }) => (
  <ShareButtonStyled>
    <Button
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      url={url}
      {...rest}
    >
      {children}
    </Button>
  </ShareButtonStyled>
);

ShareButton.propTypes = {
  button: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.elementType,
  ]).isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

const Post = ({ title, body, date, author, authorAvatar, location }) => {
  const url = location.href ? location.href : '';
  return (
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
          <SocialBox>
            <Heading as="h6">Share</Heading>
            <ShareButton button={LinkedinShareButton} url={url}>
              <Icon icon={LinkedinSquare} />
              <Caption fontSize={1} ml={2} fontWeight={2}>
                LinkedIn
              </Caption>
            </ShareButton>
            <ShareButton button={TwitterShareButton} url={url}>
              <Icon icon={Twitter} />
              <Caption fontSize={1} ml={2} fontWeight={2}>
                Twitter
              </Caption>
            </ShareButton>
            <ShareButton button={FacebookShareButton} url={url}>
              <Icon icon={FacebookSquare} />
              <Caption fontSize={1} ml={2} fontWeight={2}>
                Facebook
              </Caption>
            </ShareButton>
          </SocialBox>
        </PostContent>
      </BlogContent>
    </Wrapper>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.shape({}).isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorAvatar: PropTypes.string.isRequired,
  location: PropTypes.shape({
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
