import Link from "next/link";
import React from "react";
import { ChevronsRight } from "lucide-react";
import styles from "./navigation.module.scss";

interface RedirectLinkProps {
  path: string;
  text?: string;
  color?: string;
  [key: string]: any;
}

const LearnMore: React.FC<RedirectLinkProps> = ({
  path,
  text = "LEARN MORE",
  color = "white",
  ...props
}) => {
  return (
    <div>
      <Link
        href={path}
        className={`flex gap-x-2 w-max font-semibold ${styles.learnMore} ${
          color === "white" ? "text-white" : "text-black"
        }`}
        {...props}
      >
        {text} <ChevronsRight className={styles.chevronIcon} />
      </Link>
    </div>
  );
};

export default LearnMore;
