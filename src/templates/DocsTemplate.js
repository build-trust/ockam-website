import React, { useRef, useState } from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import NextPrevious from '../components/NextPrevious';
import SEO from '../components/SEO';
import Heading from '../components/Heading';
import getRootSlugFromPathname from '../utils/getRootSlugFromPathname';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { media } from '../utils/emotion';
import DocsSidebar from '../components/docs/DocsSidebar/DocsSidebar';
import DocsLayout from '../layouts/DocsLayout';


const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 4rem 0;
  ${media.desktop`
      padding-left: 8rem;
  `}
`;
export default function DocsTemplate(props) {

  const {
    data: { mdx },
    location,
  } = props;
  const {
    frontmatter: { metaTitle, metaDescription },
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


  useOnClickOutside(ref, () => setIsOpen(false));
  return (
    <DocsLayout location={location} isOpenSidebar={isOpen} setIsOpenSidebar={setIsOpen}>
      <DocsSidebar location={location} isOpen={isOpen} onClose={() => setIsOpen(false)} menuId={menuId} ref={ref} />
      <Content>
        <SEO title={metaTitle} description={metaDescription} slug={slug} />
        <Heading as="h1">{title}</Heading>
        <div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        {!isRoot && (
          <NextPrevious rootSlug={rootSlug} currentNode={currentNode} />
        )}
      </Content>
    </DocsLayout>
  );
}

DocsTemplate.propTypes = {
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
      }),
      body: PropTypes.string,
    }),
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

DocsTemplate.defaultProps = {
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
      }
    }
  }
`;
