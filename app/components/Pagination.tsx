type PagenationProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};
const Pagination: React.FC<PagenationProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-3 py-1 cursor-pointer rounded-xl text-sm font-medium transition ${
            currentPage === index + 1
              ? 'bg-sky-500 text-slate-950 shadow-[0_0_18px_rgba(56,189,248,0.9)]'
              : 'bg-slate-800/70 text-slate-200 hover:bg-slate-700'
          }`}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
