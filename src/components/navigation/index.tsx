"use client";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { GlobalContext } from "../context-providers/global-context-provider";
// import { Sun1, Moon } from "iconsax-react";
import "./nav.scss";

const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/projects", title: "Projects" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme, handleThemeChange } = useContext(GlobalContext);

  return (
    <nav
      className={`relative py-5 px-4 md:px-10 flex flex-col gap-3 top-0 !z-50 w-full shadow-sm ${
        pathname === "/about" ? "bg-teal-400" : "bg-white text-black"
      }`}
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
          <h2
            className={`font-semibold leading-9 ${
              pathname === "/about" && "text-white"
            }`}
          >
            clinoae
          </h2>
          {/* <Button
          isIconOnly
          className="bg-transparent"
          disableAnimation
          onClick={handleThemeChange}
        >
          {theme === "light" ? (
            <Moon
              size="24"
              color="var(--yellow)"
              variant="Bold"
              className=" hover:opacity-75 transition-all duration-100 ease-in"
            />
          ) : (
            <Sun1
              size="24"
              color="var(--yellow)"
              variant="Bold"
              className=" hover:opacity-75 transition-all duration-100 ease-in"
            />
          )}
        </Button> */}
        </div>

        {/* Collapsed nav button*/}
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
                className={`font-semibold py-2 px-3 text-center ${
                  link.path === pathname && "active"
                } ${pathname === "/about" ? "text-white" : "text-slate-700"}`}
              >
                {link.title}
              </span>
            </Link>
          ))}
          <Button
            as={Link}
            href="/contact"
            variant={pathname === "/contact" ? "solid" : "bordered"}
            className={`rounded border-2 ${
              pathname === "/about"
                ? "bg-yellow text-slate-700 border-yellow"
                : pathname === "/contact"
                ? "bg-white text-slate-700 border-slate-700"
                : "bg-black text-white  border-black"
            }`}
          >
            <span className="font-semibold text-base">Contact Me</span>
          </Button>
        </div>
      </div>

      {/* Collapsed nav items */}
      <div
        className={`md:hidden flex-col absolute mt-px p-2 top-full right-0 bg-white shadow-xl w-full transition-height duration-300 ease-linear rounded-b-lg ${
          isOpen ? "h-fit flex " : "h-0 hidden"
        }`}
      >
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`transition-colors duration-500 max-w-max ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            <span
              className={`font-semibold py-2 px-3 text-center ${
                link.path === pathname && "active"
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
