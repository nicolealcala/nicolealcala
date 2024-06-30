"use client";
import { useContext } from "react";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import nav from "./navigation.module.scss";
import { ScrollContext } from "../context-providers/scroll-context";

const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/projects", title: "Projects" },
];

const Nav = () => {
  const pathname = usePathname();
  const isScrolled = useContext(ScrollContext);

  return (
    <nav
      className={`py-5 px-20 flex justify-between sticky top-0 !z-50 transition-colors duration-500 w-full ${
        isScrolled ? "bg-black text-white" : "bg-transparent text-foreground"
      }`}
      id="navbar"
    >
      <div className="flex gap-x-3">
        <Image src="/images/logo.png" alt="Logo" width={38.25} height={32} />
        <h2 className="font-semibold leading-9">clinoae</h2>
      </div>
      <div className="flex gap-x-10 items-center">
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`transition-colors duration-500 ${
              isScrolled ? "text-white" : "text-foreground"
            }`}
          >
            <span
              className={`font-semibold ${
                link.path === pathname && nav.active
              }`}
            >
              {link.title}
            </span>
          </Link>
        ))}
        <Button
          as={Link}
          href="/contact"
          variant={pathname === "/contact" ? "solid" : "bordered"}
          className={`rounded ${
            isScrolled
              ? "text-white border border-white"
              : "text-foreground border border-black"
          }`}
        >
          <span className="font-semibold text-base">Contact Me</span>
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
