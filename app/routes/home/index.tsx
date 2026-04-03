import type { Route } from './+types/index';
import FeaturedProjects from '~/components/FeaturedProjects';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'SYB! | Welcome' },
    { name: 'description', content: 'Welcome to ME.' },
  ];
}

export default function Home() {
  return (
    <>
      <FeaturedProjects />
    </>
  );
}
