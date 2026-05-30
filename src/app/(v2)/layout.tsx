import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { personalData } from "@/data/data";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Toaster } from "react-hot-toast";

const fontSans = Ubuntu({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  alternates: {
    canonical: personalData.url,
  },
  openGraph: {
    images: [
      {
        url: "/avatar.jpg",
        width: 460,
        height: 460,
        alt: personalData.name,
      },
    ],
  },
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <TooltipProvider delayDuration={0}>
        <div
          className={cn(
            "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
            fontSans.variable,
          )}
        >
          {children}
          <Toaster position="top-right" />
          <Navbar />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}
