import ProjectCard from './ProjectCard';

export const ProjectsScreen = () => {
  // مصفوفة المشاريع
  const projectsData = [
    {
      id: 1,
      title: "Online Store",
      description: "A modern and responsive e-commerce web application built with React, TypeScript, Vite, and Tailwind CSS. The project follows Feature-based Architecture and demonstrates modern frontend development practices, including state management, form validation, animations, maps integration.",
      technologies: "React, TypeScript, Vite, Tailwind CSS, Redux Toolkit (State Management), Zod (Validation), Framer Motion (Animations), Axios & JSON Server (REST API Integration)",
      githubUrl: "https://github.com/skaepra/React-Online-Store-Only-FrontEnd.git"
    },
      {
      id: 2,
      title: "Delivery-App",
      description: "A cross-platform mobile delivery app built with React Native, Expo, TypeScript, and ASP.NET Core 8 Web API. Features interactive maps via MapLibre GL, real-time location tracking with Expo Location, global state management via Zustand, and Zod form validation within a scalable Feature-based Architecture  and REST API communication.",
      technologies: "React Native, Expo, TypeScript, NativeWind (Tailwind CSS), Zustand, Zod, MapLibre GL, Expo Location, Axios, ASP.NET Core 8 Web API, Swagger",
      githubUrl: "https://github.com/skaepra/Delivery-App.git"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {projectsData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  );
};