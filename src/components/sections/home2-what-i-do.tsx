"use client";
import React, { useContext } from "react";
import { Divider } from "@nextui-org/react";
import Section from "../ui/section-full";
import { GlobalContext } from "../context-providers/global-context-provider";
import { oswald } from "@/lib/fonts";

const WhatIDo = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <Section className="bg-[#f0eeed]">
      <div className="container flex flex-col justify-between lg:flex-row gap-6">
        <div className="flex flex-col gap-y-8 w-full lg:w-1/2">
          <p className={`heading leading-tight`}>
            DREAM. <br /> DESIGN. <br /> DEVELOP.
          </p>
          <div className="flex flex-col">
            <Divider className="max-w-sm mb-8 bg-black" />
            <h2 className="font-semibold mb-6">WHAT I DO</h2>
            <p>
              Hello! I&apos;m a versatile full-stack web developer with strong
              front-end expertise and good back-end skills. I create intuitive
              web designs, manage relational and NoSQL databases efficiently,
              and design simple print media. Whether building robust web
              applications or crafting appealing designs, I bring a
              comprehensive skill set to meet your needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-1/2"></div>
      </div>
    </Section>
  );
};

export default WhatIDo;
