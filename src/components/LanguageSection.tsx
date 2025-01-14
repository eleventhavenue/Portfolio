// src/components/LanguageSection.tsx
import React from 'react';

interface Language {
  name: string;
  level: string;
  percentage: number;
}

const languages: Language[] = [
  {
    name: "English",
    level: "Fluent",
    percentage: 100
  },
  {
    name: "French",
    level: "Basic",
    percentage: 40
  },
  {
    name: "Japanese",
    level: "Amateur",
    percentage: 20
  }
];

const LanguageSection: React.FC = () => {
  return (
    <section id="languages" className="py-20">
      <h2 className="text-4xl font-serif mb-12">Languages</h2>
      <div className="max-w-2xl">
        {languages.map((lang, index) => (
          <div key={index} className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="font-bold">{lang.name}</span>
              <span className="text-gray-400">{lang.level}</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-1000"
                style={{ 
                  width: `${lang.percentage}%`,
                  transform: 'translateX(-100%)',
                  animation: `slideRight 1s ${index * 0.2}s forwards`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguageSection;