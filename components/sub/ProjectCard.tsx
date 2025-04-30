import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

interface Props {
  src: string;
  title: string;
  description: string;
  technologies?: string[];
  githubLink?: string;
  demoLink?: string;
}

const ProjectCard = ({ src, title, description, technologies = [], githubLink, demoLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-purple-500 transition-all duration-300">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 my-3">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-[#2A0E61] text-purple-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        <p className="mt-2 text-gray-300">{description}</p>
        
        {(githubLink || demoLink) && (
          <div className="flex gap-4 mt-4">
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white hover:text-purple-400 transition-colors"
              >
                <FaGithub className="text-lg" />
                <span>GitHub</span>
              </a>
            )}
            
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white hover:text-purple-400 transition-colors"
              >
                <HiExternalLink className="text-lg" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;