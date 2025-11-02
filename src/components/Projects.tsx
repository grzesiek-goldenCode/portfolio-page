import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col w-[80vw] mx-auto mt-10 justify-center items-center">
      <h3 className="text-2xl mt-10 self-start mb-20">Moje Projekty</h3>
      <div className="grid grid-cols-3 gap-30 px-5 h-50 w-[70%]">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
