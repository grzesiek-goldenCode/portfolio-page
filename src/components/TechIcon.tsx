import Image from "next/image";

type TechProps = {
  name: string;
  short: string;
};

export default function TechIcon({ name, short }: TechProps) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="relative w-10 h-10 overflow-hidden">
        <Image src={`/${short}-icon.svg`} alt={`${short} logo`} fill />
      </div>
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
}
