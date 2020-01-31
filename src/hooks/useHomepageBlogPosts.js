import { useStaticQuery, graphql } from 'gatsby';

import defaultAvatar from "../assets/default_avatar.png";

const mapBlogPostEdges = postsEdges => {
  return postsEdges.map(({ node }) => ({
    id: node.id,
    slug: node.fields.slug,
    title: node.fields.title,
    metaTitle: node.frontmatter.metaTitle,
    description: node.frontmatter.description || node.excerpt,
    metaDescription: node.frontmatter.metaDescription,
    date: node.frontmatter.date,
    author: node.frontmatter.author,
    isFeature: node.frontmatter.isFeature,
    authorAvatar: node.frontmatter.authorAvatar ? node.frontmatter.authorAvatar.childImageSharp.fixed.src : defaultAvatar,
  }));
};

const useHomepageBlogPosts = () => {
  const { allMdx } = useStaticQuery(graphql`
    query allHomepageBlogPostsQuery {
      allMdx(sort: {order: ASC, fields: frontmatter___homepageFeaturedOrder}, filter: {fields: {slug: {regex: "/^/learn/blog/.+/"}}, frontmatter: {isHomepageFeatured: {eq: true}}}) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
              title
            }
            frontmatter {
              metaTitle
              metaDescription
              description
              date(fromNow: true)
              author
              isFeature
              authorAvatar {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }

  `);
  return mapBlogPostEdges(allMdx.edges);
};

export default useHomepageBlogPosts;
