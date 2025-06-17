
import React from 'react';

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  return (
    <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground">
      <div 
        dangerouslySetInnerHTML={{ __html: content }}
        className="blog-content [&_h2]:text-foreground [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-foreground [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-6 [&_ul]:mb-6 [&_li]:text-muted-foreground [&_li]:mb-2 [&_strong]:text-foreground"
      />
    </article>
  );
};

export default BlogPostContent;
