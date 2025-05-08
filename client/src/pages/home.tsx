import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Alex Morgan | UX Designer Portfolio</title>
        <meta name="description" content="UX Designer with expertise in research, design thinking, and collaborative product development. View my portfolio showcasing work in e-commerce, healthcare, finance, and more." />
        <meta property="og:title" content="Alex Morgan | UX Designer Portfolio" />
        <meta property="og:description" content="UX Designer portfolio showcasing expertise in UX Research, UI Design, and collaborative product development." />
        <meta property="og:type" content="website" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
