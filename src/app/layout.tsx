import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { Inter, Bai_Jamjuree } from "next/font/google";
import Navbar from "@/components/navigation/nav";
import BgLines from "@/components/global/bg-lines";
import "./globals.scss";
import BackToTop from "@/components/global/back-to-top";
import ThemeProvider from "@/components/context-providers/theme-context-provider";
import ScrollProvider from "@/components/context-providers/scroll-context-provider";
import Footer from "@/components/global/footer";

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
          <ThemeProvider>
            <BgLines />
            <ScrollProvider>
              <Navbar />
              <div className="!z-10">
                {children} <Footer />
              </div>
              <BackToTop />
            </ScrollProvider>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
