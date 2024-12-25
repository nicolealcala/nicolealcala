import React from "react";
import type { Metadata } from "next";
import AboutMe from "@/components/sections/about1-about-me";
import Skills from "@/components/sections/about2-skills";
import Awards from "@/components/sections/about3-awards";
import Error503 from "../error-503";

export const metadata: Metadata = {
  title: "About",
  description: "Portfolio Website v2.0",
};

const About = () => {
  return (
    // <main className="flex flex-col">
    //   <AboutMe />
    //   <Skills />
    //   <Awards />
    // </main>
    <Error503 />
  );
};

export default About;
