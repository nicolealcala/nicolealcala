"use client";
import { Divider } from "@nextui-org/react";
import Socials from "./socials";
import RedirectLink from "../navigation/redirect-link";

const Footer = () => {
  return (
    <footer className="flex justify-center px-6 lg:px-24 pb-12 bg-black w-full">
      <div className="container space-y-6">
        <Divider className="bg-white h-0.5" />
        <div className="flex flex-col items-center gap-y-4 sm:flex-row sm:justify-between px-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 justify-center gap-x-6">
            <span className="font-semibold highlighted-text">FOLOW ME:</span>
            <Socials placement="footer" />
          </div>
          <RedirectLink
            text="let's talk"
            path="/contact"
            className="text-white"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
