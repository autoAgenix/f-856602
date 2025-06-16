
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const featuredPosts = [
  {
    id: 1,
    title: "The Future of AI Automation in Business",
    excerpt: "Discover how AI automation is transforming modern business operations and driving unprecedented efficiency gains.",
    image: "/placeholder.svg",
    category: "AI Automation",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Building Intelligent Chatbots That Actually Help",
    excerpt: "Learn the key principles behind creating chatbots that provide real value to your customers and business.",
    image: "/placeholder.svg",
    category: "Chatbots",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Voice Agents: The Next Frontier in Customer Service",
    excerpt: "Explore how voice AI is revolutionizing customer interactions and creating new opportunities for engagement.",
    image: "/placeholder.svg",
    category: "Voice AI",
    readTime: "6 min read"
  }
];

const FeaturedBlogCarousel = () => {
  return (
    <section className="w-full py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">Featured Articles</h2>
          <p className="text-muted-foreground">Stay updated with the latest insights in AI automation</p>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {featuredPosts.map((post) => (
              <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="cosmic-card h-full overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedBlogCarousel;
