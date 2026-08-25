import { useState } from "react";

export const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
}) => {
  const [Comblit, setComblit] = useState(true);
  function handcomblit() {
    setComblit(!Comblit);
  }
  return (
    <div className="bg-white dark:bg-zinc-800/50 p-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700/50 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <p className="text-blue-600 dark:text-[#df3939] text-2xl font-bold">{title}</p>

      <p
        className={`dark:text-zinc-200 text-[16px] mt-3 cursor-pointer ${Comblit ? "line-clamp-3" : ""}`}
        onClick={() => handcomblit()}
      >
        {description}
      </p>

      <p className="text-blue-600 dark:text-red-400 text-[16px] mt-3">Technologies used:</p>
      <p className="dark:text-zinc-200 text-[13px] mt-1">{technologies}</p>

      <p className="text-blue-600 dark:text-red-400 text-[16px] mt-3">The repository:</p>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="dark:text-zinc-200 text-[13px] mt-1 hover:underline break-all block"
      >
        {githubUrl}
      </a>
    </div>
  );
};

export default ProjectCard;
