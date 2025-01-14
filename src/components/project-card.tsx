//src/components/project-card.tsx

'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export default function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group relative bg-gray-900 rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <a 
            href={link}
            className="inline-flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"
          >
            View Project
            <ArrowUpRight className={`transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
          </a>
        </div>
      </div>
    </div>
  )
}

