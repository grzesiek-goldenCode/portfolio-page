//  Put project images to folders in public with same name as project slug with numbers from 1 as file names.
//  example path: public/projects/slug/1.png

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  date?: string;
};

export const projects: Project[] = [
  {
    slug: "pracownia-opowiesci",
    title: "Pracownia opowieści",
    shortDescription: "Bajki dla dzieci generowane przez AI",
    description:
      "Wybierz temat i imię dziecka aby otrzymać bajkę stworzoną specjalnie dla Twojego dziecka",
    technologies: ["NextJS", "TailwindCSS", "OpenAI"],
    image: "/projects/pracownia-opowiesci/1.png",
  },
  {
    slug: "krypto-tracker",
    title: "Krypto Tracker",
    shortDescription: "Śledzenie kursów kryptowalut",
    description:
      "Sprawdzaj na bieżąco aktualne i historyczne ceny wielu kryptowalut, sprawdź historię zmian na wykresach",
    technologies: ["NextJS", "TailwindCSS"],
    image: "/projects/krypto-tracker/1.png",
  },
  {
    slug: "blog-turystyczny",
    title: "Blog Złoty-Trop",
    shortDescription: "Szkielet bloga na nextJS i Sanity",
    description:
      "Blog nastawiony na turystykę w NextJS i backend na Sanity, obsługuje kategorie, stronę główną i niezbędne podstrony",
    technologies: ["NextJS", "TailwindCSS", "Sanity"],
  },
];
