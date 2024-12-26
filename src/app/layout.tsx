import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import "./globals.scss";
import BackToTop from "@/components/shared-ui/back-to-top";
import GlobalProvider from "@/components/context-providers/global-context-provider";
import ClientLayout from "@/components/client-pages/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nicole Alcala",
  description: "Portfolio Website v2.0",
  authors: [{ name: "Nicole Alcala", url: "https://nicolealcala.vercel.app" }],
  keywords: [
    "web developer",
    "frontend developer",
    "backend developer",
    "full-stack developer",
    "Next.js",
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "developer in Philippines",
    "portfolio",
  ],
  openGraph: {
    title: "Nicole Alcala - Full Stack Web Developer",
    description:
      "Explore the work of Nicole Alcala, a full-stack web developer skilled in React, Next.js, and modern web technologies.",
    url: "https://nicolealcala.vercel.app",
    type: "website",
    siteName: "Nicole Alcala",
    countryName: "Philippines",
  },
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
          <GlobalProvider>
            {/* <BgLines /> */}
            {/* <ScrollProvider> */}
            <ClientLayout>{children}</ClientLayout>
            <BackToTop />
            {/* </ScrollProvider> */}
          </GlobalProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
