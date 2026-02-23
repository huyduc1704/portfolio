import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import MyResume from "@/components/MyResume";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <MyResume />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
