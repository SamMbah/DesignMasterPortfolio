import { useState } from "react";
import { Project as NewProject, projectsData as newProjectsData } from "@/data/newProjects";
import { Project as OldProject, projectsData as oldProjectsData } from "@/data/projects";

type CombinedProject = OldProject | NewProject;

export const useProjects = () => {
  // Give priority to new project data with interactive prototypes
  const [projects] = useState<CombinedProject[]>(newProjectsData);

  return {
    projects
  };
};
