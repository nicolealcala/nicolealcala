"use client";
import React, { ReactNode, useContext } from "react";
import { GlobalContext } from "../context-providers/global-context-provider";

const Details: React.FC<{
  subtitle: string;
  description: string;
  children?: ReactNode;
}> = ({ subtitle, description, children }) => {
  return (
    <div className="flex flex-col gap-y-4 max-w-[360px] text-slate-700">
      <p className="font-semibold">{subtitle}</p>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default Details;
