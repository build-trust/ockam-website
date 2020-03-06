import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query siteMetadataQuery {
      site {
        siteMetadata {
          slackChannel
          twitter
          ockamLibraryRepo
          title
          description
          ockamWebsiteRepo
          markdownPath
          githubProductionPath
          env {
            STAGE
            RECAPTCHA_SITEKEY
            ROOT_URL
          }
        }
      }
    }
  `);
  return site.siteMetadata;
};

export default useSiteMetadata;
