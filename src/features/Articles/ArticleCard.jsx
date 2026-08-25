import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const {id, Title, SubTitle, Publisher, PublishedAt, Image, ImageAlt } = article;

  // تنسيق التاريخ بصيغة مقروءة
  const formattedDate = new Date(PublishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link to={`/article/${id}`} onClick={()=>window.scrollTo({top:0})} className="block h-full">
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-zinc-800/30 border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* غلاف الصورة */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-zinc-800">
        <img
          src={Image}
          alt={ImageAlt || Title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* محتوى البطاقة */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="space-y-3">
          {/* اسم الجهة الناشرة */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-zinc-900 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-red-400 border border-blue-200/50 dark:border-red-800/50">
              {Publisher}
            </span>
            <time className="text-xs text-slate-500 dark:text-zinc-400 font-medium">
              {formattedDate}
            </time>
          </div>

          {/* عنوان المقال الرئيسي */}
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-red-400 transition-colors leading-snug">
            {Title}
          </h3>

          {/* العنوان الفرعي / الوصف */}
          <p className="text-sm text-slate-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
            {SubTitle}
          </p>
        </div>

        {/* رابط / زر الانتقال */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-red-400">
          <span>Read article</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </article>
    </Link>
  );
};

export default ArticleCard;