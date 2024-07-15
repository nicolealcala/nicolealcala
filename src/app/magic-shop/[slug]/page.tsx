import React from "react";
import Notes from "@/components/client-pages/magic-shop-id";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magic Shop",
  description:
    "A collection of heartfelt messages for the important persons in my life.",
};
const Letter = ({ params }: any) => {
  return <Notes params={params} />;
};

export default Letter;
