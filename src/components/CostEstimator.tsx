
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CostEstimator = () => {
  const [voiceAgentCalls, setVoiceAgentCalls] = useState([1000]);
  const [voiceAgentMinutes, setVoiceAgentMinutes] = useState([5]);
  const [chatbotMessages, setChatbotMessages] = useState([5000]);
  const [automationTasks, setAutomationTasks] = useState([100]);

  const calculateVoiceAgentCost = () => {
    const calls = voiceAgentCalls[0];
    const avgMinutes = voiceAgentMinutes[0];
    const totalMinutes = calls * avgMinutes;
    const baseCost = 299; // Base setup fee
    const perMinuteCost = totalMinutes * 0.15; // $0.15 per minute
    return baseCost + perMinuteCost;
  };

  const calculateChatbotCost = () => {
    const messages = chatbotMessages[0];
    const baseCost = 199; // Base setup fee
    const perMessageCost = messages * 0.02; // $0.02 per message
    return baseCost + perMessageCost;
  };

  const calculateAutomationCost = () => {
    const tasks = automationTasks[0];
    const baseCost = 399; // Base setup fee
    const perTaskCost = tasks * 1.5; // $1.5 per task
    return baseCost + perTaskCost;
  };

  return (
    <section id="estimator" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Estimate your automation costs
          </h2>
          <p className="text-muted-foreground text-lg">
            Get a rough estimate for your AI automation project based on your specific requirements
          </p>
        </div>
        
        <Tabs defaultValue="voice-agents" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
            <TabsTrigger value="voice-agents">Voice Agents</TabsTrigger>
            <TabsTrigger value="chatbots">Chatbots</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="voice-agents" className="mt-8">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-medium">Voice Agent Pricing</CardTitle>
                <p className="text-muted-foreground">
                  Estimate costs for inbound and outbound voice AI agents
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Monthly calls</label>
                    <span className="text-lg font-semibold">{voiceAgentCalls[0].toLocaleString()}</span>
                  </div>
                  <Slider
                    value={voiceAgentCalls}
                    onValueChange={setVoiceAgentCalls}
                    max={10000}
                    min={100}
                    step={100}
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Average call duration (minutes)</label>
                    <span className="text-lg font-semibold">{voiceAgentMinutes[0]}</span>
                  </div>
                  <Slider
                    value={voiceAgentMinutes}
                    onValueChange={setVoiceAgentMinutes}
                    max={15}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">Estimated monthly cost:</span>
                    <span className="text-3xl font-bold text-primary">
                      ${calculateVoiceAgentCost().toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Includes setup, training, and monthly usage
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="chatbots" className="mt-8">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-medium">Chatbot Pricing</CardTitle>
                <p className="text-muted-foreground">
                  Estimate costs for custom AI chatbots across your platforms
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Monthly messages</label>
                    <span className="text-lg font-semibold">{chatbotMessages[0].toLocaleString()}</span>
                  </div>
                  <Slider
                    value={chatbotMessages}
                    onValueChange={setChatbotMessages}
                    max={50000}
                    min={1000}
                    step={500}
                    className="w-full"
                  />
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">Estimated monthly cost:</span>
                    <span className="text-3xl font-bold text-primary">
                      ${calculateChatbotCost().toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Includes development, deployment, and monthly usage
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="automation" className="mt-8">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-medium">Automation Workflow Pricing</CardTitle>
                <p className="text-muted-foreground">
                  Estimate costs for custom AI automation workflows
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Monthly automated tasks</label>
                    <span className="text-lg font-semibold">{automationTasks[0].toLocaleString()}</span>
                  </div>
                  <Slider
                    value={automationTasks}
                    onValueChange={setAutomationTasks}
                    max={5000}
                    min={50}
                    step={50}
                    className="w-full"
                  />
                </div>
                
                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">Estimated monthly cost:</span>
                    <span className="text-3xl font-bold text-primary">
                      ${calculateAutomationCost().toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Includes workflow design, implementation, and monthly execution
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-12 px-8">
            Get Custom Quote
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Ready to automate your business? Contact us for a detailed proposal tailored to your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CostEstimator;
