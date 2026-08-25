import { useState } from 'react';
import ArticleCard from './ArticleCard';
import Articles from '../data/Articles';


const ArticlesScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // عدد المقالات في الصفحة الواحدة

  // حساب المقالات المعروضة حسب الصفحة الحالية
  const totalPages = Math.ceil(Articles.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = Articles.slice(indexOfFirstItem, indexOfLastItem);

  function NextPage (){
   setCurrentPage((prev) => Math.min(prev + 1, totalPages))
   window.scrollTo({top:0});
  }
    function PreviousPage (){
    setCurrentPage((prev) => Math.max(prev - 1, 1))
    window.scrollTo({top:0});
  }

  return (
    <section className="py-6 md:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen bg-slate-50 dark:bg-zinc-900 text-slate-900 dark:text-slate-100 pb-18">
      {/* ترويسة المعرض */}
      <div className="md:mb-10 text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight ">
          Latest Publications & <span className="text-blue-500 sm:text-[#325bb3] dark:text-red-500">Articles</span>
        </h2>
        <p className="text-gray-500 dark:text-zinc-400 text-sm sm:text-base mb-4 md:mb-0">
          Explore our curated list of {Articles.length} software engineering and development articles.
        </p>
      </div>

      {/* شبكة المقالات Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {currentArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* أزرار التنقل بين الصفحات (Pagination Controls) */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center space-x-2 space-x-reverse dir-ltr">
          <button
            onClick={PreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg border border-slate-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Previous
          </button>

          <span className="px-4 py-2 text-sm font-semibold  text-slate-600 dark:text-white">
            Page <span className="font-bold text-[17px] text-blue-500 sm:text-blue-600 dark:text-red-500">{currentPage}</span> of {totalPages}
          </span>

          <button
            onClick={NextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg border border-slate-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default ArticlesScreen;