"use client";

import Header from "@/components/v1/Header";
import RandomFavicon from "@/components/v1/RandomFavIcon";
import ThemeSwitch from "@/components/v1/ThemeSwitch";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import ThemeContextProvider from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import { Nunito } from "next/font/google";
import { Toaster } from "react-hot-toast";

const nunito = Nunito({ subsets: ["latin"] });

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <div
          className={`${nunito.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 min-h-screen`}
        >
          <RandomFavicon />
          <Header />
          {children}
          <Toaster position="top-right" />
          <ThemeSwitch />
          <Analytics />
        </div>
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}
