import React from "react";

interface SectionProps {
  color: string;
  children: any;
  className?: string;
  [key: string]: any;
}
const Section: React.FC<SectionProps> = ({
  color,
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={`px-24 py-16 min-h-screen flex justify-center items-center ${className} ${
        color === "white" ? "bg-white" : "bg-black"
      }`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
