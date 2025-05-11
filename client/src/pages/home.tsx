import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import SamuelProfileImage from "../assets/samuel_profile.jpg";
import HealthTrackIcon from "../assets/project-icons/healthtrack.svg";
import EcoShopIcon from "../assets/project-icons/ecoshop.svg";
import TeamSyncIcon from "../assets/project-icons/teamsync.svg";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Samuel Mbah | UX Designer | UX Researcher | ML Engineer | AI Developer</title>
        <meta name="description" content="Multi-disciplinary professional specializing in UX design, user research, machine learning, and AI development. Creating innovative solutions that combine exceptional user experiences with advanced data science." />
        <meta property="og:title" content="Samuel Mbah | UX Designer | UX Researcher | ML Engineer | AI Developer" />
        <meta property="og:description" content="Impact-driven professional showcasing expertise in user research, design thinking, machine learning, and artificial intelligence development." />
        <meta property="og:type" content="website" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gray-900">
                <span className="text-primary block">Hello, I'm Samuel</span>
                <span>UX Designer & Researcher</span>
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-1">ML Engineer & AI Developer</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-dark mb-8 max-w-lg">
                I create meaningful digital experiences and intelligent solutions that combine user-centered design with advanced machine learning and AI capabilities.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild size="lg" className="rounded-full px-8 py-6 bg-primary hover:bg-primary-dark">
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6">
                  <Link href="/about">About Me</Link>
                </Button>
              </div>
              
              <div className="flex gap-4 items-center">
                <a 
                  href="https://www.linkedin.com/in/samuel-mbah-mlengineer" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-500 hover:text-primary transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:samuelmbah21@gmail.com" 
                  className="text-gray-500 hover:text-primary transition-colors"
                  aria-label="Email Me"
                >
                  <FaEnvelope className="w-6 h-6" />
                </a>
                <span className="text-gray-400 text-sm ml-2">
                  Based in Nottingham, UK
                </span>
              </div>
            </motion.div>
            
            {/* Right Column: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                <div className="rounded-full border-4 border-primary overflow-hidden w-[280px] h-[280px] md:w-[350px] md:h-[350px] shadow-2xl">
                  <img 
                    src={SamuelProfileImage} 
                    alt="Samuel Mbah" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                {/* Background elements */}
                <div className="absolute -z-10 w-[200px] h-[200px] rounded-full bg-blue-100 -top-10 -left-10"></div>
                <div className="absolute -z-10 w-[120px] h-[120px] rounded-full bg-primary/20 bottom-5 -right-5"></div>
              </div>
            </motion.div>
          </div>
          
          {/* Featured Projects Section */}
          <div className="container mx-auto px-4 mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Featured Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={HealthTrackIcon} 
                    alt="HealthTrack" 
                    className="w-full h-full object-cover absolute top-0 left-0"
                  />
                  <div className="p-4 flex items-center justify-center h-full relative z-10">
                    <h3 className="text-xl font-bold text-primary bg-white/80 px-4 py-2 rounded-full">HealthTrack</h3>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">Patient-Centered Healthcare App</h3>
                  <p className="text-gray-600 mb-4">Intuitive scheduling and health tracking for improved patient outcomes.</p>
                  <Link href="/projects" className="text-primary font-medium hover:underline">
                    View Project →
                  </Link>
                </div>
              </motion.div>
              
              {/* Project 2 */}
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={EcoShopIcon} 
                    alt="EcoShop" 
                    className="w-full h-full object-cover absolute top-0 left-0"
                  />
                  <div className="p-4 flex items-center justify-center h-full relative z-10">
                    <h3 className="text-xl font-bold text-green-600 bg-white/80 px-4 py-2 rounded-full">EcoShop</h3>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">Sustainable E-commerce Platform</h3>
                  <p className="text-gray-600 mb-4">Ethically sourced products with transparent environmental impact metrics.</p>
                  <Link href="/projects" className="text-primary font-medium hover:underline">
                    View Project →
                  </Link>
                </div>
              </motion.div>
              
              {/* Project 3 */}
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={TeamSyncIcon} 
                    alt="TeamSync" 
                    className="w-full h-full object-cover absolute top-0 left-0"
                  />
                  <div className="p-4 flex items-center justify-center h-full relative z-10">
                    <h3 className="text-xl font-bold text-purple-600 bg-white/80 px-4 py-2 rounded-full">TeamSync</h3>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">Remote Collaboration Tool</h3>
                  <p className="text-gray-600 mb-4">Streamlining remote teamwork with intuitive task management features.</p>
                  <Link href="/projects" className="text-primary font-medium hover:underline">
                    View Project →
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
          
          {/* Data Science Portfolio Banner */}
          <div className="container mx-auto px-4 mt-24">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Data Science Portfolio</h2>
                  <p className="text-blue-100 mb-4">
                    Explore my machine learning projects, predictive models, and data-driven solutions.
                  </p>
                  <Button asChild className="bg-white text-blue-600 hover:bg-blue-50">
                    <Link href="/data-science" className="flex items-center gap-2">
                      <span>View Data Science Work</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M12 8v2"/><path d="M12 14v2"/><path d="M8 12H6"/><path d="M18 12h-2"/></svg>
                  </div>
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                  </div>
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
