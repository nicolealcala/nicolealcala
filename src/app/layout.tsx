import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import "./globals.scss";
import BackToTop from "@/components/ui/back-to-top";
import GlobalProvider from "@/components/context-providers/global-context-provider";
import ClientLayout from "@/components/client-pages/layout";

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
