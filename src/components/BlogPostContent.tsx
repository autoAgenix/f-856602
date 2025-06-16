
import React from 'react';

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  return (
    <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground">
      <div 
        dangerouslySetInnerHTML={{ __html: content }}
        className="blog-content"
      />
      
      <style jsx>{`
        .blog-content h2 {
          color: hsl(var(--foreground));
          font-size: 1.875rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .blog-content h3 {
          color: hsl(var(--foreground));
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        
        .blog-content p {
          color: hsl(var(--muted-foreground));
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .blog-content ul {
          margin-bottom: 1.5rem;
        }
        
        .blog-content li {
          color: hsl(var(--muted-foreground));
          margin-bottom: 0.5rem;
        }
        
        .blog-content strong {
          color: hsl(var(--foreground));
        }
      `}</style>
    </article>
  );
};

export default BlogPostContent;
