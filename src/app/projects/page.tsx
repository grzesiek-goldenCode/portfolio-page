import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="flex flex-col w-[70vw] mx-auto ">
      <p>All projects:</p>
      {projects.map(({ slug, title }, index) => (
        <Link key={index} href={`/projects/${slug}`} className="">
          {title}
        </Link>
      ))}
    </div>
  );
}
