"use client";
import React, { useContext } from "react";
import RedirectLink from "@/components/navigation/redirect-link";
import Link from "next/link";
import Image from "next/image";
import { CyanStaticBall, BlueStaticBall } from "@/components/ui/static-ball";
import Section from "../ui/section-full";
import { GlobalContext } from "../context-providers/global-context-provider";

const technologies = [
  "Bootstrap",
  "React.js",
  "Next.js",
  "NextAuth.js",
  "MongoDB",
  "Mongoose",
  "NodeMailer",
];

const process = [
  "Followed a 4-hour YouTube tutorial.",
  "Edited the styles and assets.",
  "Added commenting functionality.",
  "Added email functionality.",
];

const features = ["User login", "Blogs CRUD", "Comments CRUD", "Email"];

const FeaturedProjects = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <Section className="!relative flex flex-col justify-between pb-0 md:pb-24">
      <Image
        src="/images/projects-featured.png"
        alt="Featured Project - Dreamlabs"
        width={890}
        height={597.03}
        quality={100}
        priority
        className="hidden md:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 !z-30"
      />

      <div className="container flex flex-col">
        <p className="subheading font-bold text-center">FEATURED PROJECT</p>
        <Image
          src="/images/projects-featured-mobile.png"
          alt="Featured Project - Dreamlabs"
          width={600}
          height={750}
          quality={100}
          priority
          className="flex md:hidden"
        />
        <div className="hidden md:flex flex-col gap-6 md:gap-12 pb-8 relative">
          <div className="flex justify-between">
            <div className="flex flex-col gap-y-3 z-10">
              <h2 className="font-semibold">Technologies</h2>
              <ul>
                {technologies.map((tech, i) => (
                  <li key={i} className="text-sm">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-y-3 text-right">
              <h2 className="font-semibold">Features</h2>
              <ul>
                {features.map((feature, i) => (
                  <li key={i} className="text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-between gap-6">
            <div className="flex flex-col gap-y-3">
              <h2 className="font-semibold">Process</h2>
              <ul>
                {process.map((step, i) => (
                  <li key={i} className="text-sm">
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-5 h-16 bg-yellow-200 place-self-end"></div>
          </div>

          <div className="flex justify-between items-end">
            <div className="w-16 h-5 bg-yellow-200"></div>
            <div className="flex flex-col gap-y-3 text-right">
              <h2 className="font-semibold">Visit here</h2>
              <Link
                href="https://dreamlabs.vercel.app/"
                target="_blank"
                className="underline underline-offset-2 transition-colors duration-300 text-sm"
              >
                dreamlabs.vercel.app
              </Link>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-sm">
              Tutorial:{" "}
              <Link
                href="https://youtu.be/vCOSTG10Y4o?si=rDJaiTIYPRlsjXdd"
                target="_blank"
                className="underline underline-offset-2 transition-colors duration-300"
              >
                Next.js Full Course Tutorial
              </Link>
            </p>
            <RedirectLink path="/projects" text="my portfolio" />
          </div>

          <div className="hidden md:flex absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 !z-10">
            {theme === "light" ? <BlueStaticBall /> : <CyanStaticBall />}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedProjects;
