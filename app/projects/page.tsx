import React from 'react';
import { LetsoProjects } from '@/constants/constants';
import { FaExternalLinkAlt, FaCircle } from 'react-icons/fa';

const ProjectsPage = () => {
  const filteredProjects = LetsoProjects.filter(
    (project) => project.year === 2025 || project.year === 2026
  );

  return (
    <div className="py-20 px-5 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">
        Recent <span className="text-purple">Projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="p-6 rounded-3xl border border-white/10 bg-black-200 hover:border-purple/50 transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                {/* Type Tag */}
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                  project.type.toLowerCase().includes("commercial")
                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" 
                  : "bg-purple/10 text-purple border border-purple/20"
                }`}>
                  {project.type}
                </span>
                
                {/* Status Badge */}
                <div className="flex flex-col items-end gap-1">
                  <span className="text-zinc-500 text-xs font-mono">{project.year}</span>
                  <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[9px] font-bold uppercase ${
                    project.status === "Live" 
                    ? "border-emerald-500/20 text-emerald-500 bg-emerald-500/5" 
                    : "border-amber-500/20 text-amber-500 bg-amber-500/5"
                  }`}>
                    <FaCircle className={`text-[6px] ${project.status === "Live" ? "animate-pulse" : ""}`} />
                    {project.status}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple transition-colors">
                {project.name}
              </h3>
              
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>
        {project.status==="Live"?  <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white text-sm font-semibold hover:underline mt-auto"
            >
              View Project <FaExternalLinkAlt className="text-xs" />
            </a> :null}
          
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <p className="text-center text-zinc-500">No projects found for the selected years.</p>
      )}
    </div>
  );
};

export default ProjectsPage;