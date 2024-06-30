import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { Inter, Bai_Jamjuree } from "next/font/google";
import Navbar from "@/components/navigation/nav";
import BgLines from "@/components/global/bg-lines";
import "./globals.scss";
import BackToTop from "@/components/global/back-to-top";
import ScrollContextProvider from "@/components/context-providers/scroll-context";

const inter = Inter({ subsets: ["latin"] });
export const baiJamjuree = Bai_Jamjuree({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Nicole Alcala",
  description: "Portfolio Website v2.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NextUIProvider>
          {/* <BgLines /> */}
          <ScrollContextProvider>
            <Navbar />
            <div className="!z-10">{children}</div>
            <BackToTop />
          </ScrollContextProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
