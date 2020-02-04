import { useStaticQuery, graphql } from 'gatsby';

const useAllMdx = () => {
  const { allMdx } = useStaticQuery(graphql`
    query allMdxQuery {
      allMdx(
        sort: {
          fields: [frontmatter___date, frontmatter___order, fields___slug]
          order: [DESC, ASC, ASC]
        }
      ) {
        edges {
          node {
            fields {
              slug
              title
              id
            }
            frontmatter {
              date(fromNow: true)
            }
            parent {
              id
              ... on File {
                id
                relativeDirectory
              }
            }
          }
        }
      }
    }
  `);
  return allMdx;
};

export default useAllMdx;
