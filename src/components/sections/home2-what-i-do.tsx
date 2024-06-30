import React from "react";
import { Divider } from "@nextui-org/react";
import Section from "../ui/section";
import { Divide } from "lucide-react";

const WhatIDo = () => {
  return (
    <Section color="black">
      <div className="container flex justify-between gap-x-6">
        <div className="flex flex-col w-1/2">
          <p className="text-white heading">
            DREAM. <br /> DRESIGN. <br /> DEVELOP.
          </p>
          <div className="flex flex-col">
            <Divider className="bg-white max-w-sm mb-8" />
            <h2 className="font-semibold text-white mb-6">WHAT I DO</h2>
            <p className="text-white">
              Hello! I&apos;m a versatile full stack developer with strong
              front-end skills and solid back-end expertise. I create intuitive
              web designs, manage relational and NoSQL databases efficiently,
              and design simple print media. Whether building robust web
              applications or crafting appealing designs, I bring a
              comprehensive skill set to meet your needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-red-500 w-1/2">
          {" "}
          Hello jadhsajkdhasjdhkj
        </div>
      </div>
    </Section>
  );
};

export default WhatIDo;
