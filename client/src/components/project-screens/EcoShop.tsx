import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Monitor } from "lucide-react";

// Define screen types
type ScreenType = "home" | "browse" | "product" | "impact" | "cart";

export default function EcoShop() {
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
                  <header className="p-4 bg-green-600 text-white shadow-md">
                    <div className="flex justify-between items-center">
                      <h1 className="text-xl font-bold">EcoShop</h1>
                      <div className="flex items-center space-x-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </div>
                    </div>
                  </header>
                  
                  <div className="p-4">
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h2 className="font-semibold text-green-800 mb-1">Shop Sustainably</h2>
                      <p className="text-sm text-green-700 mb-3">Discover eco-friendly products with transparent impact data.</p>
                      <Button 
                        className="bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded"
                        onClick={() => navigateTo("browse")}
                      >
                        Explore Now
                      </Button>
                    </div>
                    
                    <h2 className="font-semibold mb-3">Popular Categories</h2>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div 
                        className="bg-gray-100 p-3 rounded-lg text-center cursor-pointer"
                        onClick={() => navigateTo("browse")}
                      >
                        <div className="bg-green-100 w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">Home Goods</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg text-center">
                        <div className="bg-green-100 w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">Food & Drinks</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg text-center">
                        <div className="bg-green-100 w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">Fashion</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg text-center">
                        <div className="bg-green-100 w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">Beauty</span>
                      </div>
                    </div>
                    
                    <h2 className="font-semibold mb-3">Featured Products</h2>
                    <div className="space-y-3">
                      <div 
                        className="bg-white border rounded-lg p-3 flex items-start gap-3 cursor-pointer"
                        onClick={() => navigateTo("product")}
                      >
                        <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                          <div className="w-full h-full bg-green-200 flex items-center justify-center">
                            <span className="text-green-600 font-bold">BP</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-sm">Bamboo Paper Towels</h3>
                          <div className="flex items-center text-xs text-gray-500 mb-1">
                            <svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>92% less carbon</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-medium">$14.99</span>
                            <div className="px-2 py-1 bg-green-100 rounded-full text-xs text-green-700">
                              Eco-Friendly
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border rounded-lg p-3 flex items-start gap-3">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                          <div className="w-full h-full bg-blue-200 flex items-center justify-center">
                            <span className="text-blue-600 font-bold">WB</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium text-sm">Reusable Water Bottle</h3>
                          <div className="flex items-center text-xs text-gray-500 mb-1">
                            <svg className="w-3 h-3 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Saves 167 plastic bottles</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-medium">$24.99</span>
                            <div className="px-2 py-1 bg-blue-100 rounded-full text-xs text-blue-700">
                              Zero-Waste
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto border-t flex justify-around p-3">
                    <button className="p-2 text-green-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </button>
                    <button
                      className="p-2 text-gray-400"
                      onClick={() => navigateTo("browse")}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                    <button
                      className="p-2 text-gray-400"
                      onClick={() => navigateTo("cart")}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
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

            {activeScreen === "browse" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 flex items-center gap-3 bg-green-600 text-white">
                    <button onClick={() => navigateTo("home")}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h1 className="text-lg font-medium">Browse Products</h1>
                  </header>
                  
                  <div className="p-4">
                    <div className="relative mb-4">
                      <input
                        type="text"
                        placeholder="Search sustainable products..."
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
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs whitespace-nowrap">All</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs whitespace-nowrap">Home</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs whitespace-nowrap">Kitchen</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs whitespace-nowrap">Beauty</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs whitespace-nowrap">Food</span>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-lg mb-4">
                      <div className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <h3 className="font-semibold text-green-800">Eco-Impact Filters</h3>
                      </div>
                      <div className="flex gap-2 mb-1">
                        <span className="bg-white border border-green-200 px-2 py-1 rounded text-xs flex items-center">
                          <svg className="w-3 h-3 text-green-600 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Low Carbon
                        </span>
                        <span className="bg-white border border-green-200 px-2 py-1 rounded text-xs flex items-center">
                          <svg className="w-3 h-3 text-green-600 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Plastic-Free
                        </span>
                        <span className="bg-white border border-green-200 px-2 py-1 rounded text-xs flex items-center">
                          <svg className="w-3 h-3 text-green-600 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Fair Trade
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div 
                        className="border rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => navigateTo("product")}
                      >
                        <div className="w-full h-24 bg-green-200 flex items-center justify-center">
                          <span className="text-green-600 font-bold">BP</span>
                        </div>
                        <div className="p-2">
                          <div className="text-xs flex justify-between mb-1">
                            <span className="font-semibold">Bamboo Paper Towels</span>
                            <span className="text-green-700">$14.99</span>
                          </div>
                          <div className="bg-green-100 px-1.5 py-0.5 rounded text-xs inline-block text-green-700">
                            92% eco impact ↓
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <div className="w-full h-24 bg-blue-200 flex items-center justify-center">
                          <span className="text-blue-600 font-bold">WB</span>
                        </div>
                        <div className="p-2">
                          <div className="text-xs flex justify-between mb-1">
                            <span className="font-semibold">Reusable Water Bottle</span>
                            <span className="text-green-700">$24.99</span>
                          </div>
                          <div className="bg-blue-100 px-1.5 py-0.5 rounded text-xs inline-block text-blue-700">
                            Zero plastic
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <div className="w-full h-24 bg-yellow-200 flex items-center justify-center">
                          <span className="text-yellow-600 font-bold">SB</span>
                        </div>
                        <div className="p-2">
                          <div className="text-xs flex justify-between mb-1">
                            <span className="font-semibold">Solar Power Bank</span>
                            <span className="text-green-700">$39.99</span>
                          </div>
                          <div className="bg-yellow-100 px-1.5 py-0.5 rounded text-xs inline-block text-yellow-700">
                            Renewable energy
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <div className="w-full h-24 bg-purple-200 flex items-center justify-center">
                          <span className="text-purple-600 font-bold">CS</span>
                        </div>
                        <div className="p-2">
                          <div className="text-xs flex justify-between mb-1">
                            <span className="font-semibold">Cotton Shirt</span>
                            <span className="text-green-700">$34.99</span>
                          </div>
                          <div className="bg-purple-100 px-1.5 py-0.5 rounded text-xs inline-block text-purple-700">
                            Fair trade certified
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "product" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 flex items-center gap-3 bg-green-600 text-white">
                    <button onClick={() => navigateTo("browse")}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h1 className="text-lg font-medium">Product Details</h1>
                  </header>
                  
                  <div className="overflow-y-auto flex-1">
                    <div className="h-40 bg-green-200 flex items-center justify-center">
                      <span className="text-4xl font-bold text-green-600">BP</span>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-xl font-bold">Bamboo Paper Towels</h2>
                        <span className="text-lg font-bold text-green-700">$14.99</span>
                      </div>
                      
                      <div className="bg-green-100 inline-block px-2 py-1 rounded text-xs text-green-700 mb-4">
                        92% less carbon footprint
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        These reusable bamboo paper towels are an eco-friendly alternative to traditional paper towels. Each roll replaces up to 60 conventional rolls, reducing waste and saving trees.
                      </p>
                      
                      <div className="mb-4">
                        <button 
                          className="w-full bg-green-600 text-white font-medium py-2 rounded-lg mb-2"
                          onClick={() => navigateTo("impact")}
                        >
                          View Environmental Impact
                        </button>
                        <button 
                          className="w-full border border-green-600 text-green-600 font-medium py-2 rounded-lg"
                          onClick={() => navigateTo("cart")}
                        >
                          Add to Cart
                        </button>
                      </div>
                      
                      <div className="border-t pt-4 mb-4">
                        <h3 className="font-semibold mb-2">Product Features</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Made from sustainable bamboo fibers
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Reusable up to 100 times per sheet
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Biodegradable and compostable
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Machine washable (cold water)
                          </li>
                        </ul>
                      </div>
                      
                      <div className="border-t pt-4">
                        <h3 className="font-semibold mb-2">Supply Chain</h3>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Source Location</span>
                            <span className="text-sm text-gray-600">Yunnan, China</span>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Manufacturing</span>
                            <span className="text-sm text-gray-600">Vietnam</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Distribution</span>
                            <span className="text-sm text-gray-600">Regional Centers</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "impact" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 flex items-center gap-3 bg-green-600 text-white">
                    <button onClick={() => navigateTo("product")}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h1 className="text-lg font-medium">Environmental Impact</h1>
                  </header>
                  
                  <div className="p-4 overflow-y-auto flex-1">
                    <div className="text-center mb-6">
                      <h2 className="text-lg font-bold mb-1">Bamboo Paper Towels</h2>
                      <p className="text-sm text-gray-600">Environmental impact breakdown</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <h3 className="font-semibold text-green-800 flex items-center mb-3">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                        </svg>
                        Impact Comparison
                      </h3>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Carbon Footprint</span>
                            <span className="text-sm font-medium text-green-700">-92%</span>
                          </div>
                          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: '8%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>This Product</span>
                            <span>Conventional Paper Towels</span>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Water Usage</span>
                            <span className="text-sm font-medium text-green-700">-87%</span>
                          </div>
                          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: '13%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>This Product</span>
                            <span>Conventional Paper Towels</span>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Waste Reduction</span>
                            <span className="text-sm font-medium text-green-700">-95%</span>
                          </div>
                          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 rounded-full" style={{ width: '5%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>This Product</span>
                            <span>Conventional Paper Towels</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h3 className="font-semibold mb-1 flex items-center">
                          <svg className="w-4 h-4 text-green-600 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          What You're Avoiding
                        </h3>
                        <p className="text-sm text-gray-600">
                          By choosing this product instead of conventional paper towels, you're preventing approximately 10 lbs of paper waste, saving 7 gallons of water, and reducing carbon emissions equivalent to driving 13 miles in an average car.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h3 className="font-semibold mb-1 flex items-center">
                          <svg className="w-4 h-4 text-green-600 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Certification
                        </h3>
                        <div className="flex gap-2 mb-1">
                          <span className="bg-white border border-green-200 px-2 py-1 rounded text-xs flex items-center">
                            <svg className="w-3 h-3 text-green-600 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            FSC Certified
                          </span>
                          <span className="bg-white border border-green-200 px-2 py-1 rounded text-xs flex items-center">
                            <svg className="w-3 h-3 text-green-600 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Compostable
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      className="w-full bg-green-600 text-white font-medium py-2 rounded-lg mt-6"
                      onClick={() => navigateTo("cart")}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "cart" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 flex items-center gap-3 bg-green-600 text-white">
                    <button onClick={() => navigateTo("home")}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h1 className="text-lg font-medium">Your Cart</h1>
                  </header>
                  
                  <div className="p-4 flex-1">
                    <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg mb-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <div className="font-medium text-sm">Eco Impact of Your Cart</div>
                          <div className="text-xs text-green-600">92% less carbon than conventional</div>
                        </div>
                      </div>
                      <button className="text-green-600 text-xs font-medium">View</button>
                    </div>
                    
                    <div className="border rounded-lg mb-4 overflow-hidden">
                      <div className="flex p-3 border-b">
                        <div className="w-16 h-16 bg-green-200 rounded-lg mr-3 flex items-center justify-center">
                          <span className="text-green-600 font-bold">BP</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <h3 className="font-medium">Bamboo Paper Towels</h3>
                            <button>
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                          <div className="flex justify-between">
                            <div className="bg-green-100 px-1.5 py-0.5 rounded text-xs inline-block text-green-700">
                              92% eco impact ↓
                            </div>
                            <div className="flex items-center">
                              <button className="w-6 h-6 bg-gray-100 rounded-l flex items-center justify-center text-gray-600">-</button>
                              <span className="px-2">1</span>
                              <button className="w-6 h-6 bg-gray-100 rounded-r flex items-center justify-center text-gray-600">+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 bg-gray-50 flex justify-between">
                        <span className="text-sm text-gray-500">Price</span>
                        <span className="font-medium">$14.99</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">Recommended to Pair With</h3>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        <div className="flex-shrink-0 w-36 border rounded-lg overflow-hidden">
                          <div className="h-24 bg-blue-200 flex items-center justify-center">
                            <span className="text-blue-600 font-bold">BV</span>
                          </div>
                          <div className="p-2">
                            <div className="text-xs font-medium mb-1">Bamboo Vinegar Cleaner</div>
                            <div className="flex justify-between text-xs">
                              <span className="text-green-700">$9.99</span>
                              <span className="bg-blue-100 px-1 rounded text-blue-700">+Add</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0 w-36 border rounded-lg overflow-hidden">
                          <div className="h-24 bg-purple-200 flex items-center justify-center">
                            <span className="text-purple-600 font-bold">EC</span>
                          </div>
                          <div className="p-2">
                            <div className="text-xs font-medium mb-1">Eco Cleaning Kit</div>
                            <div className="flex justify-between text-xs">
                              <span className="text-green-700">$19.99</span>
                              <span className="bg-blue-100 px-1 rounded text-blue-700">+Add</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t p-4">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Subtotal</span>
                        <span>$14.99</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Shipping</span>
                        <span>$4.99</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>$19.98</span>
                      </div>
                    </div>
                    
                    <button 
                      className="w-full bg-green-600 text-white font-medium py-3 rounded-lg"
                      onClick={() => navigateTo("home")}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 text-center">
          <h3 className="font-semibold text-lg mb-2">EcoShop Mobile App</h3>
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
              EcoShop - Sustainable Marketplace
            </div>
            <div className="w-24"></div>
          </div>
          
          <div className="rounded-b-sm overflow-hidden bg-white">
            {activeScreen === "home" && (
              <div className="min-h-[500px]">
                <header className="bg-green-600 p-5 text-white">
                  <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                      <h1 className="text-2xl font-bold">EcoShop</h1>
                      <div className="flex items-center space-x-6">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search sustainable products..."
                            className="bg-green-700 text-white px-4 py-2 rounded-lg w-64 text-sm placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white"
                          />
                          <svg className="w-5 h-5 absolute right-3 top-2.5 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <button className="text-white" onClick={() => navigateTo("browse")}>Browse</button>
                        <button className="text-white">About</button>
                        <button className="text-white" onClick={() => navigateTo("cart")}>Cart</button>
                        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium">SM</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                      <h2 className="text-xl font-bold mb-2">Shop with Environmental Awareness</h2>
                      <p className="text-green-100 mb-4 max-w-xl">Discover products with transparent environmental impact data. Every purchase you make helps build a more sustainable future.</p>
                      <button 
                        className="bg-white text-green-700 px-4 py-2 rounded-lg font-medium"
                        onClick={() => navigateTo("browse")}
                      >
                        Explore Sustainable Products
                      </button>
                    </div>
                  </div>
                </header>
                
                <div className="max-w-6xl mx-auto py-8 px-4">
                  <div className="grid grid-cols-3 gap-8 mb-12">
                    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-bold mb-2">Transparent Impact Data</h3>
                      <p className="text-gray-600 text-sm">See the real environmental impact of your purchases with detailed metrics on carbon footprint, water usage, and ethical practices.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="font-bold mb-2">Verified Suppliers</h3>
                      <p className="text-gray-600 text-sm">All products are sourced from suppliers committed to sustainable practices, fair labor, and ethical business operations.</p>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                      <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <h3 className="font-bold mb-2">Supply Chain Transparency</h3>
                      <p className="text-gray-600 text-sm">View detailed information about where products come from, how they're made, and their journey to your doorstep.</p>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
                  <div className="grid grid-cols-4 gap-6 mb-8">
                    <div 
                      className="border rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => navigateTo("product")}
                    >
                      <div className="h-40 bg-green-200 flex items-center justify-center">
                        <span className="text-green-600 font-bold text-xl">BP</span>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">Bamboo Paper Towels</h3>
                            <div className="text-green-600 text-lg font-bold">$14.99</div>
                          </div>
                          <div className="bg-green-100 px-2 py-1 rounded text-xs text-green-700">
                            92% less carbon
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">Reusable, washable paper towel alternative that replaces up to 60 conventional rolls.</p>
                        <button 
                          className="w-full bg-green-600 text-white py-2 rounded text-sm font-medium"
                          onClick={() => navigateTo("product")}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <div className="h-40 bg-blue-200 flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xl">WB</span>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">Reusable Water Bottle</h3>
                            <div className="text-green-600 text-lg font-bold">$24.99</div>
                          </div>
                          <div className="bg-blue-100 px-2 py-1 rounded text-xs text-blue-700">
                            Zero plastic
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">Stainless steel water bottle that eliminates the need for single-use plastic bottles.</p>
                        <button className="w-full bg-green-600 text-white py-2 rounded text-sm font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <div className="h-40 bg-yellow-200 flex items-center justify-center">
                        <span className="text-yellow-600 font-bold text-xl">SB</span>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">Solar Power Bank</h3>
                            <div className="text-green-600 text-lg font-bold">$39.99</div>
                          </div>
                          <div className="bg-yellow-100 px-2 py-1 rounded text-xs text-yellow-700">
                            Renewable energy
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">Charge your devices using clean solar energy with this portable power bank.</p>
                        <button className="w-full bg-green-600 text-white py-2 rounded text-sm font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <div className="h-40 bg-purple-200 flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-xl">CS</span>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold">Organic Cotton Shirt</h3>
                            <div className="text-green-600 text-lg font-bold">$34.99</div>
                          </div>
                          <div className="bg-purple-100 px-2 py-1 rounded text-xs text-purple-700">
                            Fair trade
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">Ethically produced organic cotton t-shirt with no harmful dyes or chemicals.</p>
                        <button className="w-full bg-green-600 text-white py-2 rounded text-sm font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <button 
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium"
                      onClick={() => navigateTo("browse")}
                    >
                      View All Products
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {activeScreen === "browse" && (
              <div className="min-h-[500px]">
                <header className="bg-green-600 p-5 text-white">
                  <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 
                      className="text-2xl font-bold cursor-pointer"
                      onClick={() => navigateTo("home")}
                    >
                      EcoShop
                    </h1>
                    <div className="flex items-center space-x-6">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search sustainable products..."
                          className="bg-green-700 text-white px-4 py-2 rounded-lg w-64 text-sm placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <svg className="w-5 h-5 absolute right-3 top-2.5 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <button className="text-white">Browse</button>
                      <button className="text-white">About</button>
                      <button 
                        className="text-white"
                        onClick={() => navigateTo("cart")}
                      >
                        Cart
                      </button>
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">SM</span>
                      </div>
                    </div>
                  </div>
                </header>
                
                <div className="max-w-6xl mx-auto py-8 px-4">
                  <div className="flex gap-8">
                    <div className="w-1/4">
                      <div className="bg-green-50 p-4 rounded-lg mb-6">
                        <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                          Environmental Impact
                        </h3>
                        
                        <div className="space-y-2 mb-3">
                          <label className="flex items-center cursor-pointer">
                            <input type="checkbox" className="rounded text-green-600 focus:ring-green-500 mr-2" />
                            <span className="text-sm">Carbon Neutral</span>
                          </label>
                          <label className="flex items-center cursor-pointer">
                            <input type="checkbox" className="rounded text-green-600 focus:ring-green-500 mr-2" />
                            <span className="text-sm">Plastic-Free Packaging</span>
                          </label>
                          <label className="flex items-center cursor-pointer">
                            <input type="checkbox" className="rounded text-green-600 focus:ring-green-500 mr-2" />
                            <span className="text-sm">Zero Waste</span>
                          </label>
                          <label className="flex items-center cursor-pointer">
                            <input type="checkbox" className="rounded text-green-600 focus:ring-green-500 mr-2" />
                            <span className="text-sm">Water Conservative</span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 mb-6">
                        <h3 className="font-semibold mb-3">Product Categories</h3>
                        <div className="space-y-2">
                          <label className="flex items-center cursor-pointer">
                            <input type="checkbox" className="rounded text-green-600 focus:ring-green-500 mr-2" />
                            <span className="text-sm">Home & Kitchen (24)</span>
                          </label>
                          <label className="flex items-center cursor-pointer">
                            <input type="checkbox" className="rounded text-green-600 focus:ring-green-500 mr-2" />
                            <span className="text-sm">Personal Care (18)</span>
                          </label>
                          <label className="flex items-center cursor-pointer">
                            <input type="checkbox" className="rounded text-green-600 focus:ring-green-500 mr-2" />
                            <span className="text-sm">Food & Beverages (12)</span>
                          </label>
                          <label className="flex items-center cursor-pointer">
                            <input type="checkbox" className="rounded text-green-600 focus:ring-green-500 mr-2" />
                            <span className="text-sm">Fashion (9)</span>
                          </label>
                          <label className="flex items-center cursor-pointer">
                            <input type="checkbox" className="rounded text-green-600 focus:ring-green-500 mr-2" />
                            <span className="text-sm">Electronics (7)</span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h3 className="font-semibold mb-3">Price Range</h3>
                        <div className="flex gap-2 mb-3">
                          <input 
                            type="text" 
                            placeholder="Min" 
                            className="w-full border rounded p-2 text-sm"
                          />
                          <input 
                            type="text" 
                            placeholder="Max" 
                            className="w-full border rounded p-2 text-sm"
                          />
                        </div>
                        <button className="w-full bg-green-600 text-white py-2 rounded text-sm">
                          Apply Filter
                        </button>
                      </div>
                    </div>
                    
                    <div className="w-3/4">
                      <div className="mb-6 flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Browse Sustainable Products</h2>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">Sort by:</span>
                          <select className="border rounded p-1 text-sm">
                            <option>Featured</option>
                            <option>Environmental Impact</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-6">
                        <div 
                          className="border rounded-lg overflow-hidden cursor-pointer"
                          onClick={() => navigateTo("product")}
                        >
                          <div className="h-40 bg-green-200 flex items-center justify-center">
                            <span className="text-green-600 font-bold text-xl">BP</span>
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold">Bamboo Paper Towels</h3>
                                <div className="text-green-600 font-bold">$14.99</div>
                              </div>
                              <div className="bg-green-100 px-2 py-1 rounded text-xs text-green-700">
                                92% less carbon
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">Reusable, washable paper towel alternative that replaces up to 60 conventional rolls.</p>
                            <button 
                              className="w-full bg-green-600 text-white py-2 rounded text-sm font-medium"
                              onClick={() => navigateTo("product")}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg overflow-hidden">
                          <div className="h-40 bg-blue-200 flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-xl">WB</span>
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold">Reusable Water Bottle</h3>
                                <div className="text-green-600 font-bold">$24.99</div>
                              </div>
                              <div className="bg-blue-100 px-2 py-1 rounded text-xs text-blue-700">
                                Zero plastic
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">Stainless steel water bottle that eliminates the need for single-use plastic bottles.</p>
                            <button className="w-full bg-green-600 text-white py-2 rounded text-sm font-medium">
                              View Details
                            </button>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg overflow-hidden">
                          <div className="h-40 bg-yellow-200 flex items-center justify-center">
                            <span className="text-yellow-600 font-bold text-xl">SB</span>
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold">Solar Power Bank</h3>
                                <div className="text-green-600 font-bold">$39.99</div>
                              </div>
                              <div className="bg-yellow-100 px-2 py-1 rounded text-xs text-yellow-700">
                                Renewable energy
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">Charge your devices using clean solar energy with this portable power bank.</p>
                            <button className="w-full bg-green-600 text-white py-2 rounded text-sm font-medium">
                              View Details
                            </button>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg overflow-hidden">
                          <div className="h-40 bg-purple-200 flex items-center justify-center">
                            <span className="text-purple-600 font-bold text-xl">CS</span>
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold">Organic Cotton Shirt</h3>
                                <div className="text-green-600 font-bold">$34.99</div>
                              </div>
                              <div className="bg-purple-100 px-2 py-1 rounded text-xs text-purple-700">
                                Fair trade
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">Ethically produced organic cotton t-shirt with no harmful dyes or chemicals.</p>
                            <button className="w-full bg-green-600 text-white py-2 rounded text-sm font-medium">
                              View Details
                            </button>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg overflow-hidden">
                          <div className="h-40 bg-red-200 flex items-center justify-center">
                            <span className="text-red-600 font-bold text-xl">BB</span>
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold">Bamboo Toothbrush</h3>
                                <div className="text-green-600 font-bold">$7.99</div>
                              </div>
                              <div className="bg-red-100 px-2 py-1 rounded text-xs text-red-700">
                                Biodegradable
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">Bamboo toothbrush with plant-based bristles that are fully compostable.</p>
                            <button className="w-full bg-green-600 text-white py-2 rounded text-sm font-medium">
                              View Details
                            </button>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg overflow-hidden">
                          <div className="h-40 bg-orange-200 flex items-center justify-center">
                            <span className="text-orange-600 font-bold text-xl">SC</span>
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold">Shampoo Concentrate</h3>
                                <div className="text-green-600 font-bold">$12.99</div>
                              </div>
                              <div className="bg-orange-100 px-2 py-1 rounded text-xs text-orange-700">
                                Waste reduction
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">Concentrated shampoo formula that uses 80% less water and minimal packaging.</p>
                            <button className="w-full bg-green-600 text-white py-2 rounded text-sm font-medium">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center mt-8">
                        <nav className="flex items-center">
                          <button className="px-3 py-1 rounded border mr-1 text-gray-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button className="px-3 py-1 rounded border mx-1 bg-green-600 text-white">1</button>
                          <button className="px-3 py-1 rounded border mx-1 text-gray-600">2</button>
                          <button className="px-3 py-1 rounded border mx-1 text-gray-600">3</button>
                          <button className="px-3 py-1 rounded border ml-1 text-gray-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeScreen === "product" && (
              <div className="min-h-[500px]">
                <header className="bg-green-600 p-5 text-white">
                  <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 
                      className="text-2xl font-bold cursor-pointer"
                      onClick={() => navigateTo("home")}
                    >
                      EcoShop
                    </h1>
                    <div className="flex items-center space-x-6">
                      <button 
                        className="text-white"
                        onClick={() => navigateTo("browse")}
                      >
                        Browse
                      </button>
                      <button className="text-white">About</button>
                      <button 
                        className="text-white"
                        onClick={() => navigateTo("cart")}
                      >
                        Cart
                      </button>
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">SM</span>
                      </div>
                    </div>
                  </div>
                </header>
                
                <div className="max-w-6xl mx-auto py-8 px-4">
                  <div className="mb-4">
                    <a 
                      href="#" 
                      className="text-green-600 flex items-center"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo("browse");
                      }}
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to Products
                    </a>
                  </div>
                  
                  <div className="flex gap-8">
                    <div className="w-1/2 bg-green-200/30 rounded-lg flex items-center justify-center h-[400px]">
                      <span className="text-green-600 font-bold text-6xl">BP</span>
                    </div>
                    
                    <div className="w-1/2">
                      <h1 className="text-3xl font-bold mb-2">Bamboo Paper Towels</h1>
                      <div className="flex gap-2 mb-4">
                        <div className="bg-green-100 px-2 py-1 rounded text-sm text-green-700 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          92% less carbon
                        </div>
                        <div className="bg-blue-100 px-2 py-1 rounded text-sm text-blue-700">
                          Biodegradable
                        </div>
                        <div className="bg-yellow-100 px-2 py-1 rounded text-sm text-yellow-700">
                          Reusable
                        </div>
                      </div>
                      
                      <div className="text-3xl font-bold text-green-700 mb-4">$14.99</div>
                      
                      <p className="text-gray-600 mb-6">
                        These reusable bamboo paper towels are an eco-friendly alternative to traditional paper towels. Each roll replaces up to 60 conventional rolls, reducing waste and saving trees. They're washable, biodegradable, and made from sustainable bamboo fibers.
                      </p>
                      
                      <div className="flex gap-4 mb-6">
                        <div className="flex items-center border rounded-lg">
                          <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100">-</button>
                          <span className="w-10 h-10 flex items-center justify-center">1</span>
                          <button className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100">+</button>
                        </div>
                        <button 
                          className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700"
                          onClick={() => navigateTo("cart")}
                        >
                          Add to Cart
                        </button>
                        <button 
                          className="flex-1 border border-green-600 text-green-600 py-2 px-4 rounded-lg font-medium hover:bg-green-50"
                          onClick={() => navigateTo("impact")}
                        >
                          View Environmental Impact
                        </button>
                      </div>
                      
                      <div className="border-t pt-6">
                        <h3 className="font-semibold mb-3">Product Features</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                          <li>Made from sustainable bamboo fibers</li>
                          <li>Reusable up to 100 times per sheet</li>
                          <li>Machine washable (cold water)</li>
                          <li>Biodegradable and compostable</li>
                          <li>One roll replaces up to 60 conventional paper towel rolls</li>
                          <li>Reduces household waste by up to 3,000 gallons per year</li>
                        </ul>
                        
                        <h3 className="font-semibold mb-3">Supply Chain Transparency</h3>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex mb-4">
                            <div className="w-1/3">
                              <h4 className="text-sm font-medium mb-1">Raw Materials</h4>
                              <p className="text-sm text-gray-600">Bamboo grown in Yunnan, China</p>
                            </div>
                            <div className="w-1/3">
                              <h4 className="text-sm font-medium mb-1">Manufacturing</h4>
                              <p className="text-sm text-gray-600">Processed in Vietnam using low-impact methods</p>
                            </div>
                            <div className="w-1/3">
                              <h4 className="text-sm font-medium mb-1">Distribution</h4>
                              <p className="text-sm text-gray-600">Shipped via carbon-offset freight to regional warehouses</p>
                            </div>
                          </div>
                          <button className="text-green-600 text-sm font-medium flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            View Full Supply Chain Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeScreen === "impact" && (
              <div className="min-h-[500px]">
                <header className="bg-green-600 p-5 text-white">
                  <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 
                      className="text-2xl font-bold cursor-pointer"
                      onClick={() => navigateTo("home")}
                    >
                      EcoShop
                    </h1>
                    <div className="flex items-center space-x-6">
                      <button 
                        className="text-white"
                        onClick={() => navigateTo("browse")}
                      >
                        Browse
                      </button>
                      <button className="text-white">About</button>
                      <button 
                        className="text-white"
                        onClick={() => navigateTo("cart")}
                      >
                        Cart
                      </button>
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">SM</span>
                      </div>
                    </div>
                  </div>
                </header>
                
                <div className="max-w-6xl mx-auto py-8 px-4">
                  <div className="mb-4">
                    <a 
                      href="#" 
                      className="text-green-600 flex items-center"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo("product");
                      }}
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to Product
                    </a>
                  </div>
                  
                  <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold mb-2">Environmental Impact Assessment</h1>
                    <p className="text-xl text-gray-600">Bamboo Paper Towels</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-10 mb-10">
                    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                      <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                        </svg>
                        Impact Comparison
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between mb-2">
                            <h3 className="font-semibold">Carbon Footprint</h3>
                            <span className="font-bold text-green-700">-92%</span>
                          </div>
                          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: '8%' }}></div>
                          </div>
                          <div className="flex justify-between text-sm text-gray-500 mt-1">
                            <span>This Product</span>
                            <span>Conventional Paper Towels</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            Using one roll of bamboo paper towels instead of conventional paper towels saves approximately 25 kg of CO₂ emissions, equivalent to driving an average car for 63 miles.
                          </p>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <h3 className="font-semibold">Water Usage</h3>
                            <span className="font-bold text-green-700">-87%</span>
                          </div>
                          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: '13%' }}></div>
                          </div>
                          <div className="flex justify-between text-sm text-gray-500 mt-1">
                            <span>This Product</span>
                            <span>Conventional Paper Towels</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            Manufacturing bamboo paper towels uses 87% less water compared to conventional paper towels, saving approximately 130 gallons of water per roll.
                          </p>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <h3 className="font-semibold">Waste Reduction</h3>
                            <span className="font-bold text-green-700">-95%</span>
                          </div>
                          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 rounded-full" style={{ width: '5%' }}></div>
                          </div>
                          <div className="flex justify-between text-sm text-gray-500 mt-1">
                            <span>This Product</span>
                            <span>Conventional Paper Towels</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            One roll of bamboo paper towels replaces up to 60 conventional paper towel rolls, reducing household waste by approximately 3,000 gallons per year.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="bg-green-50 p-6 rounded-lg border border-green-100 mb-6">
                        <h2 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          Lifetime Impact
                        </h2>
                        
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-green-700 mb-1">60</div>
                            <p className="text-sm text-gray-600">Rolls Replaced</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-green-700 mb-1">7.8K</div>
                            <p className="text-sm text-gray-600">Liters of Water Saved</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-green-700 mb-1">25kg</div>
                            <p className="text-sm text-gray-600">CO₂ Reduction</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-600">
                          Over its lifetime, one roll of bamboo paper towels prevents approximately 10 lbs of paper waste, saves 7 gallons of water, and reduces carbon emissions equivalent to driving 13 miles in an average car.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg border">
                        <h2 className="text-xl font-bold mb-4 flex items-center">
                          <svg className="w-6 h-6 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Certifications
                        </h2>
                        
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-2">
                              <span className="text-green-700 font-bold">FSC</span>
                            </div>
                            <p className="text-sm font-medium">FSC Certified</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-2">
                              <span className="text-green-700 font-bold">COMP</span>
                            </div>
                            <p className="text-sm font-medium">Compostable</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-2">
                              <span className="text-green-700 font-bold">BIO</span>
                            </div>
                            <p className="text-sm font-medium">Biodegradable</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-center">
                          <button 
                            className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium"
                            onClick={() => navigateTo("cart")}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeScreen === "cart" && (
              <div className="min-h-[500px]">
                <header className="bg-green-600 p-5 text-white">
                  <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <h1 
                      className="text-2xl font-bold cursor-pointer"
                      onClick={() => navigateTo("home")}
                    >
                      EcoShop
                    </h1>
                    <div className="flex items-center space-x-6">
                      <button 
                        className="text-white"
                        onClick={() => navigateTo("browse")}
                      >
                        Browse
                      </button>
                      <button className="text-white">About</button>
                      <button className="text-white">Cart</button>
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">SM</span>
                      </div>
                    </div>
                  </div>
                </header>
                
                <div className="max-w-6xl mx-auto py-8 px-4">
                  <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
                  
                  <div className="flex gap-8">
                    <div className="w-2/3">
                      <div className="bg-green-50 p-4 rounded-lg mb-6 flex items-center">
                        <svg className="w-10 h-10 text-green-600 mr-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <h3 className="font-semibold">Environmental Impact of Your Cart</h3>
                          <p className="text-green-700">Your selections reduce carbon emissions by 92% compared to conventional alternatives!</p>
                        </div>
                      </div>
                      
                      <div className="bg-white border rounded-lg overflow-hidden mb-6">
                        <table className="w-full">
                          <thead className="bg-gray-50 border-b">
                            <tr>
                              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Product</th>
                              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Quantity</th>
                              <th className="px-6 py-3 text-right text-sm font-medium text-gray-600">Price</th>
                              <th className="px-6 py-3 text-right text-sm font-medium text-gray-600"></th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr>
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <div className="w-16 h-16 bg-green-200 rounded flex items-center justify-center mr-4">
                                    <span className="text-green-600 font-bold">BP</span>
                                  </div>
                                  <div>
                                    <div className="font-medium">Bamboo Paper Towels</div>
                                    <div className="bg-green-100 px-2 py-0.5 rounded text-xs inline-block text-green-700">
                                      92% eco impact ↓
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4">
                                <div className="flex items-center justify-center">
                                  <button className="w-8 h-8 bg-gray-100 rounded-l flex items-center justify-center text-gray-600 hover:bg-gray-200">-</button>
                                  <div className="w-10 h-8 flex items-center justify-center border-t border-b">1</div>
                                  <button className="w-8 h-8 bg-gray-100 rounded-r flex items-center justify-center text-gray-600 hover:bg-gray-200">+</button>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-right">
                                <div className="font-medium">$14.99</div>
                              </td>
                              <td className="px-6 py-4 text-right">
                                <button className="text-gray-400 hover:text-gray-600">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="bg-white border rounded-lg p-6">
                        <h3 className="font-semibold mb-4">Frequently Bought Together</h3>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="border rounded-lg overflow-hidden">
                            <div className="h-32 bg-blue-200 flex items-center justify-center">
                              <span className="text-blue-600 font-bold">BV</span>
                            </div>
                            <div className="p-3">
                              <div className="font-medium text-sm mb-1">Bamboo Vinegar Cleaner</div>
                              <div className="flex justify-between items-center">
                                <div className="text-green-700 font-medium">$9.99</div>
                                <button className="bg-green-600 text-white text-xs py-1 px-2 rounded">Add +</button>
                              </div>
                            </div>
                          </div>
                          <div className="border rounded-lg overflow-hidden">
                            <div className="h-32 bg-purple-200 flex items-center justify-center">
                              <span className="text-purple-600 font-bold">EC</span>
                            </div>
                            <div className="p-3">
                              <div className="font-medium text-sm mb-1">Eco Cleaning Kit</div>
                              <div className="flex justify-between items-center">
                                <div className="text-green-700 font-medium">$19.99</div>
                                <button className="bg-green-600 text-white text-xs py-1 px-2 rounded">Add +</button>
                              </div>
                            </div>
                          </div>
                          <div className="border rounded-lg overflow-hidden">
                            <div className="h-32 bg-red-200 flex items-center justify-center">
                              <span className="text-red-600 font-bold">BB</span>
                            </div>
                            <div className="p-3">
                              <div className="font-medium text-sm mb-1">Bamboo Toothbrush</div>
                              <div className="flex justify-between items-center">
                                <div className="text-green-700 font-medium">$7.99</div>
                                <button className="bg-green-600 text-white text-xs py-1 px-2 rounded">Add +</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-1/3">
                      <div className="bg-white border rounded-lg p-6 sticky top-6">
                        <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
                        
                        <div className="space-y-3 mb-6">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Bamboo Paper Towels</span>
                            <span>$14.99</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span>$14.99</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Shipping</span>
                            <span>$4.99</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tax</span>
                            <span>$1.20</span>
                          </div>
                          <div className="border-t pt-3 flex justify-between font-semibold">
                            <span>Total</span>
                            <span>$21.18</span>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <button 
                            className="w-full bg-green-600 text-white py-3 rounded-lg font-medium mb-3"
                            onClick={() => navigateTo("home")}
                          >
                            Proceed to Checkout
                          </button>
                          <button 
                            className="w-full text-green-600 py-2 rounded-lg font-medium border border-green-600"
                            onClick={() => navigateTo("browse")}
                          >
                            Continue Shopping
                          </button>
                        </div>
                        
                        <div className="text-center text-sm text-gray-500">
                          <p>We offset carbon emissions from all deliveries at no extra cost to you.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 text-center">
          <h3 className="font-semibold text-lg mb-2">EcoShop Sustainable E-Commerce Platform</h3>
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