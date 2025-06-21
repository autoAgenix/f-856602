import {  IconBrandFacebookFilled, IconBrandLinkedinFilled, IconBrandTwitterFilled, IconBrandYoutubeFilled } from '@tabler/icons-react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-16 px-6 md:px-12 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <Logo />
            <p className="text-muted-foreground max-w-xs">
              Transform your operations with intelligent chatbots, voice agents, and automated workflows. 
          Let AI handle the routine while you focus on growth.
            </p>
            <div className="flex items-center gap-4">
              {/* External links or social profiles can still use <a> */}
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                {/* Twitter icon */}
                <IconBrandTwitterFilled/>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                {/* LinkedIn icon */}
                <IconBrandLinkedinFilled/>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                {/* Facebook icon */}
                <IconBrandFacebookFilled/>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                {/* YouTube icon */}
                <IconBrandYoutubeFilled/>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Product</h4>
            <ul className="space-y-3">
              <li><Link to="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Integrations</Link></li>
              <li><Link to="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Updates</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Roadmap</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/blogs" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Press</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-lg text-foreground">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Guides & Tutorials</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">API Reference</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">Community</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div>© 2025 Cosmos Tasks. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="#" className="hover:text-foreground transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
