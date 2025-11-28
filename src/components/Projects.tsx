import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const { slug, title, shortDescription, technologies } = projects[0];
  return (
    <section id="projects">
      <div className="section-container">
        <h3 className="text-2xl mt-10 self-start mb-20 font-bold hover:underline">
          <Link href={"/projects"}>Moje Projekty</Link>
        </h3>
        <div className="grid grid-cols-3 gap-40 px-5 h-60  mx-20 w-[80%]">
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
    </section>
  );
}
