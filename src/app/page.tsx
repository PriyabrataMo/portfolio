import Intro from "@/components/Intro";
import Contact from "@/components/Contact";
// import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <div className="flex flex-col items-center px-4">
        <SectionDivider />
        <Projects />
        <Skills />
        {/* <Experience /> */}
        <Education />
        <Contact />
      </div>
    </main>
  );
}
