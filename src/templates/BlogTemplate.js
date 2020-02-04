import React, { useRef, useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import SEO from '../components/SEO';
import useOnClickOutside from '../hooks/useOnClickOutside';
import PageLayout from '../layouts/PageLayout';
import Post from '../components/blog/Post';
import defaultAvatar from '../assets/default_avatar.png';
import SidebarMobileMenu from '../components/SidebarMobileMenu';

const GreyWrapper = styled.div`
  position: absolute;
  top: -8rem;
  left: 0;
  width: 100%;
  height: 62.5rem;
  background-color: ${props => props.theme.colors.accentBackground};
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.background};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  z-index: 3;
  position: relative;
`;
export default function BlogTemplate(props) {
  const {
    data: { mdx },
    location,
  } = props;

  const {
    frontmatter: { metaTitle, metaDescription, date, author, authorAvatar },
    fields: { slug, title },
    body,
  } = mdx;

  const imageAvatar = authorAvatar
    ? authorAvatar.childImageSharp.fixed.src
    : defaultAvatar;

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const menuId = 'main-menu';

  useOnClickOutside(ref, () => setIsOpen(false));
  return (
    <PageLayout
      location={location}
      isOpenSidebar={isOpen}
      setIsOpenSidebar={setIsOpen}
      themeName="blog"
    >
      <SidebarMobileMenu
        location={location}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        menuId={menuId}
        ref={ref}
      />
      <SEO title={metaTitle} description={metaDescription} slug={slug} />
      <Wrapper>
        <GreyWrapper />
        <Content>
          {body ? (
            <Post
              body={body}
              title={title}
              authorAvatar={imageAvatar}
              author={author}
              date={date}
              location={location}
            />
          ) : (
            props.children
          )}
        </Content>
      </Wrapper>
    </PageLayout>
  );
}

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
        id: PropTypes.string,
      }),
      frontmatter: PropTypes.shape({
        metaTitle: PropTypes.string,
        metaDescription: PropTypes.string,
        date: PropTypes.string,
        author: PropTypes.string,
        authorAvatar: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fixed: PropTypes.shape({
              src: PropTypes.string,
            }),
          }),
        }),
      }),
      body: PropTypes.string,
    }),
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

BlogTemplate.defaultProps = {
  data: {
    mdx: {
      fields: {},
      frontmatter: {},
      body: '',
    },
  },
};

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
        date(fromNow: true)
        author
        authorAvatar {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
