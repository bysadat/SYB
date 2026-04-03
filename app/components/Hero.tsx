import { Link } from 'react-router';

type HeroProps = {
  name?: string;
};

const Hero: React.FC<HeroProps> = ({ name = 'Sadat' }) => {
  return (
    <header
      className="text-center py-20 px-4 text-white transition-colors duration-300 rounded-b-4xl
           bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.2)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.15)_0%,transparent_50%),linear-gradient(to_bottom,rgba(2,2,5,0.9),rgba(2,2,5,0.5),transparent)]"
    >
      <h2 className="text-3xl font-serif mb-4 ">
        Hey, you can call me{' '}
        <span className="text-sky-500 text-3xl font-light drop-shadow-[0_0_18px_rgba(56,189,248,0.9)] ">
          {name}.
        </span>
      </h2>
      <p className="text-lg font-extralight text-gray-300 max-w-2xl mx-auto mb-6 ">
        Full Stack{' '}
        <span className="font-semibold">JS Developer & CS Undergraduate.</span>{' '}
        Passionate about clean code, high-performance systems, and data-driven
        solutions. I turn academic theory into functional, scalable digital
        products.
      </p>
      <div className="flex justify-center gap-4">
        {/* Projects Link */}
        <Link
          to="/projects"
          className="bg-sky-600 hover:bg-sky-500 shadow-[0_0_18px_rgba(56,189,248,0.9)] text-white px-6 py-2 rounded-2xl  transition "
        >
          View Projects.
        </Link>
        {/* Contact me link */}
        <Link
          to="/contact"
          className="border border-sky-600 text-sky-600 px-5 py-2 rounded-2xl hover:bg-sky-500 hover:shadow-[0_0_18px_rgba(56,189,248,0.9)] hover:text-white transition "
        >
          Contact Me?
        </Link>
      </div>
    </header>
  );
};

export default Hero;
