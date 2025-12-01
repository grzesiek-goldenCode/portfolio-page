import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const { slug } = projects[0];
  return (
    <div className="section-container">
      <h3 className="text-2xl mt-10 self-start mb-20 font-bold hover:underline">
        <Link href={"/projects"}>Moje Projekty</Link>
      </h3>
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:gap-25 px-5 min-h-90  mx-18 w-[80%]">
        {projects.map(
          ({ title, shortDescription, technologies, images }, index) => (
            <Link key={index} href={`/projects/${slug}`}>
              <ProjectCard
                title={title}
                description={shortDescription}
                techStack={technologies}
                images={images}
              />
            </Link>
          )
        )}
      </div>
    </div>
  );
}
