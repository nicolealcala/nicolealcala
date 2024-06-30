import React, { ReactNode } from "react";

const Details: React.FC<{
  subtitle: string;
  description: string;
  children?: ReactNode;
}> = ({ subtitle, description, children }) => {
  return (
    <div className="flex flex-col gap-y-4 max-w-[360px]">
      <p className="font-semibold">{subtitle}</p>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default Details;
