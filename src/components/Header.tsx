import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <div className="h-20 w-[80vw] mx-auto mt-5 0 bg-white/80 dark:bg-linear-to-br dark:from-indigo-950 dark:to-violet-900">
      <nav className="flex h-full justify-between mr-4">
        <Link href={"/"} className=" flex items-center ml-2">
          <span className="material-symbols-outlined text-3xl text-blue-700">
            terminal
          </span>
          <h2 className="mx-3 font-bold leading-tight tracking-[-0.015em]">
            Grzegorz Szuba
          </h2>
        </Link>
        <div className="flex items-center">
          <Link href="/projects" className="mx-4">
            Projekty
          </Link>
          <Link href="/#technologies" className="mx-4">
            Umiejętości
          </Link>
          <Link href="/about" className="mx-4">
            O mnie
          </Link>
          <Link href="#contact" className="mx-4">
            Kontakt
          </Link>
          <a
            href="https://github.com/grzesiek-goldenCode"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <Image src="github.svg" alt="github icon" width={30} height={30} />
          </a>
          <ThemeToggle />
        </div>
      </nav>{" "}
      <hr className="border-t border-gray-400 dark:border-gray-700 border-dotted opacity-60 mb-6" />
    </div>
  );
}
