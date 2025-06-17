
import React from 'react';
import { useParams } from 'react-router-dom';
import BlogHeader from '@/components/BlogHeader';
import BlogPostHero from '@/components/BlogPostHero';
import BlogPostContent from '@/components/BlogPostContent';
import BlogPostSidebar from '@/components/BlogPostSidebar';
import RelatedBlogs from '@/components/RelatedBlogs';
import Footer from '@/components/Footer';
import { useBlog } from '@/hooks/useBlogs';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { data: blogPost, isLoading, error } = useBlog(id || '');

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <BlogHeader />
        <main className="flex-1 pt-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
            <div className="text-center">Loading blog post...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <BlogHeader />
        <main className="flex-1 pt-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
              <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <BlogHeader />
      <main className="flex-1 pt-20">
        <BlogPostHero 
          title={blogPost.title}
          tags={blogPost.tags || []}
          image={blogPost.image_url || ''}
          readTime={blogPost.read_time || ''}
          publishDate={blogPost.publish_date}
          author={blogPost.author || ''}
        />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
            <div className="lg:col-span-7">
              <BlogPostContent content={blogPost.content} />
            </div>
            <div className="lg:col-span-3">
              <BlogPostSidebar />
            </div>
          </div>
        </div>
        
        <RelatedBlogs currentBlogId={blogPost.id} />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
