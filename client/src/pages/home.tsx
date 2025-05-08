import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { FaEnvelope, FaLinkedin, FaFileDownload } from "react-icons/fa";
import SamuelProfileImage from "../assets/samuel_profile.jpg";
import HealthTrackIcon from "../assets/project-icons/healthtrack.svg";
import EcoShopIcon from "../assets/project-icons/ecoshop.svg";
import TeamSyncIcon from "../assets/project-icons/teamsync.svg";

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
        <section className="py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden">
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
                <span>UX Designer & <br />Research Specialist</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-dark mb-8 max-w-lg">
                I create meaningful digital experiences that balance business goals with user needs through research-driven design thinking.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild size="lg" className="rounded-full px-8 py-6 bg-primary hover:bg-primary-dark">
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6">
                  <Link href="/about">About Me</Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <Button asChild variant="outline" className="flex items-center gap-2">
                  <a 
                    href="/assets/samuel_mbah_resume.pdf" 
                    download="Samuel_Mbah_UX_Resume.pdf"
                  >
                    <FaFileDownload className="mr-2" /> Download Resume
                  </a>
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
