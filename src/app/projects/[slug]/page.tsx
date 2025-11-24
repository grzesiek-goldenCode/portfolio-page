import ImagePlaceholder from "@/components/ImagePlaceholder";
import NextProject from "@/components/NextProject";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((project) => project.slug === slug);
  const { title, description, shortDescription, technologies, image } =
    projects[index];

  return (
    <div className="w-[60vw] mx-auto mt-5">
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal hover:text-primary"
          href="/"
        >
          Home
        </Link>
        <span className="text-slate-400 dark:text-slate-500 text-sm font-medium leading-normal">
          /
        </span>
        <Link
          className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal hover:text-primary"
          href="/projects"
        >
          Projekty
        </Link>
        <span className="text-slate-400 dark:text-slate-500 text-sm font-medium leading-normal">
          /
        </span>
        <span className="text-slate-900 dark:text-slate-50 text-sm font-medium leading-normal">
          {title}
        </span>
      </div>
      <div className="flex flex-col gap-3 mb-12 text-center mt-10">
        <p className="text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl text-slate-900 dark:text-slate-50">
          Nazwa Projektu: {title}
        </p>
        <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-normal max-w-3xl mx-auto">
          {shortDescription}
        </p>
      </div>
      <div className="flex flex-col gap-12">
        <section>
          <h2 className="text-slate-900 dark:text-slate-50 text-2xl font-bold leading-tight tracking-[-0.015em] pb-4 border-b border-slate-200 dark:border-slate-800">
            Szczegóły
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="md:col-span-2">
              <p className="text-slate-700 dark:text-slate-300 text-base font-normal leading-relaxed">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-5 bg-slate-100 dark:bg-slate-900/50 p-6 rounded-lg">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center justify-center rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary dark:text-primary/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Rola
                </h3>
                <p className="text-slate-800 dark:text-slate-200 font-medium">
                  Full-Stack Developer
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Czas:
                </h3>
                <p className="text-slate-800 dark:text-slate-200 font-medium">
                  3 Months (Q1 2023)
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary/90">
                  <span className="material-symbols-outlined text-base">
                    open_in_new
                  </span>
                  Live Demo
                </button>
                <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-200 shadow-sm transition-colors hover:bg-slate-100 dark:hover:bg-slate-700">
                  <span className="material-symbols-outlined text-base">
                    code
                  </span>
                  View Code
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-slate-900 dark:text-slate-50 text-2xl font-bold leading-tight tracking-[-0.015em] pb-4 border-b border-slate-200 dark:border-slate-800">
            Galeria
          </h2>
          <div className="relative mt-6">
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              {image ? (
                <div className="h-full w-full object-cover">
                  <Image
                    alt="A website dashboard with charts and graphs on a laptop screen."
                    src={image}
                    fill
                  />
                </div>
              ) : (
                <ImagePlaceholder />
              )}
            </div>
            <div className="absolute inset-0 flex items-center justify-between px-4">
              <button className="grid size-10 place-content-center rounded-full bg-white/50 text-slate-900 backdrop-blur-sm transition hover:bg-white/75 dark:bg-black/50 dark:text-white dark:hover:bg-black/75">
                <span className="material-symbols-outlined">
                  arrow_back_ios_new
                </span>
              </button>
              <button className="grid size-10 place-content-center rounded-full bg-white/50 text-slate-900 backdrop-blur-sm transition hover:bg-white/75 dark:bg-black/50 dark:text-white dark:hover:bg-black/75">
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </button>
            </div>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              <div className="size-2 rounded-full bg-white"></div>
              <div className="size-2 rounded-full bg-white/50"></div>
              <div className="size-2 rounded-full bg-white/50"></div>
            </div>
          </div>
        </section>
        <section className="py-12">
          <NextProject index={index < projects.length - 1 ? index + 1 : 0} />
        </section>
      </div>
    </div>
  );
}
