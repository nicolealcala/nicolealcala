import React from "react";

interface SectionProps {
  children: any;
  className?: string;
  [key: string]: any;
}
const Section: React.FC<SectionProps> = ({ children, className, ...props }) => {
  return (
    <section
      className={`mx-8 p-16 max-h-screen flex justify-center items-center rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
