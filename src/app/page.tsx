import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Image from "next/image";

export default function Home() {
  return (
    <main className="scroll-smooth gap-10">
      <section className="relative w-full py-20 md:py-28 overflow-hidden">
        <Hero />
      </section>
      <section id="projects" className="relative w-full py-20 md:py-28 ">
        <Projects />
      </section>
      <section id="technologies" className="relative w-full py-20 md:py-28 ">
        <Technologies />
      </section>
      <section className="relative w-full py-20 md:py-28 overflow-hidden">
        <Contact />
      </section>
    </main>
  );
}
