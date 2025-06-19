
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, MessageCircle, Phone, PhoneCall, Workflow, Bot, Zap } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Custom Chatbots",
      description: "Build intelligent conversational AI that understands your business and helps customers 24/7.",
      expandedDescription: "Deploy sophisticated chatbots across your website, WhatsApp, and social media platforms. Our AI-powered chatbots handle customer inquiries, lead qualification, appointment booking, and sales support with human-like conversations that improve customer satisfaction and reduce operational costs.",
      icon: (
        <MessageCircle size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Inbound Voice Agents",
      description: "AI-powered phone assistants that handle incoming calls with natural conversation.",
      expandedDescription: "Replace traditional phone systems with intelligent voice agents that can answer customer questions, schedule appointments, take orders, and provide support. Our voice AI understands context, handles complex requests, and seamlessly transfers to human agents when needed.",
      icon: (
        <Phone size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Outbound Voice Agents",
      description: "Automated calling systems for sales, follow-ups, and customer outreach campaigns.",
      expandedDescription: "Scale your outreach with AI voice agents that make personalized calls for lead generation, appointment setting, customer surveys, and follow-up campaigns. Increase conversion rates while reducing manual calling efforts and costs.",
      icon: (
        <PhoneCall size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "AI Automation Workflows",
      description: "End-to-end business process automation powered by artificial intelligence.",
      expandedDescription: "Streamline your operations with custom AI workflows that automate repetitive tasks, data processing, email responses, document generation, and complex multi-step processes. Connect your existing tools and systems for seamless automation.",
      icon: (
        <Workflow size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "AI Content Generation",
      description: "Automated content creation for marketing, social media, and customer communications.",
      expandedDescription: "Generate high-quality content at scale including blog posts, social media content, email campaigns, product descriptions, and personalized customer communications. Our AI adapts to your brand voice and maintains consistency across all channels.",
      icon: (
        <Bot size={24} className="text-cosmic-accent" />
      )
    },
    {
      title: "Process Optimization",
      description: "AI-driven analysis and optimization of your existing business processes.",
      expandedDescription: "Identify bottlenecks and inefficiencies in your current workflows. Our AI analyzes your operations and provides actionable insights to optimize processes, reduce costs, and improve productivity through intelligent automation solutions.",
      icon: (
        <Zap size={24} className="text-cosmic-accent" />
      )
    }
  ];
  
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  
  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter">
            What we can offer you
          </h2>
          <p className="text-cosmic-muted text-lg">
            Transform your business with cutting-edge AI automation solutions designed to scale your operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <Collapsible
                open={openFeature === index}
                onOpenChange={() => toggleFeature(index)}
                className={`w-full rounded-xl border ${openFeature === index ? 'border-cosmic-light/40' : 'border-cosmic-light/20'} cosmic-gradient transition-all duration-300`}
              >
                <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                  <div className="flex justify-between items-start">
                    <div className="h-16 w-16 rounded-full bg-cosmic-light/10 flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-cosmic-muted transition-transform duration-200 ${
                        openFeature === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-medium tracking-tighter mb-3">{feature.title}</h3>
                  <p className="text-cosmic-muted">{feature.description}</p>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6 pt-2">
                  <div className="pt-3 border-t border-cosmic-light/10">
                    <p className="text-cosmic-muted">{feature.expandedDescription}</p>
                    <div className="mt-4 flex justify-end">
                      <button className="text-cosmic-accent hover:text-cosmic-accent/80 text-sm font-medium">
                        Learn more →
                      </button>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
