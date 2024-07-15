"use client";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { GlobalContext } from "../context-providers/global-context-provider";
import { Sun1, Moon } from "iconsax-react";

const links = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/projects", title: "Projects" },
];

const Nav = () => {
  const pathname = usePathname();
  const { theme, setTheme, handleThemeChange } = useContext(GlobalContext);

  return (
    <nav
      className={`bg-transparent py-5 px-20 flex justify-between top-0 !z-50 transition-colors duration-500 w-full ${
        theme === "dark" && "text-white"
      }`}
      id="navbar"
    >
      <div className="flex gap-x-3">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={38.25}
          height={32}
          priority
        />
        <h2 className="font-semibold leading-9">clinoae</h2>
        <Button
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
        </Button>
      </div>
      <div className="flex gap-x-10 items-center">
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            <span
              className={`font-semibold ${link.path === pathname && "active"}`}
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
            theme === "dark" ? "text-white" : " border-black text-black"
          }`}
        >
          <span className="font-semibold text-base">Contact Me</span>
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
