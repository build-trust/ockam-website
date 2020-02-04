import { useStaticQuery, graphql } from 'gatsby';

import mapBlogPostEdges from '../utils/mapBlogPostEdges';

const useAllBlogPosts = () => {
  const { allMdx } = useStaticQuery(graphql`
    query allBlogPostsQuery {
      allMdx(
        filter: { fields: { slug: { regex: "/^/learn/blog/.+/" } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
              title
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
          }
        }
      }
    }
  `);
  return mapBlogPostEdges(allMdx.edges);
};

export default useAllBlogPosts;
