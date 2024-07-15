"use client";
import { Divider } from "@nextui-org/react";
import React, { useContext } from "react";
import Section from "./section-full";
import { GlobalContext } from "../context-providers/global-context-provider";
import Socials from "./socials";
import RedirectLink from "../navigation/redirect-link";

const Footer = () => {
  return (
    <Section className="bg-black">
      <div className="container space-y-6">
        <Divider className="bg-white h-px" />
        <div className="flex justify-between px-4">
          <div className="flex gap-x-6">
            <span className="font-semibold highlighted-text">FOLOW ME:</span>
            <Socials />
          </div>
          <RedirectLink
            text="let's talk"
            path="/contact"
            className="text-white"
          />
        </div>
      </div>
    </Section>
  );
};

export default Footer;
