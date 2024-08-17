import React from "react";
import Section from "../ui/section-full";
import { EmblaCarousel } from "../ui/carousel-embla";
import Feedback from "@/lib/data/testimonials";

const Testimonials = () => {
  return (
    <Section className="bg-black" id="last">
      <div className="container flex flex-col items-center text-white gap-y-12">
        <div className="flex flex-col gap-y-6 items-center ">
          <p className="text-3xl text-white md:text-5xl font-bold text-center">
            <span className="text-pink">Excellence</span> is a continuous
            journey
          </p>
          <p className="text-white text-center max-w-[90%] md:max-w-[60%]">
            and your <span className="highlighted-text">feedback</span> is the
            fuel that keeps me striving for it. It empowers me to embrace
            challenges, learn from experiences, and continuously raise the bar.
          </p>
        </div>
        <EmblaCarousel items={Feedback} />
      </div>
    </Section>
  );
};

export default Testimonials;
