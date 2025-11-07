import Image from "next/image";
export default function ProjectCard() {
  return (
    <div
      id="project-card"
      className=" flex flex-col  rounded-xl  h-full bg-white"
    >
      <div className="relative overflow-hidden  w-full h-[50%] ">
        <Image
          src="/project_image.png"
          alt="Project screenshot"
          fill
          className="rounded-t-xl"
        />
      </div>
      <div className="px-2 pt-4">
        <div className="w-full m-auto">
          <h4 className="text-lg font-medium">Project Name</h4>
          <p className="text-sm font-normal">Project Description</p>
        </div>
        <div className="w-full m-auto flex mt-3">
          <p className="rounded-full bg-indigo-100 text-primary font-semibold w-fit px-2 py-1 mx-1 text-sm">
            NextJS
          </p>
          <p className="rounded-full bg-indigo-100 text-primary font-semibold w-fit px-2 py-1 mx-1 text-sm">
            TailwindCSS
          </p>
        </div>
      </div>
    </div>
  );
}
