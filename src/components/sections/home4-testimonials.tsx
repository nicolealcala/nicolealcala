import React from "react";
import Section from "../ui/section-full";

const Testimonials = () => {
  return (
    <Section className="bg-black">
      <div className="container flex flex-col items-center text-[#F5F5F5]">
        <p className="text-3xl font-bold">
          <span className="text-pink">Excellence</span> is a continuous journey.
        </p>
        <p>
          and your <span className="highlighted-text">feedback</span> is the
          fuel that keeps me striving for it. It empowers me to embrace
          challenges, learn from experiences, and continuously raise the bar.
        </p>
      </div>
    </Section>
  );
};

export default Testimonials;
