import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const {
    title,
    focus,
    challenge,
    role,
    timeline,
    research,
    design,
    outcomes,
    tools
  } = project;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="mb-12"
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <Badge variant="secondary" className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
        {focus}
      </Badge>
      
      {/* Project Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <h4 className="font-semibold mb-2">Challenge</h4>
          <p className="text-gray-dark">{challenge}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">My Role</h4>
          <p className="text-gray-dark">{role}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Timeline</h4>
          <p className="text-gray-dark">{timeline}</p>
        </div>
      </div>
      
      {/* Research Process */}
      <div className="mb-16">
        <h4 className="text-xl font-semibold mb-6">Research Process</h4>
        {research.image && (
          <div className="mb-8">
            <img 
              src={research.image} 
              alt={`${title} research process diagram`} 
              className="w-full h-auto rounded-lg shadow-md" 
            />
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h5 className="font-semibold mb-3">Research Methods</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-dark">
              {research.methods.map((method, index) => (
                <li key={index}>{method}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Key Findings</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-dark">
              {research.findings.map((finding, index) => (
                <li key={index}>{finding}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Design Process */}
      <div className="mb-16">
        <h4 className="text-xl font-semibold mb-6">Design Process</h4>
        {design.images && design.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {design.images.map((image, index) => (
              <div key={index}>
                <h5 className="font-medium mb-2">{image.title}</h5>
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-auto rounded-lg shadow-md" 
                />
              </div>
            ))}
          </div>
        )}
        
        <Card className="bg-gray-light mb-8">
          <CardContent className="p-6">
            <h5 className="font-semibold mb-3">Design Decision Highlights</h5>
            <ul className="list-disc list-inside space-y-2">
              {design.decisions.map((decision, index) => (
                <li key={index}>
                  <span className="font-medium">{decision.title}:</span> {decision.description}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      {/* Final Designs */}
      {design.finalDesigns && (
        <div className="mb-16">
          <h4 className="text-xl font-semibold mb-6">Final Designs</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {design.finalDesigns.map((finalDesign, index) => (
              <div key={index}>
                <h5 className="font-medium mb-3">{finalDesign.title}</h5>
                <img 
                  src={finalDesign.src} 
                  alt={finalDesign.title} 
                  className="w-full h-auto rounded-lg shadow-md" 
                />
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Results */}
      <div className="mb-16">
        <h4 className="text-xl font-semibold mb-6">Results & Impact</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {outcomes.map((outcome, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="text-3xl font-bold text-primary mb-2">{outcome.value}</p>
                <p className="text-gray-dark">{outcome.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Tools Used */}
      <div>
        <h4 className="text-xl font-semibold mb-4">Tools & Methods</h4>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool, index) => (
            <span key={index} className="bg-gray-light px-3 py-1 rounded-full text-sm">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
