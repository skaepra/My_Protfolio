import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../theme/ThemeToggle";

const Links = [
  { id: "1", title: "About My", link: "/" },
  { id: "2", title: "Articles", link: "/articles" },
  { id: "3", title: "Store", link: "/store" },
  { id: "4", title: "Calculator", link: "/calculator" },
  { id: "5", title: "Consulation", link: "/consulation" },
  { id: "6", title: "Cart", link: "/cart" },
];

function Navepar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#325bb3] dark:bg-[#111] p-4 px-6 md:px-9">
        <div className="flex justify-between items-center">
          
          <div className="hidden sm:flex space-x-5">
            {Links.map((link) => (
              <Link
                key={link.id}
                className="text-white hover:text-zinc-200 dark:hover:text-red-400 transition-colors font-medium"
                to={link.link}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="sm:hidden text-white focus:outline-none p-1.5 rounded-lg hover:bg-white/10 active:scale-95 transition-all"
            aria-label="Open Sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ThemeToggle />
        </div>
      </nav>

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0   z-40 transition-opacity duration-300 sm:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* 2. جسم الشريط الجانبي */}
      <aside
        className={`fixed top-0 left-0 w-[50%]  bg-[#325bb3] dark:bg-[#161616] text-white z-50 p-4 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out sm:hidden rounded-3xl mt-1 ${
          isOpen ? "translate-x-1" : "-translate-x-full"
        }`}
      >
        <div>
          {/* الهيدر الخاص بالشريط: زر الإغلاق وعنوان */}
          <div className="flex justify-between items-center  border-b border-white/10 dark:border-zinc-800">
            <span className="font-bold text-lg tracking-wide">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg  transition-colors"
              aria-label="Close Sidebar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* قائمة الروابط */}
          <div className="flex flex-col mt-2 space-y-1">
            {Links.map((link) => (
              <Link
                key={link.id}
                to={link.link}
                onClick={() => setIsOpen(false)}
                className="pr-4 pl-2 py-2 rounded-xl text-zinc-100 hover:bg-white/10 dark:hover:bg-zinc-800 dark:hover:text-red-400 font-medium transition-all active:scale-95"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* أسفل الشريط الجانبي (تذييل بسيط) */}
        <div className="pt-2 border-t border-white/10 dark:border-zinc-800 text-xs text-white/50 text-center">
          © My App
        </div>
      </aside>
    </>
  );
}

export default Navepar;