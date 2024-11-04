import React from "react";
import Section from "../ui/section-full";
import { EmblaCarousel } from "../ui/carousel-embla";
import Feedback from "@/lib/data/testimonials";
import { oswald } from "@/lib/fonts";

const Testimonials = () => {
  return (
    <Section className="bg-[#eff3fc] !px-0 " id="last">
      <div className="container flex flex-col items-center gap-y-14">
        <div className="flex flex-col gap-y-4 items-center">
          <p
            className={`text-3xl md:text-5xl font-bold text-slate-800 text-center`}
          >
            Excellence is a continuous journey
          </p>
          <p
            className={`text-center max-w-[90%] md:max-w-[60%] text-slate-600`}
          >
            and your feedback is the fuel that keeps me striving for it. It
            empowers me to embrace challenges, learn from experiences, and
            continuously raise the bar.
          </p>
        </div>
        <EmblaCarousel items={Feedback} />
      </div>
    </Section>
  );
};

export default Testimonials;
