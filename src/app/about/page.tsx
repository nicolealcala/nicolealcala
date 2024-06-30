import React from "react";
import type { Metadata } from "next";
import AboutMe from "@/components/sections/about1-about-me";
import WhatIDo from "@/components/sections/about2-what-i-do";

export const metadata: Metadata = {
  title: "About",
  description: "Portfolio Website v2.0",
};

const About = () => {
  return (
    <main className="flex flex-col">
      <AboutMe />
      <WhatIDo />
    </main>
  );
};

export default About;
