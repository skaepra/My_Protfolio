import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Articles from '../data/Articles';


const ArticleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = Articles.find((item) => item.id === id);

  // تنسيق تاريخ النشر
  const formattedDate = article
    ? new Date(article.PublishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';


  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-zinc-900 text-slate-900 dark:text-slate-100 p-4">
        <h2 className="text-2xl font-bold mb-4">The article is not found</h2>
        <button
          onClick={() => navigate('/articles')}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-900 text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* زر العودة */}
        <Link
          to="/articles"
          className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-red-400 hover:underline gap-2"
        >
          <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
         Back to All articles
        </Link>

        {/* ترويسة المقال */}
        <header className="space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-zinc-900 text-blue-700 dark:text-red-400 border border-blue-200 dark:border-red-800/50">
              {article.Publisher}
            </span>
            <time className="text-sm text-slate-500 dark:text-zinc-400 font-medium">
              {formattedDate}
            </time>
          </div>

          <h1 className="text-lg sm:text-3xl font-extrabold tracking-tight leading-tight">
            {article.Title}
          </h1>

          <p className="text-md sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            {article.SubTitle}
          </p>
        </header>

        {/* صورة المقال */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg aspect-[16/9] w-full max-w-2xl  bg-slate-100 dark:bg-slate-900">
          <img
            src={article.Image}
            alt={article.ImageAlt || article.Title}
            className="w-full h-full  object-cover"
          />
        </div>

        {/* محتوى المقال النصي */}
        <article className="prose dark:prose-invert max-w-none space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <blockquote className="border-r-4 border-red-500 pr-4 italic font-medium text-slate-900 dark:text-slate-100 my-6">
            "Software design is a continuous process of learning and discovery."
          </blockquote>
          <p>
            Curabitur pretium tiddunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
          </p>
        </article>
      </div>
    </div>
  );
};

export default ArticleDetails;