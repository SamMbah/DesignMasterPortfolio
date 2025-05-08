import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { aboutData } from "@/data/about";
import { FaLinkedin, FaDribbble, FaBehance, FaGithub } from "react-icons/fa";

const About = () => {
  const { experience } = aboutData;

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
                <div className="aspect-square bg-gray-300 rounded-lg mb-4 flex items-center justify-center text-6xl text-gray-500">
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
