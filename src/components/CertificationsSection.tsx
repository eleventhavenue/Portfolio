// src/components/CertificationsSection.tsx
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

const certifications: Certification[] = [
  {
    title: "Google Analytics Certification",
    issuer: "Google",
    date: "2024",
    link: "#"
  },
  {
    title: "Agile Project Management with Jira Cloud",
    issuer: "Atlassian",
    date: "2023",
    link: "#"
  },
  {
    title: "Atlassian Agile Management Professional Certificate",
    issuer: "Atlassian",
    date: "2023",
    link: "#"
  }
];

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20">
      <h2 className="text-4xl font-serif mb-12">Certifications</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className="group bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
          >
            <Award className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
            <p className="text-gray-400 mb-4">{cert.issuer} • {cert.date}</p>
            {cert.link && (
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View Certificate
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;