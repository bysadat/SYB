import type { Route } from './+types/index';
import FeaturedProjects from '~/components/FeaturedProjects';
import type { Project } from '~/types';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'SYB! | Welcome' },
    { name: 'description', content: 'Welcome to ME.' },
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

const Home = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;

  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
    </>
  );
};

export default Home;
