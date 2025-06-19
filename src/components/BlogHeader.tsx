
import React from 'react';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import Logo from './Logo';

const BlogHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  const handleBack = () => {
    navigate('/');
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/about':
        return 'About';
      case '/contact':
        return 'Contact';
      case '/blogs':
      default:
        return 'Blog';
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-8 px-4">
      <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8 flex items-center justify-between backdrop-blur-md bg-background/80 border border-border/50 rounded-2xl shadow-lg">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBack}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <ArrowLeft size={20} className="text-muted-foreground hover:text-foreground" />
          </button>
          <div className="p-3">
            <Logo />
          </div>
        </div>

        <nav className="hidden md:block">
          <h1 className="text-xl font-medium text-foreground">{getPageTitle()}</h1>
        </nav>

        <div className="flex items-center gap-2 rounded-full px-3 py-2">
          <Moon size={18} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
          <Switch 
            checked={!isDarkMode} 
            onCheckedChange={toggleTheme} 
            className="data-[state=checked]:bg-primary"
          />
          <Sun size={18} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
        </div>
      </header>
    </div>
  );
};

export default BlogHeader;
