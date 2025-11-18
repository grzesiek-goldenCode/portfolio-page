import Link from "next/link";
import { projects } from "@/data/projects";
import ListItem from "@/components/ProjectListItem";

export default function Projects() {
  return (
    <div className="flex flex-col w-[70vw] mx-auto ">
      <h2 className="text-2xl m-3 mt-10">Wszystkie projekty:</h2>
      {projects.map(({ slug, title, shortDescription }, index) => (
        <Link key={index} href={`/projects/${slug}`} className="">
          <ListItem title={title} description={shortDescription} />
        </Link>
      ))}
    </div>
  );
}
