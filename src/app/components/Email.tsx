import React from "react";

export default function Email(): JSX.Element {
    return(
<form className="max-w-lg mx-auto">
    <div className="flex">
        <label for="email-textbox" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>  
        <div className="relative w-full">
            <input type="search" id="email-textbox" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter Your Email" required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#EF4444] rounded-e-lg border border-[#EF4444] hover:bg-[#EF4444] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12l18-6-6 18-6-6-6 6z"/>
                </svg>
                <span className="sr-only">send</span>
            </button>
        </div>
    </div>
</form>
)}