import bgPhoto from "../../../assets/backgroundPhoto2.jfif";
import { ProjectsScreen } from "../components/ProjectsScreen";

export const HomeScreen = () => {
  const techStack = [
    "React",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "Zustand",
    "ASP.NET Core",
  ];

  return (
    <div className="bg-slate-50 dark:bg-zinc-900 transition-colors duration-300 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[480px] md:h-[520px] bg-center bg-cover bg-no-repeat flex items-center overflow-hidden"
        style={{ backgroundImage: `url(${bgPhoto})` }}
      >
        {/* Overlay متدرج يعطي تباين ممتاز للنصوص */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20 dark:from-[#3a1111] dark:via-[#4d1212]/60 dark:to-transparent pointer-events-none" />

        {/* محتوى الـ Hero */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 w-full py-12">
          <div className="max-w-2xl space-y-4">
            {/* شارة مخصصة */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 dark:bg-red-500/10 text-blue-400 dark:text-red-400 border border-blue-500/20 dark:border-red-500/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 dark:bg-red-400 animate-pulse"></span>
              Full-Stack & Mobile Developer
            </span>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Ahmad's{" "}
              <span className="text-blue-500 dark:text-red-500">Portfolio</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Crafting high-performance web applications and seamless
              cross-platform mobile experiences with modern software
              architecture.
            </p>

            {/* تقنيات مجهزة كـ Badges أنيقة */}
            <div className="flex flex-wrap gap-2 pt-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-white/10 text-slate-200 border border-white/10 backdrop-blur-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* أزرار الدعوة للإجراء (Call to Action) */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 rounded-xl bg-blue-600 dark:bg-red-500 hover:bg-blue-500 
                dark:hover:bg-red-500/95 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/25 dark:shadow-red-500/25 cursor-pointer"
              >
                View Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* قسم المشاريع */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <header className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Featured{" "}
            <span className="text-blue-500 sm:text-blue-600 dark:text-red-500">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            A selection of my recent applications, open-source work, and system
            designs.
          </p>
        </header>

        <ProjectsScreen />
      </section>
    </div>
  );
};

export default HomeScreen;
