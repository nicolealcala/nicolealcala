"use client";
import { Divider } from "@nextui-org/react";
import React, { useContext } from "react";
import Section from "./section-full";
import { ThemeContext } from "../context-providers/theme-context-provider";
import Socials from "./socials";
import RedirectLink from "../navigation/redirect-link";

const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <Section className="bg-black">
      <div className="container space-y-6">
        <Divider className="bg-white h-px" />
        <div className="flex justify-between px-4">
          <div className="flex gap-x-6">
            <span className={theme === "light" ? "text-blue" : "text-cyan"}>
              FOLOW ME:
            </span>
            <Socials />
          </div>
          <RedirectLink text="let's talk" path="/contact" />
        </div>
      </div>
    </Section>
  );
};

export default Footer;
