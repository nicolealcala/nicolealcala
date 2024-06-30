"use client";
import React, { useContext } from "react";
import { ArrowUp } from "lucide-react";
import { ScrollContext } from "../context-providers/scroll-context";
const BackToTop = () => {
  const isScrolled = useContext(ScrollContext);
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={`fixed right-20 bottom-10 flex items-center justify-center rounded-full bg-yellow w-[50px] h-[50px] cursor-pointer transition-opacity duration-300 ${
        isScrolled
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp onClick={handleBackToTop} />
    </div>
  );
};

export default BackToTop;
