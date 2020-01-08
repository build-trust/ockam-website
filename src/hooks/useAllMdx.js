import { useStaticQuery, graphql } from 'gatsby';

const useAllMdx = () => {
  const { allMdx } = useStaticQuery(graphql`
    query allMdxQuery {
      allMdx(sort: {order: ASC, fields: [frontmatter___order, fields___slug ]}) {
        edges {
          node {
            fields {
              slug
              title
              id
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
