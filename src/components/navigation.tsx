// src/components/navigation.tsx
import { Moon, Sun, Linkedin, Github, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Fixed Logo - Top Left */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-8 left-8 z-50"
      >
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img 
            src="/logo.gif" 
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Fixed Icons - Top Right */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-8 right-8 z-50 flex gap-6"
      >
        <button
          onClick={toggleTheme}
          className="dark:text-white/70 dark:hover:text-white text-light-text hover:text-light-accent transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </button>
        <a 
          href="https://linkedin.com/in/tundeogunremi"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-white/70 dark:hover:text-white text-light-text hover:text-light-accent transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a 
          href="https://github.com/eleventhavenue"
          target="_blank"
          rel="noopener noreferrer"
          className="dark:text-white/70 dark:hover:text-white text-light-text hover:text-light-accent transition-colors duration-300"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a 
          href="mailto:tundejogunremi@gmail.com"
          className="dark:text-white/70 dark:hover:text-white text-light-text hover:text-light-accent transition-colors duration-300"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>
      </motion.div>
    </>
  );
}