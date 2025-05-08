import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { aboutData } from "@/data/about";
import { FaLinkedin, FaDribbble, FaBehance, FaGithub } from "react-icons/fa";

const About = () => {
  const { experience } = aboutData;
  // Use a placeholder colored background that matches Samuel's suit in the photo
  const placeholderColor = "bg-blue-400";

  return (
    <section id="about" className="py-16 bg-gray-light">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            {/* Profile Card */}
            <Card>
              <CardContent className="p-4">
                <div 
                  className={`aspect-square mb-4 rounded-lg overflow-hidden ${placeholderColor} flex items-center justify-center text-white font-bold text-5xl`}
                >
                  SM
                
                </div>
                <h3 className="font-bold text-xl mb-2">Samuel Mbah</h3>
                <p className="text-gray-dark mb-4">
                  UX Designer & Research Specialist with 6+ years of experience delivering qualitative and quantitative research that solves real-world problems.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-primary hover:text-blue-700" aria-label="LinkedIn">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href="#" className="text-primary hover:text-blue-700" aria-label="Dribbble">
                    <FaDribbble className="text-xl" />
                  </a>
                  <a href="#" className="text-primary hover:text-blue-700" aria-label="Behance">
                    <FaBehance className="text-xl" />
                  </a>
                  <a href="#" className="text-primary hover:text-blue-700" aria-label="GitHub">
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">My Approach</h3>
                <p className="text-gray-dark mb-4">
                  I believe in creating meaningful digital experiences that balance business goals with user needs. My design process is deeply rooted in empathy, research, and collaboration. I work closely with cross-functional teams to ensure designs are not just beautiful, but solve real problems for users.
                </p>
                <p className="text-gray-dark">
                  With a background spanning e-commerce, healthcare, finance, and travel industries, I've developed expertise in translating complex requirements into intuitive interfaces that delight users and drive business results.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-semibold">MSc Artificial Intelligence and Data Science (Distinction)</h4>
                      <span className="text-sm text-gray-dark">Jan 2023 – Jan 2024</span>
                    </div>
                    <p className="text-gray-dark">University of Hull, UK</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-semibold">BSc Mathematics and Economics</h4>
                      <span className="text-sm text-gray-dark">Dec 2011 – Oct 2015</span>
                    </div>
                    <p className="text-gray-dark">University of Benin, Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Certifications</h3>
                <ul className="space-y-2 list-disc list-inside text-gray-dark">
                  <li>Associate Data Analyst in SQL – DataCamp</li>
                  <li>Microsoft DP-203: Data Engineering on Microsoft Azure (In Progress)</li>
                  <li>Python for Data Science – Coursera</li>
                  <li>Google UX Design Certification</li>
                  <li>Design-Led Strategy: Design Thinking for Business & Entrepreneurship (University of Sydney- Coursera)</li>
                  <li>Innovation Through Design (University of Sydney-Coursera)</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">Professional Experience</h3>
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-semibold">{job.title}</h4>
                        <span className="text-sm text-gray-dark">{job.period}</span>
                      </div>
                      <p className="text-gray-dark">{job.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
