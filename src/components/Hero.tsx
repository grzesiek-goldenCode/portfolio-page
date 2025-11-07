import Image from "next/image";
export default function Hero() {
  return (
    <section id="hero">
      <div className="section-container">
        <div className="relative w-60 h-60 mb-10 mt-20">
          <Image
            src="/main_image.png"
            alt="Grzegorz Szuba main image"
            priority
            fill
            className="object-cover rounded-full border-4 border-indigo-500 shadow-lg"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold mb-5">Grzegorz Szuba </h1>
          <p className=" text-xl mb-2">
            Buduję inteligentne aplikacje webowe z Next.js i AI.
          </p>
        </div>
      </div>
    </section>
  );
}
