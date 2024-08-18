"use client";
import React, { useContext } from "react";
import styles from "./icons.module.scss";
import { GlobalContext } from "../context-providers/global-context-provider";

const X = ({ placement }: any) => {
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
          d="M15.4272 6H17.4578L13.0221 11.0826L18.2409 18H14.1551L10.9527 13.8055L7.29256 18H5.26009L10.0041 12.5618L5 6.00095H9.18979L12.0801 9.83417L15.4272 6ZM14.7131 16.7818H15.8386L8.57503 7.15479H7.36822L14.7131 16.7818Z"
          fill={
            theme === "dark" || placement === "footer" ? "white" : "#334155"
          }
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

export default X;
