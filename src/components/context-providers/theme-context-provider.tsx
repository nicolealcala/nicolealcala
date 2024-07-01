"use client";
import React, { ReactNode, useState, createContext } from "react";

export const ThemeContext = createContext("dark");

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
