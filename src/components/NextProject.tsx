import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";

//Component with section "show next project" on project page - need next project index from parent, show always first image

type NextProjectProps = {
  index: number;
};

export default function NextProject({ index }: NextProjectProps) {
  console.log(index);
  const { slug, title, shortDescription, image } = projects[index];
  return (
    <div>
      <h2 className="text-center text-2xl font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-slate-50">
        Sprawdź mój nastepny projekt:
      </h2>
      <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white  flex  items-center gap-6 group hover:border-primary/50 transition-colors">
        <div className="relative w-full md:w-1/3 h-48 overflow-hidden">
          {image ? (
            <Image
              className="object-cover"
              alt="Code on a dark computer screen with colorful syntax highlighting."
              src={image}
              fill
            />
          ) : (
            <ImagePlaceholder />
          )}
        </div>
        <div className="flex flex-col p-6 pt-0 md:pt-6 md:pr-8">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
            {shortDescription}
          </p>
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-primary group"
            href={`/projects/${slug}`}
          >
            Zobacz Projekt
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
