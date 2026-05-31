import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";

const BLUR_FADE_DELAY = 0.04;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Priyabrata Mondal",
  url: "https://priyabratamondal.com",
  image: "https://priyabratamondal.com/avatar.jpg",
  jobTitle: "AI/Agent Engineer",
  worksFor: {
    "@type": "Organization",
    name: "QAD Inc.",
    url: "https://qad.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Techno Main Salt Lake",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/in/priyabrata-mondal/",
    "https://github.com/PriyabrataMo",
    "https://medium.com/@priyabrata8558",
    "https://leetcode.com/priyabrata8558",
  ],
  description:
    "AI/Agent Engineer at QAD Inc. building LLM-powered agentic workflows for enterprise supply chain automation. Guardian on LeetCode (top 1%).",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <Hero delay={BLUR_FADE_DELAY} />
        <About delay={BLUR_FADE_DELAY * 3} />
        <Work delay={BLUR_FADE_DELAY * 5} />
        <Education delay={BLUR_FADE_DELAY * 7} />
        <Skills delay={BLUR_FADE_DELAY * 9} />
        <Projects delay={BLUR_FADE_DELAY * 11} />
        <Contact delay={BLUR_FADE_DELAY * 13} />
      </main>
    </>
  );
}
