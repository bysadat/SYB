import type { Project } from '~/types';
import { Link } from 'react-router';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="block group">
      <div className="relative bg-slate-950/80 border border-white/8 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:border-sky-400/40 group-hover:shadow-[0_0_40px_rgba(56,189,248,0.15)] backdrop-blur-xl">
        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-sky-400/60 to-transparent" />

        {/* Image */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          {/* Title */}
          <h3 className="text-lg font-semibold text-white leading-snug group-hover:text-sky-200 transition-colors duration-200">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack */}
          {project.stack && project.stack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-slate-400 bg-slate-800/60 border border-slate-700/50 rounded-md px-2 py-0.5 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Divider */}
          <div className="h-px bg-white/5" />

          {/* Footer */}
          <div className="flex justify-between items-center pt-1">
            <span className="text-xs font-semibold tracking-widest uppercase text-sky-300 bg-sky-400/10 border border-sky-400/20 rounded-full px-3 py-1">
              {project.category}
            </span>
            <span className="text-xs font-medium text-slate-400 bg-white/5 border border-white/10 rounded px-2 py-0.5 tabular-nums">
              {new Date(project.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
