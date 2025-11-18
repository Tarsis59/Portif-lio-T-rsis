import About from "@/components/sections/about";
import Certificates from "@/components/sections/certificates";
import { Contact } from "@/components/sections/contact";
import Creation from "@/components/sections/creation";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-x-hidden">
      <Hero />

      <Creation />

      <About />

      <Experience />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  );
}
