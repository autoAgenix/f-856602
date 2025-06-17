
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { useBlogs } from '@/hooks/useBlogs';

interface BlogGridProps {
  searchQuery: string;
  selectedCategory: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const POSTS_PER_PAGE = 6;

const BlogGrid = ({ searchQuery, selectedCategory, currentPage, setCurrentPage }: BlogGridProps) => {
  const navigate = useNavigate();
  const { data: blogs, isLoading } = useBlogs();

  if (isLoading) {
    return <div className="text-center py-12">Loading blogs...</div>;
  }

  if (!blogs) {
    return <div className="text-center py-12">No blogs found.</div>;
  }

  const filteredPosts = blogs.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) || false);
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePostClick = (blogId: string) => {
    navigate(`/blogs/${blogId}`);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {paginatedPosts.map((post) => (
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
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                  {post.category?.replace('-', ' ') || 'Article'}
                </span>
                <span className="text-xs text-muted-foreground">{post.read_time}</span>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                {post.excerpt}
              </p>
              <div className="text-xs text-muted-foreground">
                {new Date(post.publish_date).toLocaleDateString()}
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
