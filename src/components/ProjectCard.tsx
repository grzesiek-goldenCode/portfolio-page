"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  images: string[] | undefined;
};
export default function ProjectCard({
  title,
  description,
  techStack,
  images,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col rounded-xl  h-full bg-white border border-dotted border-gray-200/80"
    >
      <div className="relative overflow-hidden aspect-video w-full h-[50%] ">
        {images ? (
          <Image
            src={images[0]}
            alt="Project screenshot"
            fill
            className="rounded-t-xl"
          />
        ) : (
          <ImagePlaceholder />
        )}
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
    </motion.div>
  );
}
