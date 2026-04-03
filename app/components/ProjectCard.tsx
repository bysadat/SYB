import type { Project } from '~/types';
import { Link } from 'react-router';
import Background from './Background';
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="block transform transition duration-300 hover:scale-[1.03]"
    >
      <div className="bg-slate-950/70 border border-sky-500/25 rounded-xl overflow-hidden shadow-[0_0_25px_rgba(15,23,42,0.9)] transition hover:border-sky-400/70 hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] backdrop-blur-xl">
        {/* Top glow line */}
        <span className=""></span>
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-35 object-cover"
        />
        <div className="p-5">
          <h3 className="text-2xl font-semibold bg-linear-to-r from-sky-400 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-slate-300 mb-3">{project.description}</p>
          <div className="flex justify-between items-center text-xs text-slate-400 uppercase tracking-wide">
            <span>{project.category}</span>
            <span className="font-semibold text-slate-200">
              {new Date(project.date).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
