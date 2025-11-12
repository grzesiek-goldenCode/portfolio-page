import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
};
export default function ProjectCard({
  title,
  description,
  techStack,
}: ProjectCardProps) {
  return (
    <div
      id="project-card"
      className=" flex flex-col  rounded-xl  h-full bg-white"
    >
      <div className="relative overflow-hidden aspect-video w-full h-[50%] ">
        <Image
          src="/project_image.png"
          alt="Project screenshot"
          fill
          className="rounded-t-xl"
        />
      </div>
      <div className="px-2 pt-4">
        <div className="w-full m-auto">
          <h4 className="text-lg font-medium">{title}</h4>
          <p className="text-sm font-normal">{description}</p>
        </div>
        <div className="w-full m-auto flex mt-3 flex-wrap">
          {techStack.map((tech, i) => (
            <p
              key={i}
              className="rounded-full bg-indigo-100 text-primary font-semibold w-fit px-2 py-1 m-1 text-sm"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
