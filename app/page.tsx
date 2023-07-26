import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Summary from "@/components/summary";
import AboutMe from "@/components/about-me";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";
import Career from "@/components/career";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <Layout>
      <main className="mt-10">
        <Hero />
        <Summary />
        <AboutMe />
        <Portfolio />
        <Skills />
        <Career />
        <Contact />
      </main>
    </Layout>
  );
}
