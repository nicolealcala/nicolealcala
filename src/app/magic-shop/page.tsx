import NotePage from "@/components/client-pages/magic-shop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magic Shop",
  description:
    "A collection of heartfelt messages for the important persons in my life.",
};

const MagicShop = () => {
  return (
    <main className="flex flex-col">
      <NotePage />
    </main>
  );
};

export default MagicShop;
