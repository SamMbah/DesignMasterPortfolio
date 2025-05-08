import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Monitor } from "lucide-react";
import HealthTrack from "./project-screens/HealthTrack";
import ZenPay from "./project-screens/ZenPay";
import EcoShop from "./project-screens/EcoShop";
import LearnQuest from "./project-screens/LearnQuest";
import { Project } from "../data/newProjects";

interface InteractiveProjectProps {
  project: Project;
}

export default function InteractiveProject({ project }: InteractiveProjectProps) {
  // Currently implemented projects
  const implementedProjects = ["healthtrack", "zenpay", "ecoshop", "learnquest"];
  
  // Check if this project has been implemented yet
  const isImplemented = implementedProjects.includes(project.id);

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
        {project.id === "ecoshop" && <EcoShop />}
        {project.id === "learnquest" && <LearnQuest />}
        
        {/* Display a placeholder for projects not yet implemented with interactive components */}
        {!isImplemented && (
          <div>
            <Tabs defaultValue="mobile">
              <TabsList className="grid w-[300px] grid-cols-2 mx-auto mb-8">
                <TabsTrigger value="mobile" className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  <span>Mobile App</span>
                </TabsTrigger>
                <TabsTrigger value="web" className="flex items-center gap-2">
                  <Monitor className="h-4 w-4" />
                  <span>Web Portal</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="mobile" className="mt-6">
                <div className="flex flex-col items-center">
                  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                    <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white flex items-center justify-center">
                      <div className="text-center p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title.split(" - ")[0]} Mobile</h3>
                        <p className="text-gray-600 mb-4">Interactive mobile prototype for {project.title.split(" - ")[0]}</p>
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                          <span className="text-blue-600 text-3xl font-bold">UI</span>
                        </div>
                        <p className="text-sm text-gray-500">This project demonstrates {project.focus}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="web" className="mt-6">
                <div className="flex flex-col items-center">
                  <div className="border border-gray-200 rounded-md shadow-md p-2 bg-gray-50 max-w-4xl mx-auto">
                    <div className="flex items-center justify-between bg-gray-100 px-3 py-1.5 rounded-t-sm mb-2">
                      <div className="flex space-x-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="h-5 w-1/2 bg-white rounded-sm flex items-center justify-center text-xs text-gray-400 truncate">
                        {project.title.split(" - ")[0]} - Web Portal
                      </div>
                      <div className="w-24"></div>
                    </div>
                    
                    <div className="rounded-b-sm overflow-hidden bg-white min-h-[500px] flex items-center justify-center">
                      <div className="text-center p-8 max-w-md">
                        <h3 className="text-2xl font-bold mb-4">{project.title.split(" - ")[0]} Web Portal</h3>
                        <p className="text-gray-600 mb-6">This interactive prototype demonstrates the web version of {project.title.split(" - ")[0]}</p>
                        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                          <span className="text-blue-600 text-4xl font-bold">UI</span>
                        </div>
                        <p className="text-gray-500">{project.challenge}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
}