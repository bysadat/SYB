import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'SYB! | About Me' },
    { name: 'description', content: 'Welcome to ME.' },
  ];
}

const AboutPage = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-6 text-center bg-linear-to-r from-sky-400 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
        Hey, I'm Sadat👋!
      </h2>
    </>
  );
};

export default AboutPage;
