import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query siteMetadataQuery {
      site {
        siteMetadata {
          slackChannel
          twitter
          siteUrl
          ockamLibraryRepo
          title
          description
          ockamWebsiteRepo
          markdownPath
          githubProductionPath
          env {
            STAGE
            GOOGLE_RECAPTCHA_SITEKEY
          }
        }
      }
    }
  `);
  return site.siteMetadata;
};

export default useSiteMetadata;
