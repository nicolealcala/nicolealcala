import React from "react";
import RedirectLink from "@/components/navigation/redirect-link";
import Barcode from "@/components/shared-ui/barcode";
import Section from "../shared-ui/section-full";
import "./sections.scss";

const AboutMe = () => {
  return (
    <Section className="bg-tear min-h-[90dvh]">
      <div className="container flex flex-col gap-y-12">
        <p className="title sm:text-8xl md:text-9xl font-medium w-full text-center text-white">
          ABOUT ME
        </p>
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col gap-y-24">
            {/* EDUCATION */}
            <div className="flex flex-col gap-y-4 max-w-[375px]">
              <h2 className="font-semibold text-white">EDUCATION</h2>
              <p className="text-gray-400">
                BS in Information Technology
                <br />
                Polytechnic University of the Philippines
                <br />
                <span className="text-gradient">Magna Cum Laude,</span> 2023
              </p>
            </div>

            {/* EXPERIENCE */}
            <div className="flex flex-col gap-y-4 max-w-[375px]">
              <h2 className="font-semibold text-white">EXPERIENCE</h2>
              <p className="text-gray-400">
                Analyst Programmer |{" "}
                <span className="text-gradient">Full-stack Web Developer</span>
                <br />
                WPH Digital Pte Ltd | Singapore
                <br />
                January 2024 - Present
              </p>
            </div>

            {/* VIEW MY CV */}
            <RedirectLink
              path="https://drive.google.com/file/d/1SIESrpCjLwpHLKTz7xqpOfgynaI8d0cL/view?usp=sharing"
              text="view my cv"
              target="_blank"
              className="text-white"
            />
          </div>

          <div className="flex flex-col justify-between text-right gap-y-16">
            {/* FACTS */}
            <div className="flex flex-col gap-y-4 max-w-[375px]">
              <h2 className="font-semibold text-white">FACTS</h2>
              <p className="text-gray-400">
                <span className="text-2xl font-bold text-gradient">
                  INTROVERTED
                </span>
                <br /> I am a music junkie and animal lover. <br />I love cats,
                dogs, and otters.
              </p>
            </div>

            {/* BARCODE */}
            <Barcode />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
