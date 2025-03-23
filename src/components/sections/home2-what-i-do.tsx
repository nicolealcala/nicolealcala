"use client";
import React, { useContext } from "react";
import { Divider } from "@heroui/react";
import Section from "../shared-ui/section-full";
import { GlobalContext } from "../context-providers/global-context-provider";
import { motion } from "framer-motion";
import { fadeInUpProps } from "@/lib/motion/props";

const WhatIDo = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <Section className="">
      <motion.div {...fadeInUpProps}>
        <div className="container flex flex-col justify-between lg:flex-row gap-6">
          <div className="flex flex-col gap-y-8 w-full lg:w-1/2 my-12">
            <p className={`heading leading-tight text-slate-800`}>
              DREAM. <br /> DESIGN. <br /> DEVELOP.
            </p>
            <div className="flex flex-col">
              <Divider className="max-w-sm mb-8 bg-tear" />
              <h2 className="font-semibold mb-6 text-slate-800">WHAT I DO</h2>
              <p className="text-slate-600">
                Hello! I&apos;m a versatile full-stack web developer with strong
                front-end expertise and good back-end skills. I create intuitive
                web designs, manage relational and NoSQL databases efficiently,
                and design simple print media. Whether building robust web
                applications or crafting appealing designs, I bring a
                comprehensive skill set to meet your needs.
              </p>
            </div>
          </div>

          <div className="flex gap-2 w-full lg:w-1/2 min-h-full">
            <div className="flex items-center justify-center w-1/2 border border-tear rounded-l-2xl">
              Image 1
            </div>
            <div className="flex flex-col gap-2 w-1/2 h-full">
              <div className="flex items-center justify-center border border-tear rounded-r-2xl h-full">
                Image 2
              </div>
              <div className="flex items-center justify-center border border-tear rounded-r-2xl h-full">
                Image 3
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default WhatIDo;
