
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Integrations = () => {
  const codingSolutions = [
    {
      name: 'Python',
      description: 'Powerful automation scripting and AI integration',
      category: 'Programming Language',
      logo: '🐍'
    },
    {
      name: 'LangChain',
      description: 'Framework for developing LLM-powered applications',
      category: 'AI Framework',
      logo: '🦜'
    },
    {
      name: 'LangGraph',
      description: 'Build stateful, multi-actor applications with LLMs',
      category: 'AI Framework',
      logo: '📊'
    },
    {
      name: 'OpenAI API',
      description: 'GPT models and AI capabilities integration',
      category: 'AI Service',
      logo: '🤖'
    },
    {
      name: 'Anthropic Claude',
      description: 'Advanced AI assistant and API integration',
      category: 'AI Service',
      logo: '🧠'
    },
    {
      name: 'FastAPI',
      description: 'Modern, fast web framework for building APIs',
      category: 'Framework',
      logo: '⚡'
    }
  ];

  const noCodingSolutions = [
    {
      name: 'n8n',
      description: 'Open-source workflow automation platform',
      category: 'Automation Platform',
      logo: '🔄'
    },
    {
      name: 'Make',
      description: 'Visual platform for building automated workflows',
      category: 'Automation Platform',
      logo: '🛠️'
    },
    {
      name: 'VAPI',
      description: 'Voice AI platform for automated phone calls',
      category: 'Voice AI',
      logo: '📞'
    },
    {
      name: 'Retell',
      description: 'Conversational AI for voice applications',
      category: 'Voice AI',
      logo: '🎙️'
    },
    {
      name: 'Zapier',
      description: 'Connect apps and automate workflows',
      category: 'Automation Platform',
      logo: '⚡'
    },
    {
      name: 'Bubble',
      description: 'No-code platform for building web applications',
      category: 'No-Code Platform',
      logo: '💭'
    },
    {
      name: 'Airtable',
      description: 'Database and workflow automation platform',
      category: 'Database',
      logo: '📋'
    },
    {
      name: 'Notion',
      description: 'All-in-one workspace with automation capabilities',
      category: 'Productivity',
      logo: '📝'
    }
  ];

  const IntegrationCard = ({ integration }: { integration: any }) => (
    <Card className="cosmic-card hover:shadow-lg transition-all duration-300 hover:scale-105 group">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="text-4xl mb-2 group-hover:animate-pulse">
            {integration.logo}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg text-foreground">
                {integration.name}
              </h3>
              <Badge variant="outline" className="text-xs">
                {integration.category}
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {integration.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="integrations" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5">
            Integrations & Automation
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Seamless Integration with Your
            <span className="block text-primary mt-2">Favorite Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you prefer coding solutions or no-code platforms, we integrate with the tools 
            you already use to create powerful automation workflows.
          </p>
        </div>

        {/* Coding Solutions */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="text-2xl">💻</div>
            <h3 className="text-2xl font-bold text-foreground">
              Coding Solutions
            </h3>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              For Developers
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codingSolutions.map((integration, index) => (
              <IntegrationCard key={index} integration={integration} />
            ))}
          </div>
        </div>

        {/* No-Code Solutions */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="text-2xl">🎯</div>
            <h3 className="text-2xl font-bold text-foreground">
              No-Code Solutions
            </h3>
            <Badge className="bg-accent/10 text-accent-foreground border-accent/20">
              For Everyone
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {noCodingSolutions.map((integration, index) => (
              <IntegrationCard key={index} integration={integration} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="cosmic-glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Don't See Your Tool?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're constantly adding new integrations. Let us know what tools you use, 
              and we'll work to support them in your automation workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Request Integration
              </button>
              <button className="px-6 py-3 bg-transparent border border-border text-foreground rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                View All Integrations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
