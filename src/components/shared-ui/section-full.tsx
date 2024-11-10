import React from "react";

interface SectionProps {
  children: any;
  className?: string;
  [key: string]: any;
}
const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  ...props
}) => {
  return (
    <section
      className={`px-6 lg:px-24 py-16 flex justify-center items-center ${className}`}
      id={id}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
