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

const Socials = ({ placement }: any) => {
  const socials: SocialLink[] = [
    {
      link: "https://www.facebook.com/nicole.alcala.m/",
      icon: <Facebook placement={placement} />,
    },
    {
      link: "https://www.instagram.com/nicolealcalq/",
      icon: <Instagram placement={placement} />,
    },
    { link: "https://x.com/clinoae", icon: <X placement={placement} /> },
    {
      link: "https://www.linkedin.com/in/nicolealcala",
      icon: <Linkedin placement={placement} />,
    },
    {
      link: "https://github.com/nicolealcala",
      icon: <Github placement={placement} />,
    },
  ];

  return (
    <div className="flex gap-x-3">
      {socials.map((social, index) => (
        <Link key={index} href={social.link} target="_blank">
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
