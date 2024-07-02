import React from "react";

interface SectionProps {
  children: any;
  className?: string;
  [key: string]: any;
}
const SectionFull: React.FC<SectionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={`px-24 py-16 flex justify-center items-center ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default SectionFull;
