    "use client";
    import React, { createContext, useState, useEffect } from "react";

    export const ScrollContext = createContext(false);

    const ScrollContextProvider: React.FC<{ children: any }> = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <ScrollContext.Provider value={isScrolled}>
        {children}
        </ScrollContext.Provider>
    );
    };

    export default ScrollContextProvider;
