import React from "react";
import Socials from "@/components/global/socials";
import RedirectLink from "@/components/navigation/redirect-link";
import Details from "@/components/texts/details";
import { Button } from "@nextui-org/react";

const Landing = () => {
  return (
    <section className="flex justify-between pb-10">
      <div className="flex flex-col max-w-xl gap-y-8 justify-center">
        <p className="text-[56px] leading-none font-bold">
          HI, I&apos;M <span className="text-pink">NICOLE</span>,
          <br />A WEB <span className="text-cyan">DEVELOPER</span> BASED IN THE
          PHILIPPINES.
        </p>
        <p className="max-w-md font-light">
          Committed to lifelong learning and development, I am eager to learn
          and motivated to make a positive impact to the world.
        </p>
        <div className="flex">
          <Button variant="bordered" className="rounded-none">
            View CV
          </Button>
          <Button className="rounded-none">Let&apos;s talk</Button>
        </div>
      </div>
      <div className="flex flex-col max-w-[350px] gap-y-16 justify-center">
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
          <p className="font-semibold text-cyan">FOLLOW ME</p>
          <div className="flex gap-x-4">
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
