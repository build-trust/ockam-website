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
import EditOnGithubLink from "../components/EditOnGithubLink";

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
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const {
    data: { mdx },
    location,
    dependedRepos,
  } = props;
  const {
    frontmatter: { metaTitle, metaDescription, metaImage, authorAvatar, author, date },
    excerpt,
    parent: { relativePath },
    fields: { slug, title, id },
    body,
  } = mdx;

  const currentNode = {
    id,
    title,
    slug,
  };

  const seoTitle = metaTitle || title || 'Ockam | Learn';
  const seoDescription = metaDescription || excerpt;
  const seoImage = metaImage && metaImage.childImageSharp && metaImage.childImageSharp.fixed.src;

  const rootSlug = getRootSlugFromPathname(location.pathname);
  const isRoot = currentNode.slug === '/';
  const menuId = 'main-menu';
  const isPostPath = currentNode.slug.match(/^\/learn\/blog\/.+$/);
  const isBlogRoot = currentNode.slug.match(/^\/learn\/blog\/$/);
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
          title={seoTitle}
          image={seoImage}
          description={seoDescription}
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
            {!isBlogRoot && <EditOnGithubLink filePath={relativePath} dependedRepos={dependedRepos} />}
          </div>
        )}
        {!isRoot && !isBlogRoot && (
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
      parent: PropTypes.shape({
        relativePath: PropTypes.string,
      }),
      frontmatter: PropTypes.shape({
        metaTitle: PropTypes.string,
        metaDescription: PropTypes.string,
        metaImage: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fixed: PropTypes.shape({
              src: PropTypes.string,
            }),
          }),
        }),
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
      excerpt: PropTypes.string,
      body: PropTypes.string,
    }),
  }),
  dependedRepos: PropTypes.arrayOf(PropTypes.shape({
    githubUrl: PropTypes.string,
    slug: PropTypes.string,
  })),
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
  dependedRepos: [],
};

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      excerpt
      frontmatter {
        metaTitle
        metaDescription
        metaImage {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
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
