import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Monitor } from "lucide-react";

// Define screen types
type ScreenType = "home" | "transfer" | "confirmation" | "success" | "accounts" | "history";

export default function ZenPay() {
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
                  <header className="p-4 bg-blue-600 text-white">
                    <h1 className="text-xl font-bold">ZenPay</h1>
                  </header>
                  <div className="px-4 pt-4 pb-2 bg-blue-600 text-white">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-lg">Welcome, Samuel</h2>
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">SM</span>
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-10 p-3 rounded-lg mb-2">
                      <div className="flex justify-between items-center mb-1">
                        <div className="text-sm opacity-80">Available Balance</div>
                        <div className="text-sm opacity-80">Main Account</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xl font-bold">£2,458.65</div>
                        <button className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">SHOW DETAILS</button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="grid grid-cols-4 gap-3 mb-6">
                      <button 
                        className="flex flex-col items-center text-center" 
                        onClick={() => navigateTo("transfer")}
                      >
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-1">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </div>
                        <span className="text-xs">Send</span>
                      </button>
                      <button className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-1">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                          </svg>
                        </div>
                        <span className="text-xs">Request</span>
                      </button>
                      <button 
                        className="flex flex-col items-center text-center"
                        onClick={() => navigateTo("accounts")}
                      >
                        <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-1">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </div>
                        <span className="text-xs">Cards</span>
                      </button>
                      <button className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mb-1">
                          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-xs">Bills</span>
                      </button>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold">Recent Transactions</h3>
                        <button 
                          className="text-blue-600 text-sm font-medium"
                          onClick={() => navigateTo("history")}
                        >
                          See All
                        </button>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <div className="text-sm font-medium">Salary Payment</div>
                                <div className="text-xs text-gray-500">Today, 9:45 AM</div>
                              </div>
                              <div className="text-green-600 font-medium">+£2,350.00</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <div className="text-sm font-medium">Rental Payment</div>
                                <div className="text-xs text-gray-500">Yesterday, 2:30 PM</div>
                              </div>
                              <div className="text-red-600 font-medium">-£825.00</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <div className="text-sm font-medium">Supermarket</div>
                                <div className="text-xs text-gray-500">Yesterday, 10:15 AM</div>
                              </div>
                              <div className="text-red-600 font-medium">-£102.50</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto border-t flex justify-around p-3">
                    <button className="p-2 text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </button>
                    <button
                      className="p-2 text-gray-400"
                      onClick={() => navigateTo("history")}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </button>
                    <button
                      className="p-2 text-gray-400"
                      onClick={() => navigateTo("accounts")}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "transfer" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 flex items-center gap-3 border-b">
                    <button onClick={() => navigateTo("home")}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h1 className="text-lg font-medium">Send Money</h1>
                  </header>
                  
                  <div className="p-4 flex-1">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">From Account</label>
                        <div className="border rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-sm">Main Account</div>
                              <div className="text-xs text-gray-500">**** 4532</div>
                            </div>
                            <div className="font-medium">£16,458.65</div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">To</label>
                        <input 
                          type="text" 
                          placeholder="Account number or name" 
                          className="w-full border rounded-lg p-3"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Bank</label>
                        <select className="w-full border rounded-lg p-3">
                          <option>Barclays</option>
                          <option>HSBC</option>
                          <option>Lloyds Bank</option>
                          <option>Santander UK</option>
                          <option>NatWest</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Amount</label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-gray-500">£</span>
                          <input 
                            type="text" 
                            placeholder="0.00" 
                            className="w-full border rounded-lg p-3 pl-7"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Note (Optional)</label>
                        <input 
                          type="text" 
                          placeholder="What's this for?" 
                          className="w-full border rounded-lg p-3"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border-t">
                    <button 
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
                      onClick={() => navigateTo("confirmation")}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "confirmation" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 flex items-center gap-3 border-b">
                    <button onClick={() => navigateTo("transfer")}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h1 className="text-lg font-medium">Confirm Transfer</h1>
                  </header>
                  
                  <div className="p-4 flex-1">
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="flex justify-between items-center mb-4 border-b pb-3">
                        <div className="text-sm text-gray-500">Amount</div>
                        <div className="text-xl font-bold">£50,000.00</div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <div className="text-sm text-gray-500">From</div>
                          <div className="text-sm text-right">
                            <div>Main Account</div>
                            <div className="text-xs text-gray-500">**** 4532</div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between">
                          <div className="text-sm text-gray-500">To</div>
                          <div className="text-sm text-right">
                            <div>John Doe</div>
                            <div className="text-xs text-gray-500">0123456789 - Barclays</div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between">
                          <div className="text-sm text-gray-500">Fee</div>
                          <div className="text-sm">£0.00</div>
                        </div>
                        
                        <div className="flex justify-between">
                          <div className="text-sm text-gray-500">Note</div>
                          <div className="text-sm">Rent payment</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-1">Transaction PIN</label>
                      <div className="flex gap-2">
                        <input type="password" maxLength={1} className="w-full border rounded-lg p-3 text-center" />
                        <input type="password" maxLength={1} className="w-full border rounded-lg p-3 text-center" />
                        <input type="password" maxLength={1} className="w-full border rounded-lg p-3 text-center" />
                        <input type="password" maxLength={1} className="w-full border rounded-lg p-3 text-center" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border-t">
                    <button 
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
                      onClick={() => navigateTo("success")}
                    >
                      Confirm Transfer
                    </button>
                    <button 
                      className="w-full text-gray-600 py-2 mt-2 font-medium"
                      onClick={() => navigateTo("transfer")}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "success" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    
                    <h1 className="text-2xl font-bold mb-2">Transaction Successful!</h1>
                    <p className="text-gray-600 mb-6">Your money has been sent successfully.</p>
                    
                    <div className="w-full bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="flex justify-between items-center mb-3 pb-3 border-b">
                        <div className="text-gray-500">Amount</div>
                        <div className="font-bold text-xl">£50.00</div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="text-gray-500">From</div>
                          <div className="text-right">
                            <div>Main Account</div>
                            <div className="text-sm text-gray-500">**** 4532</div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="text-gray-500">To</div>
                          <div className="text-right">
                            <div>John Doe</div>
                            <div className="text-sm text-gray-500">Barclays</div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="text-gray-500">Date</div>
                          <div>{new Date().toLocaleDateString('en-GB')}</div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="text-gray-500">Reference</div>
                          <div>Rent payment</div>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium mb-3"
                      onClick={() => navigateTo("home")}
                    >
                      Back to Home
                    </button>
                    
                    <button className="text-blue-600 font-medium">
                      Share Receipt
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "accounts" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 flex items-center gap-3 border-b">
                    <button onClick={() => navigateTo("home")}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h1 className="text-lg font-medium">My Accounts</h1>
                  </header>
                  
                  <div className="p-4">
                    <div className="space-y-3 mb-6">
                      <div className="border rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <div className="font-medium">Main Account</div>
                          <div className="text-xs text-gray-500">**** 4532</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xl font-bold">£16,458.65</div>
                          <button className="text-blue-600 text-sm">Details</button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <div className="font-medium">Savings</div>
                          <div className="text-xs text-gray-500">**** 7890</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xl font-bold">£8,520.33</div>
                          <button className="text-blue-600 text-sm">Details</button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <div className="font-medium">USD Account</div>
                          <div className="text-xs text-gray-500">**** 1234</div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xl font-bold">$5,250.00</div>
                          <button className="text-blue-600 text-sm">Details</button>
                        </div>
                      </div>
                    </div>
                    
                    <h2 className="font-semibold mb-3">My Cards</h2>
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-4 text-white">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <div className="text-xs opacity-80 mb-1">Current Balance</div>
                            <div className="text-xl font-bold">£14,503.50</div>
                          </div>
                          <div className="text-white opacity-80">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H6zm3.99 2h2.02v4.059a.75.75 0 001.275.534l.854-.853a.75.75 0 111.06 1.06l-2.164 2.164a.75.75 0 01-1.06 0L9.815 6.8a.75.75 0 111.06-1.06l.855.853A.75.75 0 0013 4.06V2.999z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="mb-6">
                          <div className="text-xs opacity-80 mb-1">Card Number</div>
                          <div className="font-medium tracking-wider">**** **** **** 4532</div>
                        </div>
                        <div className="flex justify-between items-end">
                          <div>
                            <div className="text-xs opacity-80 mb-1">Card Holder</div>
                            <div className="font-medium">SAMUEL MBAH</div>
                          </div>
                          <div>
                            <div className="text-xs opacity-80 mb-1">Expires</div>
                            <div className="font-medium">05/26</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg p-4 text-white">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <div className="text-xs opacity-80 mb-1">Current Balance</div>
                            <div className="text-xl font-bold">$5,250.00</div>
                          </div>
                          <div className="text-white opacity-80">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H6zm3.99 2h2.02v4.059a.75.75 0 001.275.534l.854-.853a.75.75 0 111.06 1.06l-2.164 2.164a.75.75 0 01-1.06 0L9.815 6.8a.75.75 0 111.06-1.06l.855.853A.75.75 0 0013 4.06V2.999z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="mb-6">
                          <div className="text-xs opacity-80 mb-1">Card Number</div>
                          <div className="font-medium tracking-wider">**** **** **** 1234</div>
                        </div>
                        <div className="flex justify-between items-end">
                          <div>
                            <div className="text-xs opacity-80 mb-1">Card Holder</div>
                            <div className="font-medium">SAMUEL MBAH</div>
                          </div>
                          <div>
                            <div className="text-xs opacity-80 mb-1">Expires</div>
                            <div className="font-medium">09/25</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto p-4 border-t">
                    <button 
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
                      onClick={() => navigateTo("home")}
                    >
                      Add New Account
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeScreen === "history" && (
              <div className="w-full h-full">
                <div className="bg-white h-full flex flex-col">
                  <header className="p-4 flex items-center gap-3 border-b">
                    <button onClick={() => navigateTo("home")}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </button>
                    <h1 className="text-lg font-medium">Transaction History</h1>
                  </header>
                  
                  <div className="p-4">
                    <div className="mb-4">
                      <select className="w-full border rounded-lg p-2">
                        <option>All Accounts</option>
                        <option>Main Account</option>
                        <option>Savings</option>
                        <option>USD Account</option>
                      </select>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-sm">Today</h3>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <div className="text-sm font-medium">Salary Payment</div>
                                <div className="text-xs text-gray-500">9:45 AM</div>
                              </div>
                              <div className="text-green-600 font-medium">+£350,000.00</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-sm">Yesterday</h3>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <div className="text-sm font-medium">Rental Payment</div>
                                <div className="text-xs text-gray-500">2:30 PM</div>
                              </div>
                              <div className="text-red-600 font-medium">-£125,000.00</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <div className="text-sm font-medium">Supermarket</div>
                                <div className="text-xs text-gray-500">10:15 AM</div>
                              </div>
                              <div className="text-red-600 font-medium">-£15,450.75</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <div className="text-sm font-medium">Internet Subscription</div>
                                <div className="text-xs text-gray-500">8:00 AM</div>
                              </div>
                              <div className="text-red-600 font-medium">-£25,000.00</div>
                            </div>
                          </div>
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
          <h3 className="font-semibold text-lg mb-2">ZenPay Mobile Banking App</h3>
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
              ZenPay - Digital Banking
            </div>
            <div className="w-24"></div>
          </div>
          
          <div className="rounded-b-sm overflow-hidden bg-white">
            {activeScreen === "home" && (
              <div className="min-h-[500px]">
                <header className="bg-blue-600 p-5 text-white">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h1 className="text-2xl font-bold">ZenPay</h1>
                    </div>
                    <div className="flex items-center space-x-6">
                      <button className="text-white">Home</button>
                      <button className="text-white opacity-80">Transactions</button>
                      <button className="text-white opacity-80">Services</button>
                      <button className="text-white opacity-80">Support</button>
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">SM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6">
                    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                      <div className="text-sm opacity-80 mb-1">Main Account</div>
                      <div className="text-xl font-bold mb-3">£2,458,250.65</div>
                      <div className="text-xs opacity-80">**** 4532</div>
                    </div>
                    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                      <div className="text-sm opacity-80 mb-1">Savings</div>
                      <div className="text-xl font-bold mb-3">£785,120.33</div>
                      <div className="text-xs opacity-80">**** 7890</div>
                    </div>
                    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                      <div className="text-sm opacity-80 mb-1">USD Account</div>
                      <div className="text-xl font-bold mb-3">$5,250.00</div>
                      <div className="text-xs opacity-80">**** 1234</div>
                    </div>
                  </div>
                </header>
                
                <div className="p-6">
                  <div className="flex justify-between mb-8">
                    <div className="w-3/5">
                      <div className="bg-white shadow-md rounded-lg p-5 mb-8">
                        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                        <div className="grid grid-cols-4 gap-4">
                          <button 
                            className="flex flex-col items-center text-center" 
                            onClick={() => navigateTo("transfer")}
                          >
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-1">
                              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                              </svg>
                            </div>
                            <span className="text-sm">Send Money</span>
                          </button>
                          <button className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-1">
                              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                              </svg>
                            </div>
                            <span className="text-sm">Request</span>
                          </button>
                          <button 
                            className="flex flex-col items-center text-center"
                            onClick={() => navigateTo("accounts")}
                          >
                            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-1">
                              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                              </svg>
                            </div>
                            <span className="text-sm">Cards</span>
                          </button>
                          <button className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mb-1">
                              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <span className="text-sm">Pay Bills</span>
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h2 className="text-lg font-semibold">Recent Transactions</h2>
                          <button 
                            className="text-blue-600 text-sm font-medium"
                            onClick={() => navigateTo("history")}
                          >
                            View All
                          </button>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <div>
                                  <div className="font-medium">Salary Payment</div>
                                  <div className="text-sm text-gray-500">Today, 9:45 AM</div>
                                </div>
                                <div className="text-green-600 font-medium">+£350,000.00</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <div>
                                  <div className="font-medium">Rental Payment</div>
                                  <div className="text-sm text-gray-500">Yesterday, 2:30 PM</div>
                                </div>
                                <div className="text-red-600 font-medium">-£125,000.00</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <div>
                                  <div className="font-medium">Supermarket</div>
                                  <div className="text-sm text-gray-500">Yesterday, 10:15 AM</div>
                                </div>
                                <div className="text-red-600 font-medium">-£15,450.75</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="w-2/5 pl-6">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-5 text-white mb-6">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <div className="text-sm opacity-80 mb-1">Current Balance</div>
                            <div className="text-2xl font-bold">£1,450,325.50</div>
                          </div>
                          <div className="text-white opacity-80">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H6zm3.99 2h2.02v4.059a.75.75 0 001.275.534l.854-.853a.75.75 0 111.06 1.06l-2.164 2.164a.75.75 0 01-1.06 0L9.815 6.8a.75.75 0 111.06-1.06l.855.853A.75.75 0 0013 4.06V2.999z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="mb-8">
                          <div className="text-sm opacity-80 mb-1">Card Number</div>
                          <div className="font-medium tracking-wider">**** **** **** 4532</div>
                        </div>
                        <div className="flex justify-between items-end">
                          <div>
                            <div className="text-sm opacity-80 mb-1">Card Holder</div>
                            <div className="font-medium">SAMUEL MBAH</div>
                          </div>
                          <div>
                            <div className="text-sm opacity-80 mb-1">Expires</div>
                            <div className="font-medium">05/26</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white shadow-md rounded-lg p-5">
                        <h2 className="text-lg font-semibold mb-4">Spending Overview</h2>
                        <div className="space-y-3 mb-4">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <div className="text-sm">Food & Dining</div>
                              <div className="text-sm">£145,250.00</div>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full">
                              <div className="h-2 bg-blue-600 rounded-full" style={{ width: '45%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <div className="text-sm">Housing</div>
                              <div className="text-sm">£250,000.00</div>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full">
                              <div className="h-2 bg-blue-600 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <div className="text-sm">Transportation</div>
                              <div className="text-sm">£85,430.00</div>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full">
                              <div className="h-2 bg-blue-600 rounded-full" style={{ width: '25%' }}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <div className="text-sm">Utilities</div>
                              <div className="text-sm">£78,150.00</div>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full">
                              <div className="h-2 bg-blue-600 rounded-full" style={{ width: '20%' }}></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t pt-4">
                          <button className="text-blue-600 text-sm font-medium">View Detailed Report</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeScreen === "transfer" && (
              <div className="min-h-[500px] p-6">
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold">Send Money</h1>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => navigateTo("home")}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">From Account</label>
                        <select className="w-full border rounded-lg p-3">
                          <option>Main Account - £2,458,250.65</option>
                          <option>Savings - £785,120.33</option>
                          <option>USD Account - $5,250.00</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Recipient</label>
                        <div className="relative">
                          <input 
                            type="text" 
                            placeholder="Account number or name" 
                            className="w-full border rounded-lg p-3 pl-10"
                          />
                          <svg 
                            className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Bank</label>
                        <select className="w-full border rounded-lg p-3">
                          <option>Barclays</option>
                          <option>HSBC</option>
                          <option>Lloyds Bank</option>
                          <option>Santander UK</option>
                          <option>NatWest</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Amount</label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-gray-500">£</span>
                          <input 
                            type="text" 
                            placeholder="0.00" 
                            className="w-full border rounded-lg p-3 pl-7"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Transfer Type</label>
                        <div className="grid grid-cols-2 gap-3">
                          <label className="flex items-center p-3 border rounded-lg cursor-pointer">
                            <input type="radio" name="transfer-type" className="mr-2" defaultChecked />
                            <span>Instant Transfer</span>
                          </label>
                          <label className="flex items-center p-3 border rounded-lg cursor-pointer">
                            <input type="radio" name="transfer-type" className="mr-2" />
                            <span>Scheduled Transfer</span>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Note (Optional)</label>
                        <textarea 
                          placeholder="What's this for?" 
                          className="w-full border rounded-lg p-3 h-24"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
                      <h2 className="text-lg font-semibold mb-4">Transfer Summary</h2>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <div className="text-gray-600">From</div>
                          <div>Main Account (**** 4532)</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-gray-600">To</div>
                          <div className="text-right">
                            <div>--</div>
                            <div className="text-sm text-gray-500">-- Bank</div>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-gray-600">Amount</div>
                          <div>£0.00</div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-gray-600">Fee</div>
                          <div>£0.00</div>
                        </div>
                      </div>
                      
                      <div className="border-t border-b py-3 mb-6">
                        <div className="flex justify-between font-semibold">
                          <div>Total</div>
                          <div>£0.00</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <button 
                          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
                          onClick={() => navigateTo("confirmation")}
                        >
                          Continue
                        </button>
                        <button 
                          className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium"
                          onClick={() => navigateTo("home")}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeScreen === "confirmation" && (
              <div className="min-h-[500px] p-6">
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold">Confirm Transfer</h1>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => navigateTo("transfer")}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="bg-gray-50 rounded-lg p-6 mb-6">
                      <h2 className="text-lg font-semibold mb-4">Transfer Details</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="text-gray-600 text-sm mb-1">From Account</div>
                          <div className="font-medium">Main Account (**** 4532)</div>
                        </div>
                        
                        <div>
                          <div className="text-gray-600 text-sm mb-1">To</div>
                          <div className="font-medium">John Doe</div>
                          <div className="text-sm text-gray-500">0123456789 - Barclays</div>
                        </div>
                        
                        <div>
                          <div className="text-gray-600 text-sm mb-1">Amount</div>
                          <div className="text-xl font-bold">£350.00</div>
                        </div>
                        
                        <div>
                          <div className="text-gray-600 text-sm mb-1">Fee</div>
                          <div className="font-medium">£0.00</div>
                        </div>
                        
                        <div>
                          <div className="text-gray-600 text-sm mb-1">Note</div>
                          <div className="font-medium">Rent payment</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white border rounded-lg p-6">
                      <h2 className="text-lg font-semibold mb-4">Security Verification</h2>
                      
                      <div className="mb-4">
                        <div className="text-gray-600 text-sm mb-1">Enter Transaction PIN</div>
                        <div className="flex gap-2">
                          <input type="password" maxLength={1} className="w-full border rounded-lg p-3 text-center" />
                          <input type="password" maxLength={1} className="w-full border rounded-lg p-3 text-center" />
                          <input type="password" maxLength={1} className="w-full border rounded-lg p-3 text-center" />
                          <input type="password" maxLength={1} className="w-full border rounded-lg p-3 text-center" />
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-6">
                        <input type="checkbox" id="saveRecipient" className="mr-2" />
                        <label htmlFor="saveRecipient" className="text-sm">Save this recipient for future transfers</label>
                      </div>
                      
                      <div className="space-y-3">
                        <button 
                          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
                          onClick={() => navigateTo("home")}
                        >
                          Confirm Transfer
                        </button>
                        <button 
                          className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium"
                          onClick={() => navigateTo("transfer")}
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                      <h2 className="text-lg font-semibold mb-4">Transfer Tips</h2>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Verify Recipient Details</h3>
                            <p className="text-sm text-gray-600">Always double-check the account number and recipient name before confirming any transfer.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Keep Your PIN Secure</h3>
                            <p className="text-sm text-gray-600">Never share your transaction PIN with anyone. ZenPay staff will never ask for your full PIN.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium mb-1">Transfer Times</h3>
                            <p className="text-sm text-gray-600">Most transfers are instant. However, transfers to some banks may take up to 24 hours to reflect.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
                        <div className="flex items-start">
                          <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                            <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium text-yellow-800 mb-1">Security Alert</h3>
                            <p className="text-sm text-yellow-800">Beware of phishing attempts. ZenPay will never ask you to share your login credentials or complete transaction via email or phone.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeScreen === "accounts" && (
              <div className="min-h-[500px] p-6">
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold">My Accounts & Cards</h1>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => navigateTo("home")}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h2 className="text-lg font-semibold mb-4">Bank Accounts</h2>
                    <div className="space-y-4">
                      <div className="bg-white shadow-md rounded-lg p-5">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-semibold">Main Account</div>
                          <div className="text-xs text-gray-500">**** 4532</div>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-2xl font-bold">£16,458.65</div>
                          <div className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Active</div>
                        </div>
                        <div className="flex space-x-2">
                          <button 
                            className="text-blue-600 text-sm border border-blue-600 px-3 py-1 rounded"
                            onClick={() => navigateTo("transfer")}
                          >
                            Transfer
                          </button>
                          <button className="text-gray-600 text-sm border border-gray-300 px-3 py-1 rounded">Statement</button>
                        </div>
                      </div>
                      
                      <div className="bg-white shadow-md rounded-lg p-5">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-semibold">Savings</div>
                          <div className="text-xs text-gray-500">**** 7890</div>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-2xl font-bold">£8,520.33</div>
                          <div className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Active</div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-blue-600 text-sm border border-blue-600 px-3 py-1 rounded">Transfer</button>
                          <button className="text-gray-600 text-sm border border-gray-300 px-3 py-1 rounded">Statement</button>
                        </div>
                      </div>
                      
                      <div className="bg-white shadow-md rounded-lg p-5">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-semibold">USD Account</div>
                          <div className="text-xs text-gray-500">**** 1234</div>
                        </div>
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-2xl font-bold">$5,250.00</div>
                          <div className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Active</div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-blue-600 text-sm border border-blue-600 px-3 py-1 rounded">Transfer</button>
                          <button className="text-gray-600 text-sm border border-gray-300 px-3 py-1 rounded">Statement</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-lg font-semibold mb-4">My Cards</h2>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-6 text-white">
                        <div className="flex justify-between items-start mb-8">
                          <div>
                            <div className="text-sm opacity-80 mb-1">Current Balance</div>
                            <div className="text-2xl font-bold">£10,325.50</div>
                          </div>
                          <div className="text-white opacity-80">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H6zm3.99 2h2.02v4.059a.75.75 0 001.275.534l.854-.853a.75.75 0 111.06 1.06l-2.164 2.164a.75.75 0 01-1.06 0L9.815 6.8a.75.75 0 111.06-1.06l.855.853A.75.75 0 0013 4.06V2.999z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="mb-8">
                          <div className="text-sm opacity-80 mb-1">Card Number</div>
                          <div className="text-lg font-medium tracking-wider">**** **** **** 4532</div>
                        </div>
                        <div className="flex justify-between items-end">
                          <div>
                            <div className="text-sm opacity-80 mb-1">Card Holder</div>
                            <div className="font-medium">SAMUEL MBAH</div>
                          </div>
                          <div>
                            <div className="text-sm opacity-80 mb-1">Expires</div>
                            <div className="font-medium">05/26</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg p-6 text-white">
                        <div className="flex justify-between items-start mb-8">
                          <div>
                            <div className="text-sm opacity-80 mb-1">Current Balance</div>
                            <div className="text-2xl font-bold">$5,250.00</div>
                          </div>
                          <div className="text-white opacity-80">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H6zm3.99 2h2.02v4.059a.75.75 0 001.275.534l.854-.853a.75.75 0 111.06 1.06l-2.164 2.164a.75.75 0 01-1.06 0L9.815 6.8a.75.75 0 111.06-1.06l.855.853A.75.75 0 0013 4.06V2.999z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="mb-8">
                          <div className="text-sm opacity-80 mb-1">Card Number</div>
                          <div className="text-lg font-medium tracking-wider">**** **** **** 1234</div>
                        </div>
                        <div className="flex justify-between items-end">
                          <div>
                            <div className="text-sm opacity-80 mb-1">Card Holder</div>
                            <div className="font-medium">SAMUEL MBAH</div>
                          </div>
                          <div>
                            <div className="text-sm opacity-80 mb-1">Expires</div>
                            <div className="font-medium">09/25</div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium">Request New Card</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeScreen === "history" && (
              <div className="min-h-[500px] p-6">
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold">Transaction History</h1>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => navigateTo("home")}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-3">
                    <div className="bg-white shadow-md rounded-lg p-5 sticky top-6">
                      <h2 className="font-semibold mb-4">Filters</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Account</label>
                          <select className="w-full border rounded-lg p-2">
                            <option>All Accounts</option>
                            <option>Main Account</option>
                            <option>Savings</option>
                            <option>USD Account</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Date Range</label>
                          <select className="w-full border rounded-lg p-2">
                            <option>Last 30 days</option>
                            <option>Last 7 days</option>
                            <option>Current month</option>
                            <option>Previous month</option>
                            <option>Custom range</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Transaction Type</label>
                          <div className="space-y-2">
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" defaultChecked />
                              <span className="text-sm">All</span>
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" />
                              <span className="text-sm">Deposits</span>
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" />
                              <span className="text-sm">Withdrawals</span>
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" />
                              <span className="text-sm">Transfers</span>
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="mr-2" />
                              <span className="text-sm">Bills</span>
                            </label>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-1">Amount Range</label>
                          <div className="grid grid-cols-2 gap-2">
                            <input 
                              type="text" 
                              placeholder="Min" 
                              className="border rounded-lg p-2"
                            />
                            <input 
                              type="text" 
                              placeholder="Max" 
                              className="border rounded-lg p-2"
                            />
                          </div>
                        </div>
                        
                        <div className="pt-3">
                          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium">Apply Filters</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-span-9">
                    <div className="bg-white shadow-md rounded-lg p-5 mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="font-semibold">Transaction Summary</h2>
                        <select className="border rounded-lg p-2 text-sm">
                          <option>This Month</option>
                          <option>Last Month</option>
                          <option>Last 3 Months</option>
                        </select>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-gray-500 mb-1">Total Inflow</div>
                          <div className="text-lg font-bold text-green-600">+£3,253.40</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-gray-500 mb-1">Total Outflow</div>
                          <div className="text-lg font-bold text-red-600">-£2,450.65</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-gray-500 mb-1">Total Transactions</div>
                          <div className="text-lg font-bold">42</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm text-gray-500 mb-1">Net Change</div>
                          <div className="text-lg font-bold">+£802.75</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="font-semibold">Transaction List</h2>
                        <div className="flex items-center gap-2">
                          <input 
                            type="text" 
                            placeholder="Search transactions..." 
                            className="border rounded-lg p-2 text-sm"
                          />
                          <select className="border rounded-lg p-2 text-sm">
                            <option>Recent first</option>
                            <option>Oldest first</option>
                            <option>Highest amount</option>
                            <option>Lowest amount</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium text-sm text-gray-500 mb-2">Today</h3>
                          <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-wrap justify-between items-center">
                                <div>
                                  <div className="font-medium">Salary Payment</div>
                                  <div className="text-sm text-gray-500">9:45 AM · Main Account</div>
                                </div>
                                <div className="text-green-600 font-medium">+£2,350.00</div>
                                <div className="w-full mt-2 flex justify-between">
                                  <div className="text-sm text-gray-500">Reference: SALARY-MAY-2023-BRITISH-GAS</div>
                                  <button className="text-blue-600 text-sm">Details</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-medium text-sm text-gray-500 mb-2">Yesterday</h3>
                          <div className="space-y-3">
                            <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-wrap justify-between items-center">
                                  <div>
                                    <div className="font-medium">Rental Payment</div>
                                    <div className="text-sm text-gray-500">2:30 PM · Main Account</div>
                                  </div>
                                  <div className="text-red-600 font-medium">-£1,250.00</div>
                                  <div className="w-full mt-2 flex justify-between">
                                    <div className="text-sm text-gray-500">Recipient: John Doe</div>
                                    <button className="text-blue-600 text-sm">Details</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-wrap justify-between items-center">
                                  <div>
                                    <div className="font-medium">Supermarket</div>
                                    <div className="text-sm text-gray-500">10:15 AM · Main Account</div>
                                  </div>
                                  <div className="text-red-600 font-medium">-£154.75</div>
                                  <div className="w-full mt-2 flex justify-between">
                                    <div className="text-sm text-gray-500">Merchant: Tesco Nottingham</div>
                                    <button className="text-blue-600 text-sm">Details</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-wrap justify-between items-center">
                                  <div>
                                    <div className="font-medium">Internet Subscription</div>
                                    <div className="text-sm text-gray-500">8:00 AM · Main Account</div>
                                  </div>
                                  <div className="text-red-600 font-medium">-£45.90</div>
                                  <div className="w-full mt-2 flex justify-between">
                                    <div className="text-sm text-gray-500">Biller: BT Broadband</div>
                                    <button className="text-blue-600 text-sm">Details</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center mt-6">
                        <button className="text-blue-600 font-medium flex items-center">
                          Load More
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
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
          <h3 className="font-semibold text-lg mb-2">ZenPay Digital Banking Platform</h3>
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