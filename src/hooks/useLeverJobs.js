import { useStaticQuery, graphql } from 'gatsby';

const useLeverJobs = () => {
  const data = useStaticQuery(graphql`
    query allLeverJobs {
    allLever {
      edges {
        node {
          id
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

  return data;
};

export default useLeverJobs;
