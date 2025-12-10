import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";
import { toast } from "sonner";

export default function Services() {
  return (
    <div className="section-container">
      <h3 className="text-2xl mt-10 self-start mb-20 font-bold hover:underline">
        Usługi:
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-4xl w-full auto-rows-[250px]">
        <ServiceCard
          title={services[0].title}
          text={services[0].text}
          classes={"md:col-span-2"}
        />
        <ServiceCard
          title={services[1].title}
          text={services[1].text}
          classes={"md:col-span-3"}
        />
        <ServiceCard
          title={services[2].title}
          text={services[2].text}
          classes={"md:col-span-3"}
        />
        <ServiceCard
          title={services[3].title}
          text={services[3].text}
          classes={"md:col-span-2"}
        />
      </div>
    </div>
  );
}
