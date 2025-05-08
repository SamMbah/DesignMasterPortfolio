import { useState } from "react";
import { Project as NewProject, projectsData as newProjectsData } from "@/data/newProjects";
import { Project as OldProject, projectsData as oldProjectsData } from "@/data/projects";

type CombinedProject = OldProject | NewProject;

export const useProjects = () => {
  // Use the new project data that includes interactive prototypes
  const [projects] = useState<CombinedProject[]>(newProjectsData);

  return {
    projects
  };
};
