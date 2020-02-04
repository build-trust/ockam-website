import React, { useRef, useState } from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import NextPrevious from '../components/NextPrevious';
import SEO from '../components/SEO';
import getRootSlugFromPathname from '../utils/getRootSlugFromPathname';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { media } from '../utils/emotion';
import DocsSidebar from '../components/docs/DocsSidebar/DocsSidebar';
import LearnLayout from '../layouts/LearnLayout';
import defaultAvatar from '../assets/default_avatar.png';
import LearnPost from '../components/blog/LearnPost';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 4rem 0;
  ${media.desktop`
      padding-left: 8rem;
  `}
`;

export default function LearnTemplate(props) {
  const {
    data: { mdx },
    location,
  } = props;
  const {
    frontmatter: { metaTitle, metaDescription, authorAvatar, author, date },
    fields: { slug, title, id },
    body,
  } = mdx;

  const currentNode = {
    id,
    title,
    slug,
  };

  const rootSlug = getRootSlugFromPathname(location.pathname);
  const isRoot = currentNode.slug === '/';
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const menuId = 'main-menu';
  const isPostPath = currentNode.slug.match(/^\/learn\/blog\/.+$/);
  const imageAvatar = authorAvatar
    ? authorAvatar.childImageSharp.fixed.src
    : defaultAvatar;

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <LearnLayout
      location={location}
      isOpenSidebar={isOpen}
      setIsOpenSidebar={setIsOpen}
    >
      <DocsSidebar
        location={location}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        menuId={menuId}
        ref={ref}
      />
      <Content>
        <SEO
          title={metaTitle || 'Ockam | Learn'}
          description={metaDescription}
          slug={slug}
        />
        {isPostPath ? (
          <LearnPost
            body={body}
            title={title}
            authorAvatar={imageAvatar}
            author={author}
            date={date}
            location={location}
          />
        ) : (
          <div>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        )}
        {!isRoot && (
          <NextPrevious rootSlug={rootSlug} currentNode={currentNode} />
        )}
      </Content>
    </LearnLayout>
  );
}

LearnTemplate.propTypes = {
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
};

LearnTemplate.defaultProps = {
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
      frontmatter {
        metaTitle
        metaDescription
        description
        date(fromNow: true)
        author
        isFeature
        authorAvatar {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
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
      }
    }
  }
`;
