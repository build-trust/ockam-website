import { useStaticQuery, graphql } from 'gatsby';

const mapAEdgesToCollection = edges => {
  return edges.map(item => item.node);
};

const useLeverJobs = () => {
  const data = useStaticQuery(graphql`
    query allLeverJobs {
      allLever {
        edges {
          node {
            id
            fields {
              slug
            }
            lever_id
            createdAt
            text
            hostedUrl
            applyUrl
            categories {
              commitment
              location
              team
            }
            description
            descriptionPlain
            lists {
              text
              content
            }
            additional
            additionalPlain
          }
        }
      }
    }
  `);

  return mapAEdgesToCollection(data.allLever.edges);

};

export default useLeverJobs;
