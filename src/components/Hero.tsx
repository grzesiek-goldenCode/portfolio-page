import Image from "next/image";
export default function Hero() {
  return (
    <div id="hero" className="flex flex-col items-center justify-center mt-20">
      <div className="relative w-60 h-60 mb-10">
        <Image
          src="/main_image.png"
          alt="Grzegorz Szuba main image"
          priority
          fill
          className="object-cover rounded-full border-4 border-indigo-500 shadow-lg"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-2">Grzegorz Szuba </h1>
        <h3 className=" text-3xl mb-2">
          Building intelligent web experiences with Next.js and AI.
        </h3>
      </div>
    </div>
  );
}
