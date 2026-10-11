import React from 'react';
import { LetsoProjects } from '@/constants/constants';
import { FaExternalLinkAlt, FaCircle } from 'react-icons/fa';

const ProjectsPage = () => {
  const filteredProjects = LetsoProjects.filter(
    (project) => project.year === 2025 || project.year === 2026
  );

  return (
    <div className="py-32 px-5 max-w-7xl mx-auto min-h-screen">
      <div className="mb-16 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Recent <span className="text-gradient">Deployments</span>
        </h1>
        <p className="text-white/50 max-w-2xl mx-auto text-lg">
          A collection of high-performance systems and digital experiences engineered for scalability and impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="p-8 rounded-2xl glassmorphism hover:border-brand-primary/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)] transition-all duration-500 group flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              {/* Type Tag */}
              <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border ${
                project.type.toLowerCase().includes("commercial")
                ? "bg-brand-primary/10 text-brand-primary border-brand-primary/20" 
                : "bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20"
              }`}>
                {project.type}
              </span>
              
              {/* Status Badge */}
              <div className="flex flex-col items-end gap-1">
                <span className="text-white/30 text-xs font-mono">{project.year}</span>
                <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[8px] font-black uppercase tracking-tighter ${
                  project.status === "Live" 
                  ? "border-emerald-500/20 text-emerald-500 bg-emerald-500/5" 
                  : "border-amber-500/20 text-amber-500 bg-amber-500/5"
                }`}>
                  <FaCircle className={`text-[6px] ${project.status === "Live" ? "animate-pulse" : ""}`} />
                  {project.status === "Live" ? "PRODUCTION" : "DEVELOPMENT"}
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
              {project.name}
            </h3>
            
            <p className="text-white/50 text-sm mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
              {project.status === "Live" ? (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors group/link"
                >
                  Launch App <FaExternalLinkAlt className="text-[10px] transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              ) : (
                <span className="text-white/20 text-xs font-bold uppercase tracking-widest">Pre-build Phase</span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center glassmorphism rounded-2xl p-10">
          <p className="text-white/40 text-lg">No active projects synchronized for the current period.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;