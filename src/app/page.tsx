import React from "react";

import Landing from "@/components/sections/home1-landing";

import FeaturedProjects from "@/components/sections/home3-featured-project";
import WhatIDo from "@/components/sections/home2-what-i-do";

const Home = () => {
  return (
    <main className="flex flex-col">
      <Landing />
      <WhatIDo />
      <FeaturedProjects />

      {/* <section className="relative overflow-x-scroll scroll-smooth">
        <div className="flex flex-nowrap min-h-screen w-max">
          <hr className="absolute top-0 left-0 border-white w-screen" />
          <div className="flex flex-col max-w-[350px] justify-end px-3 py-10 border-r border-white">
            <p className="font-semibold text-[32px] leading-9">
              <span className="text-pink">Excellence</span> is a continuous
              journey,
            </p>
            <p className="font-light mt-6">
              and your feedback is the fuel that keeps me striving for it. It
              empowers me to embrace challenges, learn from experiences, and
              continuously raise the bar.
            </p>
          </div>
          <Testimonials />
        </div>
        <hr className="absolute bottom-0 left-0 border-white w-full" />
      </section> */}
    </main>
  );
};

export default Home;
