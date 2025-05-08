import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Monitor } from "lucide-react";

// Define screen types
type ScreenType = "home" | "search" | "doctor" | "appointment" | "confirmed";

export default function HealthTrack() {
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
          <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white overflow-y-auto">
            {activeScreen === "home" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 bg-indigo-600 text-white">
                    <h1 className="text-xl font-bold">MedAccess</h1>
                  </header>
                  <div className="p-4">
                    <div className="relative mb-6">
                      <input
                        type="text"
                        placeholder="Search for a doctor or specialty"
                        className="w-full border rounded-lg py-2 px-4 pl-8 text-sm"
                      />
                      <svg
                        className="w-4 h-4 absolute left-2 top-2.5 text-gray-400"
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

                    <button 
                      className="w-full bg-indigo-600 text-white rounded-lg p-3 mb-6 flex items-center justify-center gap-2"
                      onClick={() => navigateTo("search")}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Find Doctors
                      <span className="text-xs opacity-70">Search by name or department</span>
                    </button>

                    <div className="mb-3">
                      <h2 className="font-bold mb-3">Upcoming Appointment</h2>
                      <div className="bg-gray-50 p-3 rounded-lg border shadow-sm">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 overflow-hidden">
                            <img
                              src="https://randomuser.me/api/portraits/men/32.jpg"
                              alt="Doctor"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-sm">Dr. Christopher Jiborge</h3>
                            <p className="text-xs text-gray-500">Cardiologist</p>
                          </div>
                        </div>
                        <div className="text-xs text-gray-600">
                          Jul 23, 9:00 AM in 2 days
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto border-t flex justify-around p-3">
                    <button className="p-2 text-indigo-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "search" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 flex items-center gap-3">
                    <button onClick={() => navigateTo("home")}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h1 className="text-lg font-medium">Search</h1>
                  </header>
                  
                  <div className="p-4">
                    <div className="relative mb-4">
                      <input
                        type="text"
                        placeholder="Search for a doctor or specialty"
                        className="w-full border rounded-lg py-2 px-4 pl-8 text-sm"
                      />
                      <svg
                        className="w-4 h-4 absolute left-2 top-2.5 text-gray-400"
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
                    
                    <div className="flex overflow-x-auto gap-2 py-2 mb-4">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs whitespace-nowrap">All</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs whitespace-nowrap">Cardiology</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs whitespace-nowrap">Dermatology</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs whitespace-nowrap">Pediatrics</span>
                    </div>
                    
                    <div 
                      className="border rounded-lg p-3 mb-3 flex items-start gap-3 cursor-pointer"
                      onClick={() => navigateTo("doctor")}
                    >
                      <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          alt="Doctor"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Christopher Cheng</h3>
                        <p className="text-xs text-gray-500 mb-1">Cardiologist</p>
                        <div className="flex items-center">
                          <div className="flex text-yellow-400">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          <span className="text-xs ml-1">8.9</span>
                          <span className="text-xs text-gray-400 ml-2">2,100 n</span>
                          <span className="text-xs text-gray-400 ml-2">Reviews</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-3 mb-3 flex items-start gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                        <img
                          src="https://randomuser.me/api/portraits/women/44.jpg"
                          alt="Doctor"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Dr. Evelyn Sinclair</h3>
                        <p className="text-xs text-gray-500 mb-1">Cardiologist</p>
                        <div className="flex items-center">
                          <div className="flex text-yellow-400">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          <span className="text-xs ml-1">4.9</span>
                          <span className="text-xs text-gray-400 ml-2">456 n</span>
                          <span className="text-xs text-gray-400 ml-2">Reviews</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium">
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "doctor" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 flex items-center gap-3">
                    <button onClick={() => navigateTo("search")}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h1 className="text-lg font-medium">Gorcoin</h1>
                  </header>
                  
                  <div className="p-4">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-gray-200 rounded-full mr-4 overflow-hidden">
                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          alt="Doctor"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="font-semibold text-lg">Christopher Cheng</h2>
                        <p className="text-sm text-gray-500">Cardiologist</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-medium mb-2">About</h3>
                      <p className="text-sm text-gray-600">NYC cardiologist Cardiologist at 15 years experience</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-medium mb-2">Available</h3>
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-sm">July 2023</div>
                        <button className="text-sm text-gray-600 flex items-center">
                          Any preferrence
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                      
                      <h3 className="font-medium mb-2">Time</h3>
                      <div className="flex gap-2 mb-4">
                        <button className="py-1 px-3 border rounded-full text-xs bg-indigo-50 border-indigo-200 text-indigo-600">
                          9:00 AM
                        </button>
                        <button className="py-1 px-3 border rounded-full text-xs text-gray-500">
                          10:00 AM
                        </button>
                        <button className="py-1 px-3 border rounded-full text-xs text-gray-500">
                          11:00 AM
                        </button>
                      </div>
                      
                      <button 
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium"
                        onClick={() => navigateTo("appointment")}
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "appointment" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 bg-indigo-600 text-white">
                    <h1 className="text-xl font-bold">MedAccess</h1>
                  </header>
                  
                  <div className="p-4 flex-1">
                    <h2 className="text-xl font-bold mb-4">Book New Appointment</h2>
                    
                    <div className="border rounded-lg p-4 mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
                          <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Doctor"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">Christopher Cheng</h3>
                          <p className="text-sm text-gray-500">Cardiologist</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">Selected Date & Time</label>
                      <div className="border rounded-lg p-3 text-sm">
                        July 23, 2023 at 9:00 AM
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">Reason for Visit</label>
                      <select className="w-full border rounded-lg py-2 px-3 text-sm">
                        <option>Annual check-up</option>
                        <option>Follow-up appointment</option>
                        <option>New patient consultation</option>
                        <option>Emergency</option>
                      </select>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">Notes (Optional)</label>
                      <textarea 
                        className="w-full border rounded-lg py-2 px-3 text-sm h-24" 
                        placeholder="Add any notes for the doctor..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="p-4 border-t">
                    <button 
                      className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium"
                      onClick={() => navigateTo("confirmed")}
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "confirmed" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 bg-indigo-600 text-white">
                    <h1 className="text-xl font-bold">MedAccess</h1>
                  </header>
                  
                  <div className="p-4 flex-1 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-2">Appointment Confirmed</h2>
                    <p className="text-gray-600 mb-6">Your appointment has been successfully booked</p>
                    
                    <div className="bg-gray-50 rounded-lg p-4 w-full mb-6">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 overflow-hidden">
                          <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Doctor"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">Dr. Christopher Cheng</h3>
                          <p className="text-sm text-gray-500">Cardiologist</p>
                        </div>
                      </div>
                      
                      <div className="text-sm">
                        <div className="flex justify-between py-1">
                          <span className="text-gray-500">Date & Time:</span>
                          <span>Jul 23, 9:00 AM</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-gray-500">Location:</span>
                          <span>NYC Medical Center</span>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => navigateTo("home")}
                      className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium mb-3"
                    >
                      View Appointment
                    </button>
                    
                    <button 
                      onClick={() => navigateTo("home")}
                      className="w-full bg-white border text-gray-700 py-3 rounded-lg font-medium"
                    >
                      Back to Home
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 text-center">
          <h3 className="font-semibold text-lg mb-2">Mobile Doctor Appointment App</h3>
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
              MedAccess - Healthcare Portal
            </div>
            <div className="w-24"></div>
          </div>
          
          <div className="rounded-b-sm overflow-hidden bg-white">
            {activeScreen === "home" && (
              <div className="min-h-[500px] p-5">
                <header className="flex justify-between items-center mb-6">
                  <div className="text-xl font-bold text-indigo-600">MedAccess</div>
                  <div className="flex items-center gap-4">
                    <button className="text-sm text-gray-600">Home</button>
                    <button 
                      onClick={() => navigateTo("search")}
                      className="text-sm text-gray-600"
                    >
                      Find a Doctor
                    </button>
                    <button className="text-sm text-gray-600">Appointments</button>
                    <button className="text-sm text-gray-600">Account</button>
                  </div>
                </header>
                
                <div className="flex gap-5">
                  <div className="w-2/3">
                    <div className="mb-6">
                      <h1 className="text-2xl font-bold mb-2">Hello, Samuel</h1>
                      <p className="text-gray-600">Find doctors and schedule appointments quickly.</p>
                    </div>
                    
                    <div className="relative mb-8">
                      <input
                        type="text"
                        placeholder="Search for a doctor or specialty"
                        className="w-full border rounded-lg py-3 px-4 pl-10"
                      />
                      <svg
                        className="w-5 h-5 absolute left-3 top-3.5 text-gray-400"
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
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                        <h3 className="font-semibold mb-2">Find a Doctor</h3>
                        <p className="text-sm text-gray-600 mb-3">Search from our network of specialists and primary care doctors.</p>
                        <button 
                          className="text-indigo-600 text-sm font-medium"
                          onClick={() => navigateTo("search")}
                        >
                          Search now →
                        </button>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                        <h3 className="font-semibold mb-2">My Appointments</h3>
                        <p className="text-sm text-gray-600 mb-3">View and manage your upcoming appointments.</p>
                        <button className="text-green-600 text-sm font-medium">View appointments →</button>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-lg font-semibold mb-3">Featured Specialists</h2>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 overflow-hidden">
                              <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Doctor"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">Dr. Christopher Cheng</h3>
                              <p className="text-xs text-gray-500">Cardiologist</p>
                            </div>
                          </div>
                          <div className="flex text-yellow-400 mb-2">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          <button 
                            onClick={() => navigateTo("doctor")}
                            className="w-full text-indigo-600 text-sm border border-indigo-600 rounded py-1 hover:bg-indigo-50"
                          >
                            View Profile
                          </button>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 overflow-hidden">
                              <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="Doctor"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">Dr. Evelyn Sinclair</h3>
                              <p className="text-xs text-gray-500">Dermatologist</p>
                            </div>
                          </div>
                          <div className="flex text-yellow-400 mb-2">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          <button className="w-full text-indigo-600 text-sm border border-indigo-600 rounded py-1 hover:bg-indigo-50">
                            View Profile
                          </button>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 overflow-hidden">
                              <img
                                src="https://randomuser.me/api/portraits/men/56.jpg"
                                alt="Doctor"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium text-sm">Dr. Michael Wong</h3>
                              <p className="text-xs text-gray-500">Neurologist</p>
                            </div>
                          </div>
                          <div className="flex text-yellow-400 mb-2">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          <button className="w-full text-indigo-600 text-sm border border-indigo-600 rounded py-1 hover:bg-indigo-50">
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-1/3 bg-gray-50 p-4 rounded-lg border">
                    <h2 className="font-semibold mb-4">Your Upcoming Appointments</h2>
                    
                    <div className="bg-white rounded-lg border p-3 mb-3">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 overflow-hidden">
                          <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Doctor"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-sm">Dr. Christopher Cheng</h3>
                          <p className="text-xs text-gray-500">Cardiologist</p>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Jul 23, 9:00 AM</span>
                        <button className="text-indigo-600 font-medium">Details</button>
                      </div>
                    </div>
                    
                    <h2 className="font-semibold mb-4 mt-6">Common Specialties</h2>
                    <ul className="space-y-2">
                      <li className="text-sm flex items-center">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                        <span>Cardiology</span>
                      </li>
                      <li className="text-sm flex items-center">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                        <span>Dermatology</span>
                      </li>
                      <li className="text-sm flex items-center">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                        <span>Pediatrics</span>
                      </li>
                      <li className="text-sm flex items-center">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                        <span>Orthopedics</span>
                      </li>
                      <li className="text-sm flex items-center">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                        <span>Neurology</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {activeScreen === "search" && (
              <div className="min-h-[500px] p-5">
                <header className="mb-6">
                  <h1 className="text-xl font-bold mb-4">Search for a doctor</h1>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search for a doctor or specialty"
                      className="w-full border rounded-lg py-3 px-4 pl-10"
                    />
                    <svg
                      className="w-5 h-5 absolute left-3 top-3.5 text-gray-400"
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
                </header>
                
                <div className="flex gap-8">
                  <div className="w-1/4">
                    <h3 className="font-medium mb-3">Filter by:</h3>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Specialty</h4>
                      <div className="space-y-2">
                        <label className="flex items-center text-sm">
                          <input type="checkbox" className="mr-2" />
                          Cardiology
                        </label>
                        <label className="flex items-center text-sm">
                          <input type="checkbox" className="mr-2" />
                          Dermatology
                        </label>
                        <label className="flex items-center text-sm">
                          <input type="checkbox" className="mr-2" />
                          Neurology
                        </label>
                        <label className="flex items-center text-sm">
                          <input type="checkbox" className="mr-2" />
                          Pediatrics
                        </label>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Availability</h4>
                      <div className="space-y-2">
                        <label className="flex items-center text-sm">
                          <input type="checkbox" className="mr-2" />
                          Today
                        </label>
                        <label className="flex items-center text-sm">
                          <input type="checkbox" className="mr-2" />
                          Next 3 days
                        </label>
                        <label className="flex items-center text-sm">
                          <input type="checkbox" className="mr-2" />
                          This week
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Gender</h4>
                      <div className="space-y-2">
                        <label className="flex items-center text-sm">
                          <input type="checkbox" className="mr-2" />
                          Male
                        </label>
                        <label className="flex items-center text-sm">
                          <input type="checkbox" className="mr-2" />
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-3/4">
                    <div className="mb-4 flex justify-between items-center">
                      <div className="text-sm text-gray-600">12 doctors found</div>
                      <div className="flex items-center">
                        <span className="text-sm mr-2">Sort by:</span>
                        <select className="text-sm border rounded p-1">
                          <option>Relevance</option>
                          <option>Rating</option>
                          <option>Name</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div 
                        className="border rounded-lg p-4 flex gap-4 hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => navigateTo("doctor")}
                      >
                        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                          <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Doctor"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">Christopher Cheng</h3>
                            <div className="flex items-center">
                              <div className="flex text-yellow-400">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="ml-1">4.9</span>
                              </div>
                              <span className="text-sm text-gray-500 ml-2">(201 reviews)</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">Cardiologist</p>
                          <p className="text-sm text-gray-500 mb-3">NYC Medical Center - 15 years experience</p>
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-2">
                              <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Heart Disease</span>
                              <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Hypertension</span>
                            </div>
                            <button className="text-indigo-600 font-medium text-sm">Book Appointment</button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 flex gap-4 hover:shadow-md transition-shadow cursor-pointer">
                        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                          <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Doctor"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">Dr. Evelyn Sinclair</h3>
                            <div className="flex items-center">
                              <div className="flex text-yellow-400">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="ml-1">4.7</span>
                              </div>
                              <span className="text-sm text-gray-500 ml-2">(142 reviews)</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">Dermatologist</p>
                          <p className="text-sm text-gray-500 mb-3">Parkside Medical - 12 years experience</p>
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-2">
                              <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Skin Disorders</span>
                              <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">Cosmetic</span>
                            </div>
                            <button className="text-indigo-600 font-medium text-sm">Book Appointment</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeScreen === "doctor" && (
              <div className="min-h-[500px] p-5">
                <div className="flex gap-8">
                  <div className="w-2/3">
                    <div className="flex items-center mb-6">
                      <div className="w-20 h-20 bg-gray-200 rounded-full mr-5 overflow-hidden">
                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          alt="Doctor"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold">Christopher Cheng</h1>
                        <p className="text-gray-600">Cardiologist</p>
                        <div className="flex items-center mt-1">
                          <div className="flex text-yellow-400">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="ml-1">4.9</span>
                          </div>
                          <span className="text-sm text-gray-500 ml-2">(201 reviews)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold mb-2">About</h2>
                      <p className="text-gray-600">
                        Dr. Christopher Cheng is a board-certified cardiologist with over 15 years of experience in treating various heart conditions. He specializes in preventive cardiology, heart failure management, and interventional procedures.
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold mb-2">Specializations</h2>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Coronary Artery Disease</span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Heart Failure</span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Hypertension</span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Cardiac Rehabilitation</span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Preventive Cardiology</span>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-lg font-semibold mb-2">Patient Reviews</h2>
                      <div className="space-y-4">
                        <div className="border-b pb-4">
                          <div className="flex justify-between mb-1">
                            <div className="font-medium">Sarah J.</div>
                            <div className="flex text-yellow-400">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500 mb-2">2 months ago</div>
                          <p className="text-gray-600">Dr. Cheng is an exceptional cardiologist. He took the time to listen to my concerns and explained everything in a way I could understand. Highly recommend!</p>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <div className="font-medium">Michael T.</div>
                            <div className="flex text-yellow-400">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500 mb-2">4 months ago</div>
                          <p className="text-gray-600">The office was clean and the staff was very friendly. Dr. Cheng spent a good amount of time with me and didn't rush through the appointment. He really cares about his patients.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-1/3">
                    <div className="border rounded-lg p-5 bg-gray-50">
                      <h2 className="text-lg font-semibold mb-4">Book an Appointment</h2>
                      
                      <div className="mb-4">
                        <h3 className="font-medium text-sm mb-2">Select Date</h3>
                        <div className="bg-white border rounded-lg p-3">
                          <div className="grid grid-cols-7 gap-1 text-center text-sm">
                            <div className="text-gray-400">Su</div>
                            <div className="text-gray-400">Mo</div>
                            <div className="text-gray-400">Tu</div>
                            <div className="text-gray-400">We</div>
                            <div className="text-gray-400">Th</div>
                            <div className="text-gray-400">Fr</div>
                            <div className="text-gray-400">Sa</div>
                            
                            <div className="text-gray-300">18</div>
                            <div className="text-gray-300">19</div>
                            <div className="text-gray-300">20</div>
                            <div className="text-gray-300">21</div>
                            <div className="text-gray-300">22</div>
                            <div 
                              className="py-1 bg-indigo-600 text-white rounded cursor-pointer"
                              onClick={() => navigateTo("appointment")}
                            >
                              23
                            </div>
                            <div>24</div>
                            
                            <div>25</div>
                            <div>26</div>
                            <div>27</div>
                            <div>28</div>
                            <div>29</div>
                            <div>30</div>
                            <div>31</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="font-medium text-sm mb-2">Available Time Slots</h3>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="text-center py-2 bg-indigo-50 border-indigo-200 text-indigo-700 rounded text-sm cursor-pointer hover:bg-indigo-100">
                            9:00 AM
                          </div>
                          <div className="text-center py-2 bg-white border text-gray-700 rounded text-sm cursor-pointer hover:bg-gray-50">
                            10:00 AM
                          </div>
                          <div className="text-center py-2 bg-white border text-gray-700 rounded text-sm cursor-pointer hover:bg-gray-50">
                            11:00 AM
                          </div>
                          <div className="text-center py-2 bg-white border text-gray-700 rounded text-sm cursor-pointer hover:bg-gray-50">
                            2:00 PM
                          </div>
                          <div className="text-center py-2 bg-white border text-gray-700 rounded text-sm cursor-pointer hover:bg-gray-50">
                            3:00 PM
                          </div>
                          <div className="text-center py-2 bg-white border text-gray-700 rounded text-sm cursor-pointer hover:bg-gray-50">
                            4:00 PM
                          </div>
                        </div>
                      </div>
                      
                      <button 
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700"
                        onClick={() => navigateTo("appointment")}
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeScreen === "appointment" && (
              <div className="min-h-[500px] p-5">
                <h1 className="text-2xl font-bold mb-6">Book an Appointment</h1>
                
                <div className="flex gap-8">
                  <div className="w-2/3">
                    <div className="border rounded-lg p-4 mb-6">
                      <div className="flex items-center">
                        <div className="w-14 h-14 bg-gray-200 rounded-full mr-4 overflow-hidden">
                          <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Doctor"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">Dr. Christopher Cheng</h3>
                          <p className="text-sm text-gray-600">Cardiologist</p>
                          <div className="flex items-center mt-1">
                            <div className="flex text-yellow-400">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="ml-1 text-sm">4.9</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold mb-4">Appointment Details</h2>
                      
                      <div className="border rounded-lg p-4 bg-gray-50 mb-6">
                        <div className="flex justify-between mb-2">
                          <div className="text-gray-500">Date:</div>
                          <div className="font-medium">July 23, 2023</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-gray-500">Time:</div>
                          <div className="font-medium">9:00 AM</div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block font-medium mb-1">Visit Type</label>
                          <select className="w-full border rounded-lg py-2 px-3">
                            <option>New Patient Consultation</option>
                            <option>Follow-up Visit</option>
                            <option>Annual Check-up</option>
                            <option>Urgent Care</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block font-medium mb-1">Reason for Visit</label>
                          <textarea 
                            className="w-full border rounded-lg py-2 px-3 h-20" 
                            placeholder="Please describe your symptoms or reason for the appointment..."
                          ></textarea>
                        </div>
                        
                        <div>
                          <label className="block font-medium mb-1">Insurance Information</label>
                          <select className="w-full border rounded-lg py-2 px-3">
                            <option>Select Insurance Provider</option>
                            <option>Blue Cross Blue Shield</option>
                            <option>Aetna</option>
                            <option>Cigna</option>
                            <option>UnitedHealthcare</option>
                            <option>Self-pay (No insurance)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-1/3">
                    <div className="border rounded-lg p-5 bg-gray-50">
                      <h2 className="text-lg font-semibold mb-4">Appointment Summary</h2>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <div className="text-gray-600">Doctor:</div>
                          <div>Dr. Christopher Cheng</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-gray-600">Specialty:</div>
                          <div>Cardiology</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-gray-600">Date:</div>
                          <div>July 23, 2023</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-gray-600">Time:</div>
                          <div>9:00 AM</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-gray-600">Location:</div>
                          <div>NYC Medical Center</div>
                        </div>
                      </div>
                      
                      <div className="border-t border-b py-3 mb-4">
                        <div className="flex justify-between font-medium">
                          <div>Appointment Fee:</div>
                          <div>$150.00</div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">May be covered by insurance</div>
                      </div>
                      
                      <button 
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 mb-3"
                        onClick={() => navigateTo("confirmed")}
                      >
                        Confirm Appointment
                      </button>
                      
                      <button 
                        className="w-full bg-white border text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50"
                        onClick={() => navigateTo("home")}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeScreen === "confirmed" && (
              <div className="min-h-[500px] p-5 flex items-center justify-center">
                <div className="max-w-lg text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  
                  <h1 className="text-2xl font-bold mb-4">Appointment Confirmed!</h1>
                  <p className="text-gray-600 mb-8">
                    Your appointment with Dr. Christopher Cheng has been successfully scheduled for July 23, 2023 at 9:00 AM.
                  </p>
                  
                  <div className="bg-gray-50 border rounded-lg p-5 mb-6 text-left">
                    <h2 className="font-semibold mb-4">Appointment Details</h2>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <div className="text-gray-600">Doctor:</div>
                        <div>Dr. Christopher Cheng</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-gray-600">Specialty:</div>
                        <div>Cardiology</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-gray-600">Date & Time:</div>
                        <div>Jul 23, 9:00 AM</div>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-gray-600">Location:</div>
                        <div>NYC Medical Center</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button 
                      className="flex-1 bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700"
                      onClick={() => navigateTo("home")}
                    >
                      View My Appointments
                    </button>
                    <button 
                      className="flex-1 bg-white border text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50"
                      onClick={() => navigateTo("home")}
                    >
                      Return to Home
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 text-center">
          <h3 className="font-semibold text-lg mb-2">Medical Appointment Web Portal</h3>
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