// src/components/SkillsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Analytics",
    skills: ["Python", "SQL", "R", "Power BI"]
  },
  {
    title: "Programming",
    skills: ["Java", "TypeScript", "TSX"]
  },
  {
    title: "Tools",
    skills: ["Excel", "PowerPoint", "Google Analytics", "Jira"]
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <motion.h2 
        className="text-4xl font-serif mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.2) + (skillIndex * 0.1) }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;