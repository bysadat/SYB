import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'SYB | Blog Posts' },
    { name: 'description', content: 'Welcome to my ME.' },
  ];
}

const BlogPage = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-6 text-center bg-linear-to-r from-sky-400 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
        Blog Posts
      </h2>
    </>
  );
};

export default BlogPage;
