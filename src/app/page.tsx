import React from "react";

import Landing from "@/components/sections/home1-landing";

import FeaturedProjects from "@/components/sections/home3-featured-project";
import WhatIDo from "@/components/sections/home2-what-i-do";
import Testimonials from "@/components/sections/home4-testimonials";

const Home = () => {
  return (
    <main className="flex flex-col">
      <Landing />
      <WhatIDo />
      <FeaturedProjects />
      <Testimonials />
    </main>
  );
};

export default Home;
