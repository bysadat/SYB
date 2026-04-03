import type { Project } from '~/types';
import ProjectCard from './ProjectCard';

type FeaturedProjectsProps = {
  projects: Project[];
  count: number;
};

const FeaturedProjects = ({
  projects,
  count,
}: {
  projects: Project[];
  count: number;
}) => {
  const featured = projects.filter((p) => p.featured).slice(0, count);
  return (
    <section>
      <h2 className="text-2xl text-center font-bold mb-4 bg-gradient-to-r from-sky-400 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
