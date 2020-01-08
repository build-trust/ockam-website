import React from 'react';

import useAllBlogPosts from '../hooks/useAllBlogPosts';
import PostReview from '../components/blog/PostReview';
import Heading from '../components/Heading';
import PageSection from '../components/pages/PageSection';

const mapBlogPostEdges = postsEdges => {
  return postsEdges.map(({ node }) => ({
    id: node.id,
    slug: node.fields.slug,
    title: node.fields.title,
    metaTitle: node.frontmatter.metaTitle,
    description: node.frontmatter.description,
    metaDescription: node.frontmatter.metaDescription,
    date: node.frontmatter.date,
    author: node.frontmatter.author,
    authorAvatar: node.frontmatter.authorAvatar.childImageSharp.fixed,
  }));
};

const Blog = () => {
  const allBlogPosts = useAllBlogPosts();
  const posts = mapBlogPostEdges(allBlogPosts.edges);

  return (
    <PageSection>
      <Heading as='h1'>All Posts</Heading>
      {posts.map(post => (
        <PostReview key={post.id} post={post} />
      ))}
    </PageSection>
  );
};

export default Blog;
