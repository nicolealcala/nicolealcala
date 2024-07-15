"use client";
import React, { useContext } from "react";
import Socials from "@/components/ui/socials";
import RedirectLink from "@/components/navigation/redirect-link";
import Details from "@/components/texts/details";
import { Button, Link } from "@nextui-org/react";
import Section from "../ui/section-full";
import { GlobalContext } from "../context-providers/global-context-provider";

const Landing = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <Section>
      <div className={`container flex justify-between ${theme.toString()}`}>
        <div className="flex flex-col max-w-xl gap-y-8 justify-center">
          <p className={`text-[56px] leading-none font-bold`}>
            HI, I&apos;M <span className="text-pink">NICOLE,</span>
            <br />A WEB <span className="highlighted-text">DEVELOPER</span>{" "}
            BASED IN THE PHILIPPINES.
          </p>
          <p className={`max-w-md`}>
            Committed to lifelong learning and development, I am eager to learn
            and motivated to make a positive impact to the world.
          </p>
          <div className="flex">
            <Button
              href="https://drive.google.com/file/d/1Icik8eFIii4Y_ZlTowkoRoWiQQ4jHmaF/view?usp=sharing"
              isExternal
              as={Link}
              variant="bordered"
              id="view-cv"
            >
              View CV
            </Button>
            <Button as={Link} variant="solid" id="lets-talk">
              Let&apos;s talk
            </Button>
          </div>
        </div>
        <div className="flex flex-col max-w-auto gap-y-16 justify-center">
          <Details
            subtitle="ABOUT ME"
            description="I graduated Magna Cum Laude with a Bachelor's degree in
          Information Technology from Polytechnic University of the
          Philippines, Sto. Tomas Campus in 2023."
          >
            <RedirectLink path="/about" />
          </Details>

          <Details
            subtitle="MY EXPERIENCE"
            description="I am a Full Stack Web Developer at WPH Digital Pte Ltd. I am part
          of a team that focuses on integrating GenAI services in web
          development projects."
          >
            <RedirectLink path="/projects" />
          </Details>

          <div className="flex flex-col gap-y-6">
            <p className="font-semibold highlighted-text">FOLLOW ME</p>
            <div className="flex gap-x-4">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Landing;
