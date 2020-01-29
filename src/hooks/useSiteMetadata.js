import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query siteMetadataQuery {
      site {
        siteMetadata {
          slackChannel
          twitter
          ockamLibraryRepo
        }
      }
    }
  `);
  return site.siteMetadata;
};

export default useSiteMetadata;
