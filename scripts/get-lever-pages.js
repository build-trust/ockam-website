const path = require("path");

const allLeverQuery = `
  {
    allLever {
      edges {
        node {
          id
          text
          fields {
            slug
          }
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
`

const getLeverPages = async (graphql) => {
  const leverResults = await graphql(allLeverQuery);
  return leverResults.data.allLever.edges.map(({ node }) => {
    return {
      path: `/team/${node.fields.slug}/${node.id}/`,
      component: path.resolve("./src/components/pages/team/JobPage.js"),
      context: {
        pageType: 'job',
        job: node,
      },
    }
  });
}

module.exports = getLeverPages;
