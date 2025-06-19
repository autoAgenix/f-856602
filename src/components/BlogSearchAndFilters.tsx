
import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';

interface BlogSearchAndFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'ai-automation', label: 'AI Automation' },
  { value: 'chatbots', label: 'Chatbots' },
  { value: 'voice-ai', label: 'Voice AI' },
  { value: 'workflows', label: 'Workflows' },
  { value: 'case-studies', label: 'Case Studies' }
];

const BlogSearchAndFilters = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory 
}: BlogSearchAndFiltersProps) => {

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];
  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card border-border rounded-full focus:ring-0 focus:border-primary text-sm sm:text-base h-10"
          />
          {/* <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={(e) => setSearchQuery(e.target.value)}
            
          /> */}
        </div>
        
        <div className="flex gap-4 items-center">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48 bg-card border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default BlogSearchAndFilters;
