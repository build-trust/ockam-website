import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query siteMetadataQuery {
      site {
        siteMetadata {
          ockamLibraryRepo
          slackChannel
          twitter
          headerTitle
          helpUrl
          tweetText
        }
      }
    }
  `);
  return site.siteMetadata;
};

export default useSiteMetadata;
