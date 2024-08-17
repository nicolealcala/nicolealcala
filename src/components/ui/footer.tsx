"use client";
import { Divider } from "@nextui-org/react";
import Socials from "./socials";
import RedirectLink from "../navigation/redirect-link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="flex justify-center px-6 lg:px-24 pb-12 bg-black w-full">
      <div className="container space-y-6">
        {pathname === "/contact" ? null : (
          <Divider className="bg-white h-0.5" />
        )}

        <div
          className={`flex gap-y-4 px-2 ${
            pathname === "/contact"
              ? "flex-col-reverse items-start lg:flex-row-reverse lg:justify-between mt-8"
              : "justify-between items-center"
          }`}
        >
          <div
            className={`flex flex-col sm:flex-row justify-center gap-y-2 gap-x-6 ${
              pathname === "/contact" ? "items-start mt-4" : "items-center"
            }`}
          >
            <span className="hidden sm:flex font-semibold highlighted-text">
              FOLOW ME:
            </span>
            <Socials placement="footer" />
          </div>
          {pathname === "/contact" ? (
            <div className="flex flex-col space-y-3 text-white">
              <p className="text-2xl font-semibold highlighted-text">
                Get in Touch
              </p>
              <div className="flex flex-wrap gap-x-14 gap-y-6">
                <div className="flex flex-col">
                  <p className="text-xs text-[#989595] mb-1">Location</p>
                  <p className="text-sm text-[#E1E1E1]">Calamba City, Laguna</p>
                  <p className="text-sm text-[#E1E1E1]">Philippines</p>
                </div>

                <div className="flex flex-col">
                  <p className="text-xs text-[#989595] mb-1">Email Address</p>
                  <p className="text-sm text-[#E1E1E1]">nclmalcala@gmail.com</p>
                </div>

                <div className="flex flex-col">
                  <p className="text-xs text-[#989595] mb-1">Website</p>
                  <p className="text-sm text-[#E1E1E1]">
                    nicolealcala.github.io
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <RedirectLink
              text="let's talk"
              path="/contact"
              className="text-white"
            />
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
