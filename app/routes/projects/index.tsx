import { useState } from 'react';
import ProjectCard from '~/components/ProjectCard';
import type { Route } from './+types/index';
import type { Project } from '~/types';
import Pagination from '~/components/Pagination';
import { AnimatePresence, motion } from 'framer-motion';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'SYB | Projects' },
    { name: 'description', content: 'Welcome to my ME.' },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  //We make our request!
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();

  return { projects: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

  const { projects } = loaderData as { projects: Project[] };

  //Filtering
  //Get unique categories
  const categories = ['ALL', ...new Set(projects.map((p) => p.category))];

  //Filter Projects based on the category
  const filteredProjects =
    selectedCategory === 'ALL'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  //Calculate the total Pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  //Get current Pages Projects
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

  //Pagenation Button Render

  return (
    <>
      <h2 className="text-3xl font-semibold mb-6 text-center bg-linear-to-r from-sky-400 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="flex flex-wrap gap-2 mb-8 cursor-pointer">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
              selectedCategory === category
                ? 'bg-sky-500 text-slate-950 shadow-[0_0_18px_rgba(56,189,248,0.9)]'
                : 'bg-slate-800/70 text-slate-200 hover:bg-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          {currentProjects.map((project) => (
            <motion.div key={project.id} layout>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
export default ProjectsPage;
