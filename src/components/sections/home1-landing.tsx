"use client";
import React, { useContext } from "react";
import "./sections.scss";
import { Button, Snippet, Link } from "@nextui-org/react";
import { ArrowCircleRight } from "iconsax-react";
import { oswald } from "@/lib/fonts";
import Section from "../ui/section-full";

const Landing = () => {
  return (
    <Section>
      <article className="-space-y-24 container py-12">
        <p className={`landing-text ${oswald.className}`}>NICOLE</p>
        <div className="flex justify-between">
          <div className="max-w-lg space-y-10 relative pt-20 ps-3">
            <p className="text-justify">
              <span className="font-bold">Full-stack developer</span> based in
              the Philippines. Committed to lifelong learning and development, I
              am eager to learn and motivated to make a positive impact to the
              world.
            </p>
            <div className="flex gap-x-3">
              <Snippet
                symbol=" "
                size="lg"
                variant="bordered"
                classNames={{ base: "border-black rounded" }}
              >
                nclmalcala@gmail.com
              </Snippet>
              <Button
                as={Link}
                href="https://drive.google.com/file/d/1Icik8eFIii4Y_ZlTowkoRoWiQQ4jHmaF/view?usp=sharing"
                className="bg-black text-white rounded font-light me-3"
                size="lg"
                isExternal
                endContent={<ArrowCircleRight size="24" color="#FFF" />}
              >
                View my CV
              </Button>
            </div>
          </div>
          <p className={`landing-text ${oswald.className}`}>
            ALCALA<span className="text-pink-400">.</span>
          </p>
        </div>
      </article>
    </Section>
  );
};

export default Landing;
