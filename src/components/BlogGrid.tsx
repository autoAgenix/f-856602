
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

interface BlogGridProps {
  searchQuery: string;
  selectedCategory: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const blogPosts = [
  {
    id: 1,
    title: "10 Ways AI Chatbots Can Transform Your Customer Service",
    excerpt: "Discover practical strategies for implementing AI chatbots that actually improve customer satisfaction and reduce support costs.",
    image: "/placeholder.svg",
    category: "chatbots",
    readTime: "8 min read",
    publishDate: "2025-01-10"
  },
  {
    id: 2,
    title: "Voice AI Implementation: A Complete Guide",
    excerpt: "Learn how to successfully integrate voice AI into your business operations with real-world examples and best practices.",
    image: "/placeholder.svg",
    category: "voice-ai",
    readTime: "12 min read",
    publishDate: "2025-01-08"
  },
  {
    id: 3,
    title: "Automating Sales Workflows with AI",
    excerpt: "Step-by-step guide to creating automated sales processes that increase conversion rates and save time.",
    image: "/placeholder.svg",
    category: "workflows",
    readTime: "6 min read",
    publishDate: "2025-01-05"
  },
  {
    id: 4,
    title: "Case Study: 300% ROI with AI Automation",
    excerpt: "How one company achieved remarkable results by implementing our AI automation solutions across their operations.",
    image: "/placeholder.svg",
    category: "case-studies",
    readTime: "10 min read",
    publishDate: "2025-01-03"
  },
  {
    id: 5,
    title: "The Psychology Behind Effective Chatbot Design",
    excerpt: "Understanding user behavior and designing conversational experiences that feel natural and helpful.",
    image: "/placeholder.svg",
    category: "chatbots",
    readTime: "7 min read",
    publishDate: "2025-01-01"
  },
  {
    id: 6,
    title: "Building Multi-Channel AI Workflows",
    excerpt: "Create seamless automation that works across email, SMS, voice calls, and chat platforms.",
    image: "/placeholder.svg",
    category: "workflows",
    readTime: "9 min read",
    publishDate: "2024-12-28"
  }
];

const POSTS_PER_PAGE = 6;

const BlogGrid = ({ searchQuery, selectedCategory, currentPage, setCurrentPage }: BlogGridProps) => {
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {paginatedPosts.map((post) => (
          <Card key={post.id} className="cosmic-card h-full overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                  {post.category.replace('-', ' ')}
                </span>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                {post.excerpt}
              </p>
              <div className="text-xs text-muted-foreground">
                {new Date(post.publishDate).toLocaleDateString()}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  onClick={() => setCurrentPage(page)}
                  isActive={currentPage === page}
                  className="cursor-pointer"
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No articles found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
