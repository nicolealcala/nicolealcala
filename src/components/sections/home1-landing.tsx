"use client";
import React, { useContext } from "react";
import "./sections.scss";
import { Button, Snippet, Link } from "@nextui-org/react";
import { ArrowCircleRight } from "iconsax-react";
import Section from "../shared-ui/section-full";

const Landing = () => {
  return (
    <Section className="bg-tear min-h-dvh">
      <article className="container py-12">
        <p className={`text-tear-blue rounded-full`}>👋 Hello, my name is</p>
        <p className={`landing-text font-bold text-white`}>Nicole Alcala.</p>
        <div className="flex justify-between">
          <div className="max-w-xl space-y-10 relative">
            <p className="text-gray-400 leading-7">
              A&nbsp;
              <span className="font-bold text-white">
                Full-stack web developer
              </span>{" "}
              based in the Philippines. Committed to lifelong learning and
              development, I am eager to learn and motivated to make a positive
              impact to the world.
            </p>
            <div className="flex items-center gap-x-3">
              <Snippet
                symbol=" "
                size="lg"
                variant="bordered"
                className="hidden lg:flex"
                classNames={{ base: "border-gray-400 rounded text-white" }}
              >
                nclmalcala@gmail.com
              </Snippet>
              <Button
                as={Link}
                href="https://drive.google.com/file/d/1Icik8eFIii4Y_ZlTowkoRoWiQQ4jHmaF/view?usp=sharing"
                className="text-white rounded bg-gradient"
                size="lg"
                isExternal
                endContent={<ArrowCircleRight size="24" color="#fff" />}
              >
                View my CV
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Section>
  );
};

export default Landing;
