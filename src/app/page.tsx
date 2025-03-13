import type { Metadata } from "next";
import { Header } from "./components/header/header";
import Main from "./components/main/main";
import { Skills } from "./components/skills/skills";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

export const metadata: Metadata = {
  title: "Diego Silva Dias | Desenvolvedor Fullstack",
  description: "Portfólio de Diego Silva Dias, Desenvolvedor Fullstack",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Main />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
