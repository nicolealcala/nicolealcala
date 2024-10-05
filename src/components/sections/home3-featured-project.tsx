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

const FeaturedProjects = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <Section className="!relative flex flex-col justify-between pb-24">
      <Image
        src="/images/projects-featured.png"
        alt="Featured Project - Dreamlabs"
        width={890}
        height={597.03}
        quality={100}
        priority
        className="hidden lg:flex absolute bottom-0 left-1/2 transform -translate-x-1/2 !z-20"
      />

      <div className="container flex flex-col gap-y-12">
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
        <div className="hidden md:flex flex-col gap-6 md:gap-14 pb-8 relative">
          <div className="flex justify-between">
            <div className="font-bold text-xs max-w-[300px]">
              Technologies
              <div className="font-normal mt-2">
                The technologies involved in this project are:&nbsp;
                {technologies.map((tech, i) => (
                  <span key={i}>
                    {tech}
                    {i === technologies.length - 1 ? "." : ", "}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-right font-bold text-xs max-w-[280px]">
              Features
              <div className="font-normal mt-2">
                Original tutorial includes User Login and Blogpost CRUD
                operations. I enhanced the app with two added features: Comments
                CRUD operations and Email notifications.
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end gap-6">
            <div className="w-16 h-5 bg-yellow-200 z-10"></div>
            <div className="w-5 h-16 bg-yellow-200 place-self-end"></div>
          </div>

          <div className="flex justify-between items-end">
            <div className="font-bold text-xs max-w-[300px]">
              Process
              <div className="font-normal mt-2">
                Studied React.js for 2 weeks.&nbsp;
                {process.map((p, i) => (
                  <span key={i}>{p} </span>
                ))}
              </div>
            </div>

            <div className="text-right">
              <p className="font-bold text-xs">Visit here</p>
              <Link
                href="https://dreamlabs.vercel.app/"
                target="_blank"
                className="underline underline-offset-2 transition-colors duration-300 text-sm mt-2"
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

          <div className="hidden lg:flex absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 !z-10">
            {theme === "light" ? <BlueStaticBall /> : <CyanStaticBall />}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedProjects;
