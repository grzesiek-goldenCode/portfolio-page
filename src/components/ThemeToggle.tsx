"use client";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="relative rounded-full mx-4 flex items-center justify-center transition-transform duration-300"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FaSun className="absolute inset-0 m-auto h-5 w-5 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"></FaSun>
      <FaMoon className="absolute inset-0 m-auto h-5 w-5 rotate-90 scale-0 dark:rotate-0 dark:scale-100"></FaMoon>
    </button>
  );
}
