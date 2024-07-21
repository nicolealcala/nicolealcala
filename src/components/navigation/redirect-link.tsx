"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { ChevronsRight } from "lucide-react";
import { GlobalContext } from "../context-providers/global-context-provider";

interface RedirectLinkProps {
  path: string;
  text?: string;
  [key: string]: any;
}

const RedirectLink: React.FC<RedirectLinkProps> = ({
  path,
  text = "LEARN MORE",
  className,
  ...props
}) => {
  const { theme } = useContext(GlobalContext);
  return (
    <div>
      <Link
        href={path}
        className="flex gap-x-2 w-max font-semibold items-center learnMore"
        {...props}
      >
        <span
          className={`${className} ${
            text === "LEARN MORE" ? "text-sm" : "text-base"
          }`}
        >
          {text}
        </span>{" "}
        <ChevronsRight className={`chevronIcon ${className}`} />
      </Link>
    </div>
  );
};

export default RedirectLink;
