'use client';
import React from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  tags: string[];
}

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-xl font-bold text-teal-700">{project.title}</h2>
      <p className="text-gray-700">{project.description}</p>
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full rounded-md"
          src={project.videoUrl}
          title={project.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
