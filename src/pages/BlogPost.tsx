
import React from 'react';
import { useParams } from 'react-router-dom';
import BlogHeader from '@/components/BlogHeader';
import BlogPostHero from '@/components/BlogPostHero';
import BlogPostContent from '@/components/BlogPostContent';
import BlogPostSidebar from '@/components/BlogPostSidebar';
import RelatedBlogs from '@/components/RelatedBlogs';
import Footer from '@/components/Footer';

// Mock blog data - will be replaced with Supabase later
const mockBlogData = {
  id: '1',
  title: 'The Future of AI Automation in Business',
  content: `
    <h2>Introduction</h2>
    <p>Artificial Intelligence automation is revolutionizing the way businesses operate, offering unprecedented opportunities for efficiency, cost reduction, and innovation. In this comprehensive guide, we'll explore how AI automation is transforming various industries and what it means for the future of business operations.</p>
    
    <h2>Understanding AI Automation</h2>
    <p>AI automation combines artificial intelligence with automated processes to create systems that can perform complex tasks without human intervention. This technology goes beyond simple rule-based automation by incorporating machine learning, natural language processing, and predictive analytics.</p>
    
    <h2>Key Benefits of AI Automation</h2>
    <ul>
      <li><strong>Increased Efficiency:</strong> AI systems can process information and execute tasks 24/7 without fatigue</li>
      <li><strong>Cost Reduction:</strong> Automation reduces the need for manual labor in repetitive tasks</li>
      <li><strong>Improved Accuracy:</strong> AI systems minimize human error in data processing and analysis</li>
      <li><strong>Scalability:</strong> Automated systems can easily scale to handle increased workloads</li>
    </ul>
    
    <h2>Real-World Applications</h2>
    <p>From customer service chatbots that handle inquiries around the clock to sophisticated workflow automation that streamlines complex business processes, AI automation is making its mark across industries. Companies are leveraging voice agents for sales calls, implementing intelligent document processing, and using predictive analytics to optimize operations.</p>
    
    <h2>The Road Ahead</h2>
    <p>As AI technology continues to evolve, we can expect even more sophisticated automation solutions. The integration of AI with emerging technologies like IoT, blockchain, and edge computing will create new possibilities for business automation that we're only beginning to explore.</p>
    
    <h2>Conclusion</h2>
    <p>The future of business is undoubtedly intertwined with AI automation. Companies that embrace these technologies today will be better positioned to compete in tomorrow's marketplace. The key is to start small, learn from implementations, and gradually expand automation capabilities across the organization.</p>
  `,
  tags: ['AI Automation', 'Business', 'Technology'],
  image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop',
  readTime: '8 min read',
  publishDate: '2024-01-15',
  author: 'Sarah Johnson'
};

const BlogPost = () => {
  const { id } = useParams();
  
  // For now, we'll use mock data regardless of the ID
  // Later this will fetch from Supabase based on the ID
  const blogPost = mockBlogData;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <BlogHeader />
      <main className="flex-1 pt-20">
        <BlogPostHero 
          title={blogPost.title}
          tags={blogPost.tags}
          image={blogPost.image}
          readTime={blogPost.readTime}
          publishDate={blogPost.publishDate}
          author={blogPost.author}
        />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
            <div className="lg:col-span-7">
              <BlogPostContent content={blogPost.content} />
            </div>
            <div className="lg:col-span-3">
              <BlogPostSidebar />
            </div>
          </div>
        </div>
        
        <RelatedBlogs currentBlogId={blogPost.id} />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
