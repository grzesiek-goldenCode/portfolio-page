"use client";

import { useState } from "react";
import { PiHandTapBold } from "react-icons/pi";

type ServiceCardProps = {
  title: string;
  text: string;
  classes: string;
};

export default function ServiceCard({
  title,
  text,
  classes,
}: ServiceCardProps) {
  const [open, setIsOpen] = useState(false);
  return (
    <div
      className={`${classes} relative group bg-white/30 backdrop-blur-md border-white-20 shadow-lg text-sm prose prose-neutral dark:prose-invert py-3 px-2  md:hover:scale-120 hover:z-10 flex flex-col items-center justify-center text-center`}
      onClick={() => setIsOpen(!open)}
    >
      <h4
        className={`absolute inset-auto p-5 text-2xl font-bold md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      >
        {title}
      </h4>
      <p
        className={`${
          open ? "opacity-100 translate-y-0" : " opacity-0 translate-y-2"
        } md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 z-10 md:translate-y-2 md:group-hover:translate-y-0 font-semibold`}
      >
        {text}
      </p>
      <div className="md:hidden mt-10 absolute inset-y-[60%]">
        {!open && <PiHandTapBold />}
      </div>
    </div>
  );
}
