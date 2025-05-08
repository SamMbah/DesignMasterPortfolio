import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Monitor } from "lucide-react";

// Define screen types
type ScreenType = "login" | "home" | "messages" | "tasks" | "meetings" | "team" | "settings";

export default function TeamSync() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>("login");
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
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white overflow-y-auto">
            {activeScreen === "login" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col items-center justify-center p-6">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">TeamSync</h1>
                    <p className="text-sm text-gray-500 mb-4">Remote collaboration made easy</p>
                  </div>
                  
                  <div className="w-full space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="email@company.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                      <input 
                        type="password" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="••••••••"
                      />
                    </div>
                    
                    <button 
                      className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700"
                      onClick={() => navigateTo("home")}
                    >
                      Sign In
                    </button>
                    
                    <div className="flex items-center my-4">
                      <div className="flex-grow border-t border-gray-300"></div>
                      <div className="px-3 text-xs text-gray-500">OR</div>
                      <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    
                    <button className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-50">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Sign in with Google
                    </button>
                    
                    <div className="text-center text-sm mt-4">
                      <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "home" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 bg-blue-600 text-white shadow-md">
                    <div className="flex justify-between items-center">
                      <h1 className="text-xl font-bold">TeamSync</h1>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
                          <div className="w-full h-full bg-blue-300 flex items-center justify-center">
                            <span className="text-blue-800 font-medium">SM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                  
                  <div className="p-4 overflow-y-auto flex-1">
                    <div className="mb-6">
                      <h2 className="font-bold text-lg mb-2">Good morning, Samuel!</h2>
                      <p className="text-sm text-gray-600">Your day at a glance</p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h3 className="font-medium text-blue-800 mb-3">Upcoming Meetings</h3>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded-md border border-blue-100">
                          <div className="flex justify-between items-start mb-1">
                            <div>
                              <h4 className="font-medium">Weekly Team Standup</h4>
                              <div className="text-sm text-gray-500">10:00 AM - 10:30 AM</div>
                            </div>
                            <div className="bg-blue-100 text-blue-700 text-xs py-1 px-2 rounded">
                              In 30 min
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span>6 participants</span>
                          </div>
                        </div>
                        
                        <div className="bg-white p-3 rounded-md border border-blue-100">
                          <div className="flex justify-between items-start mb-1">
                            <div>
                              <h4 className="font-medium">Product Review</h4>
                              <div className="text-sm text-gray-500">2:00 PM - 3:00 PM</div>
                            </div>
                            <div className="bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded">
                              Today
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span>4 participants</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="font-medium mb-2">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <button 
                        className="bg-white border border-blue-200 rounded-lg p-3 flex flex-col items-center"
                        onClick={() => navigateTo("messages")}
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">Start Huddle</span>
                      </button>
                      
                      <button 
                        className="bg-white border border-blue-200 rounded-lg p-3 flex flex-col items-center"
                        onClick={() => navigateTo("tasks")}
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">Create Task</span>
                      </button>
                      
                      <button 
                        className="bg-white border border-blue-200 rounded-lg p-3 flex flex-col items-center"
                        onClick={() => navigateTo("team")}
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">Invite Team</span>
                      </button>
                      
                      <button 
                        className="bg-white border border-blue-200 rounded-lg p-3 flex flex-col items-center"
                        onClick={() => navigateTo("meetings")}
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">Schedule</span>
                      </button>
                    </div>
                    
                    <h3 className="font-medium mb-2">My Tasks</h3>
                    <div className="space-y-3">
                      <div className="bg-white border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center mb-1">
                          <div className="w-4 h-4 border border-blue-500 rounded mr-2"></div>
                          <h4 className="font-medium">Finalize design specs</h4>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Today</span>
                          </div>
                          <div className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded">
                            High Priority
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center mb-1">
                          <div className="w-4 h-4 border border-blue-500 rounded mr-2"></div>
                          <h4 className="font-medium">Prepare meeting agenda</h4>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Tomorrow</span>
                          </div>
                          <div className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded">
                            Medium
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto border-t flex justify-around p-3 bg-white">
                    <button className="p-2 text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </button>
                    <button 
                      className="p-2 text-gray-400"
                      onClick={() => navigateTo("messages")}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </button>
                    <button 
                      className="p-2 text-gray-400"
                      onClick={() => navigateTo("tasks")}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </button>
                    <button
                      className="p-2 text-gray-400"
                      onClick={() => navigateTo("settings")}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "messages" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 flex items-center gap-3 bg-blue-600 text-white">
                    <button onClick={() => navigateTo("home")}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h1 className="text-lg font-medium">Messages</h1>
                  </header>
                  
                  <div className="p-3">
                    <div className="relative mb-4">
                      <input
                        type="text"
                        placeholder="Search conversations..."
                        className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg text-sm"
                      />
                      <svg
                        className="w-4 h-4 absolute left-2.5 top-2.5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    
                    <div className="mb-4">
                      <h2 className="font-medium mb-2 text-sm text-gray-600">TEAM CHANNELS</h2>
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded-lg flex items-center justify-between cursor-pointer">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center mr-3">
                              <span className="text-blue-700 font-medium">#</span>
                            </div>
                            <div>
                              <h3 className="font-medium text-blue-900">design-team</h3>
                              <p className="text-xs text-blue-700">Sarah: Updated the wireframes</p>
                            </div>
                          </div>
                          <div className="bg-blue-200 text-blue-800 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            3
                          </div>
                        </div>
                        
                        <div className="p-3 rounded-lg flex items-center">
                          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-gray-700 font-medium">#</span>
                          </div>
                          <div>
                            <h3 className="font-medium">general</h3>
                            <p className="text-xs text-gray-500">John: Good morning team!</p>
                          </div>
                        </div>
                        
                        <div className="p-3 rounded-lg flex items-center">
                          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-gray-700 font-medium">#</span>
                          </div>
                          <div>
                            <h3 className="font-medium">project-alpha</h3>
                            <p className="text-xs text-gray-500">You: Let's review the specs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="font-medium mb-2 text-sm text-gray-600">DIRECT MESSAGES</h2>
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg flex items-center">
                          <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
                            <div className="w-full h-full bg-red-300 flex items-center justify-center">
                              <span className="text-red-800 font-medium">JD</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-medium">Jane Doe</h3>
                            <div className="flex items-center text-xs text-gray-500">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                              <span>Online</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-3 rounded-lg flex items-center">
                          <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden mr-3">
                            <div className="w-full h-full bg-purple-300 flex items-center justify-center">
                              <span className="text-purple-800 font-medium">MS</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-medium">Mike Smith</h3>
                            <div className="flex items-center text-xs text-gray-500">
                              <span>Last seen 2h ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto p-3 border-t">
                    <button className="w-full flex items-center justify-center py-2 px-4 bg-blue-600 text-white rounded-lg">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      New Conversation
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "tasks" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 flex items-center gap-3 bg-blue-600 text-white">
                    <button onClick={() => navigateTo("home")}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h1 className="text-lg font-medium">Tasks</h1>
                  </header>
                  
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-3">
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">All</button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">My Tasks</button>
                      </div>
                      <button className="p-1.5 bg-blue-100 text-blue-700 rounded-md">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="mb-5">
                      <h2 className="font-medium mb-2 text-sm text-gray-600">TO DO</h2>
                      <div className="space-y-2">
                        <div className="bg-white border border-gray-200 rounded-lg p-3">
                          <div className="flex items-center mb-2">
                            <div className="w-4 h-4 border border-blue-500 rounded mr-2"></div>
                            <h3 className="font-medium">Finalize design specs</h3>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center text-xs text-gray-500">
                              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>Today</span>
                            </div>
                            <div className="flex items-center">
                              <div className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs mr-2">
                                High Priority
                              </div>
                              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-700 text-xs">SM</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white border border-gray-200 rounded-lg p-3">
                          <div className="flex items-center mb-2">
                            <div className="w-4 h-4 border border-blue-500 rounded mr-2"></div>
                            <h3 className="font-medium">Prepare meeting agenda</h3>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center text-xs text-gray-500">
                              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>Tomorrow</span>
                            </div>
                            <div className="flex items-center">
                              <div className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs mr-2">
                                Medium
                              </div>
                              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-700 text-xs">SM</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-5">
                      <h2 className="font-medium mb-2 text-sm text-gray-600">IN PROGRESS</h2>
                      <div className="space-y-2">
                        <div className="bg-white border border-gray-200 rounded-lg p-3">
                          <div className="flex items-center mb-2">
                            <div className="w-4 h-4 border border-blue-500 rounded mr-2"></div>
                            <h3 className="font-medium">Update team documentation</h3>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center text-xs text-gray-500">
                              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>Friday</span>
                            </div>
                            <div className="flex items-center">
                              <div className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs mr-2">
                                Low
                              </div>
                              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                                <span className="text-purple-700 text-xs">JD</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="font-medium mb-2 text-sm text-gray-600">DONE</h2>
                      <div className="space-y-2">
                        <div className="bg-white border border-gray-200 rounded-lg p-3 opacity-70">
                          <div className="flex items-center mb-2">
                            <div className="w-4 h-4 bg-blue-500 border border-blue-500 rounded mr-2 flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <h3 className="font-medium line-through text-gray-500">Set up project repository</h3>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center text-xs text-gray-500">
                              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>Yesterday</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                                <span className="text-red-700 text-xs">MS</span>
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

            {activeScreen === "settings" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 flex items-center gap-3 bg-blue-600 text-white">
                    <button onClick={() => navigateTo("home")}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h1 className="text-lg font-medium">Settings</h1>
                  </header>
                  
                  <div className="p-4">
                    <div className="flex flex-col items-center mb-6">
                      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                        <span className="text-blue-700 text-xl font-bold">SM</span>
                      </div>
                      <h2 className="font-bold text-lg">Samuel Mbah</h2>
                      <p className="text-sm text-gray-600">UX Designer</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">ACCOUNT</h3>
                      <div className="space-y-1">
                        <div className="p-3 bg-white rounded-lg flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <span>Edit Profile</span>
                          </div>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        
                        <div className="p-3 bg-white rounded-lg flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                              </svg>
                            </div>
                            <span>Notification Settings</span>
                          </div>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">APPEARANCE</h3>
                      <div className="space-y-1">
                        <div className="p-3 bg-white rounded-lg flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                              </svg>
                            </div>
                            <span>Dark Mode</span>
                          </div>
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-2">ACCOUNT</h3>
                      <div className="space-y-1">
                        <button 
                          className="w-full p-3 bg-red-50 text-red-600 rounded-lg flex items-center"
                          onClick={() => navigateTo("login")}
                        >
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                          </div>
                          <span>Sign Out</span>
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
          <h3 className="font-semibold text-lg mb-2">TeamSync Mobile App</h3>
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
              TeamSync - Remote Collaboration Platform
            </div>
            <div className="w-24"></div>
          </div>
          
          <div className="rounded-b-sm overflow-hidden bg-white">
            {activeScreen === "login" && (
              <div className="min-h-[500px] flex items-center justify-center">
                <div className="w-96 p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">TeamSync</h1>
                    <p className="text-gray-500 mb-6">Remote collaboration made easy</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="email@company.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                      <input 
                        type="password" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="••••••••"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input id="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                          Remember me
                        </label>
                      </div>
                      <div className="text-sm">
                        <a href="#" className="text-blue-600 hover:underline">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    
                    <button 
                      className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700"
                      onClick={() => navigateTo("home")}
                    >
                      Sign In
                    </button>
                    
                    <div className="flex items-center my-4">
                      <div className="flex-grow border-t border-gray-300"></div>
                      <div className="px-3 text-xs text-gray-500">OR</div>
                      <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    
                    <button className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-50">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Sign in with Google
                    </button>
                    
                    <button className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium py-2 rounded-md hover:bg-gray-50">
                      <svg className="w-5 h-5 mr-2" fill="#0078d4" viewBox="0 0 24 24">
                        <path d="M11.5 9.5v-9h-7a2.5 2.5 0 00-2.5 2.5v16a2.5 2.5 0 002.5 2.5h11a2.5 2.5 0 002.5-2.5v-9.5h-6.5z"/>
                        <path d="M21.5 9l-9-9v9h9z"/>
                      </svg>
                      Sign in with Microsoft
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeScreen === "home" && (
              <div className="min-h-[500px] flex">
                <div className="w-64 bg-gray-100 border-r p-4">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h1 className="text-xl font-bold">TeamSync</h1>
                  </div>
                  
                  <nav className="space-y-1">
                    <a className="flex items-center space-x-3 bg-blue-100 text-blue-800 rounded-lg p-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="font-medium">Home</span>
                    </a>
                    
                    <a 
                      className="flex items-center space-x-3 text-gray-700 hover:bg-gray-200 rounded-lg p-3 cursor-pointer"
                      onClick={() => navigateTo("messages")}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      <span className="font-medium">Messages</span>
                    </a>
                    
                    <a 
                      className="flex items-center space-x-3 text-gray-700 hover:bg-gray-200 rounded-lg p-3 cursor-pointer"
                      onClick={() => navigateTo("tasks")}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      <span className="font-medium">Tasks</span>
                    </a>
                    
                    <a className="flex items-center space-x-3 text-gray-700 hover:bg-gray-200 rounded-lg p-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="font-medium">Team</span>
                    </a>
                    
                    <a 
                      className="flex items-center space-x-3 text-gray-700 hover:bg-gray-200 rounded-lg p-3 cursor-pointer"
                      onClick={() => navigateTo("meetings")}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">Meetings</span>
                    </a>
                  </nav>
                  
                  <div className="mt-auto pt-6">
                    <a 
                      className="flex items-center space-x-3 text-gray-700 hover:bg-gray-200 rounded-lg p-3 cursor-pointer" 
                      onClick={() => navigateTo("settings")}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-medium">Settings</span>
                    </a>
                    
                    <div className="mt-6 border-t pt-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full overflow-hidden mr-3">
                          <div className="w-full h-full bg-blue-300 flex items-center justify-center">
                            <span className="text-blue-800 font-medium">SM</span>
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">Samuel Mbah</div>
                          <div className="text-xs text-gray-500">UX Designer</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="p-6">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold mb-1">Good morning, Samuel!</h2>
                      <p className="text-gray-600">Your day at a glance</p>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="font-medium text-lg">Quick Actions</h3>
                          <div className="bg-blue-100 w-8 h-8 flex items-center justify-center rounded-lg">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <button className="w-full bg-white border border-blue-200 rounded-lg p-3 text-left hover:bg-blue-50">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                              </div>
                              <span className="font-medium">Start Huddle</span>
                            </div>
                          </button>
                          
                          <button 
                            className="w-full bg-white border border-blue-200 rounded-lg p-3 text-left hover:bg-blue-50"
                            onClick={() => navigateTo("tasks")}
                          >
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                              </div>
                              <span className="font-medium">Create Task</span>
                            </div>
                          </button>
                          
                          <button className="w-full bg-white border border-blue-200 rounded-lg p-3 text-left hover:bg-blue-50">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                              </div>
                              <span className="font-medium">Invite Team Member</span>
                            </div>
                          </button>
                        </div>
                      </div>
                      
                      <div className="col-span-2 bg-white border border-gray-200 rounded-lg p-5">
                        <div className="flex justify-between items-center mb-5">
                          <h3 className="font-medium text-lg">Upcoming Meetings</h3>
                          <button className="text-blue-600 text-sm hover:underline">View Calendar</button>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                            <div className="flex justify-between mb-2">
                              <div>
                                <h4 className="font-bold text-lg">Weekly Team Standup</h4>
                                <div className="text-sm text-gray-600">10:00 AM - 10:30 AM</div>
                              </div>
                              <div className="bg-blue-100 text-blue-700 text-sm h-6 px-2 rounded flex items-center">
                                In 30 min
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="flex -space-x-2 mr-3">
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-red-300 flex items-center justify-center text-xs text-red-800 font-medium">JD</div>
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-300 flex items-center justify-center text-xs text-purple-800 font-medium">MS</div>
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-green-300 flex items-center justify-center text-xs text-green-800 font-medium">AK</div>
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-yellow-300 flex items-center justify-center text-xs text-yellow-800 font-medium">RJ</div>
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-300 flex items-center justify-center text-xs">+2</div>
                              </div>
                              <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Join Meeting</button>
                            </div>
                          </div>
                          
                          <div className="bg-white border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between mb-2">
                              <div>
                                <h4 className="font-bold text-lg">Product Review</h4>
                                <div className="text-sm text-gray-600">2:00 PM - 3:00 PM</div>
                              </div>
                              <div className="bg-gray-100 text-gray-600 text-sm h-6 px-2 rounded flex items-center">
                                Today
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="flex -space-x-2 mr-3">
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-300 flex items-center justify-center text-xs text-blue-800 font-medium">SM</div>
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-300 flex items-center justify-center text-xs text-purple-800 font-medium">MS</div>
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-red-300 flex items-center justify-center text-xs text-red-800 font-medium">JD</div>
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-300 flex items-center justify-center text-xs">+1</div>
                              </div>
                              <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm">View Details</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-medium text-lg">My Tasks</h3>
                        <div className="flex items-center space-x-2">
                          <button className="border border-gray-300 text-gray-700 rounded px-3 py-1 text-sm">
                            View All
                          </button>
                          <button 
                            className="bg-blue-600 text-white rounded-lg p-1"
                            onClick={() => navigateTo("tasks")}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Task
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Due Date
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Priority
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Assignee
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="w-4 h-4 border border-blue-500 rounded mr-3"></div>
                                  <div className="text-sm font-medium text-gray-900">Finalize design specs</div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                  In Progress
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Today
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                                  High
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-xs text-blue-800 font-medium">
                                  SM
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="w-4 h-4 border border-blue-500 rounded mr-3"></div>
                                  <div className="text-sm font-medium text-gray-900">Prepare meeting agenda</div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                  To Do
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Tomorrow
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                  Medium
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-xs text-blue-800 font-medium">
                                  SM
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="w-4 h-4 bg-blue-500 border border-blue-500 rounded mr-3 flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <div className="text-sm font-medium text-gray-400 line-through">Set up project repository</div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  Completed
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                Yesterday
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                  Critical
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="w-8 h-8 rounded-full bg-red-300 flex items-center justify-center text-xs text-red-800 font-medium">
                                  MS
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 text-center">
          <h3 className="font-semibold text-lg mb-2">TeamSync Web Platform</h3>
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
