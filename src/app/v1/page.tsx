import Contact from "@/components/v1/Contact";
import Education from "@/components/v1/Education";
import Intro from "@/components/v1/Intro";
import Projects from "@/components/v1/Projects";
import SectionDivider from "@/components/v1/SectionDivider";
import Skills from "@/components/v1/Skills";

export default function V1Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <div className="flex flex-col items-center px-4">
        <SectionDivider />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
