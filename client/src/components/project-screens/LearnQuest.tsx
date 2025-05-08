import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Monitor } from "lucide-react";

// Define screen types
type ScreenType = "home" | "subjects" | "activity" | "reward" | "parent";

export default function LearnQuest() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>("home");
  const [activeDevice, setActiveDevice] = useState<"mobile" | "web">("mobile");

  // Handle screen navigation
  const navigateTo = (screen: ScreenType) => {
    setActiveScreen(screen);
  };

  // Render mobile UI
  const renderMobileUI = () => {
    return (
      <div className="flex flex-col items-center">
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
          <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
            {activeScreen === "home" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 bg-purple-600 text-white">
                    <div className="flex justify-between items-center">
                      <h1 className="text-xl font-bold">LearnQuest</h1>
                      <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
                        <div className="w-full h-full bg-purple-300 flex items-center justify-center">
                          <span className="text-purple-800 font-bold">S</span>
                        </div>
                      </div>
                    </div>
                  </header>
                  
                  <div className="p-4">
                    <div className="mb-6">
                      <h2 className="text-lg font-bold mb-1">Hello, Samuel!</h2>
                      <p className="text-sm text-gray-600">Ready to continue your learning adventure?</p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-purple-900">Your Progress</h3>
                        <span className="text-purple-700 text-sm font-medium">Level 5</span>
                      </div>
                      <div className="w-full h-3 bg-purple-200 rounded-full mb-1">
                        <div className="h-full bg-purple-600 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-purple-700">
                        <span>750 XP earned</span>
                        <span>1150 XP to Level 6</span>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold mb-3">Continue Learning</h3>
                    <div className="space-y-3 mb-6">
                      <div 
                        className="bg-white border border-purple-200 rounded-lg p-3 flex cursor-pointer"
                        onClick={() => navigateTo("activity")}
                      >
                        <div className="w-12 h-12 bg-purple-100 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center">
                          <span className="text-2xl text-purple-600">🔢</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">Multiplication Quiz</h4>
                          <div className="text-xs text-gray-500 mb-1">Math Adventure • Level 3</div>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full">
                            <div className="h-full bg-purple-600 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-purple-200 rounded-lg p-3 flex">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center">
                          <span className="text-2xl text-blue-600">🌎</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">World Capitals</h4>
                          <div className="text-xs text-gray-500 mb-1">Geography Explorer • Level 2</div>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full">
                            <div className="h-full bg-blue-600 rounded-full" style={{ width: '40%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium mb-6"
                      onClick={() => navigateTo("subjects")}
                    >
                      Discover New Subjects
                    </button>
                    
                    <h3 className="font-semibold mb-3">Daily Achievements</h3>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 text-center">
                        <div className="w-8 h-8 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-1">
                          <span className="text-yellow-700 text-lg">⭐</span>
                        </div>
                        <span className="text-xs font-medium">3-Day Streak</span>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-2 text-center">
                        <div className="w-8 h-8 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-1">
                          <span className="text-green-700 text-lg">🏆</span>
                        </div>
                        <span className="text-xs font-medium">Math Master</span>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-center">
                        <div className="w-8 h-8 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-1">
                          <span className="text-blue-700 text-lg">📚</span>
                        </div>
                        <span className="text-xs font-medium">Bookworm</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto border-t flex justify-around p-3">
                    <button className="p-2 text-purple-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </button>
                    <button
                      className="p-2 text-gray-400"
                      onClick={() => navigateTo("subjects")}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </button>
                    <button
                      className="p-2 text-gray-400"
                      onClick={() => navigateTo("activity")}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                    <button
                      className="p-2 text-gray-400"
                      onClick={() => navigateTo("parent")}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "subjects" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 flex items-center gap-3 bg-purple-600 text-white">
                    <button onClick={() => navigateTo("home")}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h1 className="text-lg font-medium">Explore Subjects</h1>
                  </header>
                  
                  <div className="p-4 overflow-y-auto flex-1">
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="Search subjects, topics, skills..."
                        className="w-full border rounded-lg py-2 px-3 text-sm"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <h2 className="font-semibold mb-3">Recommended for You</h2>
                      <div className="flex gap-3 overflow-x-auto pb-2">
                        <div 
                          className="flex-shrink-0 w-32 border border-purple-200 rounded-lg overflow-hidden bg-white cursor-pointer"
                          onClick={() => navigateTo("activity")}
                        >
                          <div className="h-24 bg-purple-100 flex items-center justify-center">
                            <span className="text-3xl">🧮</span>
                          </div>
                          <div className="p-2">
                            <h3 className="font-medium text-xs text-center">Mathematics</h3>
                          </div>
                        </div>
                        <div className="flex-shrink-0 w-32 border border-blue-200 rounded-lg overflow-hidden bg-white">
                          <div className="h-24 bg-blue-100 flex items-center justify-center">
                            <span className="text-3xl">📖</span>
                          </div>
                          <div className="p-2">
                            <h3 className="font-medium text-xs text-center">Reading</h3>
                          </div>
                        </div>
                        <div className="flex-shrink-0 w-32 border border-green-200 rounded-lg overflow-hidden bg-white">
                          <div className="h-24 bg-green-100 flex items-center justify-center">
                            <span className="text-3xl">🔬</span>
                          </div>
                          <div className="p-2">
                            <h3 className="font-medium text-xs text-center">Science</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div 
                        className="border border-purple-200 rounded-lg p-3 bg-white cursor-pointer"
                        onClick={() => navigateTo("activity")}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                            <span className="text-xl">🔢</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Multiplication & Division</h3>
                            <p className="text-xs text-gray-500">Mathematics • Ages 8-10</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-1">
                              <span className="text-yellow-700 text-xs">⭐</span>
                            </div>
                            <span className="text-xs text-gray-600">4 Activities</span>
                          </div>
                          <button className="text-xs text-purple-600 font-medium">
                            Start Learning →
                          </button>
                        </div>
                      </div>
                      
                      <div className="border border-blue-200 rounded-lg p-3 bg-white">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-xl">🌎</span>
                          </div>
                          <div>
                            <h3 className="font-medium">World Geography</h3>
                            <p className="text-xs text-gray-500">Social Studies • Ages 8-12</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-1">
                              <span className="text-yellow-700 text-xs">⭐</span>
                            </div>
                            <span className="text-xs text-gray-600">6 Activities</span>
                          </div>
                          <button className="text-xs text-blue-600 font-medium">
                            Start Learning →
                          </button>
                        </div>
                      </div>
                      
                      <div className="border border-green-200 rounded-lg p-3 bg-white">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <span className="text-xl">🌱</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Plant Life Cycles</h3>
                            <p className="text-xs text-gray-500">Science • Ages 7-9</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-1">
                              <span className="text-yellow-700 text-xs">⭐</span>
                            </div>
                            <span className="text-xs text-gray-600">5 Activities</span>
                          </div>
                          <button className="text-xs text-green-600 font-medium">
                            Start Learning →
                          </button>
                        </div>
                      </div>
                      
                      <div className="border border-red-200 rounded-lg p-3 bg-white">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                            <span className="text-xl">📝</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Creative Writing</h3>
                            <p className="text-xs text-gray-500">Language Arts • Ages 9-12</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-1">
                              <span className="text-yellow-700 text-xs">⭐</span>
                            </div>
                            <span className="text-xs text-gray-600">3 Activities</span>
                          </div>
                          <button className="text-xs text-red-600 font-medium">
                            Start Learning →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "activity" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 flex items-center gap-3 bg-purple-600 text-white">
                    <button onClick={() => navigateTo("subjects")}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h1 className="text-lg font-medium">Multiplication Challenge</h1>
                  </header>
                  
                  <div className="p-4 flex-1">
                    <div className="mb-4">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                              <span className="text-purple-700 text-lg">3/5</span>
                            </div>
                            <span className="font-medium text-purple-800">Question 3</span>
                          </div>
                          <div className="bg-purple-200 px-2 py-1 rounded text-xs text-purple-800">
                            <span>120 seconds left</span>
                          </div>
                        </div>
                        <div className="w-full h-2 bg-purple-200 rounded-full">
                          <div className="h-full bg-purple-600 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="bg-white border border-purple-200 rounded-lg p-6 flex flex-col items-center">
                        <div className="text-4xl font-bold mb-6 text-purple-800">7 × 8 = ?</div>
                        <div className="grid grid-cols-2 gap-3 w-full">
                          <button className="bg-purple-100 text-purple-800 rounded-lg py-3 font-bold hover:bg-purple-200">
                            54
                          </button>
                          <button className="bg-purple-100 text-purple-800 rounded-lg py-3 font-bold hover:bg-purple-200">
                            56
                          </button>
                          <button 
                            className="bg-purple-100 text-purple-800 rounded-lg py-3 font-bold hover:bg-purple-200"
                            onClick={() => navigateTo("reward")}
                          >
                            56
                          </button>
                          <button className="bg-purple-100 text-purple-800 rounded-lg py-3 font-bold hover:bg-purple-200">
                            64
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          <span className="text-yellow-700 text-lg">💡</span>
                        </div>
                        <div>
                          <h3 className="font-medium text-yellow-800 mb-1">Hint</h3>
                          <p className="text-sm text-yellow-700">
                            Try thinking of 7 × 8 as 7 groups of 8 or 8 groups of 7. You can also use what you know about 5 × 8 and add two more groups of 8.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border-t">
                    <div className="flex gap-2">
                      <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-medium">
                        Skip
                      </button>
                      <button 
                        className="flex-1 bg-purple-600 text-white py-2 rounded-lg font-medium"
                        onClick={() => navigateTo("reward")}
                      >
                        Check Answer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "reward" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 bg-purple-600 text-white">
                    <h1 className="text-xl font-bold text-center">Great Job!</h1>
                  </header>
                  
                  <div className="p-4 flex-1 flex flex-col items-center justify-center">
                    <div className="mb-6">
                      <div className="w-24 h-24 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-yellow-700 text-5xl">🏆</span>
                      </div>
                      <h2 className="text-xl font-bold text-center mb-1">You earned a badge!</h2>
                      <p className="text-sm text-gray-600 text-center mb-2">
                        Math Whiz Level 2
                      </p>
                      <div className="bg-purple-50 px-3 py-1 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-purple-700 text-sm">+50 XP</span>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 w-full mb-6">
                      <h3 className="font-medium text-green-800 mb-2 flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Correct Answer: 56
                      </h3>
                      <p className="text-sm text-green-700 mb-2">
                        7 × 8 = 56
                      </p>
                      <div className="text-xs text-green-700">
                        Multiplication trick: 7 × 8 is the same as 7 × 4 × 2, which is 28 × 2 = 56
                      </div>
                    </div>
                    
                    <div className="w-full space-y-3">
                      <button 
                        className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium"
                        onClick={() => navigateTo("activity")}
                      >
                        Continue Learning
                      </button>
                      <button 
                        className="w-full bg-white border border-purple-600 text-purple-600 py-2 rounded-lg font-medium"
                        onClick={() => navigateTo("home")}
                      >
                        Back to Home
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "parent" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 flex items-center gap-3 bg-blue-600 text-white">
                    <button onClick={() => navigateTo("home")}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h1 className="text-lg font-medium">Parent Dashboard</h1>
                  </header>
                  
                  <div className="p-4 overflow-y-auto flex-1">
                    <div className="mb-6">
                      <h2 className="font-semibold mb-3">Samuel's Progress</h2>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <span className="text-sm text-blue-700">Current Level</span>
                            <div className="font-bold text-lg">Level 5</div>
                          </div>
                          <div>
                            <span className="text-sm text-blue-700">Total Time</span>
                            <div className="font-bold text-lg">12h 45m</div>
                          </div>
                          <div>
                            <span className="text-sm text-blue-700">Badges</span>
                            <div className="font-bold text-lg">15</div>
                          </div>
                        </div>
                        <h3 className="text-sm font-medium mb-1">Learning Progress</h3>
                        <div className="w-full h-2 bg-blue-200 rounded-full mb-3">
                          <div className="h-full bg-blue-600 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-white p-2 rounded border border-blue-100 text-center">
                            <div className="text-sm font-medium text-blue-800">Mathematics</div>
                            <div className="text-xs text-blue-600">Advanced</div>
                          </div>
                          <div className="bg-white p-2 rounded border border-blue-100 text-center">
                            <div className="text-sm font-medium text-blue-800">Reading</div>
                            <div className="text-xs text-blue-600">Intermediate</div>
                          </div>
                          <div className="bg-white p-2 rounded border border-blue-100 text-center">
                            <div className="text-sm font-medium text-blue-800">Science</div>
                            <div className="text-xs text-blue-600">Beginner</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h2 className="font-semibold mb-3">Recent Activities</h2>
                      <div className="space-y-3">
                        <div className="bg-white border rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-lg">🔢</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between mb-1">
                                <h3 className="font-medium text-sm">Multiplication Challenge</h3>
                                <span className="text-xs text-gray-500">Today, 10:15 AM</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                  <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-1">
                                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  </div>
                                  <span className="text-xs text-gray-600">8/10 correct</span>
                                </div>
                                <div className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded">
                                  +50 XP
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white border rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-lg">🌎</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between mb-1">
                                <h3 className="font-medium text-sm">World Capitals Quiz</h3>
                                <span className="text-xs text-gray-500">Yesterday, 4:30 PM</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                  <div className="w-4 h-4 bg-yellow-100 rounded-full flex items-center justify-center mr-1">
                                    <svg className="w-3 h-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                  </div>
                                  <span className="text-xs text-gray-600">5/10 correct</span>
                                </div>
                                <div className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded">
                                  +30 XP
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h2 className="font-semibold mb-3">Learning Recommendations</h2>
                      <div className="bg-white border rounded-lg p-3">
                        <p className="text-sm text-gray-600 mb-3">
                          Based on Samuel's progress, we recommend focusing on:
                        </p>
                        <ul className="text-sm space-y-2">
                          <li className="flex items-center">
                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                              <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span>Continue with multiplication practice</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                              <svg className="w-3 h-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <span>Spend more time on geography quizzes</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                              <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <span>Introduce science activities on plant life</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <button 
                      className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium mb-3"
                      onClick={() => navigateTo("home")}
                    >
                      Return to Child View
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 text-center">
          <h3 className="font-semibold text-lg mb-2">LearnQuest Mobile App</h3>
          <p className="text-gray-600 text-sm">Click through the different screens to experience the user flow</p>
        </div>
      </div>
    );
  };

  // Render web UI
  const renderWebUI = () => {
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
              LearnQuest - Educational Platform
            </div>
            <div className="w-24"></div>
          </div>
          
          <div className="rounded-b-sm overflow-hidden bg-white">
            {activeScreen === "home" && (
              <div className="min-h-[500px]">
                <header className="bg-purple-600 p-5 text-white">
                  <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                      <h1 className="text-2xl font-bold">LearnQuest</h1>
                      <div className="flex items-center space-x-6">
                        <button className="text-white">Home</button>
                        <button 
                          className="text-white"
                          onClick={() => navigateTo("subjects")}
                        >
                          Subjects
                        </button>
                        <button className="text-white">Library</button>
                        <button 
                          className="text-white"
                          onClick={() => navigateTo("parent")}
                        >
                          Parent Dashboard
                        </button>
                        <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
                          <div className="w-full h-full bg-purple-300 flex items-center justify-center">
                            <span className="text-purple-800 font-bold">S</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold mb-1">Hello, Samuel!</h2>
                        <p className="text-purple-200">Let's continue your learning adventure.</p>
                      </div>
                      <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-lg">5</span>
                          </div>
                          <div>
                            <div className="text-sm opacity-80">Current Level</div>
                            <div className="font-bold">Level 5 Explorer</div>
                          </div>
                        </div>
                        <div className="w-48 h-2 bg-purple-800 bg-opacity-40 rounded-full">
                          <div className="h-full bg-white rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                
                <div className="max-w-6xl mx-auto py-8 px-4">
                  <div className="flex gap-8 mb-10">
                    <div className="w-2/3">
                      <div className="bg-purple-50 border border-purple-100 rounded-lg p-6 mb-8">
                        <h2 className="text-xl font-bold mb-6">Continue Learning</h2>
                        <div className="grid grid-cols-2 gap-6">
                          <div 
                            className="bg-white border border-purple-200 rounded-lg p-4 flex cursor-pointer"
                            onClick={() => navigateTo("activity")}
                          >
                            <div className="w-16 h-16 bg-purple-100 rounded-lg mr-4 flex-shrink-0 flex items-center justify-center">
                              <span className="text-4xl text-purple-600">🔢</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold mb-1">Multiplication Quiz</h3>
                              <div className="text-sm text-gray-500 mb-2">Math Adventure • Level 3</div>
                              <div className="w-full h-2 bg-gray-100 rounded-full mb-1">
                                <div className="h-full bg-purple-600 rounded-full" style={{ width: '70%' }}></div>
                              </div>
                              <div className="text-xs text-gray-500">70% complete</div>
                            </div>
                          </div>
                          
                          <div className="bg-white border border-blue-200 rounded-lg p-4 flex">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg mr-4 flex-shrink-0 flex items-center justify-center">
                              <span className="text-4xl text-blue-600">🌎</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold mb-1">World Capitals</h3>
                              <div className="text-sm text-gray-500 mb-2">Geography Explorer • Level 2</div>
                              <div className="w-full h-2 bg-gray-100 rounded-full mb-1">
                                <div className="h-full bg-blue-600 rounded-full" style={{ width: '40%' }}></div>
                              </div>
                              <div className="text-xs text-gray-500">40% complete</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h2 className="text-xl font-bold">Recommended for You</h2>
                          <button 
                            className="text-purple-600 font-medium"
                            onClick={() => navigateTo("subjects")}
                          >
                            View All Subjects
                          </button>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-6">
                          <div className="bg-white border border-green-200 rounded-lg overflow-hidden">
                            <div className="h-36 bg-green-100 flex items-center justify-center">
                              <span className="text-6xl">🔬</span>
                            </div>
                            <div className="p-4">
                              <h3 className="font-bold mb-1">Science Lab</h3>
                              <p className="text-sm text-gray-600 mb-3">Explore experiments and learn about the natural world</p>
                              <div className="flex justify-between items-center">
                                <div className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                                  Ages 8-12
                                </div>
                                <button className="text-green-600 text-sm font-medium">
                                  Start Learning →
                                </button>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white border border-red-200 rounded-lg overflow-hidden">
                            <div className="h-36 bg-red-100 flex items-center justify-center">
                              <span className="text-6xl">📝</span>
                            </div>
                            <div className="p-4">
                              <h3 className="font-bold mb-1">Creative Writing</h3>
                              <p className="text-sm text-gray-600 mb-3">Learn storytelling techniques and express your ideas</p>
                              <div className="flex justify-between items-center">
                                <div className="text-xs px-2 py-0.5 bg-red-100 text-red-700 rounded-full">
                                  Ages 9-12
                                </div>
                                <button className="text-red-600 text-sm font-medium">
                                  Start Learning →
                                </button>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white border border-yellow-200 rounded-lg overflow-hidden">
                            <div className="h-36 bg-yellow-100 flex items-center justify-center">
                              <span className="text-6xl">🧩</span>
                            </div>
                            <div className="p-4">
                              <h3 className="font-bold mb-1">Logic Puzzles</h3>
                              <p className="text-sm text-gray-600 mb-3">Solve challenges that develop critical thinking skills</p>
                              <div className="flex justify-between items-center">
                                <div className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full">
                                  Ages 7-10
                                </div>
                                <button className="text-yellow-600 text-sm font-medium">
                                  Start Learning →
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-1/3">
                      <div className="bg-white border rounded-lg p-6 mb-6">
                        <h2 className="font-bold mb-4">Your Learning Stats</h2>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="bg-purple-50 p-3 rounded-lg text-center">
                            <div className="text-2xl font-bold text-purple-700 mb-1">750</div>
                            <p className="text-xs text-purple-600">XP Earned</p>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg text-center">
                            <div className="text-2xl font-bold text-blue-700 mb-1">3</div>
                            <p className="text-xs text-blue-600">Day Streak</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg text-center">
                            <div className="text-2xl font-bold text-green-700 mb-1">15</div>
                            <p className="text-xs text-green-600">Badges Earned</p>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded-lg text-center">
                            <div className="text-2xl font-bold text-yellow-700 mb-1">87%</div>
                            <p className="text-xs text-yellow-600">Avg. Score</p>
                          </div>
                        </div>
                        <button 
                          className="w-full text-purple-600 text-sm font-medium flex items-center justify-center"
                          onClick={() => navigateTo("parent")}
                        >
                          View Full Progress Report
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="bg-white border rounded-lg p-6">
                        <h2 className="font-bold mb-4">Recent Achievements</h2>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-yellow-700 text-2xl">⭐</span>
                            </div>
                            <div>
                              <h3 className="font-medium mb-1">3-Day Streak</h3>
                              <p className="text-sm text-gray-600">
                                You've been learning for 3 days in a row!
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-green-700 text-2xl">🏆</span>
                            </div>
                            <div>
                              <h3 className="font-medium mb-1">Math Master</h3>
                              <p className="text-sm text-gray-600">
                                Completed 10 math challenges with high scores
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-blue-700 text-2xl">📚</span>
                            </div>
                            <div>
                              <h3 className="font-medium mb-1">Bookworm</h3>
                              <p className="text-sm text-gray-600">
                                Read 5 stories and completed comprehension activities
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeScreen === "subjects" && (
              <div className="min-h-[500px]">
                <header className="bg-purple-600 p-5 text-white">
                  <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-center">
                      <h1 
                        className="text-2xl font-bold cursor-pointer"
                        onClick={() => navigateTo("home")}
                      >
                        LearnQuest
                      </h1>
                      <div className="flex items-center space-x-6">
                        <button 
                          className="text-white opacity-80"
                          onClick={() => navigateTo("home")}
                        >
                          Home
                        </button>
                        <button className="text-white">Subjects</button>
                        <button className="text-white opacity-80">Library</button>
                        <button 
                          className="text-white opacity-80"
                          onClick={() => navigateTo("parent")}
                        >
                          Parent Dashboard
                        </button>
                        <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
                          <div className="w-full h-full bg-purple-300 flex items-center justify-center">
                            <span className="text-purple-800 font-bold">S</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                
                <div className="max-w-6xl mx-auto py-8 px-4">
                  <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">Explore Learning Subjects</h1>
                    <div className="relative w-64">
                      <input
                        type="text"
                        placeholder="Search subjects, topics..."
                        className="w-full border rounded-lg py-2 px-3 pl-10 text-sm"
                      />
                      <svg className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-6 mb-12">
                    <div 
                      className="bg-white border border-purple-200 rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => navigateTo("activity")}
                    >
                      <div className="h-40 bg-purple-100 flex items-center justify-center">
                        <span className="text-6xl">🧮</span>
                      </div>
                      <div className="p-4">
                        <h2 className="font-bold text-lg mb-1">Mathematics</h2>
                        <p className="text-sm text-gray-600 mb-3">
                          Numbers, operations, geometry, and problem-solving skills
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-1">
                              <span className="text-yellow-700 text-xs">⭐</span>
                            </div>
                            <span className="text-xs text-gray-600">12 Activities</span>
                          </div>
                          <button className="text-purple-600 text-sm font-medium">
                            Explore →
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white border border-blue-200 rounded-lg overflow-hidden">
                      <div className="h-40 bg-blue-100 flex items-center justify-center">
                        <span className="text-6xl">📖</span>
                      </div>
                      <div className="p-4">
                        <h2 className="font-bold text-lg mb-1">Reading</h2>
                        <p className="text-sm text-gray-600 mb-3">
                          Fiction and non-fiction reading with comprehension exercises
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-1">
                              <span className="text-yellow-700 text-xs">⭐</span>
                            </div>
                            <span className="text-xs text-gray-600">18 Activities</span>
                          </div>
                          <button className="text-blue-600 text-sm font-medium">
                            Explore →
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white border border-green-200 rounded-lg overflow-hidden">
                      <div className="h-40 bg-green-100 flex items-center justify-center">
                        <span className="text-6xl">🔬</span>
                      </div>
                      <div className="p-4">
                        <h2 className="font-bold text-lg mb-1">Science</h2>
                        <p className="text-sm text-gray-600 mb-3">
                          Life science, earth science, and simple experiments
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-1">
                              <span className="text-yellow-700 text-xs">⭐</span>
                            </div>
                            <span className="text-xs text-gray-600">9 Activities</span>
                          </div>
                          <button className="text-green-600 text-sm font-medium">
                            Explore →
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white border border-orange-200 rounded-lg overflow-hidden">
                      <div className="h-40 bg-orange-100 flex items-center justify-center">
                        <span className="text-6xl">🌎</span>
                      </div>
                      <div className="p-4">
                        <h2 className="font-bold text-lg mb-1">Social Studies</h2>
                        <p className="text-sm text-gray-600 mb-3">
                          Geography, history, and cultural understanding
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-1">
                              <span className="text-yellow-700 text-xs">⭐</span>
                            </div>
                            <span className="text-xs text-gray-600">14 Activities</span>
                          </div>
                          <button className="text-orange-600 text-sm font-medium">
                            Explore →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-6">Recommended Topics for You</h2>
                    <div className="grid grid-cols-2 gap-6">
                      <div 
                        className="bg-white border border-purple-200 rounded-lg p-4 flex items-start cursor-pointer"
                        onClick={() => navigateTo("activity")}
                      >
                        <div className="w-16 h-16 bg-purple-100 rounded-lg mr-4 flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🔢</span>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Multiplication & Division</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Master multiplication tables and learn division strategies through fun games and challenges.
                          </p>
                          <div className="flex items-center">
                            <div className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full mr-2">
                              Mathematics
                            </div>
                            <div className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">
                              Ages 8-10
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-blue-200 rounded-lg p-4 flex items-start">
                        <div className="w-16 h-16 bg-blue-100 rounded-lg mr-4 flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🌎</span>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">World Geography</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Learn about countries, capitals, and landmarks with interactive maps and games.
                          </p>
                          <div className="flex items-center">
                            <div className="text-xs px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full mr-2">
                              Social Studies
                            </div>
                            <div className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">
                              Ages 8-12
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-green-200 rounded-lg p-4 flex items-start">
                        <div className="w-16 h-16 bg-green-100 rounded-lg mr-4 flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">🌱</span>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Plant Life Cycles</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Explore how plants grow, reproduce, and adapt to their environments.
                          </p>
                          <div className="flex items-center">
                            <div className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full mr-2">
                              Science
                            </div>
                            <div className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">
                              Ages 7-9
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-red-200 rounded-lg p-4 flex items-start">
                        <div className="w-16 h-16 bg-red-100 rounded-lg mr-4 flex items-center justify-center flex-shrink-0">
                          <span className="text-3xl">📝</span>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Creative Writing</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Develop storytelling skills and express ideas through fun writing prompts and exercises.
                          </p>
                          <div className="flex items-center">
                            <div className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full mr-2">
                              Reading
                            </div>
                            <div className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">
                              Ages 9-12
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeScreen === "activity" && (
              <div className="min-h-[500px]">
                <header className="bg-purple-600 p-5 text-white">
                  <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <button 
                          className="mr-3"
                          onClick={() => navigateTo("subjects")}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                          </svg>
                        </button>
                        <h1 className="text-2xl font-bold">Multiplication Challenge</h1>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center bg-white bg-opacity-10 px-3 py-1 rounded-full mr-4">
                          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-2">
                            <span className="text-white font-bold text-xs">3/5</span>
                          </div>
                          <span>Question 3 of 5</span>
                        </div>
                        <div className="bg-white bg-opacity-10 px-3 py-1 rounded-full">
                          <span>02:00 remaining</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                
                <div className="max-w-6xl mx-auto py-8 px-4">
                  <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
                    <div className="h-full bg-purple-600 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  
                  <div className="flex gap-8">
                    <div className="w-2/3">
                      <div className="bg-white border border-purple-200 rounded-lg p-8 text-center mb-6">
                        <h2 className="text-5xl font-bold mb-10 text-purple-800">7 × 8 = ?</h2>
                        <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                          <button className="bg-purple-100 text-purple-800 rounded-lg py-4 text-xl font-bold hover:bg-purple-200">
                            54
                          </button>
                          <button className="bg-purple-100 text-purple-800 rounded-lg py-4 text-xl font-bold hover:bg-purple-200">
                            56
                          </button>
                          <button 
                            className="bg-purple-100 text-purple-800 rounded-lg py-4 text-xl font-bold hover:bg-purple-200"
                            onClick={() => navigateTo("reward")}
                          >
                            56
                          </button>
                          <button className="bg-purple-100 text-purple-800 rounded-lg py-4 text-xl font-bold hover:bg-purple-200">
                            64
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex justify-between">
                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium">
                          Skip Question
                        </button>
                        <button 
                          className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium"
                          onClick={() => navigateTo("reward")}
                        >
                          Check Answer
                        </button>
                      </div>
                    </div>
                    
                    <div className="w-1/3">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-yellow-700 text-lg">💡</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-yellow-800 mb-2">Multiplication Hints</h3>
                            <div className="text-sm text-yellow-700 space-y-3">
                              <p>
                                Remember that multiplication is like adding a number to itself multiple times.
                              </p>
                              <p>
                                Try thinking of 7 × 8 as 7 groups of 8 or 8 groups of 7.
                              </p>
                              <p>
                                You can also use what you know about 5 × 8 and add two more groups of 8.
                              </p>
                              <p>
                                5 × 8 = 40<br />
                                2 × 8 = 16<br />
                                So 7 × 8 = 40 + 16 = ?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-5 mt-6">
                        <h3 className="font-bold mb-3">Your Progress</h3>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm">Question 1</span>
                              <div className="flex items-center">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm ml-1 text-green-600">Correct</span>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500">6 × 3 = 18</div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm">Question 2</span>
                              <div className="flex items-center">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm ml-1 text-green-600">Correct</span>
                              </div>
                            </div>
                            <div className="text-xs text-gray-500">4 × 9 = 36</div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium text-purple-700">Question 3</span>
                              <div className="flex items-center">
                                <span className="text-sm text-purple-700">Current</span>
                              </div>
                            </div>
                            <div className="text-xs text-purple-600">7 × 8 = ?</div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-gray-400">Question 4</span>
                              <div className="flex items-center">
                                <span className="text-sm text-gray-400">Upcoming</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-gray-400">Question 5</span>
                              <div className="flex items-center">
                                <span className="text-sm text-gray-400">Upcoming</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeScreen === "reward" && (
              <div className="min-h-[500px]">
                <header className="bg-purple-600 p-5 text-white">
                  <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl font-bold">Congratulations!</h1>
                  </div>
                </header>
                
                <div className="max-w-3xl mx-auto py-12 px-4 text-center">
                  <div className="mb-8">
                    <div className="w-32 h-32 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-yellow-700 text-7xl">🏆</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">You earned a new badge!</h2>
                    <p className="text-xl text-gray-600 mb-4">Math Whiz Level 2</p>
                    <div className="bg-purple-100 px-4 py-2 rounded-full inline-block">
                      <span className="text-purple-700 text-lg font-medium">+50 XP</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8 text-left">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Correct Answer: 56
                    </h3>
                    <div className="text-gray-700 space-y-3">
                      <p>
                        7 × 8 = 56
                      </p>
                      <p>
                        <span className="font-medium">Multiplication trick:</span> 7 × 8 is the same as 7 × 4 × 2, which is 28 × 2 = 56
                      </p>
                      <p>
                        <span className="font-medium">Another way to think about it:</span>
                      </p>
                      <p>
                        5 × 8 = 40<br />
                        2 × 8 = 16<br />
                        7 × 8 = 40 + 16 = 56
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 justify-center">
                    <button 
                      className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium"
                      onClick={() => navigateTo("activity")}
                    >
                      Continue Learning
                    </button>
                    <button 
                      className="bg-white border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-medium"
                      onClick={() => navigateTo("home")}
                    >
                      Back to Home
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeScreen === "parent" && (
              <div className="min-h-[500px]">
                <header className="bg-blue-600 p-5 text-white">
                  <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <button 
                          className="mr-3"
                          onClick={() => navigateTo("home")}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                          </svg>
                        </button>
                        <h1 className="text-2xl font-bold">Parent Dashboard</h1>
                      </div>
                      <div className="flex items-center space-x-6">
                        <button className="text-white">Overview</button>
                        <button className="text-white opacity-80">Progress Reports</button>
                        <button className="text-white opacity-80">Settings</button>
                        <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
                          <div className="w-full h-full bg-blue-300 flex items-center justify-center">
                            <span className="text-blue-800 font-bold">P</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                
                <div className="max-w-6xl mx-auto py-8 px-4">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-6">Samuel's Learning Profile</h2>
                    <div className="grid grid-cols-4 gap-6">
                      <div className="bg-white border rounded-lg p-5">
                        <div className="text-sm text-gray-500 mb-1">Current Level</div>
                        <div className="text-3xl font-bold mb-2">Level 5</div>
                        <div className="w-full h-2 bg-gray-100 rounded-full">
                          <div className="h-full bg-blue-600 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">65% to Level 6</div>
                      </div>
                      
                      <div className="bg-white border rounded-lg p-5">
                        <div className="text-sm text-gray-500 mb-1">Total XP Earned</div>
                        <div className="text-3xl font-bold mb-2">750 XP</div>
                        <div className="flex items-center text-sm text-green-600">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                          <span>+120 this week</span>
                        </div>
                      </div>
                      
                      <div className="bg-white border rounded-lg p-5">
                        <div className="text-sm text-gray-500 mb-1">Active Streak</div>
                        <div className="text-3xl font-bold mb-2">3 Days</div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span>Best: 5 days</span>
                        </div>
                      </div>
                      
                      <div className="bg-white border rounded-lg p-5">
                        <div className="text-sm text-gray-500 mb-1">Total Learning Time</div>
                        <div className="text-3xl font-bold mb-2">12h 45m</div>
                        <div className="flex items-center text-sm text-green-600">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                          <span>1h 20m this week</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-8 mb-8">
                    <div className="w-2/3">
                      <h2 className="text-2xl font-bold mb-6">Subject Performance</h2>
                      <div className="bg-white border rounded-lg p-6">
                        <div className="grid grid-cols-3 gap-6 mb-6">
                          <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
                            <div className="flex items-center mb-3">
                              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-xl">🧮</span>
                              </div>
                              <div>
                                <h3 className="font-bold">Mathematics</h3>
                                <div className="text-sm text-purple-700">Advanced</div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Quiz Scores</span>
                                  <span className="font-medium">92%</span>
                                </div>
                                <div className="w-full h-2 bg-purple-100 rounded-full">
                                  <div className="h-full bg-purple-600 rounded-full" style={{ width: '92%' }}></div>
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Activities Completed</span>
                                  <span className="font-medium">18/25</span>
                                </div>
                                <div className="w-full h-2 bg-purple-100 rounded-full">
                                  <div className="h-full bg-purple-600 rounded-full" style={{ width: '72%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                            <div className="flex items-center mb-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-xl">📖</span>
                              </div>
                              <div>
                                <h3 className="font-bold">Reading</h3>
                                <div className="text-sm text-blue-700">Intermediate</div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Comprehension</span>
                                  <span className="font-medium">78%</span>
                                </div>
                                <div className="w-full h-2 bg-blue-100 rounded-full">
                                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '78%' }}></div>
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Activities Completed</span>
                                  <span className="font-medium">12/20</span>
                                </div>
                                <div className="w-full h-2 bg-blue-100 rounded-full">
                                  <div className="h-full bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                            <div className="flex items-center mb-3">
                              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-xl">🔬</span>
                              </div>
                              <div>
                                <h3 className="font-bold">Science</h3>
                                <div className="text-sm text-green-700">Beginner</div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Quiz Scores</span>
                                  <span className="font-medium">65%</span>
                                </div>
                                <div className="w-full h-2 bg-green-100 rounded-full">
                                  <div className="h-full bg-green-600 rounded-full" style={{ width: '65%' }}></div>
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Activities Completed</span>
                                  <span className="font-medium">5/18</span>
                                </div>
                                <div className="w-full h-2 bg-green-100 rounded-full">
                                  <div className="h-full bg-green-600 rounded-full" style={{ width: '28%' }}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t pt-6">
                          <h3 className="font-bold mb-4">Recent Activities</h3>
                          <table className="w-full">
                            <thead className="text-left">
                              <tr className="border-b">
                                <th className="pb-2 font-medium text-gray-500">Activity</th>
                                <th className="pb-2 font-medium text-gray-500">Subject</th>
                                <th className="pb-2 font-medium text-gray-500">Date</th>
                                <th className="pb-2 font-medium text-gray-500">Score</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-3">
                                  <div className="flex items-center">
                                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-2">
                                      <span className="text-sm">🔢</span>
                                    </div>
                                    <span>Multiplication Challenge</span>
                                  </div>
                                </td>
                                <td className="py-3">Mathematics</td>
                                <td className="py-3">Today, 10:15 AM</td>
                                <td className="py-3">
                                  <div className="flex items-center">
                                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-1">
                                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                    </div>
                                    <span>8/10</span>
                                  </div>
                                </td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-3">
                                  <div className="flex items-center">
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
                                      <span className="text-sm">🌎</span>
                                    </div>
                                    <span>World Capitals Quiz</span>
                                  </div>
                                </td>
                                <td className="py-3">Social Studies</td>
                                <td className="py-3">Yesterday, 4:30 PM</td>
                                <td className="py-3">
                                  <div className="flex items-center">
                                    <div className="w-4 h-4 bg-yellow-100 rounded-full flex items-center justify-center mr-1">
                                      <svg className="w-3 h-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                      </svg>
                                    </div>
                                    <span>5/10</span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-3">
                                  <div className="flex items-center">
                                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-2">
                                      <span className="text-sm">📝</span>
                                    </div>
                                    <span>Story Completion</span>
                                  </div>
                                </td>
                                <td className="py-3">Reading</td>
                                <td className="py-3">2 days ago, 1:15 PM</td>
                                <td className="py-3">
                                  <div className="flex items-center">
                                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-1">
                                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                    </div>
                                    <span>Completed</span>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-1/3">
                      <h2 className="text-2xl font-bold mb-6">Learning Insights</h2>
                      <div className="space-y-6">
                        <div className="bg-white border rounded-lg p-5">
                          <h3 className="font-bold mb-3">Strengths</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span>Excellent at multiplication tables</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span>Strong reading comprehension</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span>Good attention span for educational activities</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-white border rounded-lg p-5">
                          <h3 className="font-bold mb-3">Areas for Growth</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                                <svg className="w-3 h-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                              </div>
                              <span>Geography knowledge needs improvement</span>
                            </li>
                            <li className="flex items-center">
                              <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                                <svg className="w-3 h-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                              </div>
                              <span>Limited exposure to science activities</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-white border rounded-lg p-5">
                          <h3 className="font-bold mb-3">Recommended Focus Areas</h3>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div>
                                <span className="font-medium">Geography</span>
                                <p className="text-sm text-gray-600">Encourage more world geography activities to improve knowledge of countries and capitals.</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                                <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div>
                                <span className="font-medium">Science</span>
                                <p className="text-sm text-gray-600">Introduce more science activities, particularly about plant life cycles and basic experiments.</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <button 
                          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
                          onClick={() => navigateTo("home")}
                        >
                          Return to Child View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 text-center">
          <h3 className="font-semibold text-lg mb-2">LearnQuest Educational Platform</h3>
          <p className="text-gray-600 text-sm">Click through the different screens to experience the user flow</p>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-8">
      <div className="mb-6">
        <Tabs defaultValue="mobile" onValueChange={(v) => setActiveDevice(v as "mobile" | "web")}>
          <TabsList className="grid w-[300px] grid-cols-2 mx-auto">
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
            {renderMobileUI()}
          </TabsContent>
          
          <TabsContent value="web" className="mt-6">
            {renderWebUI()}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}