"use client";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import "./nav.scss";

const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/projects", title: "Projects" },
  { path: "/contact", title: "Contact Me" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <nav
      className={`relative py-5 px-4 md:px-10 flex flex-col gap-3 top-0 !z-50 w-full bg-tear`}
      id="navbar"
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-x-3">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={38.25}
            height={32}
            priority
          />
          <h2 className={`font-semibold leading-9 text-white`}>clinoae</h2>
        </div>

        {/* SMALL SCREEN nav button*/}
        <label className="burger z-30" htmlFor="burger">
          <input
            type="checkbox"
            id="burger"
            checked={isOpen}
            onChange={() => setIsOpen((prev) => !prev)}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>

        {/* Expanded links */}
        <div className="hidden md:flex gap-x-3 items-center">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`transition-colors duration-500`}
            >
              <span
                className={`py-2 px-3 text-center ${
                  link.path === pathname
                    ? "!text-white font-semibold"
                    : "!text-gray-400"
                }`}
              >
                {link.title}
              </span>
            </Link>
          ))}
          <Button
            as={Link}
            href="/contact"
            variant={pathname === "/contact" ? "bordered" : "solid"}
            className={`rounded-full ${
              pathname === "/contact"
                ? "text-white border-white"
                : "bg-yellow border-black font-semibold"
            }`}
          >
            <span className="text-base text-tear">Contact Me</span>
          </Button>
        </div>
      </div>

      {/* Collapsed nav items for SMALL SCREENS */}
      <div
        className={`small-nav md:hidden flex-col justify-center items-center gap-y-6 absolute mt-px p-2 top-full right-0 bg-tear shadow-xl w-full transition-height duration-300 ease-linear ${
          isOpen ? "h-screen flex pb-24" : "h-0 hidden"
        }`}
      >
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`transition-colors duration-500 max-w-max text-gray-400
            }`}
          >
            <span
              className={`font-semibold py-2 px-3 text-4xl text-center ${
                link.path === pathname && "text-white"
              }`}
            >
              {link.title}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
