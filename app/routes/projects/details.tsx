import type { Route } from './+types/details';
import type { Project } from '~/types';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

export async function clientLoader({
  request,
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
  return <div>Loading...</div>;
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const project = loaderData;

  return (
    <>
      <Link
        to="/projects"
        className="flex items-center text-sky-400 hover:text-sky-300 mb-6 transition"
      >
        <FaArrowLeft className="mr-2 " />
        Back To Projects
      </Link>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Project Image */}
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Project Info */}
        <div>
          <h1 className="text-3xl font-bold text-blue-200 mb-4">
            {project.title}
          </h1>
          <p className="text-slate-300 text-sm mb-4">
            {new Date(project.date).toLocaleDateString()} • {project.category}
          </p>
          <p className="text-slate-200 mb-6">{project.description}</p>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sky-500 hover:bg-sky-400 text-slate-950 px-6 py-2 rounded-lg transition shadow-[0_0_20px_rgba(56,189,248,0.85)]"
          >
            Visit Site →
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;

/**
     * I will use client Loader to load and
     *  fetch details data to be displayed, !important, 
     * i will change it to server Loader before deployment

    */
