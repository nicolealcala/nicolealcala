"use client";
import React, { useContext } from "react";
import RedirectLink from "@/components/navigation/redirect-link";
import Link from "next/link";
import Image from "next/image";
import { CyanStaticBall, BlueStaticBall } from "@/components/ui/static-ball";
import Section from "../ui/section-full";
import { ThemeContext } from "../context-providers/theme-context-provider";

const technologies = [
  "Bootstrap CSS",
  "React.js",
  "Next.js",
  "NextAuth.js",
  "MongoDB",
  "Mongoose",
];

const process = [
  "Followed a 4-hour YouTube tutorial.",
  "Edited the styles and assets.",
  "Added commenting functionality.",
];

const features = ["User login", "Blogs CRUD", "Comments CRUD", "Email"];
const FeaturedProjects = () => {
  const theme = useContext(ThemeContext);
  return (
    <Section className="!relative flex flex-col justify-between min-h-screen">
      <Image
        src="/images/projects-featured.png"
        alt="Featured Project - Dreamlabs"
        width={890}
        height={597.03}
        quality={100}
        priority
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 !z-30"
      />

      <div className="container">
        <p
          className={`text-[56px] font-bold text-center !z-30  ${
            theme === "light" && "text-black"
          }`}
        >
          FEATURED PROJECT
        </p>

        <div className="relative flex justify-between z-20">
          <div className="flex flex-col gap-y-24 max-w-xs min-h-max pb-20">
            <div className="flex flex-col gap-y-3">
              <h2
                className={`font-semibold ${theme === "light" && "text-black"}`}
              >
                Technologies
              </h2>
              <ul>
                {technologies.map((tech, i) => (
                  <li className={theme === "light" ? "text-black" : ""} key={i}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-y-3">
              <h2
                className={`font-semibold ${theme === "light" && "text-black"}`}
              >
                Process
              </h2>
              <ul>
                {process.map((step, i) => (
                  <li className={theme === "light" ? "text-black" : ""} key={i}>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <p className={theme === "light" ? "text-black" : ""}>
              Tutorial:{" "}
              <Link
                href="https://youtu.be/vCOSTG10Y4o?si=rDJaiTIYPRlsjXdd"
                target="_blank"
                className="underline underline-offset-2 externalLink"
              >
                Next.js Full Course Tutorial
              </Link>
            </p>
          </div>

          <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 !z-10">
            <BlueStaticBall />
          </div>

          <div className="flex flex-col justify-between items-end max-w-xs min-h-max text-end pb-20">
            <div className="flex flex-col gap-y-3">
              <h2
                className={`font-semibold ${theme === "light" && "text-black"}`}
              >
                Features
              </h2>
              <ul>
                {features.map((feature, i) => (
                  <li className={theme === "light" ? "text-black" : ""} key={i}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className={`flex flex-col gap-y-3`}>
              <h2
                className={`font-semibold ${theme === "light" && "text-black"}`}
              >
                Visit here
              </h2>
              <Link
                href="https://dreamlabs.vercel.app/"
                target="_blank"
                className={`underline underline-offset-2 transition-colors duration-300 ${
                  theme === "light"
                    ? "text-black hover:text-blue"
                    : "text-white hover:text-cyan"
                }`}
              >
                dreamlabs.vercel.app
              </Link>
            </div>

            <RedirectLink path="/projects" text="my portfolio" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedProjects;
