import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Let's Connect
        </h2>
        
        <div className="max-w-3xl mx-auto bg-white/10 rounded-lg p-8">
          <p className="text-center mb-8 text-lg">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-white/20">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <p className="opacity-80 text-sm">Email</p>
                  <a 
                    href="mailto:samuelmbah21@gmail.com" 
                    className="underline font-medium text-white hover:text-blue-200 transition-colors"
                  >
                    samuelmbah21@gmail.com
                  </a>
                </div>
              </div>
              
              {/* LinkedIn */}
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-white/20">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="opacity-80 text-sm">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/samuel-mbah-mlengineer" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-medium text-white hover:text-blue-200 transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              
              {/* GitHub */}
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-white/20">
                  <FaGithub className="w-5 h-5" />
                </div>
                <div>
                  <p className="opacity-80 text-sm">GitHub</p>
                  <a 
                    href="https://github.com/SamMbah" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-medium text-white hover:text-blue-200 transition-colors"
                  >
                    View GitHub Profile
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-white/20">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <p className="opacity-80 text-sm">Location</p>
                  <p>Nottingham, United Kingdom</p>
                </div>
              </div>
              
              {/* Spacer div to maintain layout balance */}
              <div className="h-20"></div>
            </div>
          </div>
          
          {/* Buttons removed as requested */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
