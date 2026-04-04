import type { Route } from './+types/details';
import type { Project } from '~/types';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs): Promise<Project> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects/${params.id}`
  );

  if (!res.ok) {
    throw new Response('Project not found', { status: 404 });
  }

  const project: Project = await res.json();
  return project;
}

export function HydrateFallback() {
  return (
    <div className="flex items-center justify-center h-40 text-slate-400 text-sm">
      Loading...
    </div>
  );
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const project = loaderData;

  return (
    <>
      <Link
        to="/projects"
        className="flex items-center gap-2 text-sky-400 hover:text-sky-300 mb-8 transition w-fit"
      >
        <FaArrowLeft className="w-3 h-3" />
        Back To Projects
      </Link>

      <div className="grid md:grid-cols-2 gap-10 items-start bg-white/5 backdrop-blur-sm border border-gray-800 p-6 rounded-xl">
        {/* Project Image */}
        <div className="rounded-xl overflow-hidden border border-white/8">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="space-y-5">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-white leading-tight">
            {project.title}
          </h1>

          {/* Divider */}
          <div className="h-px bg-white/5" />

          {/* Meta row */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold tracking-widest uppercase text-sky-300 bg-sky-400/10 border border-sky-400/20 rounded-full px-3 py-1">
              {project.category}
            </span>
            <span className="text-xs font-medium text-slate-400 bg-white/5 border border-white/10 rounded px-2 py-0.5 tabular-nums">
              {new Date(project.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-300 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack */}
          {project.stack && project.stack.length > 0 && (
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">
                [Stack]
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-slate-400 bg-slate-800/60 border border-slate-700/50 rounded-md px-2 py-1 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="h-px bg-white/5" />

          {/* Action buttons */}
          <div className="flex items-center justify-between">
            {/* Visit site */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-300 hover:text-white text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-lg transition shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            >
              View Live
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>

            {/* GitHub */}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-300 bg-white/5 border border-white/10 rounded-lg px-5 py-2.5 hover:border-sky-400/40 hover:text-sky-300 transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="font-medium">View on GitHub</span>
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 text-sm text-slate-500 bg-white/5 border border-white/8 rounded-lg px-5 py-2.5 cursor-default select-none">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Private Repo</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
