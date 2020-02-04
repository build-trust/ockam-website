import { useStaticQuery, graphql } from 'gatsby';

import mapBlogPostEdges from '../utils/mapBlogPostEdges';

const useHomepageBlogPosts = () => {
  const { allMdx } = useStaticQuery(graphql`
    query allHomepageBlogPostsQuery {
      allMdx(
        sort: { order: ASC, fields: frontmatter___homepageFeaturedOrder }
        filter: {
          fields: { slug: { regex: "/^/learn/blog/.+/" } }
          frontmatter: { isHomepageFeatured: { eq: true } }
        }
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

export default useHomepageBlogPosts;
