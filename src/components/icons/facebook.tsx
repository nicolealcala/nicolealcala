"use client";
import React, { useContext } from "react";
import styles from "./icons.module.scss";
import { ThemeContext } from "../context-providers/theme-context-provider";

const Facebook = () => {
  const theme = useContext(ThemeContext);

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
          d="M13.2 12.9H14.7L15.3 10.5H13.2V9.3C13.2 8.682 13.2 8.1 14.4 8.1H15.3V6.084C15.1044 6.0582 14.3658 6 13.5858 6C11.9568 6 10.8 6.9942 10.8 8.82V10.5H9V12.9H10.8V18H13.2V12.9Z"
          fill={theme === "dark" ? "white" : "black"}
        />
        <circle
          cx="12"
          cy="12"
          r="11.5"
          stroke={theme === "dark" ? "white" : "black"}
        />
      </svg>
    </div>
  );
};

export default Facebook;
