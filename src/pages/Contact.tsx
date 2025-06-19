
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'hello@cosmostasks.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: '123 Innovation Drive, Tech Valley, CA 94025',
      description: 'Our headquarters'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: 'Monday - Friday: 8:00 AM - 6:00 PM PST',
      description: 'We respond within 24 hours'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 cosmic-grid opacity-30"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              Contact Us
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Let's Start Building
              <span className="block text-primary mt-2">Something Amazing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your business with intelligent automation? Get in touch with our team of experts and discover how Cosmos Tasks can streamline your operations.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {contactInfo.map((info, index) => (
                <Card key={index} className="cosmic-card p-6 text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="p-3 rounded-full bg-primary/10 text-primary w-fit mx-auto mb-4">
                      {info.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-foreground font-medium mb-1">
                      {info.details}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 px-6 md:px-12 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Badge variant="outline" className="mb-4 px-4 py-1.5">
                  Send us a message
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Fill out the form below and our team will get back to you within 24 hours. We're here to help you discover the perfect automation solution for your business.
                </p>

                <Card className="cosmic-card p-6">
                  <CardContent className="p-0">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="What can we help you with?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full min-h-[120px] resize-y"
                          placeholder="Tell us more about your project and how we can help..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-12 text-base font-medium"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                <div>
                  <Badge variant="outline" className="mb-4 px-4 py-1.5">
                    Why choose us?
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    We're Here to Help You Succeed
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our team of automation experts is dedicated to understanding your unique business needs and providing tailored solutions that drive real results.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="cosmic-card p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Free Consultation
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            Get a complimentary 30-minute consultation to discuss your automation needs and explore potential solutions.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="cosmic-card p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-accent/10 text-accent-foreground">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            24-Hour Response
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            We guarantee a response to all inquiries within 24 hours during business days.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="cosmic-card p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Send className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Custom Solutions
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            Every business is unique. We create tailored automation strategies that fit your specific requirements.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Office Hours */}
                <Card className="cosmic-card p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-0">
                    <h4 className="font-semibold text-foreground mb-4">
                      Office Hours
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="text-foreground font-medium">8:00 AM - 6:00 PM PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="text-foreground font-medium">10:00 AM - 2:00 PM PST</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="text-foreground font-medium">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <Card className="cosmic-card p-6">
                <CardContent className="p-0">
                  <h4 className="font-semibold text-foreground mb-3">
                    How long does implementation take?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Implementation time varies based on complexity, but most projects are completed within 2-4 weeks from project kickoff.
                  </p>
                </CardContent>
              </Card>

              <Card className="cosmic-card p-6">
                <CardContent className="p-0">
                  <h4 className="font-semibold text-foreground mb-3">
                    Do you offer training?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Yes! We provide comprehensive training to ensure your team can effectively use and maintain your automation solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="cosmic-card p-6">
                <CardContent className="p-0">
                  <h4 className="font-semibold text-foreground mb-3">
                    What kind of support do you provide?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We offer 24/7 technical support, regular maintenance, and ongoing optimization to ensure peak performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="cosmic-card p-6">
                <CardContent className="p-0">
                  <h4 className="font-semibold text-foreground mb-3">
                    Can you integrate with existing systems?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Absolutely! We specialize in seamlessly integrating with your existing tools and workflows without disruption.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
