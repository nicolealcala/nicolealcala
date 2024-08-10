import React from "react";
import NoteList from "@/components/client-pages/magic-shop-id";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magic Shop",
  description:
    "A collection of heartfelt messages for the important persons in my life.",
};
const Letters = ({ params }: any) => {
  return <NoteList params={params} />;
};

export default Letters;
