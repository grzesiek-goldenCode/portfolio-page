import TechIcon from "./TechIcon";

export default function Technologies() {
  return (
    <section id="technologies">
      <div className="section-container">
        <h3 className="my-10 self-start text-2xl mb-20 font-bold">
          Używane technologie
        </h3>
        <div className="grid grid-cols-5 grid-rows-2 gap-x-20 gap-y-10">
          <TechIcon name="HTML 5" short="html5" />
          <TechIcon name="Javascript" short="js" />
          <TechIcon name="NextJS" short="nextjs" />
          <TechIcon name="React" short="react" />
          <TechIcon name="TypeScript" short="typescript" />
          <TechIcon name="Tailwind CSS" short="tailwind" />
          <TechIcon name="CSS 3" short="css3" />
          <TechIcon name="OpenAI" short="openai" />
          <TechIcon name="GitHub" short="github" />
          <TechIcon name="PostgreSQL" short="postgresql" />
        </div>
      </div>
    </section>
  );
}
