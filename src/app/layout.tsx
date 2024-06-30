import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import Navbar from "@/components/navigation/nav";
import BgLines from "@/components/global/bg-lines";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <NextUIProvider>
          <BgLines />
          <Navbar />
          <div className="p-24 !z-10">{children}</div>
        </NextUIProvider>
      </body>
    </html>
  );
}
