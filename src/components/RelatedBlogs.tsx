
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface RelatedBlogsProps {
  currentBlogId: string;
}

const relatedPosts = [
  {
    id: '2',
    title: 'Building Intelligent Chatbots That Actually Help',
    excerpt: 'Learn the key principles behind creating chatbots that provide real value to your customers.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop',
    category: 'Chatbots',
    readTime: '6 min read'
  },
  {
    id: '3',
    title: 'Voice Agents: The Next Frontier in Customer Service',
    excerpt: 'Explore how voice AI is revolutionizing customer interactions and creating new opportunities.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=250&fit=crop',
    category: 'Voice AI',
    readTime: '5 min read'
  },
  {
    id: '4',
    title: 'Workflow Automation: Streamlining Your Business Processes',
    excerpt: 'Discover how to implement effective workflow automation to boost productivity.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    category: 'Workflows',
    readTime: '7 min read'
  }
];

const RelatedBlogs = ({ currentBlogId }: RelatedBlogsProps) => {
  // Filter out the current blog post
  const filteredPosts = relatedPosts.filter(post => post.id !== currentBlogId);

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
          {filteredPosts.map((post) => (
            <Card key={post.id} className="cosmic-card h-full overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {post.category}
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
                  {post.readTime}
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
