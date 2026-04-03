import type { Route } from './+types/index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'SYB | Contacts' },
    { name: 'description', content: 'Welcome to my ME.' },
  ];
}

const ContactPage = () => {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-6 text-center bg-linear-to-r from-sky-400 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
        📩 Reach Out To Me :)
      </h2>
    </>
  );
};

export default ContactPage;
