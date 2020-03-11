import { useStaticQuery, graphql } from 'gatsby';

const useDefaultOgImage = () => {
  const { fileName } = useStaticQuery(graphql`
  query {
    fileName: file(relativePath: { eq: "default-ockam-og-image.png" }) {
      childImageSharp {
        fixed(width: 1200) {
          src
        }
      }
    }
  }
  `);
  return fileName;
};

export default useDefaultOgImage;
