import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://priyabratamondal.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Priyabrata Mondal | AI/Agent Engineer",
    template: "%s | Priyabrata Mondal",
  },
  description:
    "AI/Agent Engineer at QAD Inc. building LLM-powered agentic workflows for enterprise supply chain automation. Guardian on LeetCode (top 1%), 2500+ problems solved.",
  keywords: [
    "Priyabrata Mondal",
    "AI Engineer",
    "Agent Engineer",
    "LLM",
    "Agentic workflows",
    "QAD Inc",
    "Python",
    "LangChain",
    "LiteLLM",
    "Langfuse",
    "Supply chain automation",
    "Competitive programming",
    "LeetCode Guardian",
  ],
  authors: [{ name: "Priyabrata Mondal", url: BASE_URL }],
  creator: "Priyabrata Mondal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Priyabrata Mondal",
    title: "Priyabrata Mondal | AI/Agent Engineer",
    description:
      "AI/Agent Engineer at QAD Inc. building LLM-powered agentic workflows for enterprise supply chain automation.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Priyabrata Mondal | AI/Agent Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyabrata Mondal | AI/Agent Engineer",
    description:
      "AI/Agent Engineer at QAD Inc. building LLM-powered agentic workflows for enterprise supply chain automation.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
