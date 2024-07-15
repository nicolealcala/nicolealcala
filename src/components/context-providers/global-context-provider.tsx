"use client";
import React, { ReactNode, useState, createContext, useEffect } from "react";

interface GlobalContextType {
  theme: string;
  setTheme: (theme: string) => void;
  isScrolled: boolean;
  handleThemeChange: () => void;
}
export const GlobalContext = createContext<GlobalContextType>({
  theme: "dark",
  setTheme: () => {},
  isScrolled: false,
  handleThemeChange: () => {},
});

const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const savedtheme = localStorage.getItem("theme");
    if (savedtheme) {
      setTheme(savedtheme);
    } else {
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  useEffect(() => {
    //Changing bg-color variable depending on theme
    if (theme === "light") {
      document.documentElement.style.setProperty("--bg-color", "var(--white)");
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

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <GlobalContext.Provider
      value={{ theme, setTheme, isScrolled, handleThemeChange }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
