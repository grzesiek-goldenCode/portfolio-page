"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-20 w-[80vw] mx-auto mt-5 0 bg-white/80 dark:bg-linear-to-br dark:from-indigo-950 dark:to-violet-900">
      <nav className="relative flex h-full justify-between mr-4">
        <Link href={"/"} className=" flex items-center ml-2">
          <span className="material-symbols-outlined text-3xl text-blue-700">
            terminal
          </span>
          <h2 className="mx-3 font-bold leading-tight tracking-[-0.015em]">
            Grzegorz Szuba
          </h2>
        </Link>
        <div className="hidden md:flex items-center">
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
        <button
          className="md:hidden p-2 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              exit={{ clipPath: "inset(0 0 100% 0)" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute md:hidden top-full right-0  flex flex-col gap-4 pt-1 px-6 min-h-fit bg-neutral-50 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 border-t z-10  pb-5 shadow-2xl"
            >
              <Link
                href="/projects"
                className="mx-4 hover:scale-110 "
                onClick={() => setOpen(false)}
              >
                Projekty
              </Link>
              <Link
                href="/#technologies"
                className="mx-4 hover:scale-110 "
                onClick={() => setOpen(false)}
              >
                Umiejętości
              </Link>
              <Link
                href="/about"
                className="mx-4 hover:scale-110 "
                onClick={() => setOpen(false)}
              >
                O mnie
              </Link>
              <Link
                href="#contact"
                className="mx-4 hover:scale-110 "
                onClick={() => setOpen(false)}
              >
                Kontakt
              </Link>
              <a
                href="https://github.com/grzesiek-goldenCode"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 hover:scale-110 "
                onClick={() => setOpen(false)}
              >
                <Image
                  src="github.svg"
                  alt="github icon"
                  width={30}
                  height={30}
                  className="mx-auto mb-2"
                />
              </a>
              <ThemeToggle />
            </motion.nav>
          )}
        </AnimatePresence>
      </nav>{" "}
      <hr className="border-t border-gray-400 dark:border-gray-700 border-dotted opacity-60 mb-6" />
    </div>
  );
}
