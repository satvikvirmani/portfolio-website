import Project from "./project";
import ProjectLink from "./projectLink";

const projects = [
  {
    name: "Project 1",
    id: 1,
  },
  {
    name: "Project 2",
    id: 2,
  },
];

const projectLinks = [
  {
    date: "June 2023",
    description: "dsadasnkdksadasjkdjklknl jkldjaslldk",
  },
  {
    date: "June 2023",
    description: "playmedia",
  },
  {
    date: "June 2023",
    description: "playmedia",
  },
];

const ProjectsWrapper = () => {
  return (
    <section className="w-full bg-primary xl:px-40 xl:py-20 md:px-12 md:py-12 px-4 py-8 grid grid-cols-1 gap-24">
      {
        projects.map((project, i) => (
          <Project key={i} id={project.id} />
        ))
      }
      <ul className="text-white">
        {
          projectLinks.map((projectLink, i) => (
            <ProjectLink
              key={i}
              date={projectLink.date}
              description={projectLink.description}
            />
          ))
        }
      </ul>
    </section>
  );
};

export default ProjectsWrapper;
