import Image from "next/image";
export default function ProjectCard() {
  return (
    <div id="project-card" className=" flex flex-col  rounded-xl  h-full ">
      <div className="relative overflow-hidden  w-full h-[50%] ">
        <Image
          src="/project_image.png"
          alt="Project screenshot"
          fill
          className="rounded-t-xl"
        />
      </div>
      <div className="w-full m-auto">
        <h4>Project Name</h4>
        <p>Project Description</p>
      </div>
      <div className="w-full m-auto flex ">
        <p className="rounded-full bg-blue-200 text-violet-800 w-fit px-2 py-1 mx-1 text-sm">
          NextJS
        </p>
        <p className="rounded-full bg-blue-200 text-violet-800 w-fit px-2 py-1 mx-1 text-sm">
          TailwindCss
        </p>
      </div>
    </div>
  );
}
