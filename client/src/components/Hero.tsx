import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24 bg-gray-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Crafting meaningful digital experiences through user-centered design
          </h1>
          <p className="text-xl text-gray-dark mb-8">
            UX Designer with expertise in research, design thinking, and collaborative product development
          </p>
          <Button 
            size="lg" 
            asChild
            className="font-medium"
          >
            <a href="#projects">View My Work</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
