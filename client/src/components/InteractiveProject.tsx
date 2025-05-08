import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Monitor } from "lucide-react";
import HealthTrack from "./project-screens/HealthTrack";
import ZenPay from "./project-screens/ZenPay";
import { Project } from "../data/newProjects";

interface InteractiveProjectProps {
  project: Project;
}

export default function InteractiveProject({ project }: InteractiveProjectProps) {
  return (
    <div className="mt-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{project.title} - Interactive Prototype</h2>
        <p className="text-gray-600 mb-4">
          Click through this interactive prototype to experience the user journey. Both mobile and web 
          versions are available to showcase responsive design thinking.
        </p>
        
        {project.id === "healthtrack" && <HealthTrack />}
        {project.id === "zenpay" && <ZenPay />}
        {/* Add more project components here as they are developed */}
      </div>
    </div>
  );
}