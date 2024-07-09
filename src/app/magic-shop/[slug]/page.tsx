import React from "react";
import Notes from "@/components/magic-shop/page-slug";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magic Shop",
  description:
    "A collection of heartfelt messagees for the important persons in my life.",
};
const Letter = ({ params }: any) => {
  return <Notes params={params} />;
};

export default Letter;
