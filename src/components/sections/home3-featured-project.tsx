import React from "react";
import RedirectLink from "@/components/navigation/redirect-link";
import Link from "next/link";
import Image from "next/image";
import StaticBall from "@/components/global/static-ball";
import FluidBall from "@/components/global/fluid-ball";
import Section from "../ui/section";
import { baiJamjuree } from "@/app/layout";

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
  return (
    <Section className="!relative flex flex-col justify-between" color="black">
      <Image
        src="/images/projects-featured.png"
        alt="Featured Project - Dreamlabs"
        width={890}
        height={597.03}
        quality={100}
        priority
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 !z-20"
      />

      <div className="container">
        <p
          className={`text-[56px] font-bold text-center !z-30 text-white ${baiJamjuree.className}`}
        >
          FEATURED <span className="stroked">PROJECT</span>
        </p>

        <div className="relative flex justify-between">
          <div className="flex flex-col gap-y-24 max-w-xs min-h-max pb-20">
            <div className="flex flex-col gap-y-4">
              <h2 className="font-semibold text-white">Technologies</h2>
              <ul>
                {technologies.map((tech, i) => (
                  <li className="text-white" key={i}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-y-4">
              <h2 className="font-semibold text-white">Process</h2>
              <ul>
                {process.map((step, i) => (
                  <li className="text-white" key={i}>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-white">
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
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 !z-10">
            <StaticBall />
          </div>

          <div className="flex flex-col justify-between items-end max-w-xs min-h-max text-end pb-20">
            <div className="flex flex-col gap-y-4">
              <h2 className="font-semibold text-white">Features</h2>
              <ul>
                {features.map((feature, i) => (
                  <li className="text-white" key={i}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-y-4">
              <h2 className="font-semibold text-white">Visit here</h2>
              <Link
                href="https://dreamlabs.vercel.app/"
                target="_blank"
                className="underline underline-offset-2 externalLink font-light text-white"
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
