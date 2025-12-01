import TechIcon from "./TechIcon";

export default function Technologies() {
  return (
    <div className="section-container ">
      <h3 className="mx-10 my-10 self-start text-2xl mb-20 font-bold">
        Używane technologie
      </h3>
      <div className="flex flex-wrap lg:grid lg:grid-cols-5 grid-rows-2 gap-x-15 gap-y-15 lg:gap-x-20 lg:gap-y-10 mx-auto px-5 justify-center items-center">
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
  );
}
