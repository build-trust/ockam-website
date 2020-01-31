import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { darken, lighten, rgba } from 'polished';
import slice from 'lodash/slice'

import PageSection from '../PageSection';
import Heading from '../../Heading';
import Button from '../../Button';
import Card from '../../Card/Card';
import CardBody from '../../Card/CardBody';
import ockamLogoMark from '../../../assets/ockam-logo-mark.svg';
import { media } from '../../../utils/emotion';
import Link from '../../Link';
import Caption from '../../Caption';
import useHomepageBlogPosts from "../../../hooks/useHomepageBlogPosts";

const BlogGrid = styled.div`
  display: grid;
  grid-row-gap: 4rem;
  grid-template-columns: 1fr;
  grid-template-rows: fit-content();
  grid-template-areas: 
  "title"
  "post1"
  "post2"
  "post3"
  "read-more";
  ${media.desktop`
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: fit-content() auto;
    grid-row-gap: 4rem;
    grid-column-gap: 4rem;
    grid-template-areas: 
    "title title read-more"
    "post1 post2 post3";
  `}
`;

const StyledHeading = styled(Heading)`
  grid-area: title;
`;

const StyledCard = styled(Card)`
  height: auto;
  position: relative;
  transition: all 300ms cubic-bezier(.51,.92,.24,1.15);
  overflow: hidden;
  padding-right: 6rem;  
  &:hover {
    background-color: ${props => lighten(0.08, props.theme.colors.accentBackground)};
    box-shadow: 0 0 29px 3px ${props => rgba(darken(0.2, props.theme.colors.background), 0.2)};
   transform: scale(1.05);
    &:before {
      transform: rotate(90deg);
      opacity: 0.4;
    }
  }
  
  &:before {
  
    transform-origin: center center;
    transform-style: preserve-3D;
    transition: all 500ms cubic-bezier(.51,.92,.24,1.15);
    opacity: 0.13;
    content:'';
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    background-image: url(${ockamLogoMark});
    background-repeat: no-repeat;
    background-size: 27.5rem 29.1rem;
    background-position: right -15.5rem center;
  }
  
  ${media.desktop`
    height: 38rem;
    padding-right: 0;
    &:before {
      height: 29.1rem;
      width: 27.5rem;
      top:-4rem;
      left: -9rem;
      right: initial;
      background-position: initial;
    }
  `}


`;

const StyledCardBody = styled(CardBody)`
position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

const ButtonContainer = styled.div`
  grid-area: read-more;
  display: flex;
  align-items: end;
  justify-content: end;
`;

const PostType = styled(Caption)`
  text-transform: uppercase;
`;

const BlogCard = ({ children, ...rest }) => (
  <StyledCard {...rest}>
    <StyledCardBody>
      {children}
    </StyledCardBody>
  </StyledCard>
);

BlogCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

const BlogSection = () => {
  const posts = useHomepageBlogPosts();
  const newestPosts = slice(posts,0 ,3);
  return (
    <PageSection>
      <BlogGrid>
        <StyledHeading as='h2'>
          From Our Blog
        </StyledHeading>
        <ButtonContainer>
          <Button ml='auto' to='/learn/blog' as={Link}>Read more articles</Button>
        </ButtonContainer>
        {newestPosts.map((post, index) => (
          <BlogCard as={Link} to={post.slug} gridArea={`post${index + 1}`}>
            <PostType mb={2}>{post.description}</PostType>
            <Heading mb={4} lineHeight='small' as="h5">{post.title}</Heading>
            <Link to={post.slug} color='primary'>Read article</Link>
          </BlogCard>
        ))}

      </BlogGrid>
    </PageSection>
  );
};

BlogSection.propTypes = {

};

export default BlogSection;
