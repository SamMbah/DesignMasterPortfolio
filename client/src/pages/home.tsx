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
        <title>Samuel Mbah | UX Designer & Research Specialist</title>
        <meta name="description" content="UX Designer & Research Specialist with 6+ years of experience delivering qualitative and quantitative research that improves customer outcomes by up to 30%." />
        <meta property="og:title" content="Samuel Mbah | UX Designer & Research Specialist" />
        <meta property="og:description" content="Impact-driven UX research specialist showcasing expertise in user research, design thinking, and collaborative product development." />
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
