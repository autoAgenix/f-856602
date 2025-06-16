
import React, { useState } from 'react';
import BlogHeader from '@/components/BlogHeader';
import FeaturedBlogCarousel from '@/components/FeaturedBlogCarousel';
import BlogSearchAndFilters from '@/components/BlogSearchAndFilters';
import BlogGrid from '@/components/BlogGrid';
import Footer from '@/components/Footer';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <BlogHeader />
      <main className="flex-1 pt-20">
        <FeaturedBlogCarousel />
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <BlogSearchAndFilters 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <BlogGrid 
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
