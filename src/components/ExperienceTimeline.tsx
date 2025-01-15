// src/components/ExperienceTimeline.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Founder & Builder",
    company: "VC VANTAGE",
    date: "Present",
    description: "Built and deployed an AI-powered due diligence reporting tool for venture capital funds and angel investors. Created interactive dashboards using TypeScript to visualize investment metrics and market analysis."
  },
  {
    title: "Market and Strategy Data Analyst",
    company: "SustainAble Strategies Africa",
    date: "Present",
    description: "Analyze market data using Python and SQL for renewable energy strategies. Create Power BI dashboards to track market trends and develop predictive models for market assessment."
  },
  {
    title: "Product Design and Creative Director",
    company: "Eleventh Avenue",
    date: "Present",
    description: "Launched an e-commerce fashion brand achieving 100% profit margins in first quarter. Established multi-region supplier partnerships and implemented comprehensive digital marketing strategies."
  },
  {
    title: "Investment Analyst & Due Diligence Assistant",
    company: "Olorire Inc.",
    date: "2024",
    description: "Assisted due diligence for tech investments totaling $300K USD. Prepared documents for founder interviews and validated technical capabilities of potential investment targets."
  },
  {
    title: "Marketing and Management Consultant Intern",
    company: "Travelstart South Africa",
    date: "Summer 2024",
    description: "Conducted customer data analyses using SQL and Python to develop an MVP loyalty program. Built data visualization reports and deployed predictive models for international flight bookings."
  }
];

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="space-y-16">
      {experiences.map((exp, index) => (
        <motion.div 
          key={index} 
          className="relative pl-8 group hover:scale-[1.02] transition-all duration-300"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-light-surface via-light-accent to-light-surface dark:from-dark-surface dark:via-cyan-500 dark:to-dark-surface" />
          <div className="absolute w-4 h-4 bg-light-accent dark:bg-cyan-500 rounded-full -left-[7px] top-1 group-hover:scale-110 transition-all duration-300 group-hover:shadow-glow" />
          <div className="mb-1 text-sm text-light-muted dark:text-gray-400 font-medium">{exp.date}</div>
          <h3 className="text-xl font-bold text-light-text dark:text-white mb-1 group-hover:text-light-accent dark:group-hover:text-cyan-400 transition-colors duration-300">{exp.title}</h3>
          <div className="text-lg text-light-text/90 dark:text-gray-200 mb-2 font-medium">{exp.company}</div>
          <p className="text-light-muted dark:text-gray-400">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;