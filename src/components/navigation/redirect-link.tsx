"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { ChevronsRight } from "lucide-react";
import styles from "./navigation.module.scss";
import { ThemeContext } from "../context-providers/theme-context-provider";

interface RedirectLinkProps {
  path: string;
  text?: string;
  [key: string]: any;
}

const RedirectLink: React.FC<RedirectLinkProps> = ({
  path,
  text = "LEARN MORE",
  ...props
}) => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <Link
        href={path}
        className={`flex gap-x-2 w-max font-semibold ${styles.learnMore} ${
          theme === "dark" && "text-white"
        }`}
        {...props}
      >
        {text} <ChevronsRight className={styles.chevronIcon} />
      </Link>
    </div>
  );
};

export default RedirectLink;
