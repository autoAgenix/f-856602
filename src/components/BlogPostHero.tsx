
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';

interface BlogPostHeroProps {
  title: string;
  tags: string[];
  image: string;
  readTime: string;
  publishDate: string;
  author: string;
}

const BlogPostHero = ({ title, tags, image, readTime, publishDate, author }: BlogPostHeroProps) => {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="absolute inset-0 flex items-end">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12 w-full">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/20 text-white border-primary/30">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(publishDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostHero;
