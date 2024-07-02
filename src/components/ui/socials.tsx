import React from "react";
import Link from "next/link";
import Facebook from "@/components/icons/facebook";
import Github from "@/components/icons/github";
import Instagram from "@/components/icons/instagram";
import Linkedin from "@/components/icons/linkedin";
import X from "@/components/icons/x";

type SocialLink = {
  link: string;
  icon: React.ReactNode;
};

const socials: SocialLink[] = [
  { link: "https://www.facebook.com/nicole.alcala.m/", icon: <Facebook /> },
  { link: "https://www.instagram.com/nicolealcalq/", icon: <Instagram /> },
  { link: "https://x.com/clinoae", icon: <X /> },
  { link: "https://www.linkedin.com/in/nicolealcala", icon: <Linkedin /> },
  { link: "https://github.com/nicolealcala", icon: <Github /> },
];

const Socials = () => {
  return (
    <div className="flex gap-x-4">
      {socials.map((social, index) => (
        <Link key={index} href={social.link} target="_blank">
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
