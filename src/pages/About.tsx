
import React from 'react';
import BlogHeader from '@/components/BlogHeader';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Lightbulb, Heart, Zap, Globe } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      description: 'Former tech lead at Google with 10+ years in automation and AI.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Expert in distributed systems and machine learning infrastructure.'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      description: 'Product strategist focused on user experience and automation workflows.'
    },
    {
      name: 'David Kim',
      role: 'Lead Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Full-stack developer specializing in AI integrations and APIs.'
    }
  ];

  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with automation technology.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Focused',
      description: 'Every decision we make is centered around delivering value to our users.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Quality Commitment',
      description: 'We believe in building robust, reliable solutions that businesses can depend on.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Our mission is to democratize automation for businesses worldwide.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <BlogHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 cosmic-grid opacity-30"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              About Cosmos Tasks
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Revolutionizing Business
              <span className="block text-primary mt-2">Through Automation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              We're on a mission to empower businesses of all sizes with intelligent automation solutions that save time, reduce costs, and unlock new possibilities for growth.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 px-4 py-1.5">
                  Our Story
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  From Vision to Reality
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2020, Cosmos Tasks emerged from a simple observation: businesses were spending countless hours on repetitive tasks that could be automated, yet lacked the technical expertise or resources to implement effective solutions.
                  </p>
                  <p>
                    Our founders, having worked at leading tech companies, recognized the gap between cutting-edge automation technology and practical business applications. They set out to bridge this divide by creating an accessible platform that brings enterprise-level automation to businesses of all sizes.
                  </p>
                  <p>
                    Today, we serve thousands of companies worldwide, helping them streamline operations, improve efficiency, and focus on what matters most - growing their business and serving their customers.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                  alt="Team collaboration"
                  className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-6 md:px-12 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="cosmic-card p-8">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize business automation by providing intuitive, powerful tools that enable any organization to streamline their operations, regardless of their technical expertise or budget constraints.
                  </p>
                </CardContent>
              </Card>

              <Card className="cosmic-card p-8">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-accent/10">
                      <Lightbulb className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where every business, from startups to enterprises, can harness the power of intelligent automation to focus on innovation, creativity, and meaningful human connections.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-4 py-1.5">
                Meet Our Team
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                The People Behind
                <span className="block text-primary mt-2">the Innovation</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our diverse team of experts brings together decades of experience in technology, product development, and business automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="cosmic-card hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6 text-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="font-semibold text-lg text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 md:px-12 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 px-4 py-1.5">
                Our Values
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                What Drives Us
                <span className="block text-primary mt-2">Every Day</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="cosmic-card p-8 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cosmic-glass rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join thousands of businesses that trust Cosmos Tasks to automate their operations and accelerate their growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Get Started Today
                </button>
                <button className="px-8 py-3 bg-transparent border border-border text-foreground rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
