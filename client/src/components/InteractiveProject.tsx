import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Project, Screen } from "@/data/newProjects";
import { ChevronLeft, ChevronRight, Smartphone, Monitor } from "lucide-react";

interface InteractiveProjectProps {
  project: Project;
}

const InteractiveProject: React.FC<InteractiveProjectProps> = ({ project }) => {
  const [activeWebScreen, setActiveWebScreen] = useState<string>(project.interactivePrototype.defaultScreen);
  const [activeMobileScreen, setActiveMobileScreen] = useState<string>(
    project.interactivePrototype.mobileScreens[0]?.id || "m-dashboard"
  );
  const [viewMode, setViewMode] = useState<"web" | "mobile">("web");

  const findScreenById = (id: string, isWeb: boolean): Screen | undefined => {
    return isWeb
      ? project.interactivePrototype.webScreens.find((screen) => screen.id === id)
      : project.interactivePrototype.mobileScreens.find((screen) => screen.id === id);
  };

  const currentWebScreen = findScreenById(activeWebScreen, true);
  const currentMobileScreen = findScreenById(activeMobileScreen, false);

  const handleScreenChange = (screenId: string, isWeb: boolean) => {
    if (isWeb) {
      setActiveWebScreen(screenId);
    } else {
      setActiveMobileScreen(screenId);
    }
  };

  const renderNavButtons = (screen: Screen | undefined, isWeb: boolean) => {
    if (!screen || !screen.linkTo || screen.linkTo.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {screen.linkTo.map((linkId) => {
          const linkedScreen = findScreenById(linkId, isWeb);
          if (!linkedScreen) return null;

          return (
            <Button
              key={linkId}
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              onClick={() => handleScreenChange(linkId, isWeb)}
            >
              <span>{linkedScreen.title}</span>
              <ChevronRight className="h-3 w-3" />
            </Button>
          );
        })}
      </div>
    );
  };

  const isActiveScreen = (screenId: string, isWeb: boolean) => {
    return isWeb ? activeWebScreen === screenId : activeMobileScreen === screenId;
  };

  const renderScreenSelectionBar = (isWeb: boolean) => {
    const screens = isWeb 
      ? project.interactivePrototype.webScreens 
      : project.interactivePrototype.mobileScreens;

    return (
      <div className="flex overflow-x-auto pb-2 mb-4 mt-2 scrollbar-thin">
        <div className="flex space-x-2">
          {screens.map((screen) => (
            <Button
              key={screen.id}
              variant={isActiveScreen(screen.id, isWeb) ? "default" : "ghost"}
              size="sm"
              onClick={() => handleScreenChange(screen.id, isWeb)}
              className="whitespace-nowrap"
            >
              {screen.title}
            </Button>
          ))}
        </div>
      </div>
    );
  };

  const getNavButtonLabel = (screenId: string, isWeb: boolean) => {
    const screen = findScreenById(screenId, isWeb);
    return screen ? screen.title : screenId;
  };

  const renderMobileDevice = () => {
    if (!currentMobileScreen) return null;
    
    return (
      <div className="flex flex-col items-center">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
          <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
            <img
              src={currentMobileScreen.image}
              alt={currentMobileScreen.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="mt-6 text-center max-w-md">
          <h3 className="font-semibold text-lg mb-2">{currentMobileScreen.title}</h3>
          <p className="text-gray-600 text-sm">{currentMobileScreen.description}</p>
        </div>
        {renderNavButtons(currentMobileScreen, false)}
      </div>
    );
  };

  const renderWebInterface = () => {
    if (!currentWebScreen) return null;
    
    return (
      <div className="flex flex-col items-center">
        <div className="border border-gray-200 rounded-md shadow-md p-2 bg-gray-50 max-w-4xl mx-auto">
          <div className="flex items-center justify-between bg-gray-100 px-3 py-1.5 rounded-t-sm mb-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="h-5 w-1/2 bg-white rounded-sm flex items-center justify-center text-xs text-gray-400 truncate">
              {currentWebScreen.title}
            </div>
            <div className="w-24"></div>
          </div>
          <div className="rounded-b-sm overflow-hidden max-h-[600px]">
            <img
              src={currentWebScreen.image}
              alt={currentWebScreen.title}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="mt-6 text-center max-w-2xl">
          <h3 className="font-semibold text-lg mb-2">{currentWebScreen.title}</h3>
          <p className="text-gray-600 text-sm">{currentWebScreen.description}</p>
        </div>
        {renderNavButtons(currentWebScreen, true)}
      </div>
    );
  };

  return (
    <div className="mt-8">
      <div className="mb-6">
        <Tabs defaultValue="web" onValueChange={(v) => setViewMode(v as "web" | "mobile")}>
          <TabsList className="grid w-[300px] grid-cols-2 mx-auto">
            <TabsTrigger value="web" className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              <span>Web Version</span>
            </TabsTrigger>
            <TabsTrigger value="mobile" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <span>Mobile Version</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="web" className="mt-6">
            {renderScreenSelectionBar(true)}
            {renderWebInterface()}
          </TabsContent>
          
          <TabsContent value="mobile" className="mt-6">
            {renderScreenSelectionBar(false)}
            {renderMobileDevice()}
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="mb-8 bg-gray-50 p-4 rounded-md">
        <h4 className="font-semibold mb-2">Interactive Prototype Instructions</h4>
        <p className="text-sm text-gray-600 mb-2">
          This prototype allows you to navigate through the different screens of the application:
        </p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Click the buttons below each screen to navigate to related sections</li>
          <li>Toggle between web and mobile versions using the tabs above</li>
          <li>Select specific screens using the navigation bar</li>
        </ul>
      </div>
    </div>
  );
};

export default InteractiveProject;