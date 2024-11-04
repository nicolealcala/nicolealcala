"use client";
import { Divider } from "@nextui-org/react";
import Socials from "./socials";
import RedirectLink from "../navigation/redirect-link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="flex flex-col items-center justify-center pb-5 bg-tear w-full">
      {pathname === "/about" || pathname === "/projects" ? (
        <Divider className="bg-[#AEAEAE] h-px" />
      ) : null}
      <div className="container space-y-6  px-6 lg:px-24 ">
        <div className="flex flex-col items-start justify-end lg:flex-row lg:justify-between mt-5 gap-y-6">
          {/* <div className="flex gap-x-3">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={38.25}
              height={32}
              priority
            />
            <h2 className="text-[#E1E1E1] font-semibold leading-9">clinoae</h2>
          </div> */}

          <div className="flex flex-col space-y-3 text-white">
            <h2 className="font-semibold text-sm text-tear-blue">
              Get in Touch
            </h2>
            <div className="flex flex-wrap gap-x-14 gap-y-6">
              <div className="flex text-xs flex-col">
                <p className="text-[#989595] mb-1">Location</p>
                <p className="text-[#E1E1E1]">Calamba City, Laguna PH</p>
              </div>

              <div className="flex text-xs flex-col">
                <p className="text-[#989595] mb-1">Email Address</p>
                <p className="text-[#E1E1E1]">nclmalcala@gmail.com</p>
              </div>

              <div className="flex text-xs flex-col">
                <p className="text-[#989595] mb-1">Website</p>
                <p className="text-[#E1E1E1]">nicolealcala.github.io</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-y-2 gap-x-6">
            <span className="flex text-sm font-semibold text-tear-blue">
              Follow Me:
            </span>
            <Socials placement="footer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
