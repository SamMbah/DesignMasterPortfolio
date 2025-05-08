import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useProjects } from "@/hooks/use-projects";

const Projects = () => {
  const { projects } = useProjects();
  const [activeProject, setActiveProject] = useState(projects[0]?.id || "");

  // Set initial active project when projects load
  useEffect(() => {
    if (projects.length > 0 && !activeProject) {
      setActiveProject(projects[0].id);
    }
  }, [projects, activeProject]);

  const handleProjectChange = (projectId: string) => {
    setActiveProject(projectId);
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Selected Projects
        </motion.h2>
        
        {/* Project Navigation */}
        <div className="flex overflow-x-auto md:justify-center mb-12 pb-2 project-navigation">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => handleProjectChange(project.id)}
              className={`project-nav-link ${activeProject === project.id ? 'active' : ''} mx-2 px-4 py-2 rounded-full font-medium transition-colors`}
            >
              {project.title.split(" - ")[0]}
            </button>
          ))}
        </div>
        
        {/* Project Content */}
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={activeProject === project.id ? "block" : "hidden"}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
