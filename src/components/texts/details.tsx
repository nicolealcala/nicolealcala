"use client";
import React, { ReactNode, useContext } from "react";
import { ThemeContext } from "../context-providers/theme-context-provider";

const Details: React.FC<{
  subtitle: string;
  description: string;
  children?: ReactNode;
}> = ({ subtitle, description, children }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`flex flex-col gap-y-4 max-w-[360px]`}>
      <p className={`font-semibold ${theme === "light" && "text-black"}`}>
        {subtitle}
      </p>
      <p className={theme === "light" ? "text-black" : ""}>{description}</p>
      {children}
    </div>
  );
};

export default Details;
