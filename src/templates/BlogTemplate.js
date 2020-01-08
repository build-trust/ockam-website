import React, { useRef, useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import SEO from '../components/SEO';
import useOnClickOutside from '../hooks/useOnClickOutside';
import PageLayout from '../layouts/PageLayout';
import Post from '../components/blog/Post';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 4rem 0;
`;
export default function BlogTemplate(props) {
  const {
    data: { mdx },
    location,
  } = props;

  const {
    frontmatter: { metaTitle, metaDescription },
    fields: { slug, title },
    body,
  } = mdx;

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => setIsOpen(false));
  return (
    <PageLayout
      location={location}
      isOpenSidebar={isOpen}
      setIsOpenSidebar={setIsOpen}
      themeName="blog"
    >
      <SEO title={metaTitle} description={metaDescription} slug={slug} />
      <Content>
        {body ? <Post body={body} title={title} /> : props.children}
      </Content>
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
      }
    }
  }
`;
