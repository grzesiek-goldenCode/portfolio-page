import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <nav className="flex h-20 w-[80vw] mx-auto mt-5 justify-between">
        <Link href={"/"} className=" flex items-center">
          <Image
            src="terminal.svg"
            alt="terminal icon"
            width={30}
            height={30}
          />{" "}
          <p className="mx-3 font-bold">Grzegorz Szuba</p>
        </Link>
        <div className="flex items-center">
          <p className="mx-4">Projekty</p>
          <p className="mx-4">Umiejętości</p>
          <p className="mx-4">Kontakt</p>
          <Image src="github.svg" alt="github icon" width={30} height={30} />
        </div>
      </nav>{" "}
      <hr className="border-t-[1px] border-gray-400 border-dotted opacity-60 mb-6" />
    </>
  );
}
