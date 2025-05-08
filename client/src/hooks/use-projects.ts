import { useState } from "react";
import { projectsData, Project } from "@/data/projects";

export const useProjects = () => {
  const [projects] = useState<Project[]>(projectsData);

  return {
    projects
  };
};
