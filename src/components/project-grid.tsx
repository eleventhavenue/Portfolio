import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "RANT2ME",
    subtitle: "AI Companion Platform (Coming Soon)",
    description: "Developing an emotionally intelligent AI companion app powered by Hume AI's EVI 2.",
    image: "/rant2me-logo.svg",  // updated path to SVG
    tags: ["AI", "TypeScript", "EVI 2", "Coming Soon"],
    links: {},
    featured: true
  },
  {
    title: "VC VANTAGE",
    subtitle: "Investment Analytics Platform",
    description: "AI-powered due diligence reporting tool for venture capital funds and angel investors, featuring interactive dashboards and predictive analytics for market opportunities.",
    image: "/vc-vantage-logo.svg",  // updated path to SVG
    tags: ["Due Diligence", "TypeScript", "Data Analytics", "Reports"],
    links: {
      github: "https://github.com/eleventhavenue/VC-Vantage",
      live: "https://vc-vantage.com"
    },
    featured: true
  },
  {
    title: "Notion Special Characters",
    subtitle: "Chrome Extension",
    description: "Browser extension that enhances Notion's writing experience by providing quick access to special characters and symbols.",
    image: "/notion-special-chars-logo.svg",
    tags: ["Chrome Extension", "JavaScript", "Productivity"],
    links: {
      live: "https://chromewebstore.google.com/detail/notion-special-characters/polboheookaggjhobfhkcancdgckccbb"
    },
    featured: false
  },
  {
    title: "ChatGPT Consolidator",
    subtitle: "Chrome Extension",
    description: "Extension that improves ChatGPT experience by consolidating conversations and enhancing chat management.",
    image: "/chatgpt-consolidator-logo.svg",
    tags: ["Chrome Extension", "JavaScript", "AI Tools"],
    links: {
      live: "https://chromewebstore.google.com/detail/chatgpt-consolidator/iiceiegkpphpmbodonndapmgcefekojc"
    },
    featured: false
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const ProjectContent = () => (
    <>
      {/* Image Container */}
      <div className="aspect-video overflow-hidden rounded-t-xl relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        {project.subtitle.includes("Coming Soon") && (
          <div className="absolute top-4 right-4 bg-light-accent/90 dark:bg-cyan-500/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
            Coming Soon
          </div>
        )}
      </div>
      
      {/* Content Container */}
      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-light-text dark:text-white mb-1 group-hover:text-light-accent dark:group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-light-muted dark:text-gray-400">
              {project.subtitle}
            </p>
          </div>
          <div className="flex gap-3 relative z-10">
            {project.links.github && (
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-muted hover:text-light-accent dark:text-gray-400 dark:hover:text-cyan-400 transition-colors p-2"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={20} />
              </a>
            )}
            {project.links.live && (
              <a 
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-muted hover:text-light-accent dark:text-gray-400 dark:hover:text-cyan-400 transition-colors p-2"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        
        {/* Description */}
        <p className="text-light-text/80 dark:text-gray-300 mb-6 line-clamp-3">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-light-surface/10 text-light-text dark:bg-dark-surface/20 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-light-accent/10 to-transparent dark:from-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-light-surface/5 to-light-surface/10 dark:from-dark-surface/5 dark:to-dark-surface/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
    >
      {project.links.live ? (
        <a 
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <ProjectContent />
        </a>
      ) : (
        <ProjectContent />
      )}
    </motion.div>
  );
};

const ProjectsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;