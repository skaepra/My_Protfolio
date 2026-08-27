import React from "react";
import useDarkMode from "./useDarkMode"; 

const ThemeToggle = () => {
  const { isDark, toggleMode } = useDarkMode();

  return (
    <button
      onClick={toggleMode}
      type="button"
      aria-label="Toggle Theme"
      className="p-1.5 rounded-full  bg-[#416bc5] dark:bg-zinc-800/50 text-zinc-700 dark:text-slate-300 hover:bg-[#416bc5] dark:hover:bg-zinc-900 transition-all cursor-pointer shadow-xs "
    >
      {isDark ? (
        <svg className="w-5 h-5 text-amber-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;