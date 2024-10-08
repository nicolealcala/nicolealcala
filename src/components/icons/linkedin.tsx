"use client";
import React, { useContext } from "react";
import styles from "./icons.module.scss";
import { GlobalContext } from "../context-providers/global-context-provider";

const Linkedin = ({ placement }: any) => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className={`cursor-pointer ${styles.icon}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.66652 7.33393C8.66634 7.68753 8.5257 8.02658 8.27554 8.27649C8.02539 8.5264 7.6862 8.6667 7.33259 8.66652C6.97899 8.66634 6.63994 8.5257 6.39003 8.27554C6.14012 8.02539 5.99982 7.6862 6 7.33259C6.00018 6.97899 6.14081 6.63994 6.39097 6.39003C6.64113 6.14012 6.98032 5.99982 7.33393 6C7.68753 6.00018 8.02658 6.14081 8.27649 6.39097C8.5264 6.64113 8.6667 6.98032 8.66652 7.33393ZM8.70652 9.6538H6.04V18H8.70652V9.6538ZM12.9196 9.6538H10.2664V18H12.893V13.6202C12.893 11.1804 16.0728 10.9537 16.0728 13.6202V18H18.706V12.7136C18.706 8.60052 13.9996 8.75385 12.893 10.7737L12.9196 9.6538Z"
          fill={theme === "dark" || placement === "footer" ? "white" : "#334155"}
        />
        <circle
          cx="12"
          cy="12"
          r="11.5"
          stroke={
            theme === "dark" || placement === "footer" ? "white" : "#334155"
          }
        />
      </svg>
    </div>
  );
};

export default Linkedin;
