"use client";
import React, { ReactNode, useState, createContext, useEffect } from "react";

export const GlobalContext = createContext({ theme: "", isScrolled: false });

const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    //Changing bg-color variable depending on theme
    if (theme === "light") {
      document.documentElement.style.setProperty("--bg-color", "white");
    } else {
      document.documentElement.style.setProperty("--bg-color", "var(--black)");
    }
  }, [theme]);

  useEffect(() => {
    //Handle back to top button
    const handleScroll = () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <GlobalContext.Provider value={{ theme, isScrolled }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
