//src/App.tsx

import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from './components/Button';
import Navigation from './components/navigation';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsGrid from './components/project-grid';
import { motion } from 'framer-motion';
import VisibleTundeAnimation from './components/VisibleTundeAnimation';
import { ThemeProvider } from './context/ThemeContext';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
        <Navigation />

        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-screen flex flex-col items-center justify-center"
        >
          <div className="absolute inset-0 " />

          {/* Logo and TUNDE animation */}
          <VisibleTundeAnimation />

          {/* Subtitle and scroll indicator */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl font-serif dark:text-gray-300 text-light-text mb-8"
            >
              I create things that matter
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-4 text-sm dark:text-gray-300 text-light-muted justify-center"
            >
              <ArrowDown className="animate-bounce w-6 h-6 dark:text-gray-300 text-light-muted" />
              <span>Scroll to explore</span>
            </motion.div>
          </div>
        </motion.section>
        
        <main className="px-8 max-w-6xl mx-auto">

        {/* Experience Section */}
          <section className="py-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <h2 className="text-4xl font-serif">What I've Done</h2>
            </motion.div>
            <ExperienceTimeline />
          </section>  

          {/* Projects Section */}
          <section className="py-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-serif mb-12"
            >
              Featured Projects
            </motion.h2>
            <ProjectsGrid />
          </section>

          

          {/* Vision Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-32"
          >
            <div className="max-w-5xl mx-auto text-center mb-24">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-serif mb-4"
              >
                Creating with
                <span className="font-serif italic text-light-accent dark:text-cyan-400"> intention</span>
              </motion.h2>
              <div className="w-24 h-px bg-light-accent/20 dark:bg-cyan-400/20 mx-auto mt-8" />
            </div>

            <div className="grid md:grid-cols-2 gap-24 mt-16 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl font-serif mb-8 text-light-text dark:text-white">In pursuit of beauty</h3>
                <p className="text-light-text/80 dark:text-gray-300 leading-relaxed text-lg">
                  Growing up seeing beauty in everything - from art to tech to human nature, I became fascinated by how ideas could elevate human experience and creative expression. Each project is an opportunity to craft something meaningful that resonates with people on a deeper level.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-3xl font-serif mb-8 text-light-text dark:text-white">Crafted with consciousness</h3>
                <p className="text-light-text/80 dark:text-gray-300 leading-relaxed text-lg">
                  I believe the most meaningful creations come from deep understanding and conscious intention. My work aims to push boundaries while feeling natural, building products that serve our highest potential.
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-2xl mx-auto mt-24 h-px bg-gradient-to-r from-transparent via-light-accent/20 dark:via-cyan-400/20 to-transparent"
            />
          </motion.section>

          {/* Education Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-24"
          >
            <h2 className="text-4xl font-serif mb-12">Education</h2>
            <div className="bg-light-surface/50 dark:bg-dark-surface/50 rounded-xl p-8">
              <h3 className="text-2xl font-serif mb-2">McGill University</h3>
              <p className="text-light-text/80 dark:text-gray-300 mb-2">Bachelor of Arts | Economics & Anthropology</p>
              <p className="text-light-muted dark:text-gray-400">Expected Graduation: May 2025</p>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-24"
          >
            <h2 className="text-4xl font-serif mb-12">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Analytics Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'SQL', 'R', 'Power BI'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-light-surface/50 dark:bg-dark-surface/50 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'TypeScript', 'TSX'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-light-surface/50 dark:bg-dark-surface/50 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Business Intelligence</h3>
                <div className="flex flex-wrap gap-2">
                  {['Google Analytics', 'Data Modeling', 'Excel', 'PowerPoint'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-light-surface/50 dark:bg-dark-surface/50 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Certifications Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-24"
          >
            <h2 className="text-4xl font-serif mb-12">Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Agile Project Management with Jira Cloud',
                'Atlassian Agile Management Professional Certificate',
                "Aha! Product Management Professional Certificate",
                'Google Analytics Certification',
                'Bookkeeping, Intuit Quickbooks',
                'Smart Serve Certification, AGCO'
              ].map((cert) => (
                <div key={cert} className="bg-light-surface/50 dark:bg-dark-surface/50 rounded-lg p-6">
                  <p className="text-lg font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Languages Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-24"
          >
            <h2 className="text-4xl font-serif mb-12">Languages</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-light-surface/50 dark:bg-dark-surface/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">English</h3>
                <p className="text-light-muted dark:text-gray-400">Fluent</p>
              </div>
              <div className="bg-light-surface/50 dark:bg-dark-surface/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">French</h3>
                <p className="text-light-muted dark:text-gray-400">Intermediate</p>
              </div>
              <div className="bg-light-surface/50 dark:bg-dark-surface/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Japanese</h3>
                <p className="text-light-muted dark:text-gray-400">Amateur</p>
              </div>
            </div>
          </motion.section>
        

        {/* Introduction Section */}
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-24"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-serif mb-6">
                  See more
                  <span className="text-cyan-400 block"> creative direction </span>
                  
                  <span className="font-sans italic block mt-2">here ✧ </span>
                </h2>
                <Button 
                  className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-6 py-3 flex items-center gap-2 transition-all duration-300"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => window.location.href = 'https://www.eleventhavenuestudios.com/'}
                >
                  View My Work
                  <ArrowRight className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </Button>
              </div>
              <motion.div 
                initial={{ rotate: -6, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-lg transform -rotate-6" />
                <img 
                  src="/image.jpg"
                  alt="Portrait"
                  className="relative z-10 rounded-lg object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </motion.section>
          </main>
          <footer className="border-t border-light-surface/20 dark:border-white/10 py-12">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-2xl font-serif">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-light-text dark:text-white"
                >
                  Let's connect
                </motion.div>
              </div>
              <div className="flex gap-8">
                <a 
                  href="https://www.youtube.com/@TUUUNDE" 
                  className="text-light-muted hover:text-light-accent dark:text-gray-400 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
                <a 
                  href="https://linkedin.com/in/tundeogunremi" 
                  className="text-light-muted hover:text-light-accent dark:text-gray-400 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/eleventhavenue" 
                  className="text-light-muted hover:text-light-accent dark:text-gray-400 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a 
          href="mailto:tundejogunremi@gmail.com"
          className="text-light-muted hover:text-light-accent dark:text-gray-400 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
        > Email</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
