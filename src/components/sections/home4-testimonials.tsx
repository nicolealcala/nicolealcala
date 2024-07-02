import React from "react";
import Section from "../ui/section-full";

const Testimonials = () => {
  return (
    <Section className="bg-black">
      <div className="container flex flex-col items-center text-white">
        <p className="text-3xl font-bold">
          <span className="text-pink">Excellence</span> is a continuous journey.
        </p>
        <p>
          and your <span className="text-blue">feedback</span> is the fuel that
          keeps me striving for it. It empowers me to embrace challenges, learn
          from experiences, and continuously raise the bar.
        </p>
      </div>
    </Section>
  );
};

export default Testimonials;
