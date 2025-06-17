
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useBlogs } from '@/hooks/useBlogs';

interface RelatedBlogsProps {
  currentBlogId: string;
}

const RelatedBlogs = ({ currentBlogId }: RelatedBlogsProps) => {
  const navigate = useNavigate();
  const { data: blogs } = useBlogs();

  if (!blogs) return null;

  // Filter out the current blog post and get 3 random related posts
  const relatedPosts = blogs
    .filter(post => post.id !== currentBlogId)
    .slice(0, 3);

  const handlePostClick = (blogId: string) => {
    navigate(`/blogs/${blogId}`);
  };

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            You Might Also Like
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover more insights and strategies to accelerate your AI automation journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <Card 
              key={post.id} 
              className="cosmic-card h-full overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300"
              onClick={() => handlePostClick(post.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image_url || '/placeholder.svg'} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {post.category || 'Article'}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="text-sm text-muted-foreground">
                  {post.read_time}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogs;
