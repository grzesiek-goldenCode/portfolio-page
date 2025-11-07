import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-container">
        <h3 className="text-2xl mt-10 self-start mb-20 font-bold">
          Moje Projekty
        </h3>
        <div className="grid grid-cols-3 gap-40 px-5 h-60  mx-20 w-[80%]">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}
