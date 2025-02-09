// filepath: /Users/priyabrata/Desktop/portfolio/src/app/layout.tsx
import Header from "@/components/Header";
import { Nunito } from "next/font/google";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/ThemeContext";
import { Toaster } from "react-hot-toast";
import RandomFavicon from "@/components/RandomFavIcon";
import Head from "next/head";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Priyabrata Mondal",
  description: "Software Engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <RandomFavicon />
      </head>
      <body
        className={`${nunito.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
