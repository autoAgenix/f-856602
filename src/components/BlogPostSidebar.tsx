
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Share2, Bookmark, ThumbsUp, MessageCircle } from 'lucide-react';
import { useBlogs } from '@/hooks/useBlogs';

interface BlogPostSidebarProps {
  currentBlog?: {
    id: string;
    views: number | null;
    likes: number | null;
    shares: number | null;
    comments: number | null;
    table_of_contents: any[] | null;
  };
}

const BlogPostSidebar = ({ currentBlog }: BlogPostSidebarProps) => {
  const { data: blogs } = useBlogs();
  
  // Get all unique tags from all blogs for popular tags
  const popularTags = React.useMemo(() => {
    if (!blogs) return [];
    const allTags = blogs.flatMap(blog => blog.tags || []);
    const tagCounts = allTags.reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(tagCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 7)
      .map(([tag]) => tag);
  }, [blogs]);

  const formatNumber = (num: number | null) => {
    if (!num) return '0';
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const stats = currentBlog ? [
    { label: 'Views', value: formatNumber(currentBlog.views) },
    { label: 'Likes', value: formatNumber(currentBlog.likes) },
    { label: 'Shares', value: formatNumber(currentBlog.shares) },
    { label: 'Comments', value: formatNumber(currentBlog.comments) }
  ] : [
    { label: 'Views', value: '0' },
    { label: 'Likes', value: '0' },
    { label: 'Shares', value: '0' },
    { label: 'Comments', value: '0' }
  ];

  return (
    <div className="space-y-6">
      {/* Article Actions */}
      <Card className="cosmic-card">
        <CardHeader>
          <CardTitle className="text-lg">Article Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <ThumbsUp size={16} className="mr-2" />
            Like Article
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Bookmark size={16} className="mr-2" />
            Save for Later
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Share2 size={16} className="mr-2" />
            Share Article
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <MessageCircle size={16} className="mr-2" />
            Join Discussion
          </Button>
        </CardContent>
      </Card>

      {/* Article Stats */}
      <Card className="cosmic-card">
        <CardHeader>
          <CardTitle className="text-lg">Article Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-3 rounded-lg bg-muted/50">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card className="cosmic-card">
        <CardHeader>
          <CardTitle className="text-lg">Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Table of Contents */}
      <Card className="cosmic-card">
        <CardHeader>
          <CardTitle className="text-lg">Table of Contents</CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="space-y-2">
            {currentBlog?.table_of_contents && currentBlog.table_of_contents.length > 0 ? (
              currentBlog.table_of_contents.map((item: any, index: number) => (
                <a 
                  key={index}
                  href={`#${item.id}`} 
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  style={{ paddingLeft: `${(item.level - 1) * 8}px` }}
                >
                  {item.title}
                </a>
              ))
            ) : (
              <>
                <a href="#introduction" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Introduction
                </a>
                <a href="#understanding" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Understanding AI Automation
                </a>
                <a href="#benefits" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Key Benefits
                </a>
                <a href="#applications" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Real-World Applications
                </a>
                <a href="#future" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  The Road Ahead
                </a>
                <a href="#conclusion" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Conclusion
                </a>
              </>
            )}
          </nav>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPostSidebar;
