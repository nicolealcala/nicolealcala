"use client";
import React, { useContext } from "react";
import { ArrowUp } from "lucide-react";
import { GlobalContext } from "../context-providers/global-context-provider";

const BackToTop = () => {
  const { isScrolled } = useContext(GlobalContext);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed right-5 bottom-5  sm:right-10 sm:bottom-10 flex items-center justify-center rounded-full bg-yellow w-[50px] h-[50px] cursor-pointer transition-opacity duration-300 shadow-xl z-80 ${
        isScrolled
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={handleBackToTop}
    >
      <ArrowUp />
    </div>
  );
};

export default BackToTop;
