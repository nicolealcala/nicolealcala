import React from "react";

interface SectionProps {
  children: any;
  className?: string;
  [key: string]: any;
}
const Section: React.FC<SectionProps> = ({ children, className, ...props }) => {
  return (
    <section
      className={`mx-4 px-6 py-8 lg:mx-8 lg:p-16 h-auto flex justify-center items-center rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
